import { useEffect, useState } from "react";

export const useGetSearchedProducts = (trigger) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://www.acc1952.com/api/product?q=${trigger}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [trigger]);

  return { products };
};
