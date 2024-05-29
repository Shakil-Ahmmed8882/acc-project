import Image from "next/image";

const Img= ({src}) => {
  return (
    <Image src={src} alt={""} className="w-full h-full object-cover transition-all duration-700" />
  );
};

export default Img; 