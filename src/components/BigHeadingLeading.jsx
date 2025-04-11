import React from "react";
import { motion } from "framer-motion";
import useScreenStore from "../../store/useScreenStore";

function BigHeadingLeading({ text, text2, className, smallClassName }) {
  const isMobileSScreen = useScreenStore((state) => state.isMobileSScreen);
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className={`${
        isMobileSScreen
          ? ` leading-[2.7rem] ${smallClassName ? smallClassName : "text-[2rem]"}`
          : `${smallClassName ? smallClassName : "text-[3.5rem] leading-[3.7rem]"}`
      } md:text-4xl lg:text-[3.4rem] uppercase text-center lg:leading-[3.7rem] lg:text-6xl 2xl:text-7xl font-primary font-black text-white/90 ${className}`}
    >
      <motion.span className="block md:inline-block">{text}</motion.span>
      {text2 && <motion.span className="block">{text2}</motion.span>}
    </motion.h1>
  );
}

export default BigHeadingLeading;
