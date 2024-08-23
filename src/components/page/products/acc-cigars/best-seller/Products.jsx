import useMaxHeight from "@/hooks/useMaxHeight";
import Container from "@/components/shared/container/Container";

import AllProduct from "./AllProduct";

import Image from "next/image";
import bgImg from "@/assets/img/products/productBg.jpg";
// import Button2 from "@/components/shared/button/Button2";

const Products = ({ product, isSeeMoreAll }) => {
  const { containerRef, maxHeight } = useMaxHeight("55000px");

  return (
    <div className="pb-6 md:pb-10 lg:pb-24 relative">
      <div className="absolute h-full">
        <Image
          width={100000}
          height={100000}
          src={bgImg}
          alt="Background Image"
          className="sticky top-0 inset-0"
          style={{
            opacity: ".6",
          }}
        />
      </div>
      <Container className="relative">
        <AllProduct
          maxHeight={maxHeight}
          containerRef={containerRef}
          product={product}
          isSeeMore={isSeeMoreAll}
        />
      </Container>
    </div>
  );
};

export default Products;
