import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 ornament">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-400 max-w-screen-md mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;