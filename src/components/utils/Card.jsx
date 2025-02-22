"use client";
import { motion } from "framer-motion";
import Image from "next/image";


const Card = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="w-full bg-[#111] p-6 rounded-xl border border-white/10 shadow-lg"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-72">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-lg object-contain pointer-events-none"
        />
      </div>
      <h3 className="text-white text-xl font-semibold mt-4">{title}</h3>
      <p className="text-white/60 text-sm mt-2">{description}</p>
    </motion.div>
  );
};

export default Card;
