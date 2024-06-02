'use client'
import ProductDetails from "@/components/page/dashboard/main-content/all-products/ProductDetails";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

const ProductDetailsPage = () => {

  const {id} = useParams()


  


    return (
        <>
          <ProductDetails product={product}/>
        </>
    );
};

export default ProductDetailsPage;