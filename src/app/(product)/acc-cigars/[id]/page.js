"use client";
import ProductDetails from "@/components/page/dashboard/main-content/all-products/ProductDetails";
import Container from "@/components/shared/container/Container";
import VideoPlayer from "@/components/shared/video/VideoPlayer";
import { fetchSingleProduct } from "@/utils";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

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

  if (isLoading) return "loading...";

  return (
    <>
      <Container>
        <ProductDetails product={product} showHighlight={false} />
      </Container>
      <VideoPlayer videoUrl="https://res.cloudinary.com/dcemlsxpc/video/upload/v1710500713/samples/sea-turtle.mp4" />
    </>
  );
};

export default ProductDetailsPage;