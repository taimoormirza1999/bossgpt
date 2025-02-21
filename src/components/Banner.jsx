"use client";
import React from "react";
import msaText from "../assets/msa_text.png";
import { motion } from "framer-motion";
import Button from "./utils/Button";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import ButtonPrimary from "./utils/ButtonPrimary";
import inter from "@/app/InterFont";
import Link from "next/link";
const Banner = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <motion.div
      initial={isLargeScreen ? { opacity: 0, y: 150 } : { opacity: 0, y: 70 }}
      whileInView={
        isLargeScreen
          ? {
              opacity: 1,
              y: 0,
              transition: { duration: 1.8, ease: "easeInOut" },
            }
          : {
              opacity: 1,
              y: 0,
              transition: { duration: 1.8, ease: "easeInOut" },
            }
      }
      viewport={isLargeScreen ? { once: true } : {}}
      // whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 1,
      }}
      className={`relative  h-auto mt-16 md:mt-20 lg:mt-24  mx-auto page-max-width mb-7 md:mb-10 lg:mb-20 xl:mb-0  pb-10 pt-16 lg:pb-16 font-normal ${inter.className}`}
    >
      
      <div
      >
        <div className=" mx-auto page-max-width grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          {/* Left Section - Title & Description */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              {/* <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
            </svg> */}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold">
            BossGPT – Smart AI for Project Success          </h1>

            {/* Subtitle */}
            <p className="text-gray-400 max-w-lg font-medium">
            Handle your projects effortlessly with AI-driven task management, smart suggestions, and automated workflows.            </p>
          </div>
          <div className="flex items-center  gap-8">
        <ButtonPrimary primary={true} text="Try now" url="/" />
        <ButtonPrimary
          primary={true}
          text="Introducing Customer Requests"
          url="/"
          icon={true}
        />
      </div>
          {/* Right Section - Image */}
          <div className="relative">
            <Image
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              alt="Issue Tracking Board"
              width={1280}
              height={720}
              className="rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Parallax Background Image */}
      {/* {isLargeScreen ? (
        // <Image
        //   height={1080}
        //   width={1920}
        //   layout="responsive"
        //   alt="Banner"
        //   src={"/hero_banner.png"}
        //   className=" w-full mx-auto lg:w-90 2xl:w-93  h-[44vh] sm:h-[60vh] lg:h-auto object-cover object-[25%_30%] rounded-lg scale-105 banner_img"
        // />
      ) : (
        <>
        // <img
        //   alt="Banner"
        //   src={"/hero_banner.png"}
        //   className=" w-full mx-auto lg:w-90 2xl:w-93  h-[44vh] sm:h-[60vh] lg:h-auto object-cover object-[25%_30%] rounded-lg scale-105 banner_img"
        // />
      )} */}
      {/* Parallax Foreground Content */}
      {/* <motion.div
        className="absolute bottom-10 md:right-16 lg:right-28 md:left-auto left-0 right-0 z-10 mx-auto w-max"
        style={{ transform: "none", top: "calc(100% - 35%)" }}
      >
        <Image
          height={500}
          width={500}
          src={msaText.src}
          alt="MSAAcademy-text"
          className="-mt-7 -ml-1 w-40 h-auto shadow-2xl object-contain mb-3 md:hidden shadow-pink200/65"
        />
        <div className="animate-bounceSlow mt-9 md:mt-auto z-100 ">
          <Button isRounded={false} />
        </div>
      </motion.div> */}
    </motion.div>
  );
};

export default Banner;
