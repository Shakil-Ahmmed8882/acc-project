import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MainContent from "@/components/page/dashboard/main-content/MainContent";
const AdminPage = async() => {
  const session = await getServerSession();
  if (!session) {
    redirect("/sign-in");
  }
  
    return (
        <>
          <MainContent/>
        </>
    );
};

export default AdminPage;