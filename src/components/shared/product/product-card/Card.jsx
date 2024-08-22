// components/Card.js

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ card }) => {
  const { _id, images, name } = card || {};
  return (
    <div
      className="justify-self-center
     w-full  rounded-md text-center
    cursor-pointer text-white"
    >
      <div
        className="
      relative h-[300px] lg:h-[400px] mt-11 sm:mt-0 md:h-[450px] 
      w-full group "
      >
        <Image
          src={images[0]}
          alt={name}
          // layout="fill"
          // priority
          width={1000}
          height={1000}
          objectFit="cover"
          className=" object-cover object-top md:object-center rounded-md inset-0  mx-auto
             transition-transform duration-300 ease-in
          group-hover:scale-105"
        />
        <div
          className="absolute inset-0 
        rounded-lg mix-blend-overlay transition-all
        duration-300 ease-in "
        ></div>
      </div>
      <h3
        style={{ letterSpacing: 2 }}
        className="mt-9 md:mt-6
      uppercase text-lg"
      >
        {name}
      </h3>
      <Link
        href={`/product/cigar/${_id}`}
        className="px-9 py-1 md:px-12 text-sm md:py-2 
      hover:bg-white smooth-transition 
      hover:no-underline mt-4 mb-3 rounded-full 
      inline-block text-yellow-500 "
      >
        LEARN MORE
      </Link>{" "}
    </div>
  );
};

export default ProductCard;
