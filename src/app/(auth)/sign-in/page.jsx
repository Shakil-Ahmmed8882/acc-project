"use client";
import { useEffect, useState } from "react";
import accLogo from "@/assets/img/shared/navbar/acc.png";
// import logo from "@/assets/img/shared/navbar/logo.png";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Loading from "@/app/loading";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/admin");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 5) {
      setError("Password is invalid");
      return;
    }
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/admin");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <Loading />;
  }

  return (
    sessionStatus !== "authenticated" && (
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center">
            <Link href="/">
              <Image
                src={accLogo}
                width={150}
                height={150}
                alt="acc logo"
                className="mx-auto"
              />
            </Link>
            <div className="mt-5 space-y-2">
              <h3 className="text-white text-2xl font-bold sm:text-3xl">
                Log in to your account
              </h3>
              <p className="">
                Don&rsquo;t have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-yellow-600 hover:text-yellow-500"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium btnGradient rounded-lg duration-150"
            >
              Sign in
            </button>
            <div className="text-center">
              <Link href="forgot-password" className="hover:text-yellow-600">
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </main>
    )
  );
}
