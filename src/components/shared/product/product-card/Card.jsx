// components/Card.js

import Image from 'next/image';
import Link from 'next/link';

const Card = ({ card }) => {
  const { imageSrc, title, buttonText, path } = card || {};
  return (
    <div className="relative justify-self-center w-full lg:w-72 rounded-md text-center cursor-pointer text-white">
      <div className="relative  h-80 md:h-72 lg:h-72 w-full overflow-hidden  group">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute rounded-sm top-0 left-0 w-full h-full object-cover  transition-transform duration-300 ease-in group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#1611048c]  rounded-lg mix-blend-overlay transition-all duration-300 ease-in "></div>
      </div>
      <h3 className="mt-9 md:mt-6 font-thin text-lg">{title}</h3>
      <Link href={path} className='px-9 py-1 md:px-12 text-sm md:py-2 hover:bg-white smooth-transition 
      hover:no-underline mt-4 mb-3 rounded-full inline-block text-yellow-500 '>
        {buttonText}
      </Link>
    </div>
  );
};

export default Card;
