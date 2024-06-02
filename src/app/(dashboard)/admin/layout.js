// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/shared/navbar/Navbar";
// import Footer from "@/components/shared/footer/Footer";
// import GlobalContext from "@/providers/GlobalContext";
// import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "ACC",
//   description: "Acc-business project",
// };

// export default function RootLayout({ children }) {

  
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <GlobalContext>
//           <Navbar/>
//             {children}
//           <Footer />
//           <Toaster/>
//         </GlobalContext>
//       </body>
//     </html>
//   );
// }



"use client";

import Sidebar from "@/components/page/dashboard/sidebar/Sidebar";

const page = ({children}) => {
  return (
    <>
      <body className="flex gap-3 h-screen bg-[#1A1A1A]">
        <Sidebar />
        <section className="flex-1 bg-[#1A1A1A] relative">{children}</section>
      </body>
    </>
  );
};

export default page;
