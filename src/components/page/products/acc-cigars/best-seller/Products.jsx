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
        <div className="absolute h-full w-full 4xl:overflow-y-hidden min-h-screen">
          <Image
            src={bgImg}
            alt="Background Image"
             className=" sticky min-h-[140vh] lg:min-h-100vh] w-[200%] left-0  right-0 mx-auto md:-top-44 bottom-0 object-cover 2xl: -top-60 inset-0"
            
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
