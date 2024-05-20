import Image from "next/image";
import React from "react";
import Button from "./Button";
import Description from "@/components/ui/content/Description";
import craftsmanship1 from "@/assets/img/home/craftsmanship/craftsmanship1.png";
import craftsmanship2 from "@/assets/img/home/craftsmanship/craftsmanship2.png";
import craftsmanship3 from "@/assets/img/home/craftsmanship/craftsmanship3.png";

const Craftsmanship = () => {

  const text = ` The Entubado (Entubar) method employed in the construction of each ACC
  cigar is almost a lost art in cigar making. While a few faster methods of
  cigar construction dominate most cigar production, ACC refuses to settle
  for second best. ACC forgoes the use of hand-operated machines and quick
  bunching methods to speed production, because they reduce tobacco
  distribution within the cigar, consistency of draw, and overall
  construction strength. The evidence is in the ash and within the hand of
  an experienced smoker. ACC cigars are hand-bunched and are capped with
  &quot;Triple Rings&quot; end caps to avoid unraveling wrapper leaf during
  smoking.`

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1220px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="text-white mb-8 lg:mb-0 lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 lg:mb-20 whitespace-nowrap mt-8">
            ACC Craftsmanship
          </h2>
          <Description {...{text}}/>
          <Button />
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:w-1/2">
          <div className="flex justify-center col-span-2 md:col-span-1">
            <Image
              width={500}
              height={500}
              src={craftsmanship1}
              alt="Image 1"
              className="w-full rounded shadow-md object-cover"
            />
          </div>
          <div className="flex justify-center col-span-2 md:col-span-1">
            <Image
              width={500}
              height={500}
              src={craftsmanship2}
              alt="Image 2"
              className="w-full rounded shadow-md object-cover lg:h-5/6"
            />
          </div>
          <div className="flex justify-center col-span-2">
            <Image
              width={500}
              height={500}
              src={craftsmanship3}
              alt="Image 3"
              className="w-full rounded shadow-md object-cover h-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craftsmanship;
