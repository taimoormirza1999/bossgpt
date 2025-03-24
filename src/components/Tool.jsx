import React from "react";
// import toolImage from "../assets/tool.png";
import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 2 }}
    className="relative mx-auto flex justify-center -mt-14 lg:-mt-48  z-20 mb-0">
    
      <StatItem position="left-5 lg:left-32 -top-32 lg:-top-40" value="100+" label="Satisfied Customers Globally" />
      <StatItem position="right-5 lg:right-32 -bottom-24  lg:-top-96 " value="10x" label="FASTER PRODUCTIVITY" />
      {/* StatItem position="left-32 -top-16 lg:-top-52" value="100+" label="Satisfied Customers Globally" />
      <StatItem position="right-32 -top-80" value="10x" label="FASTER PRODUCTIVITY" /> */}
      <Image
        src={"https://res.cloudinary.com/da6qujoed/image/upload/v1742837443/tool_afejvm.png"}
        height={1200}
        width={1400}
        alt=""
        className="w-[85%] lg:w-[65rem] xl:w-[60rem] 2xl:w-[80rem]"
      />
    </motion.div>
  );
}
