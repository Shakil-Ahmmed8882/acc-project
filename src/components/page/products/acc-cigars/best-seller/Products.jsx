"use client";

import ProductCard from "@/components/shared/product/product-card/Card";
import Container from "@/components/shared/container/Container";
import Button from "@/components/shared/parallax/Button";
import Title from "../ui/Title";
import useMaxHeight from "@/hooks/useMaxHeight";
import { useEffect, useState } from "react";
import useGetAllProducts from "@/hooks/useGetAllProducts";
import useGlobalContext from "@/hooks/useGlobalContext";
import Loader from "@/components/shared/loader/Loader";


const Products = () => {
  const { showProducts } = useGlobalContext();
  const { isSeeMore, setIsSeeMore } = useGlobalContext();
  const { containerRef, maxHeight } = useMaxHeight('1500px', isSeeMore);
  const { products } = useGetAllProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (showProducts === 'best-seller') {
      setFilteredProducts(products.slice(0,3));
    } else {
      setFilteredProducts(products);
    }
  }, [showProducts, products]);

  return (
    <section>
      <Container className="min-h-screen py-9 relative">
        <Title />
        <article
          ref={containerRef}
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11 md:gap-20 lg:gap-24 transition-all duration-1000 ease-in-out overflow-hidden"
          style={{ maxHeight }}
        >
          {
            filteredProducts.length === 0?<Loader/>:
            filteredProducts.slice(0, isSeeMore ? filteredProducts.length : 6).map((card, index) => (
              <ProductCard key={index} card={card} />
            ))

          }
        </article>

        {showProducts === 'all' && (
          <div
            onClick={() => setIsSeeMore(!isSeeMore)}
            className="flex justify-center h-32 items-center"
          >
            <Button
              text={`${isSeeMore ? "See less" : "See more"}`}
              customStyle={"border-[white]"}
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default Products;
