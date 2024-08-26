// components/ProductItem.js

import Link from "next/link";
import { motion } from "framer-motion";
import ImageWithAlt from "./ImageWithAlt";

const ProductItem = ({ product, itemVariants }) => {
  return (
    <motion.div
      key={product._id}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <Link href={`/product/cigar/${product._id}`}>
        <div className="flex items-start gap-4 pb-4 hover:bg-[#1a1919c5] transition-all duration-500 cursor-pointer">
          <div>
            <ImageWithAlt
              width={100}
              height={100}
              src={product.images[0]}
              alt={product.name}
              className="size-16 rounded-lg"
            />
          </div>
          <div>
            <h2 className="font-bold text-white">{product.productType}</h2>
            <p className="text-[#c5c5c5] pt-1">From {product.name}</p>
          </div>
        </div>
      </Link>
      <div className="border-b border-[#3b3a3a]"></div>
    </motion.div>
  );
};

export default ProductItem;
