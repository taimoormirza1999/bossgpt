import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { imagesUrl1 } from "../../config/constants";

const StatItem = ({ position, value, label }) => {
  return (
    <div className={`absolute ${position}`}>
      <h3 className="font-primary text-[4.3rem] lg:text-7xl 2xl:text-8xl font-black primary-text-gradient">
        {value}
      </h3>
      <p className="font-primary text-sm font-medium primary-text-gradient -mt-3.5 lg:mt-0">
        {label}
      </p>
    </div>
  );
};

export default function Tool() {
  const [marginTop, setMarginTop] = useState("");

  useEffect(() => {
    const updateMargin = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;

      if (height >= 700 && height <= 800 && width >= 1280) {
        setMarginTop("lg:-mt-1");
      } else {
        setMarginTop("-mt-14 lg:-mt-10 xl:-mt-44");
      }
      console.log(height, width);
    };

    updateMargin(); // Run on initial load
    window.addEventListener("resize", updateMargin); // Listen for window resize

    return () => window.removeEventListener("resize", updateMargin); // Cleanup
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className={`relative mx-auto flex justify-center ${marginTop} z-0 mb-0 lg:w-[95%] xl:w-full`}
    >
      <StatItem position="left-5 lg:left-32 -top-32 lg:-top-40" value="100+" label="Satisfied Customers Globally" />
      <StatItem position="right-5 lg:right-32 -bottom-24 lg:-top-96" value="10x" label="FASTER PRODUCTIVITY" />
      
      <Image
        src={imagesUrl1}
        height={1200}
        width={1400}
        alt=""
        className="w-[85%] lg:w-[65rem] xl:w-[60rem] 2xl:w-[73vw]"
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="h-[100px] w-[100px] bg-red-500"></div>
      </div>
    </motion.div>
  );
}
