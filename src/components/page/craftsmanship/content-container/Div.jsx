import { motion } from "framer-motion";
import { useState } from "react";

const Div = ({ children, width }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ width: isHovered ? "100%" : width }}
      className="relative overflow-hidden ease-linear cursor-pointer h-[400px] transition-all duration-500"
      
    >
      {children(isHovered)}
    </motion.div>
  );
};

export default Div;
