// src/components/Craftsmanship.js
import Button from "@/components/shared/button/Button";
import Image from "next/image";
import React from "react";

const Craftsmanship = () => {
  return (
    <div className="py-12 max-w-[1220px] mx-auto">
      <div className="flex gap-16">
        <div className="text-center text-white mb-8">
          <h2 className="text-6xl font-bold whitespace-nowrap mb-28">ACC Craftsmanship</h2>
          <p className="max-w-2xl mx-auto text-lg">
            The Entubado (Entubar) method employed in the construction of each
            ACC cigar is almost a lost art in cigar making. While a few faster
            methods of cigar construction dominate most cigar production, ACC
            refuses to settle for second best. ACC forgoes the use of
            hand-operated machines and quick bunching methods to speed
            production, because they reduce tobacco distribution within the
            cigar, consistency of draw, and overall construction strength. The
            evidence is in the ash and within the hand of an experienced smoker.
            ACC cigars are hand-bunched and are capped with &quot;Triple
            Rings&quot; end caps to avoid unraveling wrapper leaf during
            smoking.
          </p>
          <Button/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <Image
              width={500}
              height={500}
              src="/Rectangle4.png"
              alt="Image 1"
              className="w-full h-auto rounded shadow-md"
            />
          </div>
          <div className="flex justify-center h-full md:h-4/6">
            <Image
              width={500}
              height={500}
              src="/Rectangle5.png"
              alt="Image 2"
              className="w-full h-auto rounded shadow-md"
            />
          </div>
          <div className="flex justify-center col-span-2">
            <Image
              width={500}
              height={500}
              src="/Rectangle6.png"
              alt="Image 3"
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craftsmanship;
