"use client";
import Pagination from "./pagination";
import useScrollObserver from "@/hooks/useScrollObserver";
import ScrollParallax from "@/components/shared/parallax/ScrollParallax";

const Banner = ({titles}) => {
  useScrollObserver();
  return (
    <main>
      <Pagination />
      <ScrollParallax titles={titles}/>
    </main>
  );
};

export default Banner;
