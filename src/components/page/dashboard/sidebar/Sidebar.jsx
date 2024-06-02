"use client";

import acclogo from '@/assets/img/shared/navbar/acc.png';
import Image from "next/image";
import { navigation } from './navigationItems';

const Sidebar = () => {
  return (
    <nav className=" w-full h-full bg-[#161618] space-y-8 sm:w-64" suppressHydrationWarning>
      <div class="flex flex-col h-full">
        <div className="mt-6 mb-11 px-4">
          <Image width={100} height={100} src={acclogo} alt="logo"/>
        </div>
        <div className="flex-1 flex flex-col h-full overflow-auto">
            
          <SidebarNavRoutes />
            <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;


// sidebar top routes 
function SidebarNavRoutes() {
  return (
    <ul className="px-4 text-sm font-medium flex-1 space-y-2">
      {navigation?.map((item, idx) => (
        <li key={idx}>
          <a
            href={item.href}
            className="flex items-center gap-x-2 text-[#ebebeb] p-2 rounded-lg  hover:bg-[#29292c] transition-all duration-300"
          >
            <div className="text-white">{item.icon}</div>
            {item.name}
          </a>
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
        <Image
          width={20}
          height={20}
          src="https://randomuser.me/api/portraits/women/79.jpg"
          className="w-12 h-12 rounded-full"
          alt=''
        />
        <div>
          <span className="block text-gray-700 text-sm font-semibold">
            Alivika tony
          </span>
          <a
            href="javascript:void(0)"
            className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
          >
            View profile
          </a>
        </div>
      </div>
    </div>
  );
}
