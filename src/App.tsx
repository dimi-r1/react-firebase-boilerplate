import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./providers/theme-provider/theme-provider";
import { AppRoutes } from "./router/app-routes";
import { AppLayout } from "./components/app-layout/app-layout";
import { AuthProvider } from "./providers/auth-provider/provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query-client";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <QueryClientProvider client={queryClient}>
            <Toaster />
            <AppLayout>
              <AppRoutes />
            </AppLayout>
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
