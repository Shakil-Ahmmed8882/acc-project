"use client";

import Searchbar from "./all-products/Searchbar";
import AddProductButton from "./all-products/AddProductButton";
import { useState } from "react";
import AddProductModal from "../../admin/Product/AddProductModal";
import Card from "./all-products/Card";
import { AddSingleProduct } from "@/utils";
import useGetAllProducts from "@/hooks/useGetAllProducts";



const img1 = 'https://images.pexels.com/photos/10177657/pexels-photo-10177657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const img2 = 'https://images.pexels.com/photos/10177657/pexels-photo-10177657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const img3 = 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const img4 = 'https://images.pexels.com/photos/1128257/pexels-photo-1128257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'



const MainContent = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [trigger,setTrigger] = useState(false)
const {products} = useGetAllProducts(trigger)

// create a new product
const onAdd = async(product) => {
  product.productType = "Electronics"
  product.price = 300
  product.images.push(img1,img2,img3,img4)
  const response = await AddSingleProduct(product)
  if(response.success){
    setTrigger(!trigger)
    setIsAddModalOpen(false)
    console.log(response)
  }
}



  return (
    <section suppressHydrationWarning>
      <div className="p-4 bg-[#262626] block sm:flex items-center justify-between border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
            <Searchbar />
            <AddProductButton {...{setIsAddModalOpen}}/>
          </div>
          {/* Model  */}
          {isAddModalOpen && (
            <AddProductModal {...{onAdd}} {...{setIsAddModalOpen}}/>
          )}
        </div>
      </div>


        {/* Product cards */}
      <section className="grid md:grid-cols-2 mt-5 p-8 gap-8">
          {products?.map((product,index) => <Card  {...{product,trigger,setTrigger}} key={index}/>)}
          </section>

    </section>
  );
};

export default MainContent;
