import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../query-client";
import { QUERY_KEYS } from "../query-keys";
import { apiService } from "../api-service";
import { PersonalInformationDto } from "../contracts/responses/PersonalInformationDto";
import { PutPersonalInformationRequest } from "../contracts/requests/PutPersonalInformationRequest";
import { CustomMutationOptions } from "./utility-types";

export const usePutPersonalInformationMutation = (
  options?: CustomMutationOptions<
    PersonalInformationDto,
    Error,
    PutPersonalInformationRequest
  >
) =>
  useMutation<PersonalInformationDto, Error, PutPersonalInformationRequest>({
    mutationFn: apiService.putPersonalInformation,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.PERSONAL_INFO], data);
    },
    ...options,
  });
