import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/providers/auth-provider/use-auth-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ROUTES } from "@/router/constants/routes";
import { useHandleMutationResult } from "@/hooks/use-handle-mutation-result";
import { usePutPersonalInformationMutation } from "@/api/mutations/use-put-personal-information-mutation";
import { FormAlert } from "@/components/form-alert/form-alert";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  jobTitle: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  linkedin: z
    .string()
    .url("Please enter a valid LinkedIn URL")
    .optional()
    .or(z.literal("")),
  github: z
    .string()
    .url("Please enter a valid GitHub URL")
    .optional()
    .or(z.literal("")),
  twitter: z
    .string()
    .url("Please enter a valid Twitter URL")
    .optional()
    .or(z.literal("")),
});

export function PersonalInformationForm() {
  const { firebaseUser } = useAuthContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: firebaseUser?.displayName || "",
      jobTitle: undefined,
      email: firebaseUser?.email || "",
      linkedin: undefined,
      github: undefined,
      twitter: undefined,
    },
  });

  const { onSuccess, onError } = useHandleMutationResult({
    successMessage: "Personal information saved successfully!",
    redirectPath: ROUTES.DASHBOARD.path,
  });

  const {
    mutate: updatePersonalInformation,
    isPending,
    error,
  } = usePutPersonalInformationMutation({
    onSuccess,
    onError,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updatePersonalInformation(values);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Personal Information</h1>
        <p className="text-muted-foreground">
          Provide your contact details and online presence. This is an example
          form demonstrating the API integration patterns.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Full Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name*</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Job Title */}
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professional Title</FormLabel>
                <FormControl>
                  <Input placeholder="Software Engineer" {...field} />
                </FormControl>
                <FormDescription>
                  Your current role or professional title
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address*</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Online Presence Section */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-medium mb-4">Online Presence</h2>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://linkedin.com/in/yourusername"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GitHub</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://github.com/yourusername"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://twitter.com/yourusername"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Alert on API error */}
          <FormAlert error={error} />

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save Information"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
