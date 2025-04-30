"use client";
import { useState, useEffect, useRef } from "react";
import { FaRobot } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";
import inter from "@/app/InterFont";
import { predefinedMessages } from "../../config/constants";
import Image from "next/image";
export default function ChatInterface() {
const imageShowAi = '/logo.svg'       // update this path to your AI image
const imageShowUser = '/user_m.svg'

  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll within the chat component
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.parentElement.scrollTop =
        messageEndRef.current.parentElement.scrollHeight;
    }
  }, [messages]);

  // Auto-generate messages
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < predefinedMessages.length) {
        const message = predefinedMessages[currentIndex];
        if (message.bot) {
          setIsTyping(true);
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              { text: message.bot, isUser: false },
            ]);
            setIsTyping(false);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }, 1500);
        } else {
          setMessages((prev) => [
            ...prev,
            { text: message.user, isUser: true },
          ]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        setCurrentIndex(0);
        setMessages([]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className={`${inter.className} relative font-normal flex flex-col h-[450px] xl:h-[550px] 2xl:h-[600px] bg-gradient-to-b from-white to-[#08090A] p-[3.9px] shadow-md shadow-white/30 rounded-24 w-[90%] mx-auto lg:w-full overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(true)}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/75 z-20 rounded-24 flex items-center justify-center"
        onClick={() => (window.location.href = "https://www.bossgpt.com/tool/?page=register")}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
         
          <a
            href={process.env.TRY_NOW_LINK}
            className=" px-4 py-2.5 rounded-lg try_now-btn hover:brightness-200 hover:text-black transition-all duration-300 "
          >
            Try Now!
          </a>
          <p className="bg-gradient-to-r from-white/50 to-white bg-clip-text text-transparent mt-3 text-sm">
            Click to experience BossGPT
          </p>
        </motion.div>
      </motion.div>

      {/* Fixed Header */}
      <motion.div
        // initial={{ y: -20, opacity: 0 }}
        // animate={{ y: 0, opacity: 1, transition: { delay: 0.5, duration: 2 } }}
        className="border-b border-zinc-800 sticky top-0 bg-[#353535] z-10 px-2 rounded-tl-24 rounded-tr-24"
      >
        <header className=" py-3  px-2">
          <h1 className="text-xl font-semibold text-white flex flex-row items-center gap-5">
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
                transition: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  repeatDelay: 3,
                },
              }}
            >
              <FaRobot className="text-[2.5rem]" />
            </motion.div>
            <span className="font-bold text-base lg:text-xl lg:pl-2 text-white  ">
              BOSS<span className="pl-[2.5px] font-black">GPT</span> Assistant
            </span>
          </h1>
        </header>
      </motion.div>

{/* Messages Container */}
<div className="flex-1 overflow-y-auto bg-[#080808] p-4 space-y-3 lg:space-y-4 pb-20 h-full scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ">

  {/* Logo Always on Top */}
  <div className="bg-[#181818]/80 p-3 border-[0.7px] border-[#D3D3D3] rounded-full w-20 h-20 mx-auto">
    <Image
      height={50}
      width={50}
      priority={true}
      draggable="false"
      src="/logo.svg"
      className="w-14 lg:w-14 h-14 shadow-xl"
      alt="Logo"
    />
  </div>

  {/* AnimatePresence handles messages */}
  <AnimatePresence mode="popLayout" initial={false}>
  {messages.map((message, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 3, scale: 0.98 }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.4,
        duration: 0.9
      },
    }}
    exit={{
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }}
    layout="position"
    className={`mx-2 lg:mx-3.5 flex ${message.isUser ? "justify-end" : "justify-start"}`}
  >
    {/* Main message + avatar wrapper */}
    <div className={`flex items-end gap-2 ${message.isUser ? "flex-row-reverse" : "flex-row"}`}>

      {/* Avatar */}
      <div className="self-start  w-8 h-8 shrink-0 border-[0.4px] border-[#D3D3D3] rounded-full">
        <Image
          src={message.isUser ? imageShowUser : imageShowAi}
          alt="Avatar"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      </div>

      {/* Message bubble */}
      <motion.div
        layout
        className={`rounded-[14px] px-4 py-3.5 max-w-[80%] transition-all duration-200 ${
          message.isUser
            ? "bg-[#353535] text-white text-sm"
            : "bg-[#353535] text-zinc-100 text-sm shadow-lg"
        }`}
      >
        {message.text}
      </motion.div>
    </div>
  </motion.div>
))}


    {/* Typing animation */}
    {isTyping && (
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
        className="flex justify-start"
      >
        <div className="rounded-lg px-4 py-2 max-w-[80%] shadow-lg bg-[#242526] text-zinc-100 text-sm">
          <ReactTyped
            strings={["Boss AI is typing..."]}
            typeSpeed={40}
            loop
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* Auto-scroll ref */}
  <div ref={messageEndRef} />
</div>


      {/* Input Field (Disabled) */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#353535] border-t border-zinc-800 p-3 pb-4"
      >
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            disabled
            className="flex-1 py-3 px-3 rounded-8 bg-[#4b4b4b] text-sm text-[#6C757D] border border-white/10 placeholder:text-zinc-300/80"
            style={{ backdropFilter: 'blur(10px)' }}
          />
          <button
            disabled
            className="rounded-12 px-4 text-sm py-1.5 bg-white opacity-80 text-woodsmoke cursor-not-allowed"
          >
           <Image src="/send.svg" alt="Send button bossgpt.com" className="w-8 h-8" width={20} height={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
