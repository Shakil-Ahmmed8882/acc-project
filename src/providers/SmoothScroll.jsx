

"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useAnimationFrame } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollY = useMotionValue(0);
  const offsetY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  useAnimationFrame(() => {
    const prevY = offsetY.get();
    const newY = prevY + (scrollY.get() - prevY) * 0.1;
    offsetY.set(newY);

    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateY(-${newY}px)`;
    }
  });

  return <div ref={scrollRef}>{children}</div>;
};

export default SmoothScroll;

