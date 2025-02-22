"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Card from "./Card"; // Import Card Component

const cards = [
  { title: "Customer Requests", description: "Build what customers actually want", imageUrl: "/clients/logo1.svg" },
  { title: "Powerful Git Workflows", description: "Automate pull requests and commit workflows", imageUrl: "/clients/logo2.svg" },
  { title: "Linear Mobile", description: "Move product work forward from anywhere", imageUrl: "/clients/logo3.svg" },
  { title: "Linear Asks", description: "Turn workplace requests into actionable issues", imageUrl: "/clients/logo5.svg" },
  { title: "Linear Ask6", description: "Turn workplace requests into actionable issues", imageUrl: "/clients/logo6.svg" },
  { title: "Linear Ask7", description: "Turn workplace requests into actionable issues", imageUrl: "/clients/logo7.svg" },
  { title: "Linear Mobile8", description: "Move product work forward from anywhere", imageUrl: "/clients/logo8.svg" },
  { title: "Linear Asks9", description: "Turn workplace requests into actionable issues", imageUrl: "/clients/logo9.svg" },
  { title: "Linear Ask10", description: "Turn workplace requests into actionable issues", imageUrl: "/clients/logo10.svg" },
  { title: "Linear Ask11", description: "Turn workplace requests into actionable issues", imageUrl: "/clients/logo11.svg" },
];

const Slider = () => {
  const sliderRef = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.scrollWidth;
      const containerWidth = sliderRef.current.clientWidth;
      setMaxDrag(-(sliderWidth - containerWidth)); // Set max drag based on content width
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300; // Move left by 300px
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300; // Move right by 300px
    }
  };

  return (
    <div className="relative  w-full">
      {/* Scrollable + Draggable Container */}
      <motion.div
        ref={sliderRef}
        className="flex space-x-3 cursor-grab  scroll-smooth no-scrollbar"
        drag="x"
        dragConstraints={{ left: maxDrag, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {cards.map((card, index) => (
          <motion.div key={index} className="w-[300px] flex-shrink-0">
            <Card {...card} />
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-center w-full mt-6 space-x-4">
        <button
          className="bg-[#111] border-[1.2px] border-white/20 p-2 lg:p-3 lg:px-4 px-3 rounded-full"
          onClick={scrollLeft}
        >
          ◀
        </button>
        <button
          className="bg-[#111] border-[1.2px] border-white/20 p-2 lg:p-3 lg:px-4 px-3 rounded-full"
          onClick={scrollRight}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Slider;
