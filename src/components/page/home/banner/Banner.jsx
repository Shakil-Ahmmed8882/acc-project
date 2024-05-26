"use client";

import ScrollParallax from "@/components/shared/parallax/ScrollParallax";
import Pagination from "./pagination";
import useScrollObserver from "@/hooks/useScrollObserver";

const Banner = () => {
  // it's for active pagination marking
const a =   useScrollObserver();

console.log(a)

  return (
    <section className="relative">
      <ScrollParallax />
      <Pagination />
    </section>
  );
};

export default Banner;
