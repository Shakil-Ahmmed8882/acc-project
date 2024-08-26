import { useEffect, useState } from "react";

export const useGetSearchedProducts = (trigger) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (trigger) { // Only fetch if trigger is not empty
      fetch(`/api/product?q=${encodeURIComponent(trigger)}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.text(); // Read the response as text first
        })
        .then((text) => {
          return text ? JSON.parse(text) : { products: [] }; // Parse the text if it's not empty
        })
        .then((data) => {
          setProducts(data.products || []);
        })
        .catch((err) => {
          setError(err.message);
          setProducts([]);
        });
    } else {
      setProducts([]); // Clear products if trigger is empty
    }
  }, [trigger]);

  return { products, error };
};
