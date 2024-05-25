"use client";

import { motion } from "framer-motion";

const InitialAnimateContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default InitialAnimateContainer;
