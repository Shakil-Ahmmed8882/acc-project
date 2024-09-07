// import useMaxHeight from "@/hooks/useMaxHeight";
import AllProduct from "./AllProduct";

import Image from "next/image";
import bgImg from "@/assets/img/products/productBg.jpg";
// import Button2 from "@/components/shared/button/Button2";

const Products = ({ product, isSeeMoreAll }) => {
  // const { containerRef, maxHeight } = useMaxHeight("550000px");

  return (

    <div className="  relative min-h-screen pb-32  overscroll-auto">
      <div className="absolute bg-[black] top-0 bottom-0 min-h-screen">
        <Image
          width={100000}
          height={100000}
          src={bgImg}
          alt="Background Image"
          // className=" sticky md:-top-44 bottom-0 object-cover 2xl:-top-60 inset-0"
          className=" sticky min-h-[200vh] md:-top-44 bottom-0 object-cover 2xl: -top-60 inset-0"

          style={{
            opacity: ".6",
          }}
        />


      </div>
    </div>
  );
};

export default Products;
