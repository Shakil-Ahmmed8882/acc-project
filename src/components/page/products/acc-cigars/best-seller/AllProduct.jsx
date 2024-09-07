import ProductCard from "@/components/shared/product/product-card/Card";
import Title from "../ui/Title";
import Container from "@/components/shared/container/Container";


const AllProduct = ({ product }) => {
  const groupedProducts = groupProductsByCategory(product);

  return (
    <Container className={"relative"}>
      {Object.keys(groupedProducts).map((category) => (
        <section key={category}>
          <Title className={"uppercase"} title={category} />
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-11 md:gap-x-20 lg:gap-x-10 xl:gap-x-48 gap-y-14 transition-all duration-1000 ease-in-out ">
            {groupedProducts[category].length === 0 ? (
              <div className="col-span-full text-center text-white font-riviera">
                No products are currently available in this category.
              </div>
            ) : (
              groupedProducts[category].map((card, index) => (
                <ProductCard key={index} card={card} />
              ))
            )}
          </article>
        </section>
      ))}
    </Container>
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
