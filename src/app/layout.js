import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import GlobalContext from "@/providers/GlobalContext";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ACC",
  description: "Acc-business project",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContext>
          <Navbar/>
            {children}
          <Footer />
          <Toaster/>
        </GlobalContext>
      </body>
    </html>
  );
}
