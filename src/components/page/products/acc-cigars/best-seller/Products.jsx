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

const Products = ({ product }) => {
  const { showProducts, setShowProducts } = useGlobalContext();
  const [isSeeMoreAll, setIsSeeMoreAll] = useState(false);
  const [isSeeMoreBestSeller] = useState(false);
  const { containerRef, maxHeight } = useMaxHeight(
    "1500px",
    showProducts === "all" ? isSeeMoreAll : isSeeMoreBestSeller
  );
  const [filteredBestSellerProducts, setFilteredBestSellerProducts] = useState(
    []
  );
  const [filteredAllProducts, setFilteredAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Start loading state
    // Simulating API call or data fetching delay
    setTimeout(() => {
      // Filter best-seller products
      const bestSellerProducts = product.filter((item) => item.bestSeller);
      setFilteredBestSellerProducts(bestSellerProducts);

      // Show all products if showProducts is 'all', otherwise filter best-sellers only
      const allProductsToShow =
        showProducts === "all" ? product : bestSellerProducts;
      setFilteredAllProducts(allProductsToShow);

      setLoading(false); // Set loading state to false
    }, 1000); // Simulated delay of 1 second (1000ms)
  }, [product, showProducts]);

  const toggleSeeMore = () => {
    setIsSeeMoreAll((prev) => !prev);

    if (!isSeeMoreAll) {
      setShowProducts("all");
    } else {
      setShowProducts("best-seller");
    }
  };

  const shouldShowSeeMoreButton = filteredAllProducts.length > 6;

  return (
    <section className="size-full transition-all duration-300 min-h-screen relative">
      <Image
        width={1000}
        height={1000}
        src={bgImg}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover -z-40"
        style={{ background: "#00000033", opacity: ".5" }}
      />
      <Container className="min-h-screen py-9 relative">
        <Title title={"BEST SELLER"} />
        <article
          ref={containerRef}
          className="grid grid-cols-1 mt-16 md:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11 md:gap-20 lg:gap-24 transition-all duration-1000 ease-in-out overflow-hidden"
          style={{ maxHeight }}
        >
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : filteredBestSellerProducts.length === 0 ? (
            <Loader />
          ) : (
            filteredBestSellerProducts
              .slice(
                0,
                isSeeMoreBestSeller ? filteredBestSellerProducts.length : 6
              )
              .map((card, index) => <ProductCard key={index} card={card} />)
          )}
        </article>

        <AllProduct
          maxHeight={maxHeight}
          containerRef={containerRef}
          product={product}
          isSeeMore={isSeeMoreAll}
        />

        {shouldShowSeeMoreButton && (
          <article
            ref={containerRef}
            className="grid grid-cols-1 mt-16 md:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11 md:gap-20 lg:gap-24 transition-all duration-1000 ease-in-out overflow-hidden"
            style={{ maxHeight }}
          >
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : filteredAllProducts
                  .slice(0, isSeeMoreAll ? filteredAllProducts.length : 6)
                  .map((card, index) => (
                    <ProductCard key={index} card={card} />
                  ))}
          </article>
        )}

        <div className="flex justify-center items-center">
          <Button
            onClick={toggleSeeMore}
            className="relative mt-9 md:mt-11 hover:!md:px-0 !z-50"
            size="eLarge"
            isNotGrow={true}
          >
            {showProducts === "all"
              ? isSeeMoreAll
                ? "See less"
                : "See more"
              : isSeeMoreBestSeller
              ? "See less"
              : "See more"}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Products;
