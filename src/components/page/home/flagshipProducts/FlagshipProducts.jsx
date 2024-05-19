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

const FlagshipProducts = () => {
  const products = [product1, product2, product3, product4, product5];

  return (
    <div className="bg-[#1C1C1C] py-10">
      <div className="ml-[180px] grid grid-cols-1 lg:grid-cols-3 lg:gap-16">
        <div className="col-span-1">
          <FlagshipProductsLeft />
        </div>
        <div className="col-span-2">
          <FlagshipProductsRight />
        </div>
      </div>
    </div>
  );
};

export default FlagshipProducts;

const FlagshipProductsLeft = () => {
  return (

      <div className="max-w-lg w-full mt-[74px]">
        <SectionTitle
          className="text-[40px] font-normal uppercase"
          title="Explore ACC's Flagship Products"
        />
        <Button variant="primary" size="lg">
          DISCOVER
        </Button>
      </div>
  );
};

const FlagshipProductsRight = () => {
  const slideItems = Array.from({ length: 180 });
  return (
    <CommonSlider
      slidesPerView={4}
      slidesPerGroup={Math.ceil(slideItems.length / 4)}
      className="FlagshipSlider"
      freeMode={true}
    >
      {slideItems.map((_, index) => (
        <SlideItem key={index} index={index} />
      ))}
    </CommonSlider>
  );
};

const SlideItem = ({ index }) => {
  return (
    <div className="max-w-60">
      <Image
        src={`https://source.unsplash.com/random/${index}`}
        className="object-cover h-[260px] w-[240px]"
        width={240}
        height={300}
        alt="product image"
      />
      <div>
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
