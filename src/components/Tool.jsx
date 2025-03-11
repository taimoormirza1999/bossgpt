import React from "react";
import toolImage from "../assets/tool.png";
import Image from "next/image";

export default function Tool() {
  return (
    <div className="relative mx-auto flex justify-center -mt-64 lg:-mt-48  z-10 mb-0">
      <div className="absolute left-32 -top-52 ">
        <h3 className="font-primary text-7xl font-black primary-text-gradient">100x</h3>
        <p className="font-primary  text-sm font-medium primary-text-gradient">
          Satisfied Customers Globally
        </p>
      </div>
      <div className="absolute right-32 -top-80 ">
        <h3 className="font-primary  text-7xl font-black primary-text-gradient">10x</h3>
        <p className="font-primary text-sm font-medium primary-text-gradient">
        FASTER PRODUCTIVITY
        </p>
      </div>
      <Image
        src={toolImage}
        height={1200}
        width={1400}
        alt=""
        className="w-[85%] lg:w-[65rem] xl:w-[60rem] 2xl:w-[80rem]"
      />
    </div>
  );
}
