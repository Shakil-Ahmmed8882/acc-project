"use client";

import { useState } from "react";
import Image from "next/image";
import CommonSlider from "./CommonSlider";
import SliderAction from "./SliderAction";
import Button from "./Button";
import Link from "next/link";
import { useBestSellerProducts } from "@/utils";
import Loader from "@/components/shared/loader/Loader";

const FlagshipProducts = () => {
  const { bestSellerProducts, loading, error } = useBestSellerProducts();

  if (loading) return (
    <div className="relative">
      <Loader />
    </div>
  );
  if (error) return <p>Error loading best seller products: {error.message}</p>;

  return (
    <div className="bg-[#222222] py-6 lg:py-24">
      <div className="mx-auto px-4 sm:mx-6 md:ml-10 lg:ml-28 2xl:ml-32 grid grid-cols-1 lg:grid-cols-5 place-self-center lg:gap-12 pr-0 mr-0">
        <div className="md:col-span-2 mb-16 md:mb-0 self-center">
          <FlagshipProductsLeft />
        </div>
        <div className="md:col-span-3">
          <FlagshipProductsRight products={bestSellerProducts} />
        </div>
      </div>
    </div>
  );
};

export default FlagshipProducts;

const FlagshipProductsLeft = () => {
  return (
    <div className="w-full lg:text-left text-center my-10">
      <h4 className="text-[30px] md:text-[40px] mb-10 lg:mb-20 text-light-text tracking-[8px] font-cailyne uppercase">
        Explore ACC
        <span className="font-castoroTitling font-bold italic">&#39;</span>s
        Flagship products
      </h4>
      <Link href={"brands"}>
        <Button className="!z-50 !w-[80%] whitespace-nowrap" size="eLarge">
          Discover now
        </Button>
      </Link>
    </div>
  );
};

const rearrangeProducts = (products) => {
  // Step 1: Group products by productType
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.productType]) {
      acc[product.productType] = [];
    }
    acc[product.productType].push(product);
    return acc;
  }, {});

  // Step 2: Extract product types and prepare for iteration
  const productTypes = Object.keys(groupedProducts);
  const maxLength = Math.max(
    ...productTypes.map((type) => groupedProducts[type].length)
  );
  const rearrangedProducts = [];

  // Step 3: Collect products in the desired order
  for (let i = 0; i < maxLength; i++) {
    for (const type of productTypes) {
      if (groupedProducts[type][i]) {
        rearrangedProducts.push(groupedProducts[type][i]);
      }
    }
  }

  return rearrangedProducts;
};

const FlagshipProductsRight = ({ products }) => {
  const [swiperState, setSwiperState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  // Rearrange products
  const rearrangedProducts = rearrangeProducts(products);

  return (
    <div className="relative">
      <CommonSlider
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={Math.ceil(rearrangedProducts.length / 4)}
        sliderId="flagship"
        className="FlagshipSlider"
        freeMode={true}
        grabCursor={true}
        setSwiperState={setSwiperState}
      >
        {rearrangedProducts.map((product) => (
          <SlideItem key={product._id} product={product} />
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
    <Link href={`/product/cigar/${product._id}`}>
      <Image
        src={product.images[0]}
        className="object-cover h-[260px] w-full"
        width={240}
        height={300}
        alt={product.images[0]}
      />
      <div className="md:mx-0 mx-4">
        <h5 className="text-base text-light-text font-semibold mt-4 uppercase">
          {product.productType}
        </h5>
        <p className="text-[#999999] text-xs mt-3">{product.name}</p>
      </div>
    </Link>
  );
};
