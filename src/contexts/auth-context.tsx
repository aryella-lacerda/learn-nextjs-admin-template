import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import {
  GoogleAuthProvider,
  User as FirebaseUser,
  signInWithPopup,
  onIdTokenChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/config";
import User from "../model/user";

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
  logout: () => Promise<void>;
};

// ***************** Create Context ******************* //

export const AuthContext = createContext<AuthContext>({
  loginWithGoogle: async () => {},
  logout: async () => {},
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

const handleCookie = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const COOKIE_NAME = "auth-context";

  if (isLoggedIn) {
    Cookies.set(COOKIE_NAME, isLoggedIn.toString(), { expires: 7 });
  } else {
    Cookies.remove(COOKIE_NAME);
  }
};

// ***************** Custom Provider ******************* //

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [isLoading, setLoading] = useState(true);

  const handleUserSession = async (firebaseUser: FirebaseUser | null) => {
    if (firebaseUser?.email) {
      const user = await normalizeUser(firebaseUser);
      setUser(user);
      handleCookie({ isLoggedIn: true });
      setLoading(false);
      return user.email;
    } else {
      setUser(undefined);
      handleCookie({ isLoggedIn: false });
      setLoading(false);
      return null;
    }
  };

  const loginWithGoogle = useCallback(async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error) {
      console.log("Auth Context - Login with Google", error);
    } finally {
      setLoading(false);
    }
  }, [router]);

  const logout = useCallback(async () => {
    try {
      setLoading(true);
      await handleUserSession(null);
      await signOut(auth);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    return onIdTokenChanged(auth, handleUserSession);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ***************** Context Hooks ******************* //

export const useAuth = () => {
  const themeContext = useContext(AuthContext);
  return themeContext;
};
