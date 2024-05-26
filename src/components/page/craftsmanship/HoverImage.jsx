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
  title,
  description,
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
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 grid items-center py-24 px-16 justify-center opacity-0 hover:opacity-100 transition-opacity">
        <h2 className="text-white text-4xl leading-10">{title}</h2>
        <div className="text-white leading-6">{description}</div>
      </div>
    </motion.div>
  );
};

export default HoverImage;
