import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <div className="text-8xl text-white h-screen flex items-center justify-center">
      <p>HELLO I AM Private page</p>
    </div>
  );
};
export default Page;
