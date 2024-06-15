"use client";
import useScrollObserver from "@/hooks/useScrollObserver";
import ScrollParallax from "@/components/shared/parallax/ScrollParallax";
// import { useEffect } from "react";
// import Lenis from "lenis";

// pass dynamic titles object images array 
const Banner = ({titles,images}) => {

  
  useScrollObserver();

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };
  //   requestAnimationFrame(raf);

  //   // Cleanup function to avoid memory leaks
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);
  
  return (
    <main>
      <ScrollParallax images={images} titles={titles}/>
    </main>
  );
};

export default Banner;
