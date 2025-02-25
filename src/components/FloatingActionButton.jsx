"use client"
import { useState, useEffect } from "react";
import { BsRobot } from "react-icons/bs";
import { ReactTyped } from "react-typed";
import { FaRobot } from "react-icons/fa6";

const FloatingActionButton = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Hi 👋",
    "I'm BossGPT 🧠",
    "I can help you get your projects done ✅"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageIndex < messages.length - 1) {
        setMessageIndex((prev) => prev + 1); // Continue showing the next message
      } else {
        setTimeout(() => setMessageIndex(0), 10000); // Reset after 3-second pause
      }
    }, 10000); // Change message every 5 seconds

    return () => clearInterval(timer); // Clean up the interval
  }, [messageIndex]);

  return (
    <div className="absolute botom-20">
      {/* Floating Action Button */}
      <div className="fixed botom-20 right-5 bg-gradient-to-r border-[1.2px] border-white/10 bg-mbg-tertiary/80 to-purple-700 text-white p-3 rounded-full shadow-xl cursor-pointer transform hover:scale-110 transition-all ease-in-out duration-300">
        {/* <BsRobot className="text-5xl" /> */}
        <FaRobot className="text-5xl" /> 

      </div>

      {/* Floating Message Box with Typed effect */}
      <div className="fixed botom-[5rem] right-[5.3rem] bg-white/[22%] border-[0.7px] border-white/[42%] text-white px-4 py-2 rounded-full shadow-xl opacity-90">
        <ReactTyped
          strings={messages}
          typeSpeed={70} // Speed at which text is typed
          backSpeed={50} // Speed at which text is erased
          backDelay={3000} // Delay before erasing
          loop={true} // Loop through messages
        />
      </div>
    </div>
  );
};

export default FloatingActionButton;
