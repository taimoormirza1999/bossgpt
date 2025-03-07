"use client"
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_live_51MKOWOClZeY3V6PeILqmhyHFCw3LsPj0DIix9slFGovMEJkYFt0YoAayUWmfqDzB8O6MRY9nQjSpOZmrHkwevvpC00UhPik0o4"
);
import { motion } from "framer-motion"

const Checkout = ({ showModal, setShowModal }) => {
  // const [showModal, setShowModal] = useState(false);
  const [loadScript, setLoadScript] = useState(false);

  const packages = [
    {
      name: "Free Trail",
      description: "Basic plan with essential features.",
      price: 20,
      includes: [
        { text: "ACCESS TO ALL DRAWING COURSES", status: 1 },
        {
          text: "CHANCE TO BE FEATURED IN MSA YOUTUBE CHANNEL VIDEOS",
          status: 1,
        },
        { text: "ACCESS TO ALL ANIMATION COURSES", status: 0 },
        {
          text: "ACCESS TO DOWNLOAD ALL HIGH-QUALITY WALLPAPERS, POSTERS, & EMOJIS",
          status: 0,
        },
        { text: "DISCOUNT ON ALL MSA MERCHANDISE", status: 0 },
        { text: "FEEDBACK DIRECTLY FROM MENTORS", status: 0 },
      ],
    },
    {
      name: "Premium",
      description: "Standard plan with more features.",
      price: 30,
      includes: [
        { text: "Access to all drawing courses", status: 1 },
        { text: "Access to all animation courses", status: 1 },
        {
          text: "Access to download all high-quality wallpapers, posters, & emojis",
          status: 1,
        },
        { text: "Discount on all MSA merchandise", status: 1 },
        { text: "Feedback directly from mentors", status: 1 },
        {
          text: "Chance to be featured in MSA YouTube channel videos",
          status: 1,
        },
      ],
    },
  ];
  const handleCheckout = async (packageDetails, index) => {
    setShowModal(true);
    const body = {
      packageName: packageDetails.name,
      description: packageDetails.description,
      priceAmount: packageDetails.price,
    };
    console.log(body)
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_VITE_BACKEND_API}create-checkout-session`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   }
    // );
    // const session = await response.json();
    // if (session.id) {
    //   const stripe = await stripePromise;
    //   const { error } = await stripe.redirectToCheckout({
    //     sessionId: session.id,
    //   });
    //   if (error) {
    //     console.error("Error during checkout redirection:", error);
    //   }
    // } else {
    //   console.error("Failed to create session:", session.error);
    // }
  };
  return (
    <div
      className="flex flex-col items-center mt-[64.5px] mb-[40.5px] md:mt-24 md:mb-16  lg:mb-0 lg:mt-[87.5px] justify-center w-85 md:w-90 mx-auto lg:w-1/2 2x:w-[75%]  max-w-[1920px]"
      id="enroll-checkout"
    >
       {loadScript && (
         <Script
         id="stripe-script"
         src="https://js.stripe.com/v3/"
         strategy="lazyOnload"
       />
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-11/12 md:w-1/3 bg-gradient-to-br from-[#7f7fff78]  to-[#ff00ff96] border shadow-lg shadow-pink200 border-pink200 p-6 rounded-3xl shadow-2xl">
            <h2 className="text-white text-2xl font-bold font-medium-fgm text-center">
              Redirecting to Secure Checkout...
            </h2>
            <p className="text-white text-sm text-center font-medium-kgpr mt-2">
              Please wait while we process your request.
            </p>
            <div className="flex justify-center my-5">
              <div className="w-10 h-10 border-4 border-white border-opacity-50 rounded-full border-t-[#ff00ff] animate-spin"></div>
            </div>
          </div>
        </div>
      )}
      <div className="grid gap-8 md:gap-5 lg:gap-8 md:grid-cols-2">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`bg-black/40 rounded-[1.8rem] border-2 medium-transition ${
              index == 0
                ? "border-mtext-tertiary bg-mtext-secondary/5 shadow-purple/35 hover:shadow-purple/75"
                : "border-mtext-secondary bg-mtext-secondary/10 shadow-pink200/35 hover:shadow-pink200/75"
            } shadow-xl p-6 px-7 lg:px-8  mx-auto hover:shadow-2xl transition duration-300 text-center cursor-pointer`}
          >
            <h2
              className={`mt-[1rem] text-[13.32pt] text-base font-medium text-center uppercase ${
                index == 0 ? "text-purple" : "text-pink200"
              } -mb-3 font-regular-ccm text-left`}
            >
              {pkg.name}
            </h2>
            <motion.span initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay:0.2 }} className="text-white font-bold text-[4.1rem] font-medium-fgm">
              ${pkg.price}
            </motion.span>
            <p className="text-white font-semibold text-xs text-[0.6rem] -mt-2">
              PER MONTH
            </p>
            <ul className="mt-[2.5rem] lg:mt-[3.5rem] mb-[1.5rem] lg:mb-[2.1rem]">
              {pkg.includes.map((item, i) => (
                <motion.li initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay:0.2*i }}  key={i} className="flex  ">
                  <span
                    className={`w-4 h-4 flex items-center justify-center rounded-full  ${
                      index == 0 ? "text-purple" : "text-pink200"
                    } mr-3 mt-2`}
                  >
                    ✓
                  </span>
                  <span
                    className={`${
                      item.status == 1
                        ? "text-white"
                        : " text-white text-opacity-20"
                    } text-sm uppercase my-1 text-left text-[0.84rem]`}
                  >
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
            <div className="animate-bounceSlow">
              <button
                onClick={() => handleCheckout(pkg, index)}
                className={`animate-animate-glow  lg:text-[1.0956rem] mt-10 mb-3 px-12 border-[1.7px] ${
                  index == 0
                    ? "border-purple shadow-purple/40 hover:shadow-purple"
                    : "border-pink200 hover:shadow-pink200 shadow-pink200/40"
                }  text-white pt-[12px] pb-[9px] px-[42.5px] rounded-[19px] shadow-xl hover:${index === 0 ? "bg-purple-500" : "bg-pink-200/40"} hover:shadow-2xl  transition duration-300 uppercase`}
              >
                Enroll Now!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Checkout;
