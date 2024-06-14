




"use client";

import React from "react";
import ParallaxContents from "./ParallaxContents";
import useGlobalContext from "@/hooks/useGlobalContext";


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

  return (
    <div
      className={`${
        isMenuOpen ? "invisible opacity-0" : "visible opacity-100"
      } smooth-transition fixed top-1/2 z-50 space-y-6`}
      style={{ left: 'calc(50% - 960px)', transform: 'translateY(-50%)' }}
    >
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
  );
};
