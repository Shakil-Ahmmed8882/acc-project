"use client";

import product1 from "@/assets/img/products/product2.png";
import product2 from "@/assets/img/products/product2.png";
import product3 from "@/assets/img/products/product3.png";
import product4 from "@/assets/img/products/product4.png";
import product5 from "@/assets/img/products/product4.png";
import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import Button from "@/components/shared/button/Button";
import ProductSlider from "./ProductSlider";
import Container from "@/components/shared/container/Container";

const FlagshipProducts = () => {
  const slides = [product1, product2, product3, product4, product5];


  return (
<div className=" bg-black py-40">

      <div className="ml-[180px] flex justify-between gap-16">
        <div className="max-w-lg w-full mt-[74px]">
          <SectionTitle
            className="text-[40px] font-normal uppercase"
            title="Explore ACc's Flagship products"
          />
          <Button variant="primary" size="lg">
            DISCOVER
          </Button>
        </div>
<div></div>
        <ProductSlider />
      </div>
</div>
  );
};

export default FlagshipProducts;

