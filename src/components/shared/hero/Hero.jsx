// "use client";
// import Image from "next/image";
// import img1 from "@/assets/img/heritage/world-of-acc/img1.png";
// import SlideImage from "./SlideImage";
// import Container from "../container/Container";
// import { motion } from "framer-motion";

// const HeroSection = ({ imagesArray = [], title, description, noOverlay }) => {
//   // demo array
//   const images = imagesArray;

//   return (
//     <div className="-mt-44 h-[125vh] overflow-hidden !w-[32]">

//       {/* stacking image from images gallery and slide with index */}
//       {/* if array given animate images in bg */}
//       {images.length !== 0 ? (
//         images.map((img, index) => (
//           <SlideImage key={index} images={images} loopIndex={index} />
//         ))
//       ) : (
//         // else single img be displayed
//         <Image
//           src={img1}
//           className={` top-0 left h-full w-full object-cover
//        transition-all duration-1000 mix `}
//           alt="hero section"
//         />
//       )}

//       {/* Overlay div for styling */}
//       {noOverlay ? (
//         ""
//       ) : (
//         <div
//           className="absolute inset-0  bg-[#00000086] mix-blend-darken
//         transition-all duration-1000 ease-in "
//         ></div>
//       )}

//       {/* Hero title & desc */}
//       <motion.div
//         initial={{ opacity: 0.4 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0 top-1/2 text-white uppercase text-center">
//           <h1 className="text-4xl lg:text-6xl uppercase">{title}</h1>
//           <p
//             style={{ letterSpacing: 12 }}
//             className="text-white font-riviera text-[10px] md:text-[17px] lg:text-lg font-thin pt-4"
//           >
//             {description}
//           </p>
//         </div>
//       </motion.div>
//     </div>

//   );
// };

// export default HeroSection;

"use client";
import Image from "next/image";
import img1 from "@/assets/img/heritage/world-of-acc/img1.png";
import SlideImage from "./SlideImage";
import SlideInText from "../animation/SlideInText/slideInText";

const HeroSection = ({ imagesArray = [], title, description, noOverlay }) => {
  // demo array
  const images = imagesArray;

  return (
    <div className=" !h-[100vh] overflow-hidden">
      {/* stacking image from images gallery and slide with index */}
      {/* if array given animate images in bg */}
      {images.length !== 0 ? (
        images.map((img, index) => (
          <SlideImage key={index} images={images} loopIndex={index} />
        ))
      ) : (
        // else single img be displayed
        <Image
          src={img1}
          className={` h-full w-[80] object-cover
       transition-all duration-1000 mix `}
          alt="hero section"
        />
      )}

      {/* Overlay div for styling */}
      {noOverlay ? (
        ""
      ) : (
        <div
          className="absolute inset-0  bg-[#00000086] mix-blend-darken
        transition-all duration-1000 ease-in "
        ></div>
      )}

      {/* Hero title & desc */}
      <div className="absolute inset-0 top-1/2 text-white uppercase text-center">
        <h1
          className="text-3xl
         md:text-4xl lg:text-5xl text-white font-riviera tracking-[3.84px] font-normal "
        >
          <SlideInText text={title} />
        </h1>
        <p
          style={{ letterSpacing: 12 }}
          className="text-white font-riviera text-[10px] md:text-[17px] lg:text-lg font-thin pt-4"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

// sakhil vai container class
// className={`
//    ${isMenuOpen ? "md:-mt-80 -mt-[700px]" : "-mt-[150px] md:-mt-44"}
//    relative h-screen
//     !w-full grid justify-center items-center
//     !-ml-1
//     transition-all duration-1000
//     `}
