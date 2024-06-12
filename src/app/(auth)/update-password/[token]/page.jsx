"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { updatePassword, verifyToken } from "@/utils";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "@/app/loading";
import accLogo from "@/assets/img/shared/navbar/acc.png";

const ResetPassword = ({ params }) => {
  const token = params.token;
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/admin");
    }
  }, [sessionStatus, router]);

  useEffect(() => {
    const verifyUserToken = async () => {
      try {
        const response = await verifyToken({ token });
        if (response.success) {
          setVerified(true);
          setUser(response.data);
          toast.success(response.message);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError("An error occurred while verifying the token.");
      }
    };

    verifyUserToken();
  }, [token]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!user) {
        setError("User verification failed.");
        return;
      }

      const userData = {
        password,
        email: user.email,
      };

      try {
        const result = await updatePassword(userData);
        if (result.success) {
          router.push("/sign-in");
          toast.success(result.message);
        } else {
          toast.error(result.message);
          setError(result.message);
        }
      } catch (error) {
        toast.error("An error occurred while updating the password.");
        setError("An error occurred while updating the password.");
      }
    },
    [password, router, user]
  );

  if (sessionStatus === "loading" || !verified) {
    return <Loading />;
  }

  if (sessionStatus === "unauthenticated" && verified) {
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
                  href="/sign-in"
                  className="font-medium text-yellow-600 hover:text-yellow-500"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="font-medium text-light-text">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-xl text-red-500 text-center">{error}</p>
            )}
            <button
              disabled={Boolean(error)}
              className="w-full px-4 py-2 text-white font-medium btnGradient rounded-lg duration-150 disabled:cursor-not-allowed"
            >
              Reset Password
            </button>
          </form>
        </div>
      </section>
    );
  }

  return null;
};

export default ResetPassword;
