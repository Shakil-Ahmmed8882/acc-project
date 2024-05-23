"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import Button from "@/components/shared/button/Button";
import ProductSlider from "./ProductSlider";
import Container from "@/components/shared/container/Container";
import CommonSlider from "./CommonSlider";

import product1 from "@/assets/img/products/product2.png";
import product2 from "@/assets/img/products/product2.png";
import product3 from "@/assets/img/products/product3.png";
import product4 from "@/assets/img/products/product4.png";
import product5 from "@/assets/img/products/product4.png";
import SliderAction from "./SliderAction";

const FlagshipProducts = () => {
  const products = [product1, product2, product3, product4, product5];

  return (
    <div className="bg-[#1C1C1C] py-10">
      <div className="lg:ml-[180px] grid grid-cols-1 lg:grid-cols-5 place-self-center  lg:gap-16">
        <div className="md:col-span-2 mb-10 md:mb-0 self-center">
          <FlagshipProductsLeft />
        </div>
        <div className="md:col-span-3 max-w-[1140px]">
          <FlagshipProductsRight />
        </div>
      </div>
    </div>
  );
};

export default FlagshipProducts;

const FlagshipProductsLeft = () => {
  return (
    <div className=" w-full   lg:text-left text-center ">
      <h4 className="text-[30px]  md:text-[40px]  mb-10 md:mb-[96px]  text-light-white-clr tracking-[5px] font-cailyne italic font-ultralight ">
        Explore ACC&apos;s Flagship products
      </h4>

      <Button size="large">Discover now</Button>
    </div>
  );
};

const FlagshipProductsRight = () => {
  const [swiperState, setSwiperState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const slideItems = Array.from({ length: 16 });
  return (
    <div className="relative ">
      <CommonSlider
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={Math.ceil(slideItems.length / 4)}
        sliderId="flagship"
        className="FlagshipSlider"
        freeMode={true}
        setSwiperState={setSwiperState}
      >
        {slideItems.map((_, index) => (
          <SlideItem key={index} index={index} />
        ))}
      </CommonSlider>
      {/* slider control */}
      <SliderAction sliderId="flagship" isBeginning={swiperState.isBeginning} isEnd={swiperState.isEnd} />
    </div>
  );
};

const SlideItem = ({ index }) => {
  return (
    <div className="">
      <Image
        src={`https://source.unsplash.com/random/${index}`}
        className="object-cover h-[260px] w-full"
        width={240}
        height={300}
        alt="product image"
      />
      <div className="md:mx-0 mx-4">
        <h5 className="text-base text-light-white-clr font-semibold mt-4">
          Vintage Cigar
        </h5>
        <p className="text-[#999999] text-xs mt-3">
          Elevate your evenings with the perfect pairing of our curated cigars
        </p>
      </div>
    </div>
  );
};
