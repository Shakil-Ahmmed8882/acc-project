import { useEffect, useState } from "react";
import useGlobalContext from "@/hooks/useGlobalContext";
import useMaxHeight from "@/hooks/useMaxHeight";
import Container from "@/components/shared/container/Container";
import ProductCard from "@/components/shared/product/product-card/Card";
import AllProduct from "./AllProduct";
import SkeletonCard from "./ProductSkeleton";
import Image from "next/image";
import bgImg from "@/assets/img/products/productBg.jpg";
// import Button2 from "@/components/shared/button/Button2";

const Products = ({ product, isSeeMoreAll }) => {
  const { showProducts } = useGlobalContext();

  const [isSeeMoreBestSeller] = useState(false);
  const { containerRef, maxHeight } = useMaxHeight(
    "5500px",
    showProducts === "all" ? isSeeMoreAll : isSeeMoreBestSeller
  );
  // const [filteredBestSellerProducts, setFilteredBestSellerProducts] = useState(
  //   []
  // );
  const [filteredAllProducts, setFilteredAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Start loading state
    // Simulating API call or data fetching delay
    setTimeout(() => {
      // Filter best-seller products
      const bestSellerProducts = product.filter((item) => item.bestSeller);
      // setFilteredBestSellerProducts(bestSellerProducts);

      // Show all products if showProducts is 'all', otherwise filter best-sellers only
      const allProductsToShow =
        showProducts === "all" ? product : bestSellerProducts;
      setFilteredAllProducts(allProductsToShow);

      setLoading(false); // Set loading state to false
    }, 1000); // Simulated delay of 1 second (1000ms)
  }, [product, showProducts]);

  // const toggleSeeMore = () => {
  //   setIsSeeMoreAll((prev) => !prev);
  // };

  const shouldShowSeeMoreButton = filteredAllProducts.length > 6;

  return (
    <div className="pb-6 md:pb-10 lg:pb-24">
      <Image
        width={100000}
        height={100000}
        src={bgImg}
        alt="Background Image"
        className="sticky top-0 inset-0"
        style={{
          // background: "#00000033",
          opacity: ".6",
        }}
      />

      <Container className="relative">
        {/* <Title title={"BEST SELLER"} />
        <article
          ref={containerRef}
          className="grid grid-cols-1 mt-16 md:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11 md:gap-20 lg:gap-24 transition-all duration-1000 ease-in-out"
          style={{ maxHeight }}
        >
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : filteredBestSellerProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No best-seller products are currently available.
            </div>
          ) : (
            filteredBestSellerProducts
              .slice(
                0,
                isSeeMoreBestSeller ? filteredBestSellerProducts.length : 6
              )
              .map((card, index) => <ProductCard key={index} card={card} />)
          )}
        </article> */}

        <AllProduct
          maxHeight={maxHeight}
          containerRef={containerRef}
          product={product}
          isSeeMore={isSeeMoreAll}
        />
      </Container>
{/* 
      {shouldShowSeeMoreButton && (
        <article
          ref={containerRef}
          className="grid grid-cols-1 mt-16 md:mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11 md:gap-20 lg:gap-24 transition-all duration-1000 ease-in-out"
          style={{ maxHeight }}
        >
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : filteredAllProducts
                .slice(0, isSeeMoreAll ? filteredAllProducts.length : 6)
                .map((card, index) => <ProductCard key={index} card={card} />)}
        </article>
      )} */}
      {/* <div className="flex justify-center items-center py-8">
        <Button2
          onClick={toggleSeeMore}
          className="relative mt-9 md:mt-11 hover:!md:px-0 !z-50"
          size="eLarge"
          isNotGrow={true}
        >
          {isSeeMoreAll ? "See less" : "See more"}
        </Button2>
      </div> */}
    </div>
  );
};

export default Products;
