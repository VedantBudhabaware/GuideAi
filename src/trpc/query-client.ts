import { defaultShouldDehydrateQuery, QueryClient } from "@tanstack/react-query";
// import superjson from 'superjson';

export function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 30 * 1000, // 30 seconds fresh data
            },
            // convert query cache to serializable data
            dehydrate: {
                // serializeData: superjson.serialize,
                shouldDehydrateQuery: (query) => 
                    defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
            },
            // Restore the query cache from server-sent data
            hydrate: {
                // deserializeData: superjson.deserialize,
            },
        },
    });
}

// 1. Server runs queries
// 2. Dehydrate: Convert cache to JSON
// 3. Send HTML with embedded cache data
// 4. Client receives HTML + cache data
// 5. Hydrate: Restore cache in browser
// 6. React Query works with existing data