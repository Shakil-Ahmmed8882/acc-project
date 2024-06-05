import ProductCard from "@/components/shared/product/product-card/Card";
import Title from "../ui/Title";
import { Loader } from "lucide-react";

const AllProduct = ({ maxHeight, containerRef, product }) => {
  const groupedProducts = groupProductsByCategory(product);

  return (
    <>
      {Object.keys(groupedProducts).map((category) => (
        <section key={category}>
          <Title title={category} />
          <article
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11 md:gap-20 lg:gap-24 transition-all duration-1000 ease-in-out overflow-hidden"
            style={{ maxHeight }}
          >
            {groupedProducts[category].length === 0 ? (
              <Loader />
            ) : (
              groupedProducts[category].map((card, index) => (
                <ProductCard key={index} card={card} />
              ))
            )}
          </article>
        </section>
      ))}
    </>
  );
};

const groupProductsByCategory = (products) => {
  return products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
};

export default AllProduct;
