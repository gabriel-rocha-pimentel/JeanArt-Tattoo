import React from 'react';
import { motion } from 'framer-motion';

const PageLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-black min-h-screen"
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.div>
  );
};

export default PageLayout;