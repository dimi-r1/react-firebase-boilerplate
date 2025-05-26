import { useNavigate } from "react-router";
import { toast } from "sonner";

interface UseHandleMutationResultOptions {
  successMessage?: string;
  redirectPath?: string | null;
  onSuccessCallback?: () => void;
  onErrorCallback?: (error: Error) => void;
}

export function useHandleMutationResult({
  successMessage = "Changes saved successfully!",
  redirectPath = null,
  onSuccessCallback,
  onErrorCallback,
}: UseHandleMutationResultOptions = {}) {
  const navigate = useNavigate();

  const onSuccess = () => {
    toast.success(successMessage);

    // Execute custom success logic if provided
    if (onSuccessCallback) {
      onSuccessCallback();
    }

    // Navigate if a redirect path is provided
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  const onError = (error: Error) => {
    if (onErrorCallback) {
      onErrorCallback(error);
    }
  };

  return {
    onSuccess,
    onError,
  };
}
