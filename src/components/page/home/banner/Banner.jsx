'use client'

import ScrollParallax from "@/components/shared/parallax/ScrollParallax";
import Pagination from "./pagination";
import { useEffect } from "react";
import useScrollObserver from "@/hooks/useScrollObserver";

const Banner= () => {


  useScrollObserver()

  return (
    <section className="relative">
        <ScrollParallax/>
      <Pagination/>
      </section>
  );
};

export default Banner; 