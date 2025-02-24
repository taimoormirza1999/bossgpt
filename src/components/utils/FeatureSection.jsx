import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const FeatureSection = ({ title, features, imageSrc }) => {
  return (
    <section className="bg-mbg-primary text-white/70 md:py-20 px-6 font-normal">
      <SectionWrapper page_max_width={false}>
        <div className="page-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Content */}
          <div>
            {features.map((feature, index) => (
              <motion.div   initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay:0.4 }} key={index} className="mb-6">
                <div className="flex mb-4 items-center space-x-2 text-lg text-white/90 font-semibold">
                  <span className="p-2.5 me-3 border-[0.9px] bg-white/5 border-white/80 rounded-circle ">
                    {feature.icon}
                  </span>
                  <span>{feature.title}</span>
                </div>
                <p className="text-white/70 leading-7 text-base font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side Illustration */}
          <div className="w-full h-auto relative flex items-center justify-center">
      {/* Image Thumbnail */}
      <Image
        className="object-contain w-full z-10 relative"
        src={imageSrc}
        alt={title}
        width={500}
        height={500}
      />

      {/* Floating Play Button */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 1.05 }}
        animate={{
          scale: [1.15, 1.3, 1.15],
          borderRadius: ["30% 70%", "50% 50%", "70% 30%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Play Button Wrapper */}
        <div className="absolute rounded-full p-3 md:p-4 shadow-lg bg-black bg-opacity-50">
          <motion.div
            whileHover={{
              rotate: 180,
              transition: { duration: 1, ease: "easeInOut" },
            }}
          >
            <FaPlay className="text-white p-2 w-12 h-12 md:w-14 md:h-14" />
          </motion.div>
        </div>

        {/* Glowing Background Effect */}
        <div className="w-full h-full bg-gradient-to-tl from-white/70 to-white/10 blur-2xl opacity-60 rounded-full" />
      </motion.div>
    </div>
         </div>
      </SectionWrapper>
    </section>
  );
};

export default FeatureSection;
