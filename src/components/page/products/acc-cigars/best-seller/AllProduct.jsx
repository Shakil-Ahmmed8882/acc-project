import ProductCard from "@/components/shared/product/product-card/Card";
import Title from "../ui/Title";
import { Loader } from "lucide-react";

const AllProduct = ({ maxHeight, containerRef, product }) => {
  return (
    <>
      <section>
        <Title title={"BEST SELLER"} />
        <article
          ref={containerRef}
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11 md:gap-20 lg:gap-24 transition-all duration-1000 ease-in-out overflow-hidden"
          style={{ maxHeight }}
        >
          {product.length === 0 ? (
            <Loader />
          ) : (
            product.map((card, index) => (
              <ProductCard key={index} card={card} />
            ))
          )}
        </article>
      </section>
    </>
  );
};

export default AllProduct;
