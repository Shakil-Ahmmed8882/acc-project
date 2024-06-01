"use client";
import { useState, useEffect } from "react";
import { LucideTrash2, LucideEdit2, LucidePlus } from "lucide-react";
import UpdateProductModal from "./UpdateProductModal.jsx";
import AddProductModal from "./AddProductModal.jsx";
import DeleteProductModal from "./DeleteProductModal.jsx";
import Image from "next/image.js";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      _id: "60d5ec49f4860e59e2d81b33",
      name: "Women's Dress",
      description: "Elegant evening dress",
      images: [
        "https://plus.unsplash.com/premium_photo-1666855258034-8d2c36091ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1666855258034-8d2c36091ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      productType: "Dresses",
      category: "Women's Clothing",
    },
    {
      _id: "60d5ec49f4860e59e2d81b33",
      name: "Women's Dress",
      description: "Elegant evening dress",
      images: [
        "https://plus.unsplash.com/premium_photo-1666855258034-8d2c36091ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1666855258034-8d2c36091ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      productType: "Dresses",
      category: "Women's Clothing",
    },
    {
      _id: "60d5ec49f4860e59e2d81b33",
      name: "Women's Dress",
      description: "Elegant evening dress",
      images: [
        "https://plus.unsplash.com/premium_photo-1666855258034-8d2c36091ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1666855258034-8d2c36091ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      productType: "Dresses",
      category: "Women's Clothing",
    },
    {
      _id: "60d5ec49f4860e59e2d81b33",
      name: "Women's Dress",
      description: "Elegant evening dress",
      images: [
        "https://plus.unsplash.com/premium_photo-1666855258034-8d2c36091ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1666855258034-8d2c36091ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      productType: "eev",
      category: "Women's Clothing",
    },
    {
      _id: "60d5ec49f4860e59e2d81b33",
      name: "Women's Dress",
      description: "Elegant evening dress",
      images: [
        "https://plus.unsplash.com/premium_photo-1666855258034-8d2c36091ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1666855258034-8d2c36091ec1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      productType: "anv",
      category: "Women's Clothing",
    },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/product");
      const data = await response.json();
      setProducts(data.data);
    };

    fetchProducts();
  }, []);

  const openUpdateModal = (product) => {
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const groupedProducts = products?.reduce((acc, product) => {
    const productTypeName = product.productType || "Undefined"; // Handle undefined productType
    if (!acc[productTypeName]) {
      acc[productTypeName] = [];
    }
    acc[productTypeName].push(product);
    return acc;
  }, {});

  return (
    <div>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              All products
            </h1>
          </div>
          <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
            <div className="flex items-center mb-4 sm:mb-0">
              <form className="sm:pr-3" action="#" method="GET">
                <label htmlFor="products-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                  <input
                    type="text"
                    name="search"
                    id="products-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search for products"
                  />
                </div>
              </form>
            </div>
            <button
              onClick={openAddModal}
              className="text-white bg-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex"
              type="button"
            >
              <LucidePlus className="w-5 h-5 mr-2" />
              Add new product
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        {Object.keys(groupedProducts).map((productType) => (
          <div key={productType} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Product Type: {productType}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {groupedProducts[productType].map((product) => (
                <div
                  key={product._id}
                  className="p-4 bg-white rounded-lg shadow dark:bg-gray-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {product.name}
                    </h4>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openUpdateModal(product)}
                        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <LucideEdit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openDeleteModal(product)}
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:focus:ring-red-900"
                      >
                        <LucideTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    {product.description}
                  </p>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    Category: {product.category || "Undefined"}
                  </p>
                  <div className="flex space-x-2">
                    {product.images.map((image, index) => (
                      <Image
                        width={500}
                        height={500}
                        key={index}
                        src={image}
                        alt={`${product.name}-${index}`}
                        className="w-16 h-16 rounded object-cover"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {isUpdateModalOpen && (
        <UpdateProductModal
          product={selectedProduct}
          onClose={() => setIsUpdateModalOpen(false)}
        />
      )}
      {isAddModalOpen && (
        <AddProductModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddProduct}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteProductModal
          product={selectedProduct}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductList;
