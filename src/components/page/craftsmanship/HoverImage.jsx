import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HoverImage = ({
  src,
  alt,
  hovered,
  setHovered,
  hoverKey,
  initialWidth,
  hoverWidth,
}) => {
  return (
    <motion.div
      className="relative transition-all duration-200"
      style={{
        width: hovered === hoverKey ? hoverWidth : initialWidth,
      }}
      onMouseEnter={() => setHovered(hoverKey)}
      onMouseLeave={() => setHovered(null)}
      animate={{
        width:
          hovered === hoverKey ? hoverWidth : hovered ? "20%" : initialWidth,
      }}
      transition={{ duration: 0.5 }}
    >
      <Image
        width={600}
        height={400} // fixed height
        src={src}
        alt={alt}
        className="w-full h-[450px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <span className="text-white text-lg">{alt}</span>
      </div>
    </motion.div>
  );
};

export default HoverImage;
