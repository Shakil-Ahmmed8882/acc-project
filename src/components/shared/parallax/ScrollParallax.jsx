"use client";

import React from "react";
import ParallaxContents from "./ParallaxContents";
import useGlobalContext from "@/hooks/useGlobalContext";
import useScrollObserver from "@/hooks/useScrollObserver";
import AnimatedVideo from "../animation/animated-video/AnimatedVideo";

// Pass dynamic titles object and images array
const ScrollParallax = ({ images, titles }) => {
  const { title1, title2, title3 } = titles || {};
  const { parallaxOneBgImages, parallaxTwoBgImages, parallaxThreeBgImages } =
    images || {};

  return (
    <section className="max-w-[1920px] flex flex-col ">
      <div className="relative">
        {/* parallax 1 */}
        <div
          className={` 
              -mt-24 h-[120vh]
              section text-8xl overflow-hidden sticky top-0 transition-all duration-1000`}
        >
          <ParallaxContents
            images={parallaxOneBgImages}
            title={title1 || "Luxury & Vintage Cigars"}
            name={"cigar"}
            page={0}
          />
          <AnimatedVideo className={" opacity-50"} />
        </div>

        {/* parallax 2 */}
        <div
          className={` 
              mt-24 
              section text-8xl h-screen overflow-hidden sticky top-0 transition-all duration-1000`}
        >
          <ParallaxContents
            images={parallaxTwoBgImages}
            title={title2 || "Luxury & Vintage Spirits"}
            name={"spirits"}
            page={0}
          />
          <AnimatedVideo className={" opacity-40"} />
        </div>
        {/* parallax 3 */}
        <div
          className={` 
              
              section text-8xl h-screen overflow-hidden sticky top-0 transition-all duration-1000`}
        >
          <ParallaxContents
            images={parallaxThreeBgImages}
            title={title3 || "Luxury & Accessories"}
            name={"accessories"}
            page={0}
          />
          <AnimatedVideo className={"opacity-70"} />
        </div>

        <Pagination />
      </div>
    </section>
  );
};

export default React.memo(ScrollParallax);

const Pagination = () => {
  const { isMenuOpen } = useGlobalContext();
  useScrollObserver();

  return (
    <div
      className={`
        hidden md:flex
        ${
        isMenuOpen ? "invisible opacity-0" : "visible opacity-100"
      } smooth-transition fixed top-1/2 left-[10%] w-32 right-0 topStack`}
      style={{ transform: "translateY(-50%)", zIndex: 9999 }}
    >
      <div className="max-w-[20px]  flex justify-start">
        <div className="space-y-6">
          {/* 3 pagination dots */}
          {[0, 2, 3].map((dot,index) => (
            <div
              key={dot}
              className={`${index === 0?'outline outline-[white]':''} pagination-container size-5  flex justify-center items-center rounded-full p-2 outline-[2px]`}
            >
              <span className={`${index === 0?'bg-[white]':'bg-[gray]'} pagination-dot smooth-transition  p-[5px] relative bg-[white] rounded-full`}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};