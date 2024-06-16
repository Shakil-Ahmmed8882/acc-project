"use client"
import Lenis from "lenis";
import { useEffect } from "react";

const LenisProvider = ({children}) => {
          useEffect(() => {
            const lenis = new Lenis();
            const raf = (time) => {
              lenis.raf(time);
              requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);

            // Cleanup function to avoid memory leaks
            return () => {
              lenis.destroy();
            };
          }, []);
    return (
        <div>
   {children}
        </div>
    );
};
export default LenisProvider;