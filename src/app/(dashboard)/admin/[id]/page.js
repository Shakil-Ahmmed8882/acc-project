'use client'
import ProductDetails from "@/components/page/dashboard/main-content/all-products/ProductDetails";
import { fetchSingleProduct } from "@/utils";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

const ProductDetailsPage = () => {

  // step 1 get id
  const {id} = useParams()
  const [product, setProduct] = useState([])
  const [isLoading,setIsLoading] = useState(true)

useEffect(()=> {
  // step 2:  fetch prodoct by id
  fetchSingleProduct(id)
  .then(data => {
    setProduct(data?.products[0])
    setIsLoading(false)
  })
},[id])


if(isLoading) return 'loading...'

  return (
    <>
      <ProductDetails product={product} showHighlight={true} />
    </>
  );
};

export default ProductDetailsPage;