import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  GithubAuthProvider,
  AuthError,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebase";

const handleFirebaseError = (error: AuthError) => {
  const errorMap: Record<string, string> = {
    "auth/email-already-in-use": "This email is already registered",
    "auth/invalid-email": "Invalid email format",
    "auth/operation-not-allowed": "Operation not allowed",
    "auth/weak-password": "Password is too weak",
    "auth/user-disabled": "This account has been disabled",
    "auth/user-not-found": "Invalid email or password",
    "auth/wrong-password": "Invalid email or password",
    "auth/popup-closed-by-user": "Sign-in popup was closed before completing",
    "auth/popup-blocked": "Sign-in popup was blocked by the browser",
    "auth/cancelled-popup-request": "Multiple popup requests were made",
    "auth/network-request-failed": "Network error occurred during sign-in",
    "auth/account-exists-with-different-credential":
      "An account already exists with the same email address but different sign-in credentials",
  };

  const message = errorMap[error.code] || "An unexpected error occurred";
  throw new Error(message);
};

/**
 * Handle OAuth sign-in using popup with fallback to redirect
 */
const handleOAuthSignIn = async (
  provider: GoogleAuthProvider | GithubAuthProvider
): Promise<UserCredential> => {
  try {
    // Try popup first (better UX on desktop)
    return await signInWithPopup(auth, provider);
  } catch (error) {
    const firebaseError = error as AuthError;

    // Check specifically for popup-related issues
    if (
      firebaseError.code === "auth/popup-blocked" ||
      firebaseError.code === "auth/popup-closed-by-user" ||
      firebaseError.code === "auth/cancelled-popup-request" ||
      firebaseError.message.includes("cross-origin-policy")
    ) {
      // Fall back to redirect
      await signInWithRedirect(auth, provider);
      throw new Error("Redirecting to sign-in...");
    }

    // For other errors, handle normally
    handleFirebaseError(firebaseError);
    throw error;
  }
};

export const authApi = {
  googleLogin: async (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    // Add this line for better UX
    provider.setCustomParameters({ prompt: "select_account" });
    return handleOAuthSignIn(provider);
  },
  handleRedirectResult: async (): Promise<UserCredential | null> => {
    try {
      return await getRedirectResult(auth);
    } catch (error) {
      handleFirebaseError(error as AuthError);
      throw error;
    }
  },
  logout: async (): Promise<void> => {
    await auth.signOut();
  },
};
