"use client";

import ScrollParallax from "@/components/shared/parallax/ScrollParallax";
import Pagination from "./pagination";
import useScrollObserver from "@/hooks/useScrollObserver";


const Banner = () => {
  // it's for active pagination marking
  useScrollObserver();

  return (
    <section className="relative">
      <ScrollParallax />
      <Pagination />
    </section>
  );
};

export default Banner;
