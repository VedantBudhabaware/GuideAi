import { eq, inArray } from "drizzle-orm";
import JSONL from "jsonl-parse-stringify";
import OpenAI from "openai";

import { db } from "@/db";
import { agents, meetings, user } from "@/db/schema";
import { inngest } from "@/inngest/client";

import { StreamTranscriptItem } from "@/modules/meetings/types";

const openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const meetingsProcessing = inngest.createFunction(
  { id: "meetings/processing" },
  { event: "meetings/processing" },
  async ({ event, step }) => {
    if (!event.data.transcriptUrl) {
      console.error("[INNGEST] No transcript URL provided");
      return;
    }

    const response = await step.run("fetch-transcript", async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
        
        const res = await fetch(event.data.transcriptUrl, {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch transcript: ${res.status} ${res.statusText}`);
        }
        return res.text();
      } catch (error) {
        console.error("[INNGEST] Error fetching transcript:", error);
        throw error;
      }
    });

    const transcript = await step.run("parse-transcript", async () => {
      try {
        if (!response || response.trim() === "") {
          console.warn("[INNGEST] Empty transcript response");
          return [];
        }
        
        // Add safety check for response size
        if (response.length > 10 * 1024 * 1024) {
          console.warn("[INNGEST] Transcript too large, truncating");
          return JSONL.parse<StreamTranscriptItem>(response.substring(0, 10 * 1024 * 1024));
        }

        const parsed = JSONL.parse<StreamTranscriptItem>(response);
        console.log(`[INNGEST] Parsed ${parsed.length} transcript items`);
        return parsed;
      } catch (error) {
        console.error("[INNGEST] Error parsing transcript:", error);
        // Return empty array instead of throwing to prevent stuck state
        return [];
      }
    });

    const transcriptWithSpeakers = await step.run("add-speakers", async () => {
      if (!transcript || transcript.length === 0) {
        console.warn("[INNGEST] Empty transcript, skipping speaker enrichment");
        return [];
      }

      try {
        const speakerIds = [
          ...new Set(transcript.map((item) => item.speaker_id)),
        ];

        const userSpeakers = await db
          .select()
          .from(user)
          .where(inArray(user.id, speakerIds))
          .then((users) =>
            users.map((user) => ({
              ...user,
            }))
          );

        const agentSpeakers = await db
          .select()
          .from(agents)
          .where(inArray(agents.id, speakerIds))
          .then((agents) =>
            agents.map((agent) => ({
              ...agent,
            }))
          );

        const speakers = [...userSpeakers, ...agentSpeakers];

        return transcript.map((item) => {
          const speaker = speakers.find(
            (speaker) => speaker.id === item.speaker_id
          );

          if (!speaker) {
            return {
              ...item,
              user: {
                name: "Unknown",
              },
            };
          }

          return {
            ...item,
            user: {
              name: speaker.name,
            },
          };
        });
      } catch (error) {
        console.error("[INNGEST] Error enriching transcript with speakers:", error);
        throw error;
      }
    });

    const summaryText = await step.run("summarize-transcript", async () => {
      try {
        // Skip summarization if no transcript data
        if (!transcriptWithSpeakers || transcriptWithSpeakers.length === 0) {
          console.log("[INNGEST] No transcript data to summarize");
          return "No transcript available for this meeting.";
        }

        // Limit transcript size to prevent payload issues
        const summaryPayload = JSON.stringify(
          transcriptWithSpeakers.slice(0, 1000)
        );

        if (summaryPayload.length > 100000) {
          console.warn("[INNGEST] Transcript payload too large, using summary only");
          const completion = await openaiClient.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: "You are an expert summarizer. Create a brief summary.",
              },
              {
                role: "user",
                content: `Summarize this meeting (text length: ${summaryPayload.length}): ${summaryPayload.substring(0, 5000)}...`,
              },
            ],
          });
          return completion.choices[0]?.message?.content || "Meeting summary unavailable.";
        }

        const completion = await openaiClient.chat.completions.create({
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content: `You are an expert summarizer. You write readable, concise, simple content. You are given a transcript of a meeting and you need to summarize it.

Use the following markdown structure for every output:

### Overview
Provide a detailed, engaging summary of the session's content. Focus on major features, user workflows, and any key takeaways. Write in a narrative style, using full sentences. Highlight unique or powerful aspects of the product, platform, or discussion.

### Notes
Break down key content into thematic sections with timestamp ranges. Each section should summarize key points, actions, or demos in bullet format.`,
            },
            {
              role: "user",
              content: `Summarize the following transcript: ${summaryPayload}`,
            },
          ],
        });

        const content = completion.choices[0]?.message?.content || "No summary generated.";
        console.log("[INNGEST] Summary generated successfully");
        return content;
      } catch (error) {
        console.error("[INNGEST] Error generating summary:", error);
        // Return a placeholder instead of failing
        return "Meeting summary could not be generated due to technical issues.";
      }
    });

    await step.run("save-summary", async () => {
      try {
        if (!summaryText) {
          console.warn("[INNGEST] No summary text to save");
          return;
        }

        await db
          .update(meetings)
          .set({ summary: summaryText, status: "completed" })
          .where(eq(meetings.id, event.data.meetingId));
        console.log("[INNGEST] Summary saved successfully for meeting:", event.data.meetingId);
      } catch (error) {
        console.error("[INNGEST] Error saving summary:", error);
        // Try to update status at least
        try {
          await db
            .update(meetings)
            .set({ status: "completed" })
            .where(eq(meetings.id, event.data.meetingId));
          console.log("[INNGEST] Meeting status updated to completed");
        } catch (statusError) {
          console.error("[INNGEST] Failed to update meeting status:", statusError);
        }
      }
    });
  }
);
