import heroImag from "@/assets/img/products/acc-cigars/hero.png";
import Image from "next/image";
const ProductBanner = ({ title }) => {
  return (
    <div className="-mt-[320px] relative ">
      <Image
        src={heroImag}
        width={1500}
        height={1240}
        className="max-h-[800px] object-cover relative"
        alt="bannerI"
      />
      <div className="bg-[#00000099] h-[800px] absolute inset-0"></div>
      <div className="absolute  top-1/2 inset-0 text-white uppercase text-center">
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
    <div className="absolute inset-x-0  bottom-20">
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
