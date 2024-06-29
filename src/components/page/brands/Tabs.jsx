"use client";

import Link from "next/link";

const Tabs = () => {
  const navigationItems = [
    { path: "#brands", label: "BRANDS" },
    { path: "#cigar", label: "CIGAR COLLECTION" },
    { path: "#spirits", label: "SPIRITS COLLECTION" },
    { path: "#accessories", label: "ACCESSORIES" },
    { path: "#luxury-storage", label: "LUXURY STORAGE" },
  ];

  return (
    <section className="w-full  bg-[#121212] bottom-0 z-[51]  max-h-[90px]  hidden md:block">
      <ul className="flex flex-wrap gap-24 py-8 px-8 items-center justify-center ">
        {navigationItems.map(({ path, label }) => (
          <li
            key={path}
            className={`text-light-text/60 ${label === 'BRANDS' && "border-r-2 border-light-text/60 pe-32 "} font-riviera hover:text-white text-sm md:text-[18px]`}
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tabs;
