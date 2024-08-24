import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import noDataFound from "@/assets/img/shared/not-found/not-found.png";

const SearchResults = ({ isSearch, setIsSwap, inputRef, filteredProducts }) => {
  console.log(filteredProducts);

  useEffect(() => {
    if (isSearch) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isSearch]);

  // Animation variants for the search container
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Animation variants for the list items
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={inputRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSearch ? "visible" : "hidden"}
      exit="exit"
      className={`${
        isSearch ? "visible" : "invisible"
      } absolute w-full md:w-1/2 bg-[white] rounded-lg h-[75vh] top-28 lg:top-32 overflow-x-hidden  right-0 md:right-8 z-50 p-4 py-8 overflow-y-auto`}
    >
      {filteredProducts?.length && (
        <div className="bg-[#F2F2F2] h-8 w-full">
          <>Results {filteredProducts[0]?.productType}</>
        </div>
      )}
      <div className="space-y-6 mt-8">
        {filteredProducts?.length ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product._id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href={`/product/cigar/${product?._id}`}>
                <div className="flex border-b border-[#e4e2e2] items-start gap-4 pb-2 hover:bg-[#efeeee] transition-all duration-500 cursor-pointer">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src={product.images[0]}
                      className="size-16 rounded-lg"
                    />
                  </div>
                  <div className="">
                    <h2 className="font-bold">{product.productType}</h2>
                    <p className="text-[gray] pt-1">
                      From {product.productType}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="flex items-center h-[50vh] justify-center w-full">
            <h1 className="text-3xl text-[#686868] text-center">No items match <br/> your search</h1>
              <Image
                width={500}
                height={500}
                className="absolute w-64 mix-blend-multiply scroll-smooth top-24 right-0 left-[30%] flex justify-center opacity-15 object-cover"
                src={noDataFound}
                alt=""
              />

          </div>
        )}
      </div>
    </motion.section>
  );
};

export default SearchResults;
