"use client";
import accLogo from "@/assets/img/shared/navbar/acc.png";
import Image from "next/image";
import { CrossIcon, Menu } from "lucide-react";
import { useState } from "react";
import SidebarFooterRoutes from "./SidebarFooterRoutes";
import SidebarNavRoutes from "./SidebarNavRoutes";
// import Profile from "./Profile";

const Sidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      <Menu
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        className="text-white flex md:hidden absolute top-7
         left-5 z-50 cursor-pointer hover:-rotate-180
         smooth-transition"
      />

      <nav
        className={` ${
          isSideBarOpen
            ? "translate-x-0 visible left-0"
            : "-translate-x-32 md:translate-x-0 invisible md:visible -left-80 md:left-0 "
        } 
            h-screen 
            smooth-transition
            w-full md:flex bg-[#161618] 
            top-0 fixed z-50
            space-y-8 sm:w-64`}
        suppressHydrationWarning
      >
        <div className="flex flex-col h-full">
          <div className="mt-6 mb-11 px-4">
            <Image width={100} height={100} src={accLogo} alt="logo" />
          </div>
          <div className="flex-1 flex flex-col h-full overflow-auto">
            <SidebarNavRoutes />
            <SidebarFooterRoutes />
            {/* <Profile /> */}
          </div>
        </div>

        {/* close menu */}
        <CrossIcon
          onClick={() => setIsSideBarOpen(false)}
          className="
          flex
          md:hidden
          text-white absolute -top-2
       right-3 z-50 rotate-45 hover:-rotate-180
        smooth-transition cursor-pointer"
        />
      </nav>
    </>
  );
};

export default Sidebar;
