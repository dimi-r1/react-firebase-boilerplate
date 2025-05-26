import { useQuery } from "@tanstack/react-query";
import { apiService } from "../api-service";
import { QUERY_KEYS } from "../query-keys";

export const useGetExampleResourceQuery = () =>
  useQuery({
    queryKey: [QUERY_KEYS.EXAMPLE_RESOURCE],
    queryFn: apiService.getExampleResource,
  });
