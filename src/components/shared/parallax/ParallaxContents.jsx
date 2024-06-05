import Image from "next/image";
import Button from "./Button";
import VerticalAnimatedProgressbar from "../animation/animated-video/VerticalAnimatedProgressbar";
import useGlobalContext from "@/hooks/useGlobalContext";

const ParallaxContents = ({ title, page, img }) => {
  const { activeSectionIndex } = useGlobalContext();

  return (
    <>
      <div className="absolute inset-0 bg-[#0c050570] w-full h-full z-40"></div>
      <Image
        className="absolute inset-0 w-full h-full object-cover z-30 filter opacity-100 transition-all duration-1000 ease-in-out"
        src={img}
        alt="HOME | hero parallax images"
      />
      <div
        className={`${
          activeSectionIndex === page ? "visible" : "invisible opacity-0"
        } smooth-transition absolute inset-0 flex flex-col justify-center items-center text-white z-40`}
      >
        <h1 className="font-cailyne uppercase text-3xl md:text-4xl lg:text-5xl relative z-50">
          {title}
        </h1>
        <Button />
      </div>
      <VerticalAnimatedProgressbar className="-bottom-[85vh]" />
    </>
  );
};

export default ParallaxContents;
