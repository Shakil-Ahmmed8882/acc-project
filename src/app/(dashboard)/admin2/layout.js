'use client'

import Sidebar from "@/components/page/dashboard/sidebar/Sidebar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex gap-3 h-screen ">
        <Sidebar/>
      {children}
      </body>
    </html>
  );
}
