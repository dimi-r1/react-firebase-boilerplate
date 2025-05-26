import { auth } from "@/api/firebase";
import { useState, useEffect } from "react";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./context";
import { authApi } from "@/api/auth-api";
import { queryClient } from "@/api/query-client";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signOut = async () => {
    try {
      await authApi.logout();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const googleLogin = async () => {
    try {
      await authApi.googleLogin();
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Handle OAuth redirect results
  useEffect(() => {
    const handleRedirect = async () => {
      try {
        await authApi.handleRedirectResult();
      } catch (error) {
        console.error("Redirect sign-in error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    handleRedirect();
  }, []); // Only run once on mount

  // Handle Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      queryClient.clear();
      setFirebaseUser(user);
      setIsLoading(false);
    });

    // Cleanup subscription
    return unsubscribe;
  }, []); // Only run once on mount

  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        isLoading,
        googleLogin,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
