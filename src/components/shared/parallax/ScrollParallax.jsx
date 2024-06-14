// "use client";

// import ParallaxContents from "./ParallaxContents";
// import useGlobalContext from "@/hooks/useGlobalContext";
// import { useEffect } from "react";
// import Lenis from "lenis";
// import AnimatedVideo from "../animation/animated-video/AnimatedVideo";

// // pass dynamic titles object images array 
// const ScrollParallax = ({images, titles }) => {
//   const { title1, title2, title3 } = titles || {};
//   const { parallaxOneBgImages,parallaxTwoBgImages,parallaxThreeBgImages } = images || {};
//   const { isMenuOpen } = useGlobalContext();
   


//   return (
//     <section>
//       <div className="relative">
//         <div
//           className={` transition-all  h-screen -mt-24 duration-1000 section text-8xl overflow-hidden sticky top-0`}
//         >
//           {/* <AnimatedVideo /> */}
//           <ParallaxContents
//             images={parallaxOneBgImages}
//             title={title1 || "Luxury & Vintage Cigars"}
//             page={0}
//             />
//         </div>
//         <div className="section smooth-transition text-8xl  h-screen overflow-hidden sticky top-0">
//           <ParallaxContents
//             images={parallaxTwoBgImages}
//             title={title2 || "Luxury & Vintage Spirits"}
//             page={1}
//             />
//         </div>
//         <div className="section smooth-transition text-8xl  h-screen overflow-hidden sticky top-0">
//           <ParallaxContents
//             images={parallaxThreeBgImages}
//             title={title3 || "luxury & accessories"}
//             page={2}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollParallax;









"use client";

import React from "react";
import ParallaxContents from "./ParallaxContents";
import useGlobalContext from "@/hooks/useGlobalContext";


// Pass dynamic titles object and images array
const ScrollParallax = ({ images, titles }) => {
  const { title1, title2, title3 } = titles || {};
  const { parallaxOneBgImages, parallaxTwoBgImages, parallaxThreeBgImages } = images || {};

  const parallaxSections = [
    { images: parallaxOneBgImages, title: title1 || "Luxury & Vintage Cigars", page: 0, className: '-mt-24' },
    { images: parallaxTwoBgImages, title: title2 || "Luxury & Vintage Spirits", page: 1 },
    { images: parallaxThreeBgImages, title: title3 || "Luxury & Accessories", page: 2 },
  ];

  return (
    <section>
      <div className="relative max-w-[1920px]">
        {parallaxSections.map((section, index) => (
          <div
            key={index}
            className={` 
              ${section?.className}
              section text-8xl h-screen overflow-hidden sticky top-0 transition-all duration-1000`}
          >
            <ParallaxContents
              images={section.images}
              title={section.title}
              page={section.page}
            />
          </div>
        ))}
        <Pagination />
      </div>
    </section>
  );
};

export default React.memo(ScrollParallax);


const Pagination = () => {
  const { isMenuOpen } = useGlobalContext();

  return (
    // if menu open hide parallax pagination dot
    <div
      className={`${
        isMenuOpen ? "invisible opacity-0" : "visible opacity-100"
      } smooth-transition absolute top-32 left-[2%] z-50 space-y-6`}
    >
      <div className="size-6 flex justify-center items-center rounded-full p-2">
        <span className="pagination-dot smooth-transition p-[4px] relative bg-[white] rounded-full"></span>
      </div>
      <div className="size-6 flex justify-center items-center rounded-full p-2">
        <span className="pagination-dot smooth-transition p-[4px] relative bg-[white] rounded-full"></span>
      </div>
      <div className="size-6 flex justify-center items-center rounded-full p-2">
        <span className="pagination-dot smooth-transition p-[4px] relative bg-[white] rounded-full"></span>
      </div>
    </div>
  );
};
