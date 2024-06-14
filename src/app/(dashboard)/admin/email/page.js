import { getServerSession } from "next-auth";
import UserEmail from "./UserEmail";
import { redirect } from "next/dist/server/api-utils";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <>
      <UserEmail />
    </>
  );
};

export default page;
