"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

const AddProductModal = ({
  onAdd,
  singleProduct,
  setIsAddModalOpen,
}) => {
  const {
    productType: type,
    name: productName,
    description: productDescription,
    category: productCategory,
    images: productImages,
    video: productVideo,
    bestSeller: productBestSeller,
  } = singleProduct || {};

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState("");
  const [productType, setProductType] = useState("");
  const [category, setCategory] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (singleProduct) {
      setName(productName || "");
      setDescription(productDescription || "");
      setImages(productImages || []);
      setProductType(type || "");
      setCategory(productCategory || "");
      setVideo(productVideo || "");
      setBestSeller(productBestSeller || false);
    }
  }, [
    singleProduct,
    productName,
    productDescription,
    productImages,
    type,
    productCategory,
    productVideo,
    productBestSeller,
  ]);

  const handleAdd = async () => {
    // Validation check
    if (
      !name ||
      !description ||
      images.length === 0 ||
      !productType ||
      !category ||
      !video
    ) {
      setError("All fields are required.");
      return;
    }

    const newProduct = {
      name,
      description,
      images,
      video,
      productType,
      category,
      bestSeller,
    };
    onAdd(newProduct);
    setIsAddModalOpen(false);
  };

  const handleImageUpload = (result) => {
    const optimizedImageUrl = result.info.secure_url.replace(
      "/upload/",
      "/upload/c_fill,h_500,w_500/"
    );
    setImages([...images, optimizedImageUrl]);
    setUploadingImage(false);
  };

  const handleVideoUpload = (result) => {
    const optimizedVideoUrl = result.info.secure_url;
    setVideo(optimizedVideoUrl);
    setUploadingVideo(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg w-[650px] shadow-lg dark:bg-gray-800"
      >
        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {productName ? "Update Product" : "Add Product"}
          </h2>
        </div>
        <div className="px-4 py-6">
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
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
                      setUploadingImage(true);
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
                {uploadingImage && <p>Uploading images...</p>}
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
                  htmlFor="video"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Video
                </label>
                <CldUploadWidget
                  uploadPreset="k7xqqfq1"
                  resourceType="video"
                  onUpload={handleVideoUpload}
                >
                  {({ open }) => {
                    const onClick = (e) => {
                      e.preventDefault();
                      setUploadingVideo(true);
                      open();
                    };
                    return (
                      <button
                        onClick={onClick}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      >
                        Upload Video
                      </button>
                    );
                  }}
                </CldUploadWidget>
                {uploadingVideo && <p>Uploading video...</p>}
                {video && (
                  <div className="mt-2">
                    <video controls className="w-full rounded-lg">
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
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
              <div className="mb-4 md:col-span-2">
                <label
                  htmlFor="bestSeller"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Best Seller
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="bestSeller"
                    checked={bestSeller}
                    onChange={(e) => setBestSeller(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bestSeller"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Mark as Best Seller
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setIsAddModalOpen(false)}
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
                {productName ? "Update" : "Add"}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddProductModal;
