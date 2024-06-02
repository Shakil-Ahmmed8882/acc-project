"use client";

import Searchbar from "./all-products/Searchbar";
import AddProductButton from "./all-products/AddProductButton";
import { useEffect, useState } from "react";
import AddProductModal from "../../admin/Product/AddProductModal";
import Card from "./all-products/Card";
import { fetchProducts } from "@/utils";

const MainContent = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [products, setProducts] = useState([])


useEffect(()=> {
  fetchProducts()
  .then(data => setProducts(data.products))
},[])




const onAdd = async(product) => {
products.push(product)

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


      <section className="grid md:grid-cols-2 mt-5 p-8 gap-8">
          {products?.map((product,index) => <Card {...{product}} key={index}/>)}
          </section>

    </section>
  );
};

export default MainContent;
