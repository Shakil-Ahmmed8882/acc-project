"use client";

import useScrollObserver from "@/hooks/useScrollObserver";
import ScrollParallax from "@/components/shared/parallax/ScrollParallax";

const Banner = ({ titles, images }) => {
  
  useScrollObserver();


  return (
    <main data-scroll-container>
      <ScrollParallax images={images} titles={titles} />
    </main>
  );
};

export default Banner;
