import { fetchProducts } from "@/utils";
import { useEffect, useState } from "react";

const useGetAllProducts = (trigger, searchTerm) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(searchTerm)
    fetchProducts(searchTerm).then(data => setProducts(data.products));
  }, [trigger, searchTerm]);

  return { products };
};

export default useGetAllProducts;
