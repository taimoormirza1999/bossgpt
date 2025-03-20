"use client";
import React,  from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "./utils/ButtonPrimary";
import inter from "@/app/InterFont";
import AICloneSignup from "./AICloneSignup";
import Image from "next/image";
import cloudImage from'@/assets/cloud.png';
import ShapeImage from'@/assets/shape_style.svg';

const Product = () => {

  return (
    <motion.div
      className={`relative lg:w-full h-auto mt-10 min-h-[70vh] flex items-center  justify-between md:mt-20 mx-auto  mb-7 md:mb-10 lg:mb-20 xl:mb-0 pt-20 lg:pb-16 font-normal ${inter.className}`}

    >

      <motion.div
        // layout
        // initial={{ opacity: 0, y: 30 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 1.5, delay: 0.3 }}
        className="page-max-width mx-auto z-10"
      >
        <div className="lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-20  py-0">
          <div className="">
            <motion.div
              layout
              // initial={{ opacity: 0, y: 30 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 1.2, delay: 0.5 }}
              className="space-y-6 lg:text-start z-50"
            >

              {/* Title */}
              {/* <SectionHeading text={"BE PRODUCTIVE WITH"} text2={""}/> */}
              <div className=" mb-6 md:mb-5 lg:mt-10" >
                <h2 className="text-[2rem] text-center lg:text-start lg:text-[2.75rem] font-extrabold leading-tight  text-white/90 font-primary" >BE PRODUCTIVE WITH<br /><span className='-py-4'>BUILT-IN AI ASSISTANT</span></h2>
              </div>
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="text-white/90 text-base max-w-lg font-light lg:font-medium text-center lg:text-start w-95 mx-auto lg:w-full"
              >
                Maximize efficiency with our AI-powered assistant, designed to streamline your workflow. Whether you need smart suggestions, instant answers, or automated tasks, our AI is here to help. Stay focused, work faster, and achieve more—all with intelligent assistance at your fingertips.
              </motion.p>
              <ul className="text-white/90 text-sm list-inside font-medium ">


              </ul>
            </motion.div>

            {/* Buttons */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.14 }}
              className="flex flex-col lg:flex-row items-center gap-8 mt-5 justify-center lg:justify-start"
            >
              <ButtonPrimary
                // primary={true}
                banner="true"
                text="TRY NOW"
                url={process.env.TRY_NOW_LINK}
                className="z-10 relative"
                tag="a"
              />
            </motion.div>
          </div>
          {/* <Image 
      width={1920} 
      height={1080}
      src={ShapeImage.src} 
      alt="Banner" 
     className="w-full absolute md:w-98 h-[38vh] sm:h-[60vh] md:h-full lg:h-full  object-cover -z-10 left-10 "
    /> */}

          {/* Right Section - Image */}
          {/* <div className="my-5">
          <StackedImages/>
          </div> */}
          <motion.div
            layout
            // initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1.2, delay: 0.9 }}
            className="relative "
          >
            {/* bottom Left */}
            <div className="absolute -left-36 bottom-3">
            <Image
            src={cloudImage.src}
            height={500}
            width={500}
            alt="Cloud"
            className=" w-[20rem] lg:w-[24rem] h-auto bg-cover"
            > 
            </Image>
            </div>
             {/* top right */}
            <div className="absolute -right-32 top-3 scale-y-[-1]">
            <Image
            src={cloudImage.src}
            height={500}
            width={500}
            alt="Cloud"
            className=" w-[20rem] lg:w-[24rem] h-auto bg-cover"
            > 
            </Image>
            </div>
            <AICloneSignup />

          </motion.div>


        </div>
      </motion.div>
    </motion.div>
  );
};

export default Product;
