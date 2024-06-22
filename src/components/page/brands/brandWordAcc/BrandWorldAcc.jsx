import React from "react";
import Image from "next/image";
import { worldAccImages } from "./BrandImages";
import Container from "@/components/shared/container/Container";

const BrandWorldAcc = () => {
  return (
    <Container>
      <div className="mb-24">
        <h3 className="text-2xl md:text-3xl font-normal font-riviera text-light-text uppercase border-b-2 border-light-text md:max-w-fit pb-4 md:pb-8 text-center tracking-wide">
          THE WORLD OF ACC
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {worldAccImages.map((image, index) => (
            <div
              key={index}
              className={`${getGridSpan(
                image
              )} mb-6 lg:mb-0 relative overflow-hidden`}
            >
              <Image
                width={764}
                height={413}
                src={image.src}
                alt={image.alt}
                className="object-cover h-full lg:h-max w-full lg:max-w-fit hover:opacity-50 hover-grow transition duration-300 smooth-transition"
              />
              {image.description && (
                <p className="md:text-xl mt-4 lg:mt-8 font-medium font-riviera text-light-text uppercase tracking-[1.2px]">
                  {image.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const getGridSpan = (image) => {
  if (image.span === "double") {
    return "lg:col-span-2";
  } else if (image.span === "single-wide") {
    return "md:col-span-2 lg:col-span-1";
  }
  return "";
};

export default BrandWorldAcc;
