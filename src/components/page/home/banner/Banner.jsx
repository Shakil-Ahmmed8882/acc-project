"use client";
import Pagination from "./pagination";
import useScrollObserver from "@/hooks/useScrollObserver";
import ScrollParallax from "@/components/shared/parallax/ScrollParallax";

// pass dynamic titles object images array 
const Banner = ({titles,images}) => {

  
  useScrollObserver();
  return (
    <main>
      <Pagination/>
      <ScrollParallax images={images} titles={titles}/>
    </main>
  );
};

export default Banner;
