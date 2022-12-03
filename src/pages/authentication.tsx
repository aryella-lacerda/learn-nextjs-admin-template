import { useState } from "react";
import Image from "next/image";
import { AuthenticationInput } from "../components/authentication/authentication-input";
import { WarningIcon } from "../components/icons";
import { useAuth } from "../contexts/auth-context";

const Authentication = () => {
  const { loginWithGoogle } = useAuth();

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>("");

  const submit = () => {
    if (mode === "signup") {
      console.log("Sign up!");
      setError("A sign up error occurred!");
    } else {
      console.log("Sign in!");
      setError("A sign in error occurred!");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3 h-screen relative">
        <Image
          priority
          unoptimized
          layout="fill"
          objectFit="cover"
          src="https://source.unsplash.com/random"
          alt="Image"
        />
      </div>
      <div className="w-full px-8 md:w-1/2 lg:w-1/3">
        <h1 className="font-bold text-2xl mb-6">
          {mode === "signup"
            ? "Sign up with us now!"
            : "Sign in with your account"}
        </h1>

        {error ? (
          <div className="flex bg-red-800 text-white rounded-md px-3 py-3">
            <WarningIcon />
            <span className="ml-2">{error}</span>
          </div>
        ) : null}

        <AuthenticationInput
          label={"Email"}
          type={"email"}
          placeholder={"your@email.com"}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthenticationInput
          label={"Password"}
          type={"password"}
          placeholder={"****"}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={submit}
          className="bg-indigo-700 hover:bg-indigo-500 text-white rounded-md w-full py-3 px-2 mt-6"
        >
          {mode === "signup" ? "Sign up" : "Sign in"}
        </button>

        <hr className="my-6 mx-4 dark:border-gray-400" />

        <button
          onClick={loginWithGoogle}
          className="bg-red-700 hover:bg-red-500 text-white rounded-md w-full py-3 px-2"
        >
          {mode === "signup" ? "Sign up" : "Sign in"} with Google
        </button>

        {mode === "signin" ? (
          <p className="mt-6 text-center">
            New around here?{" "}
            <a
              className="text-blue-500 dark:hover:text-blue-400"
              onClick={() => setMode("signup")}
            >
              Sign up for a free account
            </a>
          </p>
        ) : (
          <p className="mt-6 text-center">
            Already have an account?{" "}
            <a
              className="text-blue-500 dark:hover:text-blue-400"
              onClick={() => setMode("signin")}
            >
              Sign in
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Authentication;
