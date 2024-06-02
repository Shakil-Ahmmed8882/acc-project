import { fetchProducts } from "@/utils";
import { useEffect, useState } from "react";

const useGetAllProducts= (trigger) => {
    const [products, setProducts] = useState([])


    useEffect(()=> {
      fetchProducts()
      .then(data => setProducts(data.products))
    },[trigger])
    
  return {products}
};

export default useGetAllProducts; 