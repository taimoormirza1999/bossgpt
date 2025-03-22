import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Boss", "Manager", "Coach", "Assistant"];

const AnimatedText = ({isMobileSScreen}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className={`${
        isMobileSScreen
          ? "text-[2.5rem] leading-[2.7rem]"
          : "text-[3.0rem] leading-[3.7rem]"
      } md:text-4xl lg:text-[3.4rem] uppercase text-center lg:leading-[3.7rem] lg:text-7xl 2xl:text-8xl font-primary font-black text-white/90`}
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="block lg:inline-block"
      >
        Meet Your
      </motion.span>
      <motion.span
        key={index} // Forces Framer Motion to detect a change
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="block lg:inline-block"
      >
        &nbsp;AI {words[index]} 🚀
      </motion.span>
    </motion.h1>
  );
};

export default AnimatedText;
