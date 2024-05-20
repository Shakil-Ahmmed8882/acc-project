import React from "react";
import img1 from "@/assets/img/heritage/achievement/achievement1.png";
import Image from "next/image";
const Achievement = () => {
  return (
    <div className="bg-[#222222] text-white p-6">
      <div className="flex flex-col items-center md:flex-row md:items-start max-w-[1220px] mx-auto gap-10">
        <Image
          width={600}
          height={600}
          src={img1}
          alt="Man smoking a cigar"
          className="w-72 h-auto mb-8 md:mb-0 md:mr-8"
        />
        <div className="lg:mt-10">
          <h1 className="text-3xl font-bold mb-4">ACHIEVEMENT CIGAR COMPANY</h1>
          <p className="text-lg">
            ACC frequently produces for and sponsors exclusive events with other
            well-known luxury brands around the world. From scotch and cigar
            dinners to Private jets, yachts, luxury cars, rare watches and
            high-end fashion brands, ACC is the cigar company of choice for
            those looking to provide guests something special and memorable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
