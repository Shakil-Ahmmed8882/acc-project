"use client";
import useScrollObserver from "@/hooks/useScrollObserver";
import ScrollParallax from "@/components/shared/parallax/ScrollParallax";
import { useEffect } from "react";
import Lenis from "lenis";
// import { useEffect } from "react";
// import Lenis from "lenis";

// pass dynamic titles object images array
const Banner = ({ titles, images }) => {
  useScrollObserver();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2, // Controls the duration of the smooth scroll animation
      easing: (t) => Math.min(1, .0001 - Math.pow(1, -10 * t)), // Easing function
      direction: "vertical", // Scroll direction, could be 'vertical' or 'horizontal'
      gestureDirection: "vertical", // Direction for touch gestures
      smooth: true, // Enable or disable smooth scrolling
      smoothTouch: true, // Disable smooth touch scrolling
      touchMultiplier: 2, // Multiplier for touch scrolling
      infinite: false, // Whether to loop the scroll
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up Lenis instance on component unmount
    };
  }, []);

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
      <ScrollParallax images={images} titles={titles} />
    </main>
  );
};

export default Banner;
