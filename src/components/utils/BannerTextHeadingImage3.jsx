import React from 'react';
import { motion } from "framer-motion"
import Link from "next/link";
import inter from '@/app/InterFont';
import Slider from './Slider';

const BannerTextHeadingImage3 = ({ heading, paragraph, paragraphspecificwidth=false }) => {
  return (
    <section className={`relative  font-normal   background: bg-gradient-to-b from-mbg-translucent to-transparent to-20% text-white/70 py-20  ${inter.className}`}>
      <div className=" page-max-width mx-auto w-90 lg:w-full  grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
        {/* Left Section - Title & Description */}
        <div className=" space-y-6 ">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-white/70 text-sm">
            <div className="w-4 h-2 bg-yellow-500 rounded-full"></div>
            <Link href="/build" className="">
              Task tracking and sprint planning
            </Link>
            <svg
              className="w-4 h-4 text-white/70"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white/90">
            Issue tracking <br />
            you’ll enjoy using
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 max-w-lg">
            <span className="text-white/70 font-medium text-sm lg:text-base">
              Optimized for speed and efficiency.
            </span>{" "}
            Create tasks in seconds, discuss issues in context, and breeze
            through your work in views tailored to you and your team.
          </p>
        </div>
        {/* Right Section - Image */}
        <div className="page-max-width overflow-x-visible " style={{display:'contents'}} >
        <Slider />
        </div>
      </div>
    </section>
  );
};

export default BannerTextHeadingImage3;
