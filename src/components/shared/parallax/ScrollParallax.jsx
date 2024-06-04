// "use client";

import ParallaxContents from "./ParallaxContents";
import parallaxImg1 from "@/assets/img/home/parallax/parallax1.png";
import parallaxImg2 from "@/assets/img/home/parallax/parallax2.png";
import parallaxImg3 from "@/assets/img/home/parallax/parallax3.png";
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



import useGlobalContext from "@/hooks/useGlobalContext";
import { useEffect } from "react";
import Lenis from "lenis";
import AnimatedVideo from "../animation/animated-video/AnimatedVideo";

const ScrollParallax = ({titles}) => {
  const {title1,title2,title3} = titles || {}
  const { isMenuOpen } = useGlobalContext();

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf); // Call raf again for the next animation frame
    }
    requestAnimationFrame(raf); // Start the animation loop
  }, []);

  return (
    <section>
      {/* Add your smooth scrolling animation and parallax components here */}
      <div className="relative">
        <div
          className={`${
            isMenuOpen ? "-mt-[800px] md:-mt-96" : "-mt-96"
          } transition-all h-[125vh] duration-1000 section text-8xl overflow-hidden sticky top-0`}
        >
          <AnimatedVideo/>
          <ParallaxContents
            img={parallaxImg1}
            title={title1 || "LUXURY & VINTAGE CIGARS 1"}
            page={0}
          />
        </div>
        <div className="section smooth-transition text-8xl mt-64 h-screen overflow-hidden sticky top-0">
          <ParallaxContents
            img={parallaxImg2}
            title={title2 || "LUXURY & VINTAGE CIGARS 2"}
            page={1}
          />
        </div>
        <div className="section smooth-transition text-8xl mt-64 h-screen overflow-hidden sticky top-0">
          <ParallaxContents img={parallaxImg3}
           title={title3 || "LUXURY & VINTAGE CIGARS 3"} page={2} />
        </div>
      </div>
    </section>
  );
};

export default ScrollParallax;
