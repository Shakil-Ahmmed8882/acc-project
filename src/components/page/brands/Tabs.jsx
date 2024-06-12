"use client";

import MenuItem from "@/components/shared/navbar/menu/menu-contents/MenuItem";
import useGlobalContext from "@/hooks/useGlobalContext";

import { usePathname } from "next/navigation";

const Tabs = () => {
  const navigationItems = [
    { path: "/product/cigar", label: "CIGAR" },
    { path: "/product/liquor", label: "LIQUOR" },
    { path: "/product/accessories", label: "ACCESSORIES" },
    { path: "/product/luxury-storage", label: "LUXURY STORAGE" },
  ];

  const { isScrollBeyondParallax } = useGlobalContext();

  const router = usePathname();

  return (
    <section
      className={`
      ${isScrollBeyondParallax ? "invisible opacity-0" : "visible opacity-100"}
    duration-700 transition-all
    fixed lg:top-[85vh] bg-[#00000046] w-full 
    `}
    >
      <ul className=" flex gap-16 py-10 px-8 items-center">
        {navigationItems.map((item) => (
          <MenuItem
            key={item?.path}
            className={
              router.includes(item.path)
                ? "text-standard-gold text-[10px] md:text-[16px]"
                : ""
            }
            path={item.path}
            label={item.label}
          />
        ))}
      </ul>
    </section>
  );
};

export default Tabs;
