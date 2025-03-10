"use client";
import React, { useState } from "react";
import msaText from "../assets/msa_text.png";
import { motion } from "framer-motion";
import Button from "./utils/Button";
import Image from "next/image";
// import { useMediaQuery } from "react-responsive";
import ButtonPrimary from "./utils/ButtonPrimary";
import inter from "@/app/InterFont";
import Link from "next/link";
import CheckIconSvg from "./utils/icons/CheckIconSvg";
import AICloneSignup from "./AICloneSignup";
import SectionHeading from "./utils/SectionHeading";

// const images = [
//   {
//     src: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
//     alt: "Issue Tracking Board",
//     rotate: -10,
//     zIndex: 30,
//   },
//   {
//     src: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
//     alt: "Issue Tracking Board",
//     rotate: 0,
//     zIndex: 20,
//   },
//   {
//     src: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
//     alt: "Issue Tracking Board",
//     rotate: 10,
//     zIndex: 1,
//   },
// ];

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

const Product = () => {
  // const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const [email, setEmail] = useState("");

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
        <div className=" mx-auto w-90 lg:w-full page-max-width grid grid-cols-1 lg:grid-cols-2 gap-16  py-0">
          <div className="">
            <motion.div
              layout
              // initial={{ opacity: 0, y: 30 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 1.2, delay: 0.5 }}
              className="space-y-6  lg:text-start z-50"
            >
             
              {/* Title */}
             {/* <SectionHeading text={"BE PRODUCTIVE WITH"} text2={""}/> */}
             <div className=" mb-6 md:mb-5 lg:mt-10" >
    <h2 className="text-[2.75rem] font-extrabold leading-tight  text-white/90 font-primary" >BE PRODUCTIVE WITH<br/><span className='-py-4'>BUILT-IN AI ASSISTANT</span></h2>
  </div>
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="text-white/90 text-base max-w-lg font-medium"
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
              className="flex flex-col lg:flex-row  gap-8 mt-5 "
            >
              <ButtonPrimary
                // primary={true}
                banner="true"
                text="Try now"
                url="https://vnay.com/sim/board/?page=login"
              />
            </motion.div>
          </div>
          
          {/* Right Section - Image */}
          {/* <div className="my-5">
          <StackedImages/>
          </div> */}
          <motion.div
            layout
            // initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1.2, delay: 0.9 }}
            className="relative"
          >
            <AICloneSignup />
         
          </motion.div>

         
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Product;
