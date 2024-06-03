import { ProductContext } from "@/app/(product)/acc-cigars/page";
import { useContext } from "react";

const useProductContext= () => {
  return useContext(ProductContext)
};

export default useProductContext; 