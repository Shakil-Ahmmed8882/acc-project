
"use client";

import Lenis from "lenis";
import Pagination from "./pagination";
import useScrollObserver from "@/hooks/useScrollObserver";
import ScrollParallax from "@/components/shared/parallax/ScrollParallax";
import { useEffect } from "react";

const Banner = () => {
  // Initialize Lenis for smooth scrolling
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time); 
  //     requestAnimationFrame(raf); 
  //   }
  //   requestAnimationFrame(raf); 
  // }, []);

  useScrollObserver();
  return (
    <main>
      <Pagination />
      <ScrollParallax />
    </main>
  );
};

export default Banner;

