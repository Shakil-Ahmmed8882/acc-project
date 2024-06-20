"use client";

import { useEffect, useState } from "react";
import useGlobalContext from "@/hooks/useGlobalContext";
import useMaxHeight from "@/hooks/useMaxHeight";
import Container from "@/components/shared/container/Container";
import Title from "../ui/Title";
import ProductCard from "@/components/shared/product/product-card/Card";
import Loader from "@/components/shared/loader/Loader";
import AllProduct from "./AllProduct";
import SkeletonCard from "./ProductSkeleton";
import Image from "next/image";
import bgImg from "@/assets/img/products/productBg.jpg";
import Button from "./Button";
import { globalContext } from "@/providers/GlobalContext";

const Products = ({ product }) => {
  // see more product button
  // show Products === 'best-seller' or 'all'
  const { isSeeMore, setIsSeeMore,showProducts } = useGlobalContext();

  

  const { containerRef, maxHeight } = useMaxHeight("1500px", isSeeMore);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (product.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
      if (showProducts === "all") {
        const filteredProducts = product.filter((item) => item);
        setBestSellerProducts(filteredProducts);
      } else {
        const filteredProducts = product.filter((item) => item.bestSeller);
        setBestSellerProducts(filteredProducts);
      }
    }
  }, [product, showProducts]);

  return (
    <section className="size-full transition-all duration-300 min-h-screen relative">
      <Image
        width={1000}
        height={1000}
        src={bgImg}
        alt="Background Image"
        class="absolute inset-0 w-full h-full object-cover -z-40"
        style={{
          background: "#00000033",
          opacity: ".5",
        }}
      />
      <Container className="min-h-screen py-9 relative">
        <Title
          title={showProducts === "all" ? "ALL PRODUCTS" : "BEST SELLER"}
        />
        <article
          ref={containerRef}
          className="grid grid-cols-1 mt-16 md:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11 md:gap-20 lg:gap-24 transition-all duration-1000 ease-in-out overflow-hidden"
          style={{ maxHeight }}
        >
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : bestSellerProducts.length === 0 ? (
            <Loader />
          ) : (
            bestSellerProducts
              .slice(0, isSeeMore ? bestSellerProducts.length : 6)
              .map((card, index) => <ProductCard key={index} card={card} />)
          )}
        </article>

        {/* all product section */}
        <AllProduct
          maxHeight={maxHeight}
          containerRef={containerRef}
          product={product}
          isSeeMore={isSeeMore}
        />

        <div
          onClick={() => setIsSeeMore(!isSeeMore)}
          className="flex justify-center h-32 items-center"
        >
          <Button
            className="relative mt-9 md:mt-11 hover:!md:px-0 !z-50"
            size="eLarge"
            isNotGrow={true}
          >
            {isSeeMore ? "See less" : "See more"}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Products;
