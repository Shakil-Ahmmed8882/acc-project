import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SlideInText = ({ text }) => {
  const getDirection = (text) => {
    const title = text?.toLowerCase();
    if (title === "contact acc") {
      return "right";
    } else {
      return "left";
    }
  };

  const direction = getDirection(text);

  const variants = {
    hidden:
      direction === "left"
        ? { x: "-50px", opacity: 0 }
        : { x: "50px", opacity: 0 },
    visible: { x: "0px", opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: .6 }}
    >
      {text}
    </motion.div>
  );
};

SlideInText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SlideInText;
