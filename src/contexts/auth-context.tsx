import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  GoogleAuthProvider,
  User as FirebaseUser,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase/config";
import User from "../model/user";
import { useRouter } from "next/router";

// ***************** Available Themes ******************* //

// export const THEMES = {
//   DARK: "dark" as const,
//   LIGHT: "light" as const,
// };

// ***************** Establish Types ******************* //

// type ValueOf<T> = T[keyof T];

// type Themes = ValueOf<typeof THEMES>;

export type AuthContext = {
  user?: User;
  loginWithGoogle: () => Promise<void>;
};

// ***************** Create Context ******************* //

export const AuthContext = createContext<AuthContext>({
  loginWithGoogle: async () => {},
});

// ***************** Helper Functions ******************* //

const normalizeUser = async (firebaseUser: FirebaseUser) => {
  const token = await firebaseUser.getIdToken();
  return {
    token,
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    provider: firebaseUser.providerData[0].providerId,
    imageURL: firebaseUser.photoURL,
  };
};

// ***************** Custom Provider ******************* //

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>();

  const loginWithGoogle = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);

      if (!response.user?.email) {
        return;
      }

      const user = await normalizeUser(response.user);
      setUser(user);
      router.push("/");
    } catch (error) {
      console.log("Auth Context - Login with Google", error);
    }
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

// ***************** Context Hooks ******************* //

export const useAuth = () => {
  const themeContext = useContext(AuthContext);
  return themeContext;
};
