import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Div = ({ children, width }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define a media query to check if the device width is less than 768px
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Use the media query to determine the width animation
      animate={{ width: isHovered || isSmallScreen ? "100%" : width }}
      className="relative overflow-hidden ease-linear cursor-pointer h-[400px] transition-all duration-500"
    >
      {children(isHovered)}
    </motion.div>
  );
};

export default Div;
