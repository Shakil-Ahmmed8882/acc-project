"use client";

import ProductCard from "@/components/shared/product/product-card/Card";
import Container from "@/components/shared/container/Container";
import Button from "@/components/shared/parallax/Button";
import Title from "../ui/Title";
import useMaxHeight from "@/hooks/useMaxHeight";
import { useEffect, useState } from "react";
import useGlobalContext from "@/hooks/useGlobalContext";
import Loader from "@/components/shared/loader/Loader";


const Products = ({product}) => {
  const { showProducts } = useGlobalContext();
  const { isSeeMore, setIsSeeMore } = useGlobalContext();
  const { containerRef, maxHeight } = useMaxHeight('1500px', isSeeMore);

  const [bestSellerProducts, setBestSellerProducts] = useState([]);

 useEffect(() => {
   const fetchProducts = async () => {
     try {
       const filteredProducts = product.filter((item) => item.bestSeller);
       setBestSellerProducts(filteredProducts);
     } catch (error) {
       console.error("Error fetching products:", error);
     }
   };

   fetchProducts();
 }, [product]);

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
            bestSellerProducts.length === 0?<Loader/>:
            bestSellerProducts.slice(0, isSeeMore ? bestSellerProducts.length : 6).map((card, index) => (
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
