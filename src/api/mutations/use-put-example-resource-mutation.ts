import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../query-client";
import { QUERY_KEYS } from "../query-keys";
import { apiService } from "../api-service";
import { ExampleResourceDto } from "../contracts/responses/ExampleResourceDto";
import { PutExampleResourceRequest } from "../contracts/requests/PutExampleResourceRequest";
import { CustomMutationOptions } from "./utility-types";

export const usePutExampleResourceMutation = (
  options?: CustomMutationOptions<
    ExampleResourceDto,
    Error,
    PutExampleResourceRequest
  >
) =>
  useMutation<ExampleResourceDto, Error, PutExampleResourceRequest>({
    mutationFn: apiService.putExampleResource,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.EXAMPLE_RESOURCE], data);
    },
    ...options,
  });
