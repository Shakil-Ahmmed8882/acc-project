// components/SearchResults.js

import { motion } from "framer-motion";
import ProductItem from "./ProductItem";
import NoDataFound from "./NoDataFound";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { containerVariants, itemVariants } from "./animation";

const SearchResults = ({ isSearch, inputRef, products, trigger }) => {
  // lock body when dropdown reveal from search bar
  useBodyScrollLock(isSearch);

  return (
    <motion.section
      ref={inputRef}
      variants={containerVariants}
      initial="hidden"
      animate={products && trigger ? "visible" : "hidden"}
      exit="exit"
      className={`${
        isSearch && trigger  ? "z-50 visible" : " z-50 invisible"
      } absolute w-full md:w-1/2 bg-[#111111] rounded-lg h-[75vh] top-28 lg:top-32 overflow-x-hidden right-0 md:right-8 z-50 p-4 py-8 overflow-y-auto`}
    >
      {products?.length && (
        <div className="bg-[#181717] text-white py-4 px-2 flex items-center w-full">
          <>
            Results from{" "}
            <span className="text-[#03bc03] font-bold ml-2">
              {trigger ? `${trigger}` : " all"}
            </span>
          </>
        </div>
      )}
      <div className="space-y-6 mt-8">
        {products?.length ? (
          <>
            {products.slice(0, 3).map((product) => (
              <ProductItem
                key={product._id}
                product={product}
                itemVariants={itemVariants}
              />
            ))}
            {products.length > 3 && (
              <div className="text-center text-[#c5c5c5] pt-4">
                <p>Hit enter to see more...</p>
              </div>
            )}
          </>
        ) : (
          <NoDataFound />
        )}
      </div>
    </motion.section>
  );
};

export default SearchResults;
