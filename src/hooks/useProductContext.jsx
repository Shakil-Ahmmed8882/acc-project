
import { ProductContext } from "@/app/product/[collection]/page";
import { useContext } from "react";

const useProductContext= () => {
  return useContext(ProductContext)
};

export default useProductContext; 