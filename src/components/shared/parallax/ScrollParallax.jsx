




"use client";

import React from "react";
import ParallaxContents from "./ParallaxContents";
import useGlobalContext from "@/hooks/useGlobalContext";
import useScrollObserver from "@/hooks/useScrollObserver";


// Pass dynamic titles object and images array
const ScrollParallax = ({ images, titles }) => {
  const { title1, title2, title3 } = titles || {};
  const { parallaxOneBgImages, parallaxTwoBgImages, parallaxThreeBgImages } = images || {};

  const parallaxSections = [
    { images: parallaxOneBgImages, title: title1 || "Luxury & Vintage Cigars", page: 0, className: '-mt-24' },
    { images: parallaxTwoBgImages, title: title2 || "Luxury & Vintage Spirits", page: 1 },
    { images: parallaxThreeBgImages, title: title3 || "Luxury & Accessories", page: 2 },
  ];

  return (
    <section className="max-w-[1920px] flex flex-col">
      <div className="relative">
        {parallaxSections.map((section, index) => (
          <div
            key={index}
            className={` 
              ${section?.className}
              section text-8xl h-screen overflow-hidden sticky top-0 transition-all duration-1000`}
          >
            <ParallaxContents
              images={section.images}
              title={section.title}
              page={section.page}
            />
          </div>
        ))}
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
      className={`${
        isMenuOpen ? "invisible opacity-0" : "visible opacity-100"
      } smooth-transition fixed top-1/2 left-[10%] right-0 z-50`}
      style={{ transform: 'translateY(-50%)' }}
    >
      <div className="max-w-[1920px] mx-auto flex justify-start">
        <div className="space-y-6">
          <div className="size-6 flex justify-center items-center rounded-full p-2">
            <span className="pagination-dot smooth-transition p-[4px] relative bg-[white] rounded-full"></span>
          </div>
          <div className="size-6 flex justify-center items-center rounded-full p-2">
            <span className="pagination-dot smooth-transition p-[4px] relative bg-[white] rounded-full"></span>
          </div>
          <div className="size-6 flex justify-center items-center rounded-full p-2">
            <span className="pagination-dot smooth-transition p-[4px] relative bg-[white] rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
