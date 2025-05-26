import { Dashboard } from "@/components/dashboard/dashboard";
import { Auth } from "@/pages/auth/auth";
import { PersonalInformationPage } from "@/pages/personal-information/personal-information";
import { useAuthContext } from "@/providers/auth-provider/use-auth-context";
import { Routes, Route, Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }: React.ComponentProps<"div">) => {
  const { firebaseUser, isLoading } = useAuthContext();
  const location = useLocation();

  // Show nothing while checking authentication
  if (isLoading) {
    return null; // Or a loading spinner component
  }

  if (!firebaseUser) {
    // Redirect to login, but save the location they were trying to access
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
};

const AuthRoute = ({ children }: React.ComponentProps<"div">) => {
  const { firebaseUser, isLoading } = useAuthContext();
  const location = useLocation();

  // Get the saved location from state, or default to /dashboard
  const from =
    (location.state as { from?: { pathname: string } })?.from?.pathname ||
    "/dashboard";

  // Show nothing while checking authentication
  if (isLoading) {
    return null; // Or a loading spinner component
  }

  // If user is already logged in, redirect to where they were trying to go
  if (firebaseUser) {
    return <Navigate to={from} replace />;
  }

  return children;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/auth"
        element={
          <AuthRoute>
            <Auth />
          </AuthRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/personal-info"
        element={
          <ProtectedRoute>
            <PersonalInformationPage />
          </ProtectedRoute>
        }
      />
      {/* Redirect to dashboard by default if authenticated, otherwise to login */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
