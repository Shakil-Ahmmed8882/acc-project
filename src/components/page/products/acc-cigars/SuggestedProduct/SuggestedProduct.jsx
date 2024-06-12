"use client";
import ProductCard from "@/components/shared/product/product-card/Card";
import { useEffect, useState } from "react";
import useGetAllProducts from "@/hooks/useGetAllProducts";
import useGlobalContext from "@/hooks/useGlobalContext";
import Loader from "@/components/shared/loader/Loader";
import Container from "@/components/shared/container/Container";
import Image from "next/image";
import bgImg from "@/assets/img/products/productBg.jpg";

const SuggestedProduct = ({ id }) => {
  const { showProducts } = useGlobalContext();
  const { products } = useGetAllProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) => product.id !== id);
    if (showProducts === "best-seller") {
      setFilteredProducts(filtered.slice(0, 3));
    } else {
      setFilteredProducts(filtered.slice(0, 3));
    }
  }, [id, products, showProducts]);

  return (
    <section className="relative bg-[#00000033]">
      <Image
        width={1000}
        height={1000}
        src={bgImg}
        alt="Background Image"
        class="absolute inset-0 w-full h-full object-cover -z-40"
        style={{
          background: "#00000033",
          opacity:".5"
        }}
      />
      <Container className={"pb-24"}>
        <h3
          style={{ letterSpacing: 2 }}
          className="text-white py-3 border-b border-[#bfbfbf] inline-block z-50"
        >
          SUGGESTED PRODUCTS
        </h3>
        <h3
          style={{ letterSpacing: 2 }}
          className="text-white py-3 text-[18px] md:text-[20px] lg:text-[22px] mt-6 md:mt-4 md:mb-9 z-50"
        >
          YOU MAY ALSO LIKE
        </h3>
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11 md:gap-20 lg:gap-24">
          {filteredProducts.length === 0 ? (
            <Loader />
          ) : (
            filteredProducts.map((card, index) => (
              <ProductCard key={index} card={card} />
            ))
          )}
        </article>
      </Container>
    </section>
  );
};

export default SuggestedProduct;
