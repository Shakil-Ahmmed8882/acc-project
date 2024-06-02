'use client'
import ProductDetails from "@/components/page/dashboard/main-content/all-products/ProductDetails";
import { fetchSingleProduct } from "@/utils";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetailsPage = () => {

  const {id} = useParams()
  const [product, setProduct] = useState([])
  const [isLoading,setIsLoading] = useState(true)

useEffect(()=> {
  fetchSingleProduct(id)
  .then(data => {
    setProduct(data?.products[0])
    setIsLoading(false)
  })
},[])


if(isLoading) return 'loading...'



console.log(product)



// const product = {
//   "productType": "Electronics",
//   "name": "Smartphon6",
//   "price": 999.99,
//   "description": "A high-end smartphone with a great camera.",
//   "category": "Mobile",
//   "images": [
//     "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/3566226/pexels-photo-3566226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/1128257/pexels-photo-1128257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/10177657/pexels-photo-10177657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   ]
// }



  return (
        <>
          <ProductDetails product={product}/>
        </>
    );
};

export default ProductDetailsPage;