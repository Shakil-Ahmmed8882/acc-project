"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

const AddProductModal = ({ onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [productType, setProductType] = useState("");
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleAdd = () => {
    const newProduct = {
      name,
      description,
      images,
      productType,
      category,
    };

    console.log(newProduct);
    onAdd(newProduct);
    onClose();
  };

  const handleImageUpload = (result) => {
    const optimizedImageUrl = result.info.secure_url.replace(
      "/upload/",
      "/upload/c_fill,h_500,w_500/"
    );
    console.log(optimizedImageUrl);
    setImages([...images, optimizedImageUrl]);
    setUploading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Add Product
          </h2>
        </div>
        <div className="px-4 py-6">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productType"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Product Type
                </label>
                <input
                  type="text"
                  id="productType"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="images"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Images
                </label>
                <CldUploadWidget
                  uploadPreset="k7xqqfq1"
                  multiple
                  onUpload={handleImageUpload}
                >
                  {({ open }) => {
                    const onClick = (e) => {
                      e.preventDefault();
                      setUploading(true);
                      open();
                    };
                    return (
                      <button
                        onClick={onClick}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      >
                        Upload Images
                      </button>
                    );
                  }}
                </CldUploadWidget>
                {uploading && <p>Uploading images...</p>}
                <div className="mt-2 flex flex-wrap">
                  {images.map((img, index) => (
                    <Image
                      width={500}
                      height={500}
                      key={index}
                      src={img}
                      alt={`Uploaded ${index}`}
                      className="h-16 w-16 object-cover rounded-lg mr-2"
                    />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className="mb-4 md:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handleAdd}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg dark:bg-blue-700 hover:bg-blue-700"
              >
                Add
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddProductModal;
