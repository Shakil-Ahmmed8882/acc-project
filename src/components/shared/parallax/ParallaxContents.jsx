import Image from "next/image";
import Button from "./Button";

const ParallaxContents = ({ img, title}) => {
  return (
    <>
      <div className="absolute inset-0 bg-[#0c0505a7] w-full h-full z-30"></div>
      <Image
        className="absolute w-full h-full object-cover z-20 filter brightness-"
        src={img}
        alt="HOME | hero parallax images "
      />
      <div className=" absolute inset-0 flex flex-col justify-center items-center text-white z-30">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-thin">{title}</h1>
        <Button />
      </div>
    </>
  );
};

export default ParallaxContents;
