"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SignOut = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center">
      {!session ? (
        <>
          <Link href="/sign-in">
            <li className="p-2 px-5 -mt-1  bg-yellow-400 rounded-full">
              SignIn
            </li>
          </Link>
          {/* <Link href="/register">
            <li>Register</li>
          </Link> */}
        </>
      ) : (
        <>
          {session.user?.email}
          <li>
            <button
              onClick={() => {
                signOut({ redirect: false, callbackUrl: "/sign-in" });
              }}
              className="p-2 px-5 -mt-1 bg-yellow-400 rounded-full"
            >
              Logout
            </button>
          </li>
        </>
      )}
    </div>
  );
};
export default SignOut;
