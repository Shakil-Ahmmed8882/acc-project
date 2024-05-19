"use client";

import Image from "next/image";
import img1 from "@/assets/img/heritage/world-of-acc/img1.png";
import img2 from "@/assets/img/heritage/world-of-acc/img2.png";
import img3 from "@/assets/img/heritage/world-of-acc/img3.png";
import img4 from "@/assets/img/heritage/world-of-acc/img4.png";
import SlideImage from "./SlideImage";

// demo array 
const images = [img1, img2, img3, img4]; 

const HeroSection = () => {
 
  const title = "ACC world here";

  return (
    <section 
    className="relative  h-screen w-full grid
    justify-center items-center">

      {/* stacking image from images gallery and slide with index */}
      {/* if array given animate images in bg */}
      {
      images.length !== 0 ? images.map(
        (img, index) =><SlideImage key={index} images={images} loopIndex={index}/>
    ):
    // else single img be displayed
    <Image
      src={img1}
      className={` top-0 left-0 absolute   h-full w-full object-cover
       transition-all duration-1000`} alt="hero section"
    />
    }

      {/* Overlay div for styling */}
      <div className="absolute inset-0  bg-gradient-to-r
       from-[#000000d7] to-[#00000049] rounded-lg
        transition-all duration-1000 ease-in "></div>

       {/* Hero title */}
      <h1 className="absolute inset-0 top-1/2 text-white text-3xl
       md:text-4xl lg:text-5xl uppercase  text-center">{title}</h1>


    </section>
  );
};

export default HeroSection;
