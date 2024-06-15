// "use client";

// import React from "react";
// import ParallaxContents from "./ParallaxContents";
// import useGlobalContext from "@/hooks/useGlobalContext";
// import useScrollObserver from "@/hooks/useScrollObserver";


// // Pass dynamic titles object and images array
// const ScrollParallax = ({ images, titles }) => {
//   const { title1, title2, title3 } = titles || {};
//   const { parallaxOneBgImages, parallaxTwoBgImages, parallaxThreeBgImages } =
//     images || {};

//   return (
//     <section className="max-w-[1920px] flex flex-col">
//       <div className="relative">
//         {/* parallax 1 */}
//         <div
//           className={` 
//               -mt-24 h-[120vh]
//               section text-8xl  overflow-hidden sticky top-0 transition-all duration-1000`}
//         >
//           <ParallaxContents
//             images={parallaxOneBgImages}
//             title={title1 || "Luxury & Vintage Cigars"}
//             page={0}
//           />
//         </div>

//         {/* parallax 2 */}
//         <div
//           className={` 
//               mt-24 
//               section text-8xl h-screen overflow-hidden sticky top-0 transition-all duration-1000`}
//         >
//           <ParallaxContents
//             images={parallaxTwoBgImages}
//             title={title2 || "Luxury & Vintage Spirits"}
//             page={0}
//           />
//         </div>
//         {/* parallax 3 */}
//         <div
//           className={` 
              
//               section text-8xl h-screen overflow-hidden sticky top-0 transition-all duration-1000`}
//         >
//           <ParallaxContents
//             images={parallaxThreeBgImages}
//             title={title3 || "Luxury & Accessories"}
//             page={0}
//           />
//         </div>
//         <Pagination />
//       </div>
//     </section>
//   );
// };

// export default React.memo(ScrollParallax);

// const Pagination = () => {
//   const { isMenuOpen } = useGlobalContext();
//   useScrollObserver();

//   return (
//     <div
//       className={`${
//         isMenuOpen ? "invisible opacity-0" : "visible opacity-100"
//       } smooth-transition fixed top-1/2 left-[10%] right-0 topStack`}
//       style={{ transform: "translateY(-50%)",zIndex:9999}}
//     >
//       <div
//       className="max-w-[1920px] mx-auto flex justify-start">
//         <div className="space-y-6">
//           {/* 3 pagination dots */}
//           {[0, 2, 3].map((dot) => (
//             <div
//               key={dot}
//               className="pagination-container size-5  flex justify-center items-center rounded-full p-2 outline-[2px]"
//             >
//               <span className="pagination-dot smooth-transition  p-[5px] relative bg-[white] rounded-full"></span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };




"use client";

import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import ParallaxContents from "./ParallaxContents";
import useGlobalContext from "@/hooks/useGlobalContext";
import useScrollObserver from "@/hooks/useScrollObserver";

const ScrollParallax = ({ images, titles }) => {
  const { title1, title2, title3 } = titles || {};
  const { parallaxOneBgImages, parallaxTwoBgImages, parallaxThreeBgImages } =
    images || {};
  
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <main ref={scrollRef} className="relative max-w-[1920px]">
      <div className="relative">
        {/* parallax 1 */}
        <div
          className={` 
              -mt-24 h-[120vh]
              section text-8xl overflow-hidden sticky top-0 transition-all duration-1000`}
        >
          <ParallaxContents
            images={parallaxOneBgImages}
            title={title1 || "Luxury & Vintage Cigars"}
            page={0}
          />
        </div>

        {/* parallax 2 */}
        <div
          className={` 
              mt-24 
              section text-8xl h-screen overflow-hidden sticky top-0 transition-all duration-1000`}
        >
          <ParallaxContents
            images={parallaxTwoBgImages}
            title={title2 || "Luxury & Vintage Spirits"}
            page={0}
          />
        </div>
        {/* parallax 3 */}
        <div
          className={` 
              section text-8xl h-screen overflow-hidden sticky top-0 transition-all duration-1000`}
        >
          <ParallaxContents
            images={parallaxThreeBgImages}
            title={title3 || "Luxury & Accessories"}
            page={0}
          />
        </div>
        <Pagination />
      </div>
    </main>
  );
};

export default React.memo(ScrollParallax);

const Pagination = () => {
  const { isMenuOpen } = useGlobalContext();
  useScrollObserver();

  return (
    <div
      className={`${
        isMenuOpen ? "invisible opacity-0" : "visible opacity-100"
      } smooth-transition fixed top-1/2 left-[10%] right-0`}
      style={{ transform: "translateY(-50%)", zIndex: 9999 }}
    >
      <div className="max-w-[1920px] mx-auto flex justify-start">
        <div className="space-y-6">
          {/* 3 pagination dots */}
          {[0, 2, 3].map((dot) => (
            <div
              key={dot}
              className="pagination-container size-5 flex justify-center items-center rounded-full p-2 outline-[2px]"
            >
              <span className="pagination-dot smooth-transition p-[5px] relative bg-[white] rounded-full"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
