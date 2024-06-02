"use client";

import acclogo from "@/assets/img/shared/navbar/acc.png";
import Image from "next/image";
import Link from "next/link";
import { CrossIcon, Menu } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/shared/navbar/Logo";
import { navigation } from "./navigationItems";

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
        <div class="flex flex-col h-full">
          <div className="mt-6 mb-11 px-4">
            <Image width={100} height={100} src={acclogo} alt="logo" />
          </div>
          <div className="flex-1 flex flex-col h-full overflow-auto">
            <SidebarNavRoutes />
            <Profile />
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

// sidebar top routes
function SidebarNavRoutes() {
  return (
    <ul className="px-4 text-sm font-medium flex-1 space-y-2">
      {navigation?.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.href}
            className="flex items-center gap-x-2 text-[#ebebeb] p-2 rounded-lg  hover:bg-[#29292c] transition-all duration-300"
          >
            <div className="text-white">{item.icon}</div>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Profile
function Profile() {
  return (
    <div className="py-4 px-4 border-t">
      <div className="flex items-center gap-x-4">
        <Logo />
        <div>
          <span className="block text-gray-400 text-sm font-semibold">
            Tanmoy
          </span>
          <a
            href="javascript:void(0)"
            className="block mt-px text-gray-400 hover:text-indigo-600 text-xs"
          >
            View profile
          </a>
        </div>
      </div>
    </div>
  );
}

