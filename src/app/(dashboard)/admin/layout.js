
"use client";

import Sidebar from "@/components/page/dashboard/sidebar/Sidebar";

const page = ({children}) => {
  return (
    <>
      <body className="flex gap-3 h-screen bg-[#1A1A1A]">
        <Sidebar />
        <section className="flex-1 bg-[#1A1A1A] relative md:ml-64">{children}</section>
      </body>
    </>
  );
};

export default page;
