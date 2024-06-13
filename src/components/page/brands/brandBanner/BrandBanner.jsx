import heroImag from "@/assets/img/products/acc-cigars/hero.png";
import Image from "next/image";
import Tabs from "../Tabs";
const BrandBanner = ({ title ,image,id,className }) => {
  return (
    <div id={id} className={`${className} max-h-[1020px] relative overflow-hidden ` }>
      <div className="relative">
        <Image
          src={image}
          width={1920}
          height={1024}
          className=" object-cover relative"
          alt="bannerI"
        />
        {/* <VerticalAnimatedProgressbar /> */}
      </div>
      <div className="bg-[#00000099]  h-[800px] absolute inset-0"></div>
      <div className="absolute   top-1/2 z-50 inset-0 text-white max-w-[930px] mx-auto text-center">
        <h1 className="text-4xl lg:text-8xl font-normal uppercase font-cailyne -tracking-tighter">
          {title}
        </h1>
        <p className="text-white font-riviera text-[10px] md:text-[17px] lg:text-xl font-medium pt-4">
          Crafted with the utmost care and expertise, each cigar in our
          collection offers a unique blend of flavors and aromas, perfect for
          aficionados.
        </p>

      {/* <Tabs/> */}
        <button className="group text-[#8C4C24] mt-12 bg-pale-gold hover:bg-[#F6DF65] transition-all delay-150 py-4 px-20 rounded-full border">
          <span className=" flex hover:gap-4 items-center gap-2">
            DISCOVER NOW
            <ButtonRightArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BrandBanner;
const VerticalAnimatedProgressbar = ({ className }) => {
  return (
    <div className="absolute inset-x-0  bottom-20">
      <div
        className={` ${className} w-[2px] bg-[#8d8d8d] left-1/2  relative z-40 `}
      >
        <div
          className={`w-[2px] bottom-0 bg-[#d1d1d1]  max-h-[120px] animate-progress absolute !z-50 `}
        ></div>
      </div>
    </div>
  );
};


const ButtonRightArrow = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=" hover:block  top-0 left-0 transition-all duration-1000"
  >
    <path
      d="M15.6716 7.00005L11.0147 2.34314C10.6242 1.95262 10.6242 1.31946 11.0147 0.928941C11.4052 0.538417 12.0384 0.538416 12.4289 0.92894L19.5 8.00005L12.4289 15.0711C12.0384 15.4616 11.4052 15.4616 11.0147 15.0711C10.6242 14.6805 10.6242 14.0474 11.0147 13.6569L15.6716 9.00005H1.5C0.947715 9.00005 0.5 8.55234 0.5 8.00005C0.5 7.44777 0.947715 7.00005 1.5 7.00005H15.6716Z"
      fill="url(#paint0_linear_17_451)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_17_451"
        x1="10"
        y1="-9.82076"
        x2="10"
        y2="15.3639"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD700" />
        <stop offset="1" stopColor="#AC7C00" />
      </linearGradient>
    </defs>
  </svg>
);