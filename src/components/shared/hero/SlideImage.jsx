import useImageSlideshow from "@/hooks/interval/useImageSliderShow";
import Image from "next/image";

const SlideImage = ({images, loopIndex}) => {
  const { index } = useImageSlideshow(images, 3000);


  return (
    <Image
      key={loopIndex}
      src={images[loopIndex]}
      className={` top-0 ${
        loopIndex == index ? `opacity-100` : "invisible opacity-0"
      } left-0  h-full w-full object-cover transition-all duration-1000`}
      alt="hero section"
    />
  );
};

export default SlideImage;
