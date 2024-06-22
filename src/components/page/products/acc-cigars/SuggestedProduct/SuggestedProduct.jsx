"use client";
import ProductCard from "@/components/shared/product/product-card/Card";
import { useEffect, useState } from "react";
import Loader from "@/components/shared/loader/Loader";
import Container from "@/components/shared/container/Container";
import bgImg from "@/assets/img/products/productBg.jpg";
import { fetchProductsByType } from "@/utils";

const SuggestedProduct = ({ id, productType }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products by type
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchProductsByType(productType);
        setProducts(data?.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productType]);

  useEffect(() => {
    // Function to shuffle the array
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };

    // Filter out the current product
    const filtered = products.filter((product) => product._id !== id);

    // Shuffle the filtered array and select the first 3 elements
    const randomThree = shuffleArray(filtered).slice(0, 3);

    // Set the filtered products
    setFilteredProducts(randomThree);
  }, [id, products]);

  return (
    <section className="relative bg-[#00000033]">
      <div
        className="absolute inset-0 w-full h-full -z-40"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      ></div>
      <Container className="pb-24">
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
          {loading ? (
            <Loader />
          ) : filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-white">
              No suggested products are currently available.
            </div>
          ) : (
            filteredProducts.map((card) => (
              <ProductCard key={card._id} card={card} />
            ))
          )}
        </article>
        <div id="find"></div>
      </Container>
    </section>
  );
};

export default SuggestedProduct;
