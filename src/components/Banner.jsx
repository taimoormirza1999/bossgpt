"use client";
import React from "react";
// import bannerImage from "../assets/background_banner.png";
import { motion } from "framer-motion";
import ButtonPrimary from "./utils/ButtonPrimary";
import inter from "@/app/InterFont";
import useScreenStore from "../../store/useScreenStore";
import Image from "next/image";
// import AnimatedText from "./utils/AnimatedText";
import AnimatedText2 from "./utils/AnimatedText2";
import BigheadingLeading from "./BigHeadingLeading";
// import TestCompo from "./utils/TestCompo";

const Banner = () => {
  const isMobileMScreen = useScreenStore((state) => state.isMobileMScreen);
  const isMobileSScreen = useScreenStore((state) => state.isMobileSScreen);
  const isMobileLScreen = useScreenStore((state) => state.isMobileLScreen);

  return (
    <motion.div
      className={`relative lg:w-full h-auto min-h-[95vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-[100vh] lg:-mt-[0vh] flex  md:items-center  justify-between  mx-auto  mb-7 md:mb-10 lg:mb-20 xl:mb-0 pt-20 lg:pb-16 font-normal ${inter.className} overflow-hidden `}
    >
      <Image
        src={
          "https://res.cloudinary.com/da6qujoed/image/upload/v1742333113/background_banner_h46grq.png"
        }
        alt="Banner Background"
        fill
        priority
        draggable="false"
        // quality={100}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        className="object-cover object-center z-0"
      />
      <div className="relative z-10 w-full h-full rounded-xl">
        <motion.div className=" relative page-max-width mx-auto ">
          <div className=" mx-auto w-90 lg:w-full page-max-width grid grid-cols-1 lg:grid-cols-1 gap-12 items-center py-0 ">
            <div className="w-full">
              <motion.div
                // layout
                // initial={{ opacity: 0, y: 30 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 1.2, delay: 0.5 }}
                className={`space-y-6 text-center lg:text-start  ${
                  isMobileSScreen
                    ? "mb-[20%] pt-[30%]"
                    : isMobileMScreen
                    ? "mb-[20%] pt-[30%]"
                    : isMobileLScreen
                    ? "mb-[10%] pt-[25%]"
                    : "md:mb-[2%] xl:mb-[2%]"
                } lg:mb-[2%] `}
              >
                <AnimatedText2 isMobileSScreen={isMobileSScreen} />

                <BigheadingLeading text="Meet Your AI Boss 🚀" />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="text-white/90 text-base max-w-lg  text-center w-80 mx-auto lg:w-full font-light"
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
                className="flex flex-col lg:flex-row items-center gap-8 mt-5 justify-center "
              >
                <ButtonPrimary
                  // primary={true}
                  banner="true"
                  text="TRY NOW"
                  url={process.env.TRY_NOW_LINK}
                  tag="a"
                />
                {/* <TestCompo /> */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
