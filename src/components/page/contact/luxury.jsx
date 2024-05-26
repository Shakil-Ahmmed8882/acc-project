"use client";

import Image from "next/image";
import img1 from "@/assets/img/contact/hero2.png";
import SlideImage from "@/components/shared/hero/SlideImage";
import Container from "@/components/shared/container/Container";

const images = [img1];

const LuxurySection = () => {
  const title = "Enjoy the LUXURY LIFESTYLE WITH Acc";

  return (
    <Container
      className={
        "relative  h-screen overflow-y-hidden w-full grid justify-center items-center"
      }
    >
      {images.length !== 0 ? (
        images.map((img, index) => (
          <SlideImage key={index} images={images} loopIndex={index} />
        ))
      ) : (
        <Image
          src={img1}
          className={` top-0 left-0 absolute   h-full w-full object-cover
       transition-all duration-1000`}
          alt="hero section"
        />
      )}

      {/* Hero title */}
      <h1
        className="absolute inset-0 top-1/2 text-white text-3xl
       md:text-4xl lg:text-5xl uppercase  text-center"
      >
        {title}
      </h1>
    </Container>
  );
};

export default LuxurySection;
