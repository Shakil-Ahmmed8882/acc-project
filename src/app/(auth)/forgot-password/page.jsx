"use client";
import { useEffect, useState } from "react";
import accLogo from "@/assets/img/shared/navbar/acc.png";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { forgotPassword } from "@/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/admin");
    }
  }, [sessionStatus, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await forgotPassword({ email });
    setLoading(false);

    if (result.success) {
      toast.success(result.message);
      setEmail("");
    } else {
      toast.error(result.message);
      setError(result.message);
    }
  };

  if (sessionStatus === "loading") {
    return <Loading />;
  }

  if (sessionStatus === "unauthenticated") {
    return (
      <section className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center">
            <Image
              src={accLogo}
              width={150}
              height={150}
              alt="acc logo"
              className="mx-auto"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-white text-2xl font-bold sm:text-3xl">
                Create an account
              </h3>
              <p className="text-light-text">
                Already have an account?{" "}
                <Link
                  href="sign-in"
                  className="font-medium text-yellow-600 hover:text-yellow-500"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="font-medium text-light-text">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-xl text-red-500 text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-white font-medium btnGradient rounded-lg duration-150 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Forgot Password"}
            </button>
            <div className="text-center">
              <Link
                href="sign-up"
                className="text-light-text hover:text-yellow-600"
              >
                Don’t have an account?
                <span className="text-blue-500"> Sign up</span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    );
  }

  return null;
};

export default ForgotPassword;
