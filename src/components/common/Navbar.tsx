"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Search, User, LogIn } from "lucide-react";

export default function Navbar(): React.JSX.Element {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/10 py-2 bg-black/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4  sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center cursor-pointer">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Image
              src="/images/deals.png"
              alt="Deals Logo"
              width={120}
              height={40}
              className="h-auto w-auto border-2 border-gray-500 rounded-xl p-1 object-contain shadow-[0_0_5px_#d1d5db] priority"
            />
          </motion.div>
        </Link>

      
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="hidden flex-1 items-center justify-center px-4 md:flex"
        >
          <div className="relative w-full max-w-lg">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
              <input
                type="text"
                placeholder="Search for products, deals..."
                className="w-full rounded-full border border-white/20 bg-white/5 px-10 py-2.5 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 focus:outline-none transition-all duration-200"
              />
            </motion.div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="md:hidden"
        >
          <button className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
            <Search className="h-5 w-5" />
          </button>
        </motion.div>


        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 sm:flex"
          >
            <User className="h-4 w-4" />
            <span>Account</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition-all duration-200"
          >
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="sm:hidden rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          >
            <User className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
