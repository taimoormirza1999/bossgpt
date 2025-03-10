"use client";
import React, { useState } from "react";
import bannerImage from "../assets/background_banner.png";
import { motion } from "framer-motion";
import Button from "./utils/Button";
import Image from "next/image";
// import { useMediaQuery } from "react-responsive";
import ButtonPrimary from "./utils/ButtonPrimary";
import inter from "@/app/InterFont";
import Link from "next/link";
import CheckIconSvg from "./utils/icons/CheckIconSvg";
import AICloneSignup from "./AICloneSignup";

const Banner = () => {
  // const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const [email, setEmail] = useState("");

  return (
    <motion.div
      className={`-z-10 relative lg:w-full h-auto  min-h-[100vh] lg:-mt-[10vh] flex items-center  justify-between md:mt-20 mx-auto  mb-7 md:mb-10 lg:mb-20 xl:mb-0 pt-20 lg:pb-16 font-normal ${inter.className}`}
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
                className="text-[2.4rem] uppercase text-center md:text-4xl leading-[3rem] lg:leading-auto lg:text-8xl font-primary font-black text-white/90"
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
              {/* <ul className="text-white/90 text-sm list-inside font-medium ">
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="flex mb-2"
                >
                  {" "}
                  <CheckIconSvg height={24} width={24} /> Sets deadlines for you
                  – Stay on schedule without stress.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="flex mb-2"
                >
                  <CheckIconSvg height={24} width={24} /> Tracks your tasks –
                  Never forget what’s next on your to-do list.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                  className="flex mb-2"
                >
                  <CheckIconSvg height={24} width={24} />
                  Reminds you – It’ll even send reminders if you're falling
                  behind!
                </motion.li>
                <motion.input
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.16 }}
            type="email"
            placeholder="Type your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 px-4 py-3 rounded-lg w-[93%]  bg-white/80 text-mbg-primary placeholder-gray-400 border-[1.5px]  border-mbg-level1/30 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
              
              </ul> */}
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
