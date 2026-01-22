import { Dispatch, SetStateAction, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { GeneratedAvatar } from "@/components/generated-avatar";
import { CommandResponsiveDialog, CommandInput, CommandItem, CommandList, CommandGroup, CommandEmpty } from "@/components/ui/command";

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({ open, setOpen }: Props) => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const trpc = useTRPC();
    const meetings = useQuery(trpc.meetings.getMany.queryOptions({search, pageSize: 100}));
    const agents = useQuery(trpc.agents.getMany.queryOptions({search, pageSize: 100}));
    return (
        <CommandResponsiveDialog open={open} shouldFilter={false} onOpenChange={setOpen}>
            <CommandInput placeholder="Find a meeting or agent..." value={search} onValueChange={(value) => setSearch(value)} />
            <CommandGroup heading="Meetings">
                <CommandEmpty>
                    <span className="text-muted-foreground text-sm">No meetings found.</span>
                </CommandEmpty>
                {meetings.data?.items.map(meeting => (
                    <CommandItem key={meeting.id} onSelect={() => {
                        setOpen(false);
                        router.push(`/meetings/${meeting.id}`);
                    }}>
                        {meeting.name}
                    </CommandItem>
                ))}
            </CommandGroup>
            <CommandGroup heading="Agents">
                <CommandEmpty>
                    <span className="text-muted-foreground text-sm">No agents found.</span>
                </CommandEmpty>
                {agents.data?.items.map(agent => (
                    <CommandItem key={agent.id} onSelect={() => {
                        setOpen(false);
                        router.push(`/agents/${agent.id}`);
                    }}>
                        <GeneratedAvatar className="size-5" seed={agent.name} variant="botttsNeutral" />
                        {agent.name}
                    </CommandItem>
                ))}
            </CommandGroup>
        </CommandResponsiveDialog>
    );
};