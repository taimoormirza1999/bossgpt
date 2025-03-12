import React from 'react'

export default function SectionHeading({text, text2}) {
  return (
    <div className="text-center mb-6 md:mb-12" >
    <h2 className="text-[1.85rem] lg:text-[2.75rem] font-extrabold leading-snug  text-white/90 font-primary" >{text}<br/><span className='-py-4'>{text2}</span></h2>
  </div>
  )
}
