"use client";

import Image from "next/image";
import img1 from "@/assets/img/heritage/world-of-acc/img1.png";
import SlideImage from "./SlideImage";
import Container from "../container/Container";
import { motion } from "framer-motion";

const HeroSection = ({ imagesArray = [], title, description, noOverlay }) => {
  // demo array
  const images = imagesArray;
  return (

    <Container
      className={
        "h-screen overflow-y-hidden grid justify-center items-center"
      }
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
          width={1000}
          height={1000}
          src={img1}
          className={` top-0 left-0 absolute h-full w-full object-cover transition-all duration-1000 `}
          alt="hero section"
        />
      )}

      {/* Overlay div for styling */}
      {noOverlay ? (
        ""
      ) : (
        <div
          className="absolute inset-0  bg-[#00000086] mix-blend-darken
        transition-all duration-1000 ease-in "
        ></div>
      )}

      {/* Hero title & desc */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 top-1/2 text-white uppercase text-center">
          <h1 className="text-4xl lg:text-6xl uppercase">{title}</h1>
          <p
            style={{ letterSpacing: 12 }}
            className="text-white font-riviera text-[10px] md:text-[17px] lg:text-lg font-thin pt-4"
          >
            {description}
          </p>
        </div>
      </motion.div>
    </Container>
  );
};

export default HeroSection;
