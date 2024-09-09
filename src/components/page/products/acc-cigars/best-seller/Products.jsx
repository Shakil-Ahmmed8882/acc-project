// import useMaxHeight from "@/hooks/useMaxHeight";
import AllProduct from "./AllProduct";

import Image from "next/image";
import bgImg from "@/assets/img/products/productBg.jpg";
// import Button2 from "@/components/shared/button/Button2";

const Products = ({ product, isSeeMoreAll }) => {
  // const { containerRef, maxHeight } = useMaxHeight("550000px");

  return (
    <div className=" relative">
      {/*  */}
      <div className="relative flex justify-center items-center z-10 ">
        <div className="absolute h-full w-full 4xl:overflow-y-hidden">
          <Image
            src={bgImg}
            alt="Background Image"
            // className="sticky md:-top-44 2xl:-top-60 inset-0 w-full 4xl:h-full"
             className=" sticky min-h-[200vh] md:-top-44 bottom-0 object-cover 2xl: -top-60 inset-0"
            
            style={{
              opacity: ".6",
            }}
          />
        </div>
        <AllProduct product={product} isSeeMore={isSeeMoreAll} />
      </div>
    </div>
  );
};

export default Products;
