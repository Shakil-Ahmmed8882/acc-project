import Image from "next/image";
import React from "react";
import craftsmanship1 from "@/assets/img/home/craftsmanship/craftsmanship1.png";
import craftsmanship2 from "@/assets/img/home/craftsmanship/craftsmanship3.png";
import craftsmanship3 from "@/assets/img/home/craftsmanship/craftsmanship2.png";
import Container from "@/components/shared/container/Container";
import Description from "@/components/ui/content/Description";
import Button from "./Button";

const UnCraftsmanship = () => {
  const text = `At ACC, cigar craftsmanship is not merely a process. It's an art form meticulously honed over generations. From the selection of the finest tobacco leaves to the skilled hands of our master blenders, every step in crafting our cigars is infused with dedication and passion. Each cigar is a testament to our unwavering commitment to excellence, ensuring that every draw delivers a symphony of flavors and an experience unlike any other. With a reverence for tradition and a relentless pursuit of perfection, we invite you to indulge in the unparalleled craftsmanship that defines ACC's legacy.`;

  return (
    <Container className={"py-12 px-4 sm:px-6 lg:px-8 mx-auto"}>
      <div className="flex flex-col lg:flex-row gap-40">
        <div className="text-white mb-8 lg:mb-0 lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-20 whitespace-nowrap mt-8">
            Unparalleled Craftsmanship
          </h2>
          <Description {...{ text }} />
          <Button />
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:w-1/2">
          <div className="flex justify-center col-span-2">
            <Image
              width={500}
              height={500}
              src={craftsmanship1}
              alt="Image 3"
              className="w-full rounded shadow-md max-h-72"
            />
          </div>
          <div className="flex justify-center col-span-2 md:col-span-1">
            <Image
              width={500}
              height={500}
              src={craftsmanship3}
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
        </div>
      </div>
    </Container>
  );
};

export default UnCraftsmanship;
