import { navbarContext } from "@/components/shared/navbar/Navbar";
import MenuItem from "@/components/shared/navbar/menu/menu-contents/MenuItem";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Tabs = () => {
  const router = usePathname();
  const { isMenuOpen } = useContext(navbarContext) || false;
  const navigationItems = [
    { path: "/product/cigar", label: "CIGAR" },
    { path: "/product/spirits", label: "SPIRITS" },
    { path: "/product/accessories", label: "ACCESSORIES" },
    { path: "/product/luxury-storage", label: "LUXURY STORAGE" },
  ];

  const showTabs = navigationItems.some((item) => router.includes(item.path));

  return (
    <section
      className={`
        mt-5
      ${showTabs ? "block" : "hidden"}
      ${isMenuOpen ? "invisible opacity-0 text-[#c2c2c200]" : "text-[#c2c2c2]"}
      duration-700 transition-all
      absolute top-24 md:top-28 lg:top-32
      ml-4
      `}
    >
      <ul className=" flex flex-wrap 
      gap-x-16
       md:gap-16 py-3 items-center pt-10 lg:pt-6">
        {navigationItems.map((item) => (
          <MenuItem
            key={item?.path}
            className={router.includes(item.path) ? "" : ""}
            path={item.path}
            label={item.label}
          />
        ))}
      </ul>
    </section>
  );
};

export default Tabs;
