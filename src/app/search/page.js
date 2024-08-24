"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import acclogo from "@/assets/img/shared/navbar/acc.png";
import searchicon from "@/assets/img/shared/navbar/searchicon.png";
import { useGetSearchedProducts } from "@/hooks/useGetSearchedProducts";

const navigationItems = [
  { path: "/product/cigar", label: "CIGAR" },
  { path: "/product/spirits", label: "SPIRITS" },
  { path: "/product/accessories", label: "ACCESSORIES" },
  { path: "/product/luxury-storage", label: "LUXURY STORAGE" },
];

const Search = () => {
  const params = useSearchParams();
  const type = params.get("type");
  const [trigger, setTrigger] = useState(type);
  const { products } = useGetSearchedProducts(trigger);

  // Create a ref for the input element
  const inputRef = useRef(null);

  // Focus the input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <section className="text-5xl text-white bg-[#111111] px-3 py-10 ">
      <div className="max-w-[1122px] mx-auto">
        <div className=" flex  items-center py-4 justify-between">
          <Link href={"/"}>
            <Image
              className="min-w-11 w-24 md:w-32 lg:w-32 transition-all duration-1000"
              src={acclogo}
              alt="logo"
            />
          </Link>
          <div className="gap-6 hidden md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                className="text-[13px] text-[#d4d3d3] hover:text-white transition-all duration-500"
                href={item.path}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <motion.section
          exit="exit"
          className="w-full rounded-lg py-8 overflow-y-auto"
        >
          <div className="bg-black flex items-center gap-1 pl-4 mt-10 md:mt-14">
            <Image
              src={searchicon}
              alt="product"
              className="opacity-80 w-4 sm:w-5 md:w-auto"
            />
            <input
              ref={inputRef} // Attach the ref to the input element
              onChange={(e) => setTrigger(e.target.value)}
              type="text"
              placeholder="Search here .."
              className="w-full bg-transparent focus-within:outline-none px-3 py-5 md:py-6 text-[18px] text-white p-2 border-none rounded"
            />
          </div>

          <div
            className={`mt-8 ${
              products?.length && "grid"
            }  sm:grid-cols-2 gap-8`}
          >
            {products?.length ? (
              products.map((product) => (
                <motion.div
                  key={product._id}
                  initial="hidden"
                  animate="visible"
                >
                  <Link href={`/product/cigar/${product?._id}`}>
                    <div className="flex py-6 items-start gap-4 pb-6 hover:bg-[#1a1919c5] transition-all duration-500 cursor-pointer">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          src={product.images[0]}
                          className="size-14 md:size-20 rounded-full"
                          alt={product.name}
                        />
                      </div>
                      <div>
                        <h2 className="font-bold text-[18px] sm:text-[20px] md:text-[23px] pb-3">
                          {product.name}
                        </h2>
                        <p className="text-[#c5c5c5] text-[14px] sm:text-[15px] md:text-[18px] pt-1">
                          {product?.productType}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="border-b border-[#3b3a3a]"></div>
                </motion.div>
              ))
            ) : (
              <div className="text-center w-full mt-16">
                <p className="text-xl text-[#c5c5c5]">
                  No products found. Please try searching with a different term.
                </p>
              </div>
            )}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Search;
