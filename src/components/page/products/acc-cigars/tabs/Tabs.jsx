import { navbarContext } from "@/components/shared/navbar/Navbar";
import MenuItem from "@/components/shared/navbar/menu/menu-contents/MenuItem";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Tabs = () => {
  const router = usePathname();
  const { isMenuOpen } = useContext(navbarContext) || false;
  const navigationItems = [
    { path: "/product/cigar", label: "CIGAR" },
    { path: "/product/liquor", label: "LIQUOR" },
    { path: "/product/accessories", label: "ACCESSORIES" },
    { path: "/product/luxury-storage", label: "LUXURY STORAGE" },
  ];

  const showTabs = navigationItems.some((item) => router.includes(item.path));

  return (
    <section
      className={`
      ${showTabs ? "block" : "hidden"}
      ${isMenuOpen ? "invisible opacity-0 text-[#c2c2c200]" : "text-[#c2c2c2]"}
      duration-700 transition-all
      absolute top-24 md:top-28 lg:top-32
      `}
    >
      <ul className=" flex gap-16 py-3 items-center">
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
