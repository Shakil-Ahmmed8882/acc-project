"use client";

import Image from "next/image";
import img1 from "@/assets/img/heritage/world-of-acc/img1.png";
import img2 from "@/assets/img/heritage/world-of-acc/img2.png";
import img3 from "@/assets/img/heritage/world-of-acc/img3.png";
import img4 from "@/assets/img/heritage/world-of-acc/img4.png";
import SlideImage from "./SlideImage";
import Container from "../container/Container";


const HeroSection = ({imagesArray=[],title,description}) => {
  
  
  // demo array
  const images = imagesArray 
  return (
    <Container
      className={"relative  h-screen overflow-y-hidden w-full grid justify-center items-center"}
    >
      {/* stacking image from images gallery and slide with index */}
      {/* if array given animate images in bg */}
      {images.length !== 0 ? (
        images.map((img, index) => (
          <SlideImage key={index} images={images} loopIndex={index} />
        ))
      ) : (
        // else single img be displayed
        <Image
          src={img1}
          className={` top-0 left-0 absolute   h-full w-full object-cover
       transition-all duration-1000`}
          alt="hero section"
        />
      )}

      {/* Overlay div for styling */}
      <div
        className="absolute inset-0  bg-[#000000a3] mix-blend-darken
        transition-all duration-1000 ease-in "
      ></div>

      {/* Hero title & desc */}
      <div className="absolute inset-0 top-1/2 text-white  uppercase  text-center">
      <h1
        className="text-3xl
        md:text-4xl lg:text-6xl"
      >
        {title}
      </h1>
        <p style={{letterSpacing:8}} className="text-white text-[10px]  md:text-[17px] lg:text-lg font-cailyne  pt-3">{description}</p>
        </div>
    </Container>
  );
};

export default HeroSection;
