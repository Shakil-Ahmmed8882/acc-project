"use client";
import Loading from "@/app/loading";
import ProductBanner from "@/components/page/products/acc-cigars/ProductBanner";
import Products from "@/components/page/products/acc-cigars/best-seller/Products";
import Filter from "@/components/page/products/acc-cigars/filter/Filter";
import { fetchProductsByType } from "@/utils";
import { motion } from "framer-motion";
import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext(null);

const Product = ({ params }) => {
    const [isSeeMoreAll, setIsSeeMoreAll] = useState(false);
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
  const navigationItems = ["cigar", "spirits", "accessories", "luxury-storage"];

  if (!navigationItems.includes(collectionName)) {
    return <h1 className="text-red">error.....</h1>;
  }

  return (
    <ProductContext.Provider value={data}>
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <main className="bg-[#090b0d]">
          <ProductBanner title={collectionName} />
          {/* <Hero imagesArray={[heroImag]}/> */}
          <Filter
            isSeeMoreAll={isSeeMoreAll}
            setIsSeeMoreAll={setIsSeeMoreAll}
          />
          <Products
            product={product}
            isSeeMoreAll={isSeeMoreAll}
            setIsSeeMoreAll={setIsSeeMoreAll}
          />
        </main>
      </motion.div>
    </ProductContext.Provider>
  );
};
export default Product;
