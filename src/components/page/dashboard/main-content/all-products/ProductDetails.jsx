import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const { name, description, category, images } = product;

  return (
    <motion.div
      //  initial animation from right to left
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" h-screen absolute -inset-8 mx-auto bg-[#1A1A1A] shadow-md rounded-md p-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" justify-center md:justify-end h-80 grid w-full relative">
            {/* // Displaying the first image in detil */}
            <Image
              width={500}
              height={500}
              src={images[0] || ""}
              alt={name}
              className=" object-contain w-full h-full absolute inset-0 block"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold  text-white pb-8">{name}</h1>
            <p className="text-lg text-[#b7b7b7] mb-3">Category: {category}</p>
            <p className="text-lg text-[#b7b7b7] mb-3">{description}</p>
          </div>
        </div>
        {/* Additional images section */}
        {images.length > 1 && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-4 text-white pb-4">
              Additional Images
            </h2>
            <div className="flex gap-4">
              {images.slice(1).map((image, index) => (
                <div key={index} className="w-40 h-40">
                  <Image
                    width={500}
                    height={500}
                    src={image}
                    alt={`${name} - ${index + 2}`}
                    className=" w-full h-full object-contain"
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
