import Image from "next/image";
import Button from "./Button";
import VerticalAnimatedProgressbar from "../animation/animated-video/VerticalAnimatedProgressbar";

import parallaxImg1 from "@/assets/img/home/parallax/parallax1.png";
import parallaxImg2 from "@/assets/img/home/parallax/parallax2.png";
import parallaxImg3 from "@/assets/img/home/parallax/parallax3.png";
import useImageSlideshow from "@/hooks/interval/useImageSliderShow";
import useGlobalContext from "@/hooks/useGlobalContext";

const ParallaxContents = ({ title,page }) => {
  const images = [parallaxImg1, parallaxImg2, parallaxImg3];
  const { index } = useImageSlideshow(images, 3000);
  const {activeSectionIndex} = useGlobalContext()

  return (
    <>
      <div className="absolute inset-0 bg-[#0c050570] w-full h-full z-40"></div>
      {images.map((img, idx) => (
        <Image
          key={idx}
          className={`
            absolute inset-0 w-full h-full object-cover z-30 filter
            ${index === idx ? 'opacity-100' : 'opacity-0'}
            ${index === idx ? 'transition-all  duration-1000 ease-in-out' : ''}
          `}
          src={img}
          alt="HOME | hero parallax images"
        />
      ))}
      <div className={`${ activeSectionIndex === page? ' visible':'invisible opacity-0'} smooth-transition absolute inset-0 flex flex-col justify-center items-center text-white z-40`}>
        <h1 className="font-cailyne text-3xl md:text-4xl lg:text-5xl relative z-50">
          {title}
        </h1>
        <Button />
      </div>

      <VerticalAnimatedProgressbar className="-bottom-[85vh]" />
    </>
  );
};

export default ParallaxContents;