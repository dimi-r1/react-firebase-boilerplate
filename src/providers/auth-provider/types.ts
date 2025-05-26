import { User as FirebaseUser } from "firebase/auth";

export interface AuthContextType {
  firebaseUser: FirebaseUser | null;
  isLoading: boolean;
  googleLogin: () => Promise<void>;
  signOut: () => Promise<void>;
}
