"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoMdClose } from "react-icons/io";
import inter from "@/app/InterFont";

export function EnrollmentToast({ name, courseName, timestamp, onDismiss, duration }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`fixed bottom-4 lg:left-4 w-[80%] lg:w-[350px] bg-white/[22%] border-[0.7px] border-white/[42%] z-20  backdrop-blur-sm rounded-12 shadow-lg overflow-hidden font-normal ${inter.className}`}
        >
          <div className="p-2 lg:p-2 pr-2 lg:pr-2 py-3">
            <button
              onClick={() => {
                setIsVisible(false)
                onDismiss?.()
              }}
              className="absolute right-2 top-2 p-0 rounded-full transition-colors"
            >
              <IoMdClose className="size-4 text-gray-300" />
            </button>

            <div className="flex gap-2 lg:gap-3 items-center">
              <div className="lg:size-10 size-10 rounded-full bg-mbg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-semibold text-white">{name[0]}</span>
              </div>

              <div className="flex-1 min-w-0 text-sm">
                <p className="text-white/70">
                  <span className="font-medium ">{name}</span> Subscribed
                </p>
                <p className="text-white/70font-medium mt-0.5">'{courseName}'</p>
                <p className="text-gray-300 text-[0.7rem] mt-1 font-medium ">{timestamp}</p>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            className="h-1.5 bg-white origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

