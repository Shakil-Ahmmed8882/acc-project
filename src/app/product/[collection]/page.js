'use client'

import Hero from "@/components/page/products/acc-cigars/Hero";
import Products from "@/components/page/products/acc-cigars/best-seller/Products";
import Filter from "@/components/page/products/acc-cigars/filter/Filter";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { createContext, useState } from "react";

export const ProductContext = createContext(null)
const AccCigars = () => {

  const [openFilter,setOpenFilter] = useState(false)

  const data = {
    openFilter,
    setOpenFilter
  }

  const pathName = usePathname()
  const collectionName = pathName.split('/').pop()
  const navigationItems = [
    'cigar',
    'liquor',
    'accessories',
    'luxury-storage'
  ];

  if(!navigationItems.includes(collectionName)){
      return <h1 className="text-red">error.....</h1>
  }

  return (
    <>
    <ProductContext.Provider value={data}>
      <motion.div 
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
      <main className="bg-[#090b0d] relative mt-44 z-40 min-h-[calc(100vh)]">
        <Hero title={collectionName}/>
        <Filter/>
        <Products/>
      </main>
      </motion.div>
    </ProductContext.Provider>
    </>
  );
};
export default AccCigars;
