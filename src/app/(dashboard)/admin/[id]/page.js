"use client";
import Loading from "@/app/loading";
import AdminProductDetails from "@/components/page/dashboard/main-content/ProductDetails/adminProductDetails";

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

  if (isLoading) return <Loading />;

  return (
    <>
      <AdminProductDetails product={product} />
    </>
  );
};

export default ProductDetailsPage;
