"use client";
import { useState } from "react";
import acclogo from "@/assets/img/shared/navbar/acc.png";
import logo from "@/assets/img/shared/navbar/logo.png";
import Image from "next/image";
import Link from "next/link";
import { createNewAdmin } from "@/utils";
import { toast } from "sonner";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const userData = {
      email,
      password,
    };
    const result = await createNewAdmin(userData);
    console.log(result);
    if (result.success) {
      toast.success(result.message);
      console.log("ok");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <Link href="/">
            <Image
              src={acclogo}
              width={150}
              height={150}
              alt="acc logo"
              className="mx-auto"
            />
          </Link>
          <div className="mt-5 space-y-2">
            <h3 className="text-white text-2xl font-bold sm:text-3xl">
              Create a account
            </h3>
            <p className="">
              Already have an account?
              <Link
                href="sign-in"
                className="font-medium text-yellow-600 hover:text-yellow-500 ml-2"
              >
                Sign in
              </Link>
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
          <button className="w-full px-4 py-2 text-white font-medium btnGradient rounded-lg duration-150">
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
  );
}
