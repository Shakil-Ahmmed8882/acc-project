import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import VerticalAnimatedProgressbar from "../animation/animated-video/VerticalAnimatedProgressbar";
import useGlobalContext from "@/hooks/useGlobalContext";
import useImageSlideshow from "@/hooks/interval/useImageSliderShow";

// pass dynamic titles object images array 
const ParallaxContents = ({ title, page, images }) => {
  const { activeSectionIndex } = useGlobalContext();
  const [opacity, setOpacity] = useState(1);

  // get inifinite loop animated index based 
  //on image leng on specified duration
  const { index } = useImageSlideshow(images, 4000);

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
      <div className="absolute inset-0 bg-[#0c050570] w-full h-full z-40"></div>
      {images.map((imageUrl, i) => (
        <Image
          key={imageUrl}
          placeholder="blur"
          quality={100}
          priority
          className={`
            absolute inset-0 w-full h-full object-cover z-30 filter opacity-${i === index && activeSectionIndex === page ? '100' : '0'} transition-opacity duration-1000 `}
          src={imageUrl}
          alt="HOME | hero parallax images"
        />
      ))}
      <div
        className={`${
          activeSectionIndex === page ? "visible" : "invisible opacity-0"
        } smooth-transition absolute inset-0 flex flex-col justify-center items-center text-white z-40`}
        style={{ opacity }}
      >
        <TitleComponent title={title} />
        <Button />
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
      style={{lineHeight:1.4}}
      className="font-cailyne uppercase text-center text-3xl px-8 sm:text-4xl 
      md:text-5xl relative font-normal tracking-[11px] z-50"
      dangerouslySetInnerHTML={{ __html: formattedTitle }}
    />
  );
};