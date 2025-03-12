"use client";
import React, { useState } from "react";
import faqbackground from "../assets/faq_bg.png";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons
import SectionWrapper from "./utils/SectionWrapper";
import SectionHeading from "./utils/SectionHeading";
import useScreenStore from "../../store/useScreenStore";

function FAQ() {
  const faqs = [
    {
      question: "What is BossGPT?",
      answer:
        "BossGPT is an AI-powered tool designed to assist businesses in automating tasks, improving productivity, and enhancing decision-making.",
    },
    {
      question: "How can BossGPT help my business?",
      answer:
        "BossGPT can help streamline customer support, generate reports, automate routine tasks, and provide actionable insights to boost business efficiency.",
    },
    {
      question: "Is BossGPT compatible with other software?",
      answer:
        "Yes, BossGPT integrates seamlessly with popular business software, including CRMs, project management tools, and communication platforms.",
    },
    {
      question: "What kind of businesses can benefit from BossGPT?",
      answer:
        "BossGPT is designed for businesses of all sizes across various industries, including retail, technology, healthcare, and finance.",
    },
    {
      question: "How secure is my data with BossGPT?",
      answer:
        "We take data security seriously. BossGPT uses advanced encryption and complies with industry-standard security protocols to protect your data.",
    },
    {
      question: "Can I customize BossGPT to fit my specific needs?",
      answer:
        "Yes, BossGPT is highly customizable and can be tailored to meet the unique needs and requirements of your business.",
    },
    {
      question: "What is the pricing model for BossGPT?",
      answer:
        "BossGPT offers flexible pricing plans based on the size and needs of your business. You can contact us for a quote based on your requirements.",
    },
    {
      question: "How do I get started with BossGPT?",
      answer:
        "Simply sign up on our website, and our team will guide you through the setup process to integrate BossGPT into your business workflows.",
    },
    {
      question: "Is there a free trial for BossGPT?",
      answer:
        "Yes, we offer a 14-day free trial so you can explore all the features of BossGPT before committing to a plan.",
    },
    {
      question: "How can I contact BossGPT support?",
      answer:
        "You can reach our support team via email at support@bossgpt.com or through our help center for assistance.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null); // State to track the open FAQ
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);


  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ
  };

  return (
    <section
      className="pt-16"
      id="faq"
      style={{
        backgroundImage: isLargeScreen ? `url(${faqbackground.src})` : 'none',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        color: "white",
      }}
    >
      <div className="p-3 py-6 my-0 md:mb-10 mx-auto">
        <SectionWrapper>
          <SectionHeading text={"FREQUENTLY ASKED QUESTIONS"} />

          <div className=" ml-auto me-auto lg:ml-auto flex flex-row justify-end">
            <div className="flex flex-col max-w-full mx-auto w-[90%] lg:w-[90%]">
              {faqs.map((faq, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  key={index}
                  className=" lg:mt-0 mx-1 mb-5 lg:mb-5 w-full border-[1.6px] border-white/50 bg-white/10 text-white/70 rounded-16  flex flex-col lg:justify-center pt-4 pb-0.5 pe-3 lg:px-5"
                >
                  <div
                    className="font-bold text-base text-white flex justify-between items-center cursor-pointer text-center"
                    onClick={() => toggleAnswer(index)} // Toggle the answer on click
                  >
                    <span className="font-primary text-base  lg:text-xl font-bold  lg:font-semibold w-full">
                      {faq.question}
                    </span>

                    {/* Render the arrow icon based on whether it's open or not */}
                    {
                    isLargeScreen &&( openIndex === index ? (
                      <FaChevronUp className="text-white/70" />
                    ) : (
                      <FaChevronDown className="text-white/70" />
                    ))
                   }
                  </div>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openIndex === index ? 1 : 0,
                      height: openIndex === index ? "auto" : 0,
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      height: { duration: 0.5 },
                    }}
                    className={`${
                      openIndex === index ? "mt-3 my-3" : "my-1 lg:my-2"
                    } text-white   overflow-hidden font-primary text-lg font-semibold`}
                  >
                    {faq.answer}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

export default FAQ;
