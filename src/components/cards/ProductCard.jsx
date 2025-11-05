"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, index = 0, detailPath = null }) {
  const detailUrl = detailPath || `/product/${product.id}`;
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
      className="group relative bg-black border-2 border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer h-full flex flex-col"
    >
      <Link href={detailUrl} className="absolute inset-0 z-20" />
      {/* Shining gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-700 pointer-events-none z-10" />
      
      {/* Product Image */}
      <div className="relative w-full h-40 bg-gradient-to-br from-gray-900 to-black overflow-hidden flex items-center justify-center">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="text-white/30 text-sm">No Image</div>
        )}
        {/* Shining border effect on image */}
        <div className="absolute inset-0 border-t border-white/0 group-hover:border-white/30 transition-all duration-500" />
        
        {product.discount > 0 && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 200 }}
            className="absolute top-3 right-3 bg-white text-black px-3 py-1.5 rounded-full text-xs font-black shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            -{product.discount}%
          </motion.div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-1.5">
          <span className="text-xs text-white/60 uppercase tracking-widest font-medium">
            {product.brand}
          </span>
        </div>
        <h3 className="text-base font-bold text-white mb-2 line-clamp-2 min-h-[2.5rem] group-hover:text-white transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-white/70 mb-3 line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "text-white fill-current drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
                    : "text-white/20"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-white/60 ml-1">
            ({product.rating})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div>
            {product.discount > 0 ? (
              <>
                <span className="text-xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  ${product.discountedPrice}
                </span>
                <span className="text-xs text-white/40 line-through ml-2">
                  ${product.originalPrice}
                </span>
              </>
            ) : (
              <span className="text-xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                ${product.price}
              </span>
            )}
          </div>
        </div>

        {/* Availability & Button */}
        <div className="flex items-center justify-between gap-2 mt-auto">
          <span
            className={`text-xs px-2 py-1 rounded-full border ${
              product.availability
                ? "bg-white/10 text-white border-white/30"
                : "bg-white/5 text-white/50 border-white/10"
            }`}
          >
            {product.availability ? "In Stock" : "Out of Stock"}
          </span>
          <motion.button
            disabled={!product.availability}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              product.availability
                ? "bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                : "bg-white/10 text-white/50 cursor-not-allowed"
            }`}
          >
          View
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

