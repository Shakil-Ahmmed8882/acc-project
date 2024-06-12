import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "./Product.css";

const ProductDetails = ({ product, showHighlight }) => {
  const { name, description, category, images } = product;
  const [showDescription, setShowDescription] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const swiperVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="rounded-md py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
          <div className="flex flex-col justify-center md:justify-end h-[500px] relative">
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: ".custom-pagination",
              }}
              className="w-full h-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={swiperVariants}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src={image}
                      alt={`${name} - ${index + 1}`}
                      className="object-contain w-full h-full m-0 p-0 rounded-md"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom pagination container */}
            <div className="custom-pagination w-full flex justify-center mt-4"></div>
          </div>
          <div className="w-full p-4">
            <h1 className="text-3xl font-semibold text-white pb-8 lg:text-4xl mt-6">
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
                className="flex items-center justify-between text-xl text-[#FAFAFA] border-b-2 border-white w-full py-2"
              >
                Description
                <span className="rounded-full p-2">
                  <svg
                    className="ml-8 size-3 shrink-0 fill-black dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="5"
                      width="12"
                      height="2"
                      rx="1"
                      className={`origin-center transform transition duration-300 ease-out `}
                    />
                    <rect
                      y="5"
                      width="12"
                      height="2"
                      rx="1"
                      className={`origin-center rotate-90 transform transition duration-300 ease-out ${
                        !showDescription && "!rotate-180"
                      }`}
                    />
                  </svg>
                </span>
              </button>
              {showDescription && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={descriptionVariants}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg text-[#b7b7b7] text-justify pt-2">
                    {description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        {showHighlight && images.length > 1 && (
          <div className="mt-16 p-4 pl-10">
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
                    className="w-full h-full object-contain cursor-pointer m-0 p-0"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
