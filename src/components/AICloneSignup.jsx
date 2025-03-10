"use client";
import { useState, useEffect, useRef } from "react";
import { FaRobot } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";
import inter from "@/app/InterFont";

export default function ChatInterface() {
  const predefinedMessages = [
    { bot: "Hello! I'm Boss AI, your personal project manager. What do you need help with today?" },
    { user: "I need help managing my MSA project. Can you suggest some ideas?" },
    { bot: "Absolutely! I’ll generate a list of project ideas along with estimated timelines and key milestones." },
    { bot: "Here1 are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here2 are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here3 are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here4 are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here5 are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here6 are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here7 are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here8 are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here9 are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here are a few project ideas that align with your goals. Let me know if you need more details!" },
    { bot: "Here are a few project ideas that align with your goals. Let me know if you need more details!" },
  ];

  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef(null);

  // Auto-scroll within the chat component
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.parentElement.scrollTop = messageEndRef.current.parentElement.scrollHeight;
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
            setMessages((prev) => [...prev, { text: message.bot, isUser: false }]);
            setIsTyping(false);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }, 1500);
        } else {
          setMessages((prev) => [...prev, { text: message.user, isUser: true }]);
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
    <div className={`${inter.className} font-normal relative flex flex-col h-[680px] bg-white/5 shadow-md shadow-white/30 rounded-12 max-h-[90vh] w-full overflow-hidden`}>
      {/* Fixed Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.5, duration: 2 } }}
        className="border-b border-zinc-800 sticky top-0 bg-[#242526] z-10 px-2 mt-1 rounded-12"
      >
        <header className="px-4 py-4 ">
          <h1 className="text-xl font-semibold text-white flex flex-row items-center gap-5">
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
                transition: { repeat: Number.POSITIVE_INFINITY, duration: 2, repeatDelay: 3 },
              }}
            >
              <FaRobot className="text-5xl" />
            </motion.div>
            <span className="font-medium text-base lg:text-xl lg:pl-2 text-white">
              BOSS<span className="pl-[2.5px] font-black">GPT</span> Assistant
            </span>
          </h1>
        </header>
      </motion.div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto bg-[#18191C] p-4 space-y-4 pb-20 h-full scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
        <AnimatePresence mode="popLayout">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 70, duration: 1.9 } }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.9 } }}
              layout
              className={`flex ${!message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div className={`rounded-lg px-4 py-2 max-w-[80%] transition-all duration-300 ${message.isUser ? "bg-link-primary text-white" : "bg-zinc-200/15 text-zinc-100"}`}>
                {message.text}
              </div>
            </motion.div>
          ))}

          {/* Typing Animation */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex justify-start"
            >
              <div className="rounded-lg px-4 py-2 max-w-[80%] bg-zinc-200/15 text-zinc-100">
                <ReactTyped strings={["Boss AI is typing..."]} typeSpeed={30} loop />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Auto-scroll to this ref */}
        <div ref={messageEndRef} />
      </div>

      {/* Input Field (Disabled) */}
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="border-t border-zinc-800 p-2 pb-4">
        <div className="flex gap-2">
          <input type="text" placeholder="Type your message..." disabled className="flex-1 py-2.5 px-3 rounded-8 bg-zinc-200/20 border border-zinc-700 text-white placeholder:text-zinc-300/80" />
          <button disabled className="rounded-12 px-3.5 py-1.5 bg-link-primary opacity-80 text-white cursor-not-allowed">Send</button>
        </div>
      </motion.div>
    </div>
  );
}
