"use-client";

import { authClient } from "@/lib/auth-client";
import { LoadingState } from "@/components/loading-state";
import { ChatUI } from "./chat-ui";

interface Props {
    meetingId: string;
};

export const ChatProvider = ({ meetingId }: Props) => {
    const { data, isPending } = authClient.useSession();

    if(isPending || !data?.user) {
        return (
            <LoadingState title="Loading chat..." description="Please wait while we load the chat interface." />
        )
    }

    return (
        <ChatUI 
            meetingId={meetingId} 
            userId={data.user.id} 
            userName={data.user.name || "Anonymous"} 
            userImage={data.user.image ?? ""} 
        />
    );
};