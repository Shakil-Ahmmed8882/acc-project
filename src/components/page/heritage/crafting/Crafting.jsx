import React from "react";
import img1 from "@/assets/img/heritage/crafting/crafting1.png";
import img2 from "@/assets/img/heritage/crafting/crafting2.png";
import img3 from "@/assets/img/heritage/crafting/crafting3.png";
import Description from "@/components/ui/content/Description";
import Container from "@/components/shared/container/Container";
import Image from "next/image";

const Crafting = () => {
  return (
    <Container bgClr="bg-black" className="py-8 sm:py-16 md:py-24 lg:py-32">
      <div className="grid gap-8 xl:gap-32 lg:grid-cols-2 mx-auto">
        <div className="text-white px-4 sm:px-8 lg:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4 lg:mb-10 mt-4 lg:mt-8 uppercase leading-[140%] font-cailyne font-normal pb-4 tracking-[5.12px] w-full lg:w-[80%]">
            Crafting Excellence Since 1952
          </h2>
          <Description
            text={`The heritage of ACC began in 1952 with Jose Aray on a small tobacco field in Ecuador. Starting with simple planting, harvesting, and local trading, Mr. Aray, seeing the opportunity, began to purchase several agricultural properties in the Province of Guayas in Ecuador. In 1954 Mr. Aray then met Guillermo de la Portilla, who had migrated from Cuba, bringing with him generations of Cuban expertise as well as precious varieties of Cubano seed and leaf. Mr. Portilla and the Aray family began planting on their hacienda Paulina, which had the perfect weather, soil, and luminosity needed for the growth of first-class tobacco. In 1967, Jose Aray successfully crossbred Cubano and Sumatra varieties developing what now is the standard Ecuadoran Sumatra breed, sought after for cigar wrapper leaf worldwide.`}
          />
        </div>
        <div className="grid gap-4 lg:grid-cols-2 px-4 sm:px-8 lg:px-0">
          <div className="grid gap-4">
            <ImageCard src={img1} alt="Crafting Image 1" />
            <ImageCard src={img2} alt="Crafting Image 2" />
          </div>
          <ImageCard
            src={img3}
            alt="Crafting Image 3"
            className="lg:row-span-2"
          />
        </div>
      </div>
    </Container>
  );
};

export default Crafting;

const ImageCard = ({ src, alt }) => {
  return (
    <div className="flex justify-center relative overflow-hidden max-w-full">
      <Image
        width={600}
        height={600}
        src={src}
        alt={alt}
        className={`w-full rounded shadow-md lg:object-cover hover-grow transition duration-300 max-h-80 lg:max-h-fit lg:w-[370px]`}
        placeholder="blur"
        priority
      />
    </div>
  );
};
