import Image from "next/image";
import React from "react";
import img1 from "@/assets/img/heritage/crafting/crafting1.png";
import img2 from "@/assets/img/heritage/crafting/crafting2.png";
import img3 from "@/assets/img/heritage/crafting/crafting3.png";
const Crafting = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="flex flex-col lg:flex-row gap-16 max-w-[1220px] mx-auto">
        <div className="text-white lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 lg:mb-10 mt-8">
            Crafting EXCELLENCE SINCE 1952
          </h2>
          <p className="mx-auto text-base">
            The heritage of ACC began in 1952 with Jose Aray on a small tobacco
            field in Ecuador. Starting with simple planting, harvesting, and
            local trading, Mr. Aray, seeing the opportunity, began to purchase
            several agricultural properties in the Province of Guayas in
            Ecuador. In 1954 Mr. Aray then met Guillermo de la Portilla, who had
            migrated from Cuba, bringing with him generations of Cuban expertise
            as well as precious varieties of Cubano seed and leaf. Mr. Portilla
            and the Aray family began planting on their hacienda Paulina, which
            had the perfect weather, soil and luminosity needed for the growth
            of first class tobacco. In 1967, Jose Aray successfully crossbred
            Cubano and Sumatra varieties developing what now is the standard
            Ecuadoran Sumatra breed, sought after for cigar wrapper leaf
            worldwide.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-4">
            <div className="flex justify-center">
              <Image
                width={600}
                height={600}
                src={img1}
                alt="Image 2"
                className="w-full rounded shadow-md object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                width={600}
                height={600}
                src={img2}
                alt="Image 3"
                className="w-full rounded shadow-md object-cover"
              />
            </div>
          </div>
          <div className="">
            <Image
              width={600}
              height={600}
              src={img3}
              alt="Image 1"
              className="w-full rounded shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crafting;
