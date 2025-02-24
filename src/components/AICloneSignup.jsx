"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function AICloneSignup() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative flex items-center justify-center ">
      {/* Background Image Overlay */}
      <div className="absolute inset-0  z-0"></div>

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white rounded-2xl border border-white/10 p-6 sm:p-8 shadow-lg w-[90%] max-w-sm"
      >
        {/* Floating Badge */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -top-3 left-6 bg-green-500 text-white px-3 py-1 text-sm font-medium rounded-full shadow-md"
        >
          Now with BossGPT 1.1!
        </motion.div>

        {/* Input Field */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Type your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg  bg-white/10 text-mbg-primary placeholder-gray-400 border-[1.5px]  border-mbg-level1/30 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Signup Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-0 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-green-500 hover:brightness-110 transition"
          >
           Try Now
          </motion.button>

          {/* Divider */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-white/20"></div>
            <span className="px-3 text-black/90 text-sm">or</span>
            <div className="flex-grow border-t border-white/20"></div>
          </div>

          {/* Google Signup */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center  justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black font-medium border-[1.5px] border-black/20 transition hover:bg-gray-100"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google Logo"
              width={24}
              height={24}
              className="w-5 h-5"
            />
            Continue with Google
          </motion.button>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-black/90 mt-3">
          If you already have an account, we&apos;ll log you in
        </p>
      </motion.div>
    </div>
  );
}
