"use client";

import ParallaxContents from "./ParallaxContents";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useEffect } from "react";
import Lenis from "lenis";
import AnimatedVideo from "../animation/animated-video/AnimatedVideo";

// pass dynamic titles object images array 
const ScrollParallax = ({images, titles }) => {
  const { title1, title2, title3 } = titles || {};
  const { parallaxOneBgImages,parallaxTwoBgImages,parallaxThreeBgImages } = images || {};
  const { isMenuOpen } = useGlobalContext();
   

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <section>
      <div className="relative">
        <div
          className={`${
            isMenuOpen ? "-mt-[1000px] md:-mt-96" : "-mt-[700px]"
          } transition-all h-[125vh] duration-1000 section text-8xl overflow-hidden sticky top-0`}
        >
          <AnimatedVideo />
          <ParallaxContents
            images={parallaxOneBgImages}
            title={title1 || "Luxury & Vintage Cigars"}
            page={0}
            />
        </div>
        <div className="section smooth-transition text-8xl mt-64 h-screen overflow-hidden sticky top-0">
          <ParallaxContents
            images={parallaxTwoBgImages}
            title={title2 || "Luxury & Vintage Spirits"}
            page={1}
            />
        </div>
        <div className="section smooth-transition text-8xl mt-64 h-screen overflow-hidden sticky top-0">
          <ParallaxContents
            images={parallaxThreeBgImages}
            title={title3 || "luxury & accessories"}
            page={2}
          />
        </div>
      </div>
    </section>
  );
};

export default ScrollParallax;










// // import parallaxImg2 from "@/assets/img/home/parallax/parallax2";
// // import parallaxImg3 from "@/assets/img/home/parallax/parallax3";
// import AnimatedVideo from "../animation/animated-video/AnimatedVideo";
// import useGlobalContext from "@/hooks/useGlobalContext";
// // import InitialAnimateContainer from "../animation/framer-motion/initialAnimateContainer";

// const ScrollParallax = () => {
//   const { isMenuOpen } = useGlobalContext();
//   return (
//     // <InitialAnimateContainer>
//     <section>
//       <div className="relative ">
//         0
//         <div
//           className={`  ${
//             isMenuOpen ? "-mt-[800px] md:-mt-96" : "-mt-96"
//           }   transition-all h-[125vh] duration-1000 section text-8xl  overflow-hidden sticky top-0`}
//         >
//           <AnimatedVideo />
//           <ParallaxContents
//             img={parallaxImg1}
//             title={"LUXURY & VINTAGE CIGARS"}
//             page={1}
//           />
//         </div>
//         <div className="section smooth-transition    text-8xl  mt-64 h-screen  overflow-hidden sticky top-0">
//           <ParallaxContents
//             img={parallaxImg2}
//             title={"LUXURY & VINTAGE SPIRITS"}
//           />
//         </div>
//         <div className=" section text-8xl mt-64  h-screen  overflow-hidden sticky top-0">
//           <ParallaxContents
//             img={parallaxImg3}
//             title={"LUXURY & "}
//             page={"last"}
//           />
//         </div>
//       </div>
//     </section>
//     // </InitialAnimateContainer>
//   );
// };

// export default ScrollParallax;