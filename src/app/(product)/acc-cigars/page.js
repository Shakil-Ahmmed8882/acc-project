'use client'

import Hero from "@/components/page/products/acc-cigars/Hero";
import Products from "@/components/page/products/acc-cigars/best-seller/Products";

import Filter from "@/components/page/products/acc-cigars/filter/Filter";
import { createContext, useState } from "react";

export const ProductContext = createContext(null)
const AccCigars = () => {

  const [openFilter,setOpenFilter] = useState(false)

  const data = {
    openFilter,
    setOpenFilter
  }

  return (
    <>
    <ProductContext.Provider value={data}>
      <main className="bg-[#090b0d] relative mt-44 z-40 min-h-[calc(100vh)]">
        <Hero/>
        <Filter/>
        <Products/>
      </main>
    </ProductContext.Provider>
    </>
  );
};
export default AccCigars;
