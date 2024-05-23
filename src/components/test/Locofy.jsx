"use client"

import React from "react";
import Container from "../shared/container/Container";
import Image from "next/image";
import { worldAccImages } from "../page/brands/BrandImages";



const Locofy = () => {

  return (
    <>
      <Container>
        <div className="my-16">
          <h3 className="text-3xl font-normal font-riviera text-light-white-clr  uppercase border-b-2 border-light-white-clr md:max-w-fit  pb-4 md:pb-8 text-center">
            THE WORLD OF ACC
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 mb-6 lg:mb-0">
              <Image
                width={764}
                className="object-cover h-full lg:h-max w-full lg:max-w-fit"
                height={413}
                alt="ACC Retail Showrooms"
                src={worldAccImages.showroom}
              />
              <p className="md:text-xl mt-4 lg:mt-8 font-medium font-riviera text-light-white-clr z-50 uppercase">
                ACC Retail Showrooms
              </p>
            </div>
            <div className="">
              <Image
                width={764}
                className="object-cover h-full lg:h-max w-full lg:max-w-fit"
                height={413}
                alt="ACC Retail Showrooms"
                src={worldAccImages.airCraft}
              />
            </div>
            <div>
              <Image
                width={764}
                className="object-cover h-full lg:h-max w-full lg:max-w-fit"
                height={413}
                alt="ACC Retail Showrooms"
                src={worldAccImages.luxuryAccess}
              />
              <p className="md:text-xl mt-4 lg:mt-8 font-medium font-riviera text-light-white-clr  uppercase">
                Luxury Accessories
              </p>
            </div>
          </div>
        </div>
        <button className="cursor-pointer py-[13px] px-5 bg-transparent w-[600px] rounded-[60px] box-border flex flex-row items-center justify-center max-w-full border-[2px] border-solid border-gold2 hover:bg-gold2/10 hover:box-border hover:border-[2px] hover:border-solid hover:border-gold2/70">
          <div className="relative text-xl leading-[140%] font-medium font-riviera text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f9f295,_#e0aa3e_29.47%,_#faf398_67.57%,_#b88a44_89.34%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left sm:text-base sm:leading-[22px]">
            SEE OUR PRODUCTS
          </div>
        </button>
      </Container>
    </>
  );
};

export default Locofy;
