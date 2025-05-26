import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache time tells query client how long to cache data after becoming inactive
      gcTime: 1000 * 60 * 5, // 5 minutes
      // How long before data is considered stale
      staleTime: 1000 * 30, // 30 seconds
      // Retry failed requests
      retry: 1,
      // Refetch on window focus
      refetchOnWindowFocus: true,
      // Refetch on reconnect
      refetchOnReconnect: "always",
    },
    mutations: {
      // Retry failed mutations
      retry: 1,
      // Time until garbage collection
      gcTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});
