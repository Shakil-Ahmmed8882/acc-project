"use client";
import Loading from "@/app/loading";
import ProductBanner from "@/components/page/products/acc-cigars/ProductBanner";
import Products from "@/components/page/products/acc-cigars/best-seller/Products";
import Filter from "@/components/page/products/acc-cigars/filter/Filter";
import { fetchProductsByType } from "@/utils";
import { motion } from "framer-motion";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

const AccCigars = ({ params }) => {
  const [openFilter, setOpenFilter] = useState(false);

  const data = {
    openFilter,
    setOpenFilter,
  };

  const collectionName = params.collection;
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // step 2: fetch product by type
    fetchProductsByType(collectionName).then((data) => {
      setProduct(data?.products);
      setIsLoading(false);
    });
  }, [collectionName]);
  if (isLoading) return <Loading />;
  const navigationItems = ["cigar", "liquor", "accessories", "luxury-storage"];

  if (!navigationItems.includes(collectionName)) {
    return <h1 className="text-red">error.....</h1>;
  }

  return (
    <>
      <ProductContext.Provider value={data}>
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <main className="bg-[#090b0d] relative mt-44 min-h-[calc(100vh)] z-[1000]">
            <ProductBanner title={collectionName} />
            <Filter />
            <Products product={product} />
          </main>
        </motion.div>
      </ProductContext.Provider>
    </>
  );
};
export default AccCigars;
