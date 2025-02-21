import React from 'react';
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import inter from '@/app/InterFont';

const BannerTextHeadingImage2 = ({ color, description1, heading, paragraph, paragraphspecificwidth=false }) => {
  return (
    <section className={`relative  font-normal   background: bg-gradient-to-b from-mbg-translucent to-transparent to-20% text-white py-20  ${inter.className}`}>
      <div className=" mx-auto page-max-width grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
        {/* Left Section - Title & Description */}
        <div className="space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <div className={`w-4 h-2 ${color?color: bg-yellow-500} rounded-full`}></div>
            <Link href="/build" className="hover:underline">
             {description1}
            </Link>
            <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold">
           {heading}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 max-w-lg">
            {paragraph}
          </p>
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
    </section>
  );
};

export default BannerTextHeadingImage2;
