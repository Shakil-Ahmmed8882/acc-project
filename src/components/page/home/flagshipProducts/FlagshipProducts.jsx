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
    <div className="bg-[#1C1C1C]  py-10">
      <Container className=" grid grid-cols-1 lg:grid-cols-5 place-self-center  lg:gap-10">
        <div className="md:col-span-2 mb-10 md:mb-0 self-center">
          <FlagshipProductsLeft />
        </div>
        <div className="md:col-span-3 ">
          <FlagshipProductsRight products={products} />
        </div>
      </Container>
    </div>
  );
};

export default FlagshipProducts;

const FlagshipProductsLeft = () => {
  return (
    <div className=" w-full lg:text-left text-center my-10">
      <h4 className="text-[30px] md:text-[40px] mb-10 lg:mb-20 text-light-white-clr tracking-[8px] font-cailyne uppercase">
        Explore ACC&#39;s Flagship products
      </h4>

      <Button size="eLarge">Discover now</Button>
    </div>
  );
};

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
