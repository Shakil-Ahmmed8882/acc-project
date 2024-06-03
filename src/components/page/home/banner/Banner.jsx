"use client";
import Pagination from "./pagination";
import useScrollObserver from "@/hooks/useScrollObserver";
import ScrollParallax from "@/components/shared/parallax/ScrollParallax";

const Banner = () => {
  useScrollObserver();
  return (
    <main>
      <Pagination />
      <ScrollParallax />
    </main>
  );
};

export default Banner;
