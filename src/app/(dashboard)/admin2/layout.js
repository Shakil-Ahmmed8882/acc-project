"use client";

import Sidebar from "@/components/page/dashboard/sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex gap-3 h-screen bg-[#1A1A1A]">
        <Sidebar />
        <section className="flex-1 bg-[#1A1A1A] relative">{children}</section>
      </body>
    </html>
  );
}
