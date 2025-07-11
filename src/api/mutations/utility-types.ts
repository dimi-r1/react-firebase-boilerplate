import { UseMutationOptions } from "@tanstack/react-query";

export type CustomMutationOptions<TData = unknown, TError = Error, TVariables = void> = Omit<
  UseMutationOptions<TData, TError, TVariables>,
  "mutationFn"
>;
