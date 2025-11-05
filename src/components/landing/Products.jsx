"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { getProducts } from "@/app/service/product";
import { productcarddetails } from "@/app/transform";
import ProductCardAnimated from "@/components/cards/ProductCardAnimated";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        const transformedData = data.map(productcarddetails);
        setProducts(transformedData);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-lg text-white/60">Loading products...</div>
      </div>
    );
  }

  const displayedProducts = products.slice(0, 4);

  return (
    <div className="container mx-auto px-4  py-6 lg:py-16">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
          style={{
            textShadow: "0 0 30px rgba(255,255,255,0.3)",
            letterSpacing: "0.05em"
          }}
        >
          PRODUCTS
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
          style={{ boxShadow: "0 0 10px rgba(255,255,255,0.5)" }}
        />
      </motion.div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {displayedProducts.map((product, index) => (
          <ProductCardAnimated key={product.id} product={product} index={index} />
        ))}
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center"
      >
        <motion.button
          onClick={() => router.push("/productlisting")}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(255,255,255,0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className=" px-4 py-2 lg:px-8 lg:py-4 bg-white text-black font-bold rounded-xl text-lg border-2 border-white hover:bg-white/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          View More
        </motion.button>
      </motion.div>
    </div>
  );
}
