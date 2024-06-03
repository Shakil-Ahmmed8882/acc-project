"use client";
import Searchbar from "./all-products/Searchbar";
import AddProductButton from "./all-products/AddProductButton";
import { useState, useEffect } from "react";
import Card from "./all-products/Card";
import { AddSingleProduct } from "@/utils";
import useGetAllProducts from "@/hooks/useGetAllProducts";
import Image from "next/image";
import noDataFound from "@/assets/img/shared/not-found/not-found.png";
import AddProductModal from "./all-products/AddProductModal";

const MainContent = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { products } = useGetAllProducts(trigger, searchTerm);

  // create a new product
  const onAdd = async (product) => {
    const response = await AddSingleProduct(product);
    if (response.success) {
      setTrigger(!trigger);
      setIsAddModalOpen(false);
    }
  };

  const renderProductSection = (type) => {
    const filteredProducts = products.filter(
      (product) => product.productType === type
    );
    return (
      <div key={type} className="mb-8">
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{type}</h2>
        {filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center">
            <Image
              width={500}
              height={500}
              className="mix-blend-multiply"
              src={noDataFound}
              alt="No Data Found"
            />
          </div>
        ) : (
          <section className="grid lg:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <Card {...{ product, trigger, setTrigger }} key={index} />
            ))}
          </section>
        )}
      </div>
    );
  };

  return (
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

      {/* Product cards */}
      {products?.length == 0 ? (
        <Image
          width={500}
          height={500}
          className="absolute  mix-blend-multiply top-24 right-0 left-[30%] flex justify-center object-cover"
          src={noDataFound}
          alt=""
        />
      ) : (
        <section className="grid md:grid-cols-2 mt-5 p-8 gap-8">
          {products?.map((product, index) => (
            <Card {...{ product, trigger, setTrigger }} key={index} />
          ))}
        </section>
      )}
    </section>
  );
};

export default MainContent;
