"use client";

import Image from "next/image";
import img1 from "@/assets/img/contact/hero2.png";

const LuxurySection = () => {
  const title = "Enjoy the LUXURY LIFESTYLE WITH Acc";

  return (
    <div className="relative">
      <Image
        src={img1}
        className={`h-full w-full object-cover
       transition-all duration-1000`}
        alt="hero section"
      />

      {/* Hero title */}
      <h1
        className="
        text-3xl
         md:text-4xl px-12 lg:text-5xl text-white font-riviera tracking-[3.84px] font-normal 
        absolute  inset-0 top-1/4 md:top-1/2
        uppercase text-center leading-[140%] pb-4"
      >
        {title}
      </h1>
    </div>
  );
};

export default LuxurySection;
