"use client";

import useScrollObserver from "@/hooks/useScrollObserver";
import ScrollParallax from "@/components/shared/parallax/ScrollParallax";
import AnimatedVideo from "@/components/shared/animation/animated-video/AnimatedVideo";

const Banner = ({ titles, images }) => {
  
  useScrollObserver();


  return (
    <main data-scroll-container>
      <ScrollParallax images={images} titles={titles} />
    </main>
  );
};

export default Banner;
