"use client"
import React, { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { motion,useAnimation } from "framer-motion";
import inter from '@/app/InterFont';

export default function CookiePolicy() {
    const [showPolicy,setShowPolicy]=useState(true)
    const controls = useAnimation();
    const resetAnimation = () => {
        controls.set({ opacity: 0, y: 150 });
        controls.start({ opacity: 1, y: 0 },{duration: 1.2, ease: "easeOut",delay:2.5});
      };
    const startAnimation = () => {
        controls.set({ opacity: 1, y: 0 });
        controls.start({ opacity: 0, y: 150 },{duration: 1.2, ease: "easeOut",delay:0.5});
      };
    const handleAcceptAll=()=>{
        // setShowPolicy(false)
        startAnimation()
    }

    const handleRejectAll=()=>{
        // setShowPolicy(false)
        startAnimation()
    }
useEffect(()=>{
    setTimeout(()=>{
        resetAnimation()
    },2000)
    },[])
  return (
    <div className='w-full'>
    {
        showPolicy && (
            <motion.div  initial={{ opacity: 0, y: 150 }} 
            animate={controls}
            // animate={{ opacity: 1, y: 0 }} 
            // transition={{ duration: 1.2, ease: "easeOut",delay:2.5 }}
            className={`fixed bottom-2 left-1/2 -translate-x-1/2 border-[1.4px] border-white/50 bg-black/50 text-white/70 p-4 lg:py-3 rounded-16 shadow-lg w-[95%] lg:w-[60%] mx-auto z-[99999099999] horizontal-center-big  ${inter.className}`} >
            <SectionWrapper page_max_width={false}>
           <div className='lg:flex justify-between'>
            <p className="text-sm font-primary font-medium ">
            This website uses cookies to improve your experience and analyze traffic.
              <a href="#" className="text-white/90 hover:text-white/100 underline normal-transition">See our cookie policy.</a>
            </p>
            <div className="mt-3 lg:mt-0 flex lg:justify-end space-x-2 lg:mx-5 font-medium">
              <button onClick={handleAcceptAll} className="bg-white/20 font-primary hover:bg-anchorGlassBg/40 border border-mbg-translucent text-white px-8 py-2 rounded-12 text-sm normal-transition">Accept&nbsp;all</button>
              <button onClick={handleRejectAll} className="bg-btnWild font-primary hover:bg-white border-btnWild text-woodsmoke normal-transition px-8 py-2 rounded-12 text-sm">Reject&nbsp;all</button>
            </div>
           </div>
          </SectionWrapper>
          </motion.div>
        )
    }
    </div>
   
  )
}
