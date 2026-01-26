"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-32 bg-[url('/food.png')] bg-cover text-white"
    >
      <h1 className="text-5xl font-bold">Delicious Food</h1>
      <p className="mt-4">Fresh • Tasty • Fast</p>
    </motion.div>
  );
}
