// components/Card.js

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ card }) => {
  const { _id, images, name } = card || {};
  return (
    <Link
      href={`/product/cigar/${_id}`}
      className="justify-self-center
     w-full  rounded-md text-center
    cursor-pointer text-white"
    >
      <div
        className="
      relative mt-11 sm:mt-0  
      w-full group "
      >
        <Image
          src={images[0]}
          alt={name}
          width={1000}
          height={1000}
          className="rounded-md inset-0 mx-auto
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
    </Link>
  );
};

export default ProductCard;
