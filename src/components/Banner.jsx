"use client";
import React, { useState } from "react";
import bannerImage from "../assets/background_banner.png";
import { motion } from "framer-motion";
import ButtonPrimary from "./utils/ButtonPrimary";
import inter from "@/app/InterFont";

const Banner = () => {
  return (
    <motion.div
      className={`-z-10 relative lg:w-full h-auto  min-h-[100vh] lg:-mt-[0vh] flex items-center  justify-between md:mt-20 mx-auto  mb-7 md:mb-10 lg:mb-20 xl:mb-0 pt-20 lg:pb-16 font-normal ${inter.className}`}
      style={{
        backgroundImage: `url(${bannerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        color: "white",
        // zIndex: -2,
      }}
    >
      <motion.div className=" relative page-max-width mx-auto ">
        <div className=" mx-auto w-90 lg:w-full page-max-width grid grid-cols-1 lg:grid-cols-1 gap-12 items-center py-0">
          <div className="w-full">
            <motion.div
              layout
              // initial={{ opacity: 0, y: 30 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 1.2, delay: 0.5 }}
              className="space-y-6 text-center lg:text-start "
            >
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-[2.9rem] md:text-4xl lg:text-[3.4rem] uppercase text-center  lg:leading-[3.7rem] lg:leading-auto lg:text-7xl 2xl:text-8xl font-primary font-black text-white/90"
              >
                Meet Your
                <br /> AI Boss
              </motion.h1>
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="text-white/90 text-base max-w-lg  text-center"
              >
                It gives you tasks, sets deadlines, and keeps you on track. It
                might even virtually yell at you for missing deadlines.
              </motion.p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.14 }}
              className="flex flex-col lg:flex-row items-center gap-8 mt-5 justify-center"
            >
              <ButtonPrimary
                // primary={true}
                banner="true"
                text="Try now"
                url="https://vnay.com/sim/board/?page=login"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
