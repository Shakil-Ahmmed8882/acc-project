"use client";
import Searchbar from "./all-products/Searchbar";
import AddProductButton from "./all-products/AddProductButton";
import { useState } from "react";
import Card from "./all-products/Card";
import { AddSingleProduct } from "@/utils";
import useGetAllProducts from "@/hooks/useGetAllProducts";
import Image from "next/image";
import noDataFound from "@/assets/img/shared/not-found/not-found.png";
import AddProductModal from "./all-products/AddProductModal";
import SmoothScroll from "@/providers/SmoothScroll";

const MainContent = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { products } = useGetAllProducts(trigger, searchTerm);

  // Group products by productType
  const groupedProducts = groupProductsByType(products);

  // Create a new product
  const onAdd = async (product) => {
    const response = await AddSingleProduct(product);
    if (response.success) {
      setTrigger(!trigger);
      setIsAddModalOpen(false);
    }
  };

  return (
    <SmoothScroll>
    <section className="p-8 bg-[#1A1A1A]">
      <div className="p-4 bg-[#262626] block sm:flex items-center justify-between border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-8">
        <div className="w-full">
          <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
            <Searchbar setSearchTerm={setSearchTerm} />
            <AddProductButton {...{ setIsAddModalOpen }} />
          </div>
          {isAddModalOpen && (
            <AddProductModal {...{ onAdd }} {...{ setIsAddModalOpen }} />
          )}
        </div>
      </div>

      {/* Product cards by productType */}
      {Object.keys(groupedProducts).length === 0 ? (
        <Image
          width={500}
          height={500}
          className="absolute mix-blend-multiply top-24 right-0 left-[30%] flex justify-center object-cover"
          src={noDataFound}
          alt=""
        />
      ) : (
        Object.keys(groupedProducts).map((type) => (
          <div key={type} className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-white normal-case">{type}</h2>
            <section className="grid md:grid-cols-2 mt-5 p-8 gap-8">
              {groupedProducts[type].map((product, index) => (
                <Card {...{ product, trigger, setTrigger }} key={index} />
              ))}
            </section>
          </div>
        ))
      )}
    </section>
    </SmoothScroll>
  );
};

const groupProductsByType = (products) => {
  return products.reduce((acc, product) => {
    const type = product.productType;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(product);
    return acc;
  }, {});
};

export default MainContent;
