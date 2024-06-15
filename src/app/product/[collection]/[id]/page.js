"use client";
import Loading from "@/app/loading";
import ProductDetails from "@/components/page/dashboard/main-content/all-products/ProductDetails";
import SuggestedProduct from "@/components/page/products/acc-cigars/SuggestedProduct/SuggestedProduct";
import Container from "@/components/shared/container/Container";
import VideoPlayer from "@/components/shared/video/VideoPlayer";
import { fetchSingleProduct } from "@/utils";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import FindAcc from "./FindAcc";


const ProductDetailsPage = () => {
  // step 1 get id
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // step 2:  fetch prodoct by id
    fetchSingleProduct(id).then((data) => {
      setProduct(data?.products[0]);
      setIsLoading(false);
    });
  }, [id]);
  if (isLoading) return <Loading />;

  return (
    <>
      <Container bgClr={"bg-[#121212] -mt-44"}>
        <ProductDetails product={product} showHighlight={false} />
      </Container>
      {product?.video && <VideoPlayer videoUrl={product?.video} />}

      <SuggestedProduct id={product._id} />

      <Container bgClr={"bg-[#121212]"}>
        <FindAcc />
      </Container>
    </>
  );
};

export default ProductDetailsPage;
