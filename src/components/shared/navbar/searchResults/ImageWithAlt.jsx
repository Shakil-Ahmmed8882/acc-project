// components/ImageWithAlt.js

import Image from "next/image";

const ImageWithAlt = ({ src, width, height, alt, className }) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default ImageWithAlt;
