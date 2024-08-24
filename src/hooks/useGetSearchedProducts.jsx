import { useEffect, useState } from "react";

export const useGetSearchedProducts = (trigger) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/product?q=${trigger}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [trigger]);

  return { products };
};
