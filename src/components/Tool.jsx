import React from 'react'
import toolImage from "../assets/tool.png";
import Image from 'next/image';

export default function Tool() {
  return (

     <div className=" mx-auto flex justify-center -my-44  z-50 mb-10">

<Image
  src={toolImage}
  height={1200}
  width={1400}
  alt=''
  className=" w-[80rem]"
  />
</div>

  )
}
