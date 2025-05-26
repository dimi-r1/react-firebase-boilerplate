import { GalleryVerticalEnd } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/providers/auth-provider/use-auth-context";
import { GoogleIcon } from "@/icons/google-icon";

const LoginForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const { googleLogin } = useAuthContext();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <a href="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex h-8 w-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-6" />
            </div>
            <span className="sr-only">React Firebase Boilerplate</span>
          </a>
          <h1 className="text-xl font-bold">
            Welcome to React Firebase Boilerplate
          </h1>
          <p className="text-center text-muted-foreground max-w-xs">
            Sign in with your Google account to access your application
            dashboard.
          </p>
        </div>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 py-6"
          onClick={() => googleLogin()}
        >
          <GoogleIcon size={5} />
          Continue with Google
        </Button>
      </div>

      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By continuing, you agree to our <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
};

export const Auth = () => {
  return (
    <div className="flex min-h-[80dvh] items-center justify-center p-4 bg-muted/5">
      <div className="w-full max-w-sm bg-background p-8 rounded-lg shadow-sm">
        <LoginForm className="w-full" />
      </div>
    </div>
  );
};
