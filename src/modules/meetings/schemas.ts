import { z } from "zod";

export const meetingInsertSchema = z.object({
  name: z.string().min(1, { message: "Meeting name is required" }),
  agentId: z.string().min(1, { message: "Agent Id is required" }),
});

export const meetingUpdateSchema = meetingInsertSchema.extend({
  id: z.string().min(1, { message: "Meeting Id is required" }),
});