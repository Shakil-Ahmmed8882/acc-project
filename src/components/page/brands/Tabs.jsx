"use client";

import Link from "next/link";

const Tabs = () => {
  const navigationItems = [
    { path: "#brands", label: "BRANDS" },
    { path: "#cigar", label: "CIGAR COLLECTION" },
    { path: "#liquor", label: "LIQUOR COLLECTION" },
    { path: "#accessories", label: "ACCESSORIES" },
    { path: "#luxury-storage", label: "LUXURY STORAGE" },
  ];

  return (
    <section className="w-full absolute bg-purple-600 bottom-0 z-[51]  max-h-[80px] md:max-h-[200px] hidden md:block">
      <ul className="flex flex-wrap gap-16 py-10 px-8 items-center justify-center ">
        {navigationItems.map(({ path, label }) => (
          <li
            key={path}
            className="text-light-text/60 hover:text-white text-sm md:text-xl"
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tabs;
