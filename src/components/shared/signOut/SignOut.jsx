import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SignOut = () => {
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
        <>
          <Link href="/sign-in">
            <li>SignIn</li>
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
                signOut();
              }}
              className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
            >
              Logout
            </button>
          </li>
        </>
      )}
    </>
  );
};
export default SignOut;
