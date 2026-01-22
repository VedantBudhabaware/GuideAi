import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTRPC } from "@/trpc/client";
import { CommandSelect } from "@/components/command-select";
import { GeneratedAvatar } from '@/components/generated-avatar';
import { useMeetingsFilters } from '../../hooks/use-meetings-filters';

export const AgentIdFilter = () => {
    const [filters, setFilters] = useMeetingsFilters();
    const [agentSearch, setAgentSearch] = useState("");
    const trpc = useTRPC();
    const {data } = useQuery(trpc.agents.getMany.queryOptions({pageSize: 100, search: agentSearch,}));

    return(
        <CommandSelect
            className="h-9"
            placeholder="Agent"
            options={(data?.items ?? []).map((agent) => ({
                id: agent.id,
                value: agent.id,
                children: (
                    <div className="flex items-center gap-x-2">
                        <GeneratedAvatar
                            seed={agent.name}
                            variant="botttsNeutral"
                            className="size-4"
                        />
                        {agent.name}
                    </div>
                )
            }))}
            onSelect={(value) => setFilters({ agentId: value })}
            onSearch={setAgentSearch}
            value={filters.agentId ?? ""}
        />
    )
};

// User Types in Search Box: ex Agent
// CommandSelect internally detects input changes and calls onSearch("Agent")
// This executes setAgentSearch("Agent"), updating agentSearch state
// The useQuery hook re-fetches data with the new search term
// The CommandSelect options are updated with the filtered agents
// User selects an agent from the dropdown
// onSelect is called with the selected agent's id
// setFilters updates the meetings filters with the selected agentId