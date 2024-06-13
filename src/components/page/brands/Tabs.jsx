"use client";
import MenuItem from "@/components/shared/navbar/menu/menu-contents/MenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tabs = () => {
  const navigationItems = [
    { path: "#brands", label: "BRANDS" },
    { path: "#cigar", label: "CIGAR" },
    { path: "#liquor", label: "LIQUOR" },
    { path: "#accessories", label: "ACCESSORIES" },
    { path: "#luxury-storage", label: "LUXURY STORAGE" },
  ];

  const router = usePathname();

  return (
    <section className="w-full ">
      <ul className=" flex gap-16 py-10 px-8 items-center justify-center">
        {navigationItems.map((item) => (
          <Link href={item?.path} key={item?.path}>
            <li
              className={`text-light-text/60 hover:text-white text-xl`}
            >
              {item?.label}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Tabs;
