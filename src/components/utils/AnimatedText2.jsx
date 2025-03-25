import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["finshing any project", "making progress", "completing tasks", "reaching goals", "achieving success"];

const AnimatedText2 = ({isMobileSScreen}) => {
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
      transition={{ duration: 2.1, ease: "easeInOut" }}
      className={`text-[1.5rem] text-center w-[90%] mx-auto lg:leading-auto md:w-full lg:text-[3rem] font-light leading-tight font-primary lg:font-light  text-white/90 mb-4 lg:mb-10 `}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="block md:inline-block"
      >
        Tired of not
      </motion.span>
      <motion.span
        key={index} // Forces Framer Motion to detect a change
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="block md:inline-block italic md:not-italic font-medium"
      >
        &nbsp;{words[index]}?
      </motion.span>
    </motion.h1>
  );
};

export default AnimatedText2;
