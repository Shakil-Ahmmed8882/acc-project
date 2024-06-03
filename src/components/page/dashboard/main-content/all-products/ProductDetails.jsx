import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const ProductDetails = ({ product, showHighlight }) => {
  const { name, description, category, images } = product;
  const [showDescription, setShowDescription] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-md my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center md:justify-end h-80 w-full relative">
            <motion.div className="w-full h-full relative flex items-center justify-center">
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full"
                >
                  <Image
                    width={500}
                    height={500}
                    src={images[currentIndex]}
                    alt={`${name} - ${currentIndex + 1}`}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full ${
                    index === currentIndex ? "bg-yellow-500" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-white pb-8 lg:text-4xl">
              {name}
            </h1>
            {showHighlight && (
              <p className="text-lg text-[#b7b7b7] mb-3">
                Category: {category}
              </p>
            )}
            <div className="mb-3">
              <button
                onClick={handleToggleDescription}
                className="flex items-center text-[#FAFAFA]"
              >
                Description: {showDescription ? <Minus /> : <Plus />}
              </button>
              <AnimatePresence>
                {showDescription && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-[#b7b7b7]"
                  >
                    {description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        {showHighlight && images.length > 1 && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-4 text-white pb-4">
              Additional Images
            </h2>
            <div className="flex gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`w-40 h-40 ${
                    index === currentIndex ? "border-2 border-yellow-500" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    width={500}
                    height={500}
                    src={image}
                    alt={`${name} - ${index + 1}`}
                    className="w-full h-full object-contain cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetails;
