import Image from "next/image";
import Button from "@/components/shared/button/Button";
import { useEffect, useState } from "react";
import VerticalAnimatedProgressbar from "../animation/animated-video/VerticalAnimatedProgressbar";
import useGlobalContext from "@/hooks/useGlobalContext";
import useImageSlideshow from "@/hooks/interval/useImageSliderShow";

const ParallaxContents = ({ title, page, images }) => {
  const { activeSectionIndex } = useGlobalContext();
  const [opacity, setOpacity] = useState(1);

  // Get infinite loop animated index based on image length on specified duration
  const { index } = useImageSlideshow(images, 5000);

  // Update opacity smoothly when the active section changes
  useEffect(() => {
    if (activeSectionIndex !== page) {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
  }, [activeSectionIndex, page]);

  return (
    <>
      <div className="absolute inset-0 bg-[#0c050556] w-full h-full z-40"></div>
      {images?.map((img, i) => (
        <Image
          key={i}
          placeholder="blur"
          quality={100}
          priority
          className={`absolute inset-0 w-full h-full object-cover z-30 filter transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          src={img}
          alt="HOME | hero parallax images"
        />
      ))}
      <div
        className={`${
          activeSectionIndex === page ? "visible" : "invisible opacity-0"
        } smooth-transition absolute inset-0 flex flex-col justify-center items-center text-white`}
        style={{ zIndex: 9999999, opacity }}
      >
        <TitleComponent title={title} />
        <Button className="relative mt-9 md:mt-11 !z-50" size="eLarge">Discover now</Button>
      </div>
      <VerticalAnimatedProgressbar className="-bottom-[85vh]" />
    </>
  );
};

export default ParallaxContents;

const TitleComponent = ({ title }) => {
  // Replace & with a span that has the custom font class
  const formattedTitle = title.replace(/&/g, '<span class="font-castoroTitling">&</span>');

  return (
    <h1
      style={{ lineHeight: 1.4 }}
      className="font-cailyne uppercase text-center text-3xl px-8 sm:text-4xl md:text-5xl relative font-normal tracking-[11px] !z-50"
      dangerouslySetInnerHTML={{ __html: formattedTitle }}
    />
  );
};