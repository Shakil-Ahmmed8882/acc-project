import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";

const AdminProductDetails = ({ product }) => {
  const { name, description, category, images } = product;
  const [showDescription, setShowDescription] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const swiperVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
      setCurrentIndex(index);
    }
  };

  return (
    <>
      <div className="container mx-auto rounded-md pt-10 pb-32 bg-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center md:justify-end h-[500px] relative">
            <Swiper
              onSwiper={setSwiperInstance}
              onSlideChange={handleSlideChange}
              spaceBetween={10}
              slidesPerView={1}
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
            <div className="custom-pagination w-full flex justify-center mt-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`pagination-dot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
          <div className="w-full p-4">
            <h1 className="text-3xl font-semibold text-white pb-8 lg:text-4xl mt-6">
              {name}
            </h1>
            <p className="text-lg text-gray-400 mb-3">Category: {category}</p>
            <div className="mb-3">
              <button
                onClick={handleToggleDescription}
                className="flex items-center justify-between text-xl text-gray-200 border-b-2 border-gray-400 w-full py-2 transition duration-300 hover:border-yellow-500"
              >
                Description
                <span className="rounded-full p-2">
                  <svg
                    className="ml-8 size-3 shrink-0 fill-black dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
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
              <AnimatePresence>
                {showDescription && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={descriptionVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-lg text-gray-400 text-justify pt-2">
                      {description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        {images.length > 1 && (
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
                  } transition-all duration-300 ease-in-out`}
                  onClick={() => goToSlide(index)}
                >
                  <Image
                    width={500}
                    height={500}
                    src={image}
                    alt={`${name} - ${index + 1}`}
                    className="w-full h-full object-contain cursor-pointer m-0 p-0 rounded-md hover:shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          background-color: #1a1a1a;
        }
        .pagination-dot {
          width: 10px;
          height: 10px;
          background-color: #fff;
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
          position: relative;
          transition: transform 0.3s;
        }
        .pagination-dot.active::after {
          content: "";
          position: absolute;
          top: -4px;
          left: -4px;
          width: 18px;
          height: 18px;
          border: 2px solid #fff;
          border-radius: 50%;
        }
        .pagination-dot:hover {
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};

export default AdminProductDetails;
