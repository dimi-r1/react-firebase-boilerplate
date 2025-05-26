import { API_PATHS } from "./api-paths";
import { axiosInstance } from "./axios-configuration";
import { PutExampleResourceRequest } from "./contracts/requests/PutExampleResourceRequest";
import { PutPersonalInformationRequest } from "./contracts/requests/PutPersonalInformationRequest";
import { ExampleResourceDto } from "./contracts/responses/ExampleResourceDto";
import { PersonalInformationDto } from "./contracts/responses/PersonalInformationDto";

export const apiService = {
  // Example GET endpoint
  getExampleResource: async (): Promise<ExampleResourceDto> => {
    const response = await axiosInstance.get<ExampleResourceDto>(
      API_PATHS.EXAMPLE_RESOURCE
    );
    return response.data;
  },

  // Example PUT endpoint
  putExampleResource: async (
    data: PutExampleResourceRequest
  ): Promise<ExampleResourceDto> => {
    const response = await axiosInstance.put<ExampleResourceDto>(
      API_PATHS.EXAMPLE_RESOURCE,
      data
    );
    return response.data;
  },

  // Personal Information endpoint (kept as working example)
  putPersonalInformation: async (
    data: PutPersonalInformationRequest
  ): Promise<PersonalInformationDto> => {
    const response = await axiosInstance.put<PersonalInformationDto>(
      API_PATHS.PERSONAL_INFORMATION,
      data
    );
    return response.data;
  },
};
