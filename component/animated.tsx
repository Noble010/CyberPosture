"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Animated() {
  const texts = ["Secured.", "Protected."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <motion.h1
        key={texts[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="text-6xl text-[#FFFFFF] font-extrabold md:text-[240px] leading-[120px] md:leading-[290px] "
      >
        {texts[index]}
      </motion.h1>
    </div>
  );
}
