"use client";

import { motion } from "motion/react";
import ProductCardStatic from "./ProductCardStatic";

export default function ProductCardAnimated({ product, index = 0, detailPath = null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -12,
        scale: 1.03,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
    >
      <ProductCardStatic product={product} index={index} detailPath={detailPath} />
    </motion.div>
  );
}

