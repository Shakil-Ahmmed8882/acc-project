import Image from "next/image";
import Button from "./Button";

const ParallaxContents = ({ img, title}) => {
  return (
    <>
    
      <div className="absolute inset-0 bg-[#0c050570] w-full h-full z-40"></div>
      <Image
        className=" absolute w-full h-full object-cover z-30 filter"
        src={img}
        alt="HOME | hero parallax images"
      />
      <div  className=" absolute inset-0 flex flex-col justify-center items-center text-white  z-40">
        <h1 className=" text-[red] text-3xl md:text-4xl lg:text-5xl font-thin  relative z-40">{title}</h1>
        <Button/>
      </div>
    </>
  );
};

export default ParallaxContents;
