"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/shared/button/Button";
import CommonSlider from "./CommonSlider";

import product1 from "@/assets/img/home/flagship/flagship1.png";
import product2 from "@/assets/img/home/flagship/flagship2.png";
import product3 from "@/assets/img/home/flagship/flagship3.png";
import product4 from "@/assets/img/home/flagship/flagship4.png";
import product5 from "@/assets/img/home/flagship/flagship5.png";
import product6 from "@/assets/img/home/flagship/flagship6.png";
import product7 from "@/assets/img/home/flagship/flagship7.png";
import product8 from "@/assets/img/home/flagship/flagship8.png";
import SliderAction from "./SliderAction";
import Container from "@/components/shared/container/Container";
import { ButtonRightArrow } from "@/components/icons/Icons";

const FlagshipProducts = () => {
  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
  ];
  return (
    <div className="bg-[#222222]  py-10 ">
      <div className="mx-auto px-4 sm:mx-6 md:ml-10 lg:ml-28 2xl:ml-32 grid grid-cols-1 lg:grid-cols-5 place-self-center lg:gap-12 pr-0 mr-0">
        <div className="md:col-span-2 mb-10 md:mb-0 self-center">
          <FlagshipProductsLeft />
        </div>
        <div className="md:col-span-3 ">
          <FlagshipProductsRight products={products} />
        </div>
      </div>
    </div>
  );
};

export default FlagshipProducts;

const FlagshipProductsLeft = () => {
  
  return (
    <div className=" w-full lg:text-left text-center my-10">
      <h4 className="text-[30px] md:text-[40px] mb-10 lg:mb-20 text-light-text tracking-[8px] font-cailyne uppercase">
        Explore ACC
        <span className="font-castoroTitling font-bold italic">&#39;</span>s
        Flagship products
      </h4>

      <button className=" flex items-center justify-center gap-3 group hover:bg-light-text hover:text-deep-gold transition duration-300 px-20 py-4 rounded-full text-base font-medium w-full border">
        <span className="transition duration-300  text-transparent bg-clip-text bg-gradient-to-r from-pale-gold via-rich-gold to-deep-gold hover:text-deep-gold ">
          Discover now
        </span>
        <ButtonRightArrow />
      </button>
    </div>
  );
};
// border: 1px solid;

// border-image-source: linear-gradient(90deg, #F9F295 -6.63%, #E0AA3E 27.32%, #FAF398 71.21%, #B88A44 96.3%);

const FlagshipProductsRight = ({ products }) => {
  const [swiperState, setSwiperState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  return (
    <div className="relative ">
      <CommonSlider
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={Math.ceil(products.length / 4)}
        sliderId="flagship"
        className="FlagshipSlider"
        freeMode={true}
        grabCursor={true}
        setSwiperState={setSwiperState}
      >
        {products.map((product, index) => (
          <SlideItem key={index} product={product} />
        ))}
      </CommonSlider>
      {/* slider control */}
      <SliderAction
        sliderId="flagship"
        isBeginning={swiperState.isBeginning}
        isEnd={swiperState.isEnd}
      />
    </div>
  );
};

const SlideItem = ({ product }) => {
  return (
    <div className="">
      <Image
        src={product}
        className="object-cover h-[260px] w-full"
        width={240}
        height={300}
        alt="product image"
      />
      <div className="md:mx-0 mx-4">
        <h5 className="text-base text-light-text font-semibold mt-4">
          Vintage Cigar
        </h5>
        <p className="text-[#999999] text-xs mt-3">
          Elevate your evenings with the perfect pairing of our curated cigars
        </p>
      </div>
    </div>
  );
};
