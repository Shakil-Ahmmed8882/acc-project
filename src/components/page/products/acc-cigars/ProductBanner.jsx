import cigar from "@/assets/img/products/product-banner/cigar.webp";
import spirits from "@/assets/img/products/product-banner/spirits.webp";
import accessories from "@/assets/img/products/product-banner/accessories.jpg";
import storage from "@/assets/img/products/product-banner/storage.webp";

import Image from "next/image";
const ProductBanner = ({ title }) => {

 // Determine which image to use
 // based on the title prop
 let imageUrl;
 switch (title) {
   case "cigar":
     imageUrl = cigar;
     break;
   case "spirits":
     imageUrl = spirits;
     break;
   case "accessories":
     imageUrl = accessories;
     break;
   case "storage":
     imageUrl = storage;
     break;
   default:
     imageUrl = storage; 
     break;
 }


  return (
    <div className="relative h-screen overflow-hidden">
      <Image
        src={imageUrl}
        width={1500}
        height={1240}
        className="h-full w-full object-cover relative"
        alt="bannerI"
      />
      <div className="bg-[#00000099] h-screen absolute inset-0"></div>
      <div className="absolute  top-2/4 inset-0 text-white uppercase text-center">
        <h1 className="text-4xl lg:text-6xl uppercase font-riviera">
          ACC {title}
        </h1>
        <p
          style={{ letterSpacing: 12 }}
          className="text-white font-riviera text-[10px] md:text-[17px] lg:text-xl font-thin pt-4"
        >
          Collection
        </p>
      </div>
      <VerticalAnimatedProgressbar />
    </div>
  );
};

export default ProductBanner;
const VerticalAnimatedProgressbar = ({ className }) => {
  return (
    <div className="absolute inset-x-0 hidden md:block md:bottom-20">
      <div
        className={` ${className} w-[2px] bg-[#8d8d8d] left-1/2  relative z-40 `}
      >
        <div
          className={`w-[2px] top-0 bg-[#d1d1d1]  max-h-[120px] animate-progress absolute !z-50 `}
        ></div>
      </div>
    </div>
  );
};
