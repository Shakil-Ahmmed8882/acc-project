"use client";

import Image from "next/image";
import img1 from "@/assets/img/contact/hero2.png";
import Container from "@/components/shared/container/Container";

const LuxurySection = () => {
  const title = "Enjoy the LUXURY LIFESTYLE WITH Acc";

  return (
    <Container
      className={
        "h-screen overflow-y-hidden w-full grid justify-center items-center"
      }
    >
      <div className="fixed">
        <Image
          src={img1}
          className={`h-full w-full object-cover
       transition-all duration-1000`}
          alt="hero section"
        />

        {/* Hero title */}
        <h1
          className="absolute inset-0 top-1/2 text-white text-3xl
       md:text-4xl lg:text-7xl uppercase text-center leading-[140%] font-riviera font-normal pb-4 tracking-[5.12px]"
        >
          {title}
        </h1>
      </div>
    </Container>
  );
};

export default LuxurySection;
