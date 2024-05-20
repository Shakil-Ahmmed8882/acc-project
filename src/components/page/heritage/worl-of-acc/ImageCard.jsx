

//// This file defines the ImageCard component, a reusable 
//component for displaying an image within a styled, responsive grid container.



import Image from 'next/image';

const ImageCard = ({ src, alt, additionalClasses }) => (
  <div className={`rounded-lg text-center ${additionalClasses}`}>
    <Image className="w-full object-top object-cover" src={src} alt={alt} />
  </div>
);

export default ImageCard;
