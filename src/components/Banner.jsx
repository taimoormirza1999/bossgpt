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

const images = [
  {
    src: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    alt: "Issue Tracking Board",
    rotate: -10,
    zIndex: 30,
  },
  {
    src: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    alt: "Issue Tracking Board",
    rotate: 0,
    zIndex: 20,
  },
  {
    src: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    alt: "Issue Tracking Board",
    rotate: 10,
    zIndex: 1,
  },
];

// const StackedImages = () => {
//   return (
//     <div className="relative w-full flex justify-center items-center">
//       {images.map((image, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 0.9, y: 50 }}
//           whileInView={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
//           viewport={{ amount: 0.5, once: true }}
//           className="absolute "
//           style={{
//             zIndex: image.zIndex,
//             transform: `rotate(${image.rotate}deg) translate(${image.zIndex * 5}px) `,
//           }}
//         >
//           <Image
//             src={image.src}
//             alt={image.alt}
//             width={1280}
//             height={720}
//             className="rounded-lg shadow-xl"
//             loading="lazy"
//           />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

const Banner = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`relative w-85 lg:w-full  h-auto mt-10 md:mt-20 lg:mt-24 mx-auto page-max-width mb-7 md:mb-10 lg:mb-20 xl:mb-0 pb-10 pt-16 lg:pb-16 font-normal ${inter.className}`}
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <div className="mx-auto page-max-width grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="space-y-6 text-center lg:text-start"
          >
            <Image
              height={50}
              width={50}
              alt="hello"
              className="w-28 mx-auto lg:mx-0 mt-5"
              src="/laurel.svg"
            />
            {/* Title */}
            <h1 className="text-[2.4rem] md:text-5xl leading-[3rem] lg:leading-auto font-semibold lg:font-bold text-white/90">
              Hire a Boss – Let AI Handle Your Project{" "}
            </h1>
            {/* Subtitle */}
            <p className="text-white/70 text-base max-w-lg font-medium">
            Stop stressing over deadlines—get an AI boss that organizes, plans, and helps you complete your projects effortlessly.

            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            <ButtonPrimary primary={true} text="Try now" url="https://vnay.com/sim/board/?page=login" />
            <ButtonPrimary
              text="Introducing Boss AI Project Manager"
              url="https://vnay.com/sim/board/?page=login"
              icon={true}
              secondary={true}
            />
          </motion.div>

          {/* Right Section - Image */}
          {/* <div className="my-5">
          <StackedImages/>
          </div> */}
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="relative"
          >
            <Image
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              alt="Issue Tracking Board"
              width={1280}
              height={720}
              className="rounded-lg shadow-xl"
              loading="lazy"
            />
          </motion.div>
         
          {/* <motion.div
          layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="relative"
          >
            <Image
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              alt="Issue Tracking Board"
              width={1280}
              height={720}
              className="rounded-lg shadow-xl"
              loading="lazy"
            />
          </motion.div> */}
          {/* <motion.div
          layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="relative"
          >
            <Image
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              alt="Issue Tracking Board"
              width={1280}
              height={720}
              className="rounded-lg shadow-xl"
              loading="lazy"
            />
          </motion.div> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
