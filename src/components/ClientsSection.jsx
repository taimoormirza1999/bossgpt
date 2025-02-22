"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./utils/SectionWrapper";

const CLIENT_LOGOS = [
  "/clients/logo1.svg",
  "/clients/logo2.svg",
  "/clients/logo3.svg",
  "/clients/logo4.svg",
  "/clients/logo5.svg",
  "/clients/logo6.svg",
  "/clients/logo7.svg",
  "/clients/logo8.svg",
  "/clients/logo9.svg",
  "/clients/logo10.svg",
  "/clients/logo11.svg",
  "/clients/logo12.svg",
];

const ClientsSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) =>
        prevIndex + 6 >= CLIENT_LOGOS.length ? 0 : prevIndex + 6
      );
    }, 3000); // Slower transition interval (4s)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-mbg-primary py-20">
      <SectionWrapper>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0}}
          whileInView={{ opacity: 1,}}
          transition={{ duration: 1, delay:0.4 }} className="text-xl font-semibold text-white/90">
            Powering the world’s best product teams.
          </motion.h2>
          <motion.p initial={{ opacity: 0,}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay:0.6 }} className="text-white/70 text-sm font-normal my-2">
            From next-gen startups to established enterprises.
          </motion.p>
        </div>

        {/* Desktop View: Smooth Transition Effect */}
        <div className="hidden md:grid grid-cols-3 gap-6 my-10 p-3">
          <AnimatePresence mode="wait">
            {CLIENT_LOGOS.slice(visibleIndex, visibleIndex + 6).map((logo, index) => (
              <motion.div
                key={logo} // Use logo as key to ensure smooth exit animation
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.9 }} // Slower transition
              >
                <Image src={logo} alt={`Client logo ${index}`} width={100} height={60} className="w-32" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile View: Auto-Scrolling */}
        <div className="md:hidden overflow-hidden mt-10 relative">
          <motion.div
            className="flex space-x-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
              <Image key={index} src={logo} alt={`Client logo ${index}`} width={80} height={40} className="w-32" />
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ClientsSection;
