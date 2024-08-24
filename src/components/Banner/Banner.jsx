import Image from "next/image";
const Banner = ({ title, imageUrl }) => {
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
        <h1 className="text-4xl lg:text-7xl uppercase font-riviera">{title}</h1>
      </div>
      <VerticalAnimatedProgressbar />
    </div>
  );
};

export default Banner;
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
