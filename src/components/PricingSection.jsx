"use client";
import inter from "@/app/InterFont";
import CheckIconSvg from "./utils/icons/CheckIconSvg";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Script from "next/script";
const stripePromise = loadStripe(
  "pk_test_51OnhTkLaKTIuF5B7cKZ8OgO1G1ZgvjAb9jCvxYY9URC6qAc8FqSAN4yQ2c0N2iPXVjr6UbkCtdZ7u3v0WMckGY3200gFW6JKRA"
);
import { motion } from "framer-motion";

const PricingSection = ({ showModal, setShowModal }) => {
  const [loadScript, setLoadScript] = useState(false);
  const handleCheckout = async (packageDetails, index) => {
    setShowModal(true);
    const body = {
      packageName: packageDetails.name,
      description: packageDetails.description,
      priceAmount: packageDetails.price,
    };
    console.log(body);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VITE_BACKEND_API}create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    if (session.id) {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) {
        console.error("Error during checkout redirection:", error);
      }
    } else {
      console.error("Failed to create session:", session.error);
    }
  };
  return (
    <section
    id="pricing-section"
      className={` text-white/70  page-max-width mx-auto font-normal py-20  ${inter.className}`}
    >
      {loadScript && (
        <Script
          id="stripe-script"
          src="https://js.stripe.com/v3/"
          strategy="lazyOnload"
        />
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-11/12 md:w-1/3 bg-gradient-to-br from-mbg-level1/80 py-8  to-mbg-level2/80 border shadow-lg shadow-mbg-translucent border-2 border-mbg-translucent p-6 rounded-12 shadow-2xl">
            <h2 className="text-white/95 text-2xl font-semibold  text-center">
              Redirecting to Secure Checkout...
            </h2>
            <p className="text-white/85  text-sm text-center  mt-4">
              Please wait while we process your request.
            </p>
            <div className="flex justify-center mt-5 mb-0">
              <div className="w-8 h-8 border-4 border-white border-opacity-50 rounded-full border-t-white/90 animate-spin"></div>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 border border-mbg-lineSecondary p-4  rounded-12 bg-mbg-level1">
        {/* Free Trial Plan */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className=" border border-mbg-lineSecondary p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-semibold text-white">Free Trial</h3>
          <p className="text-white/70 border-b text-xl border-mbg-lineSecondary mt-2">
            $0
          </p>
          <p className="text-gray-500 text-sm mt-2">Try for free for 7 days</p>
          <div className="border-t border-mbg-lineSecondary my-4"></div>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="flex items-center space-x-3">
              <CheckIconSvg /> Unlimited members
            </li>
            <li className="flex items-center space-x-3">
              <CheckIconSvg /> 2 teams
            </li>
            <li className="flex items-center space-x-3">
              <CheckIconSvg /> 250 issues
            </li>
            <li className="flex items-center space-x-3">
              <CheckIconSvg /> <span className="underline">Slack</span> and{" "}
              <span className="underline">GitHub</span> integration
            </li>
            <li className="flex items-center space-x-3">
              <CheckIconSvg /> API access
            </li>
          </ul>
          <div className="border-t border-mbg-lineSecondary my-4"></div>
          <button
            onClick={() =>
              handleCheckout(
                {
                  name: "Free Trial",
                  description: "Free Trial description",
                  price: 5,
                },
                0
              )
            }
            className="cursor-pointer mt-4 w-full bg-[#222222] text-white/70font-medium py-2 px-4 rounded-8 border border-[#333333] hover:bg-[#333333] transition"
          >
            Get started
          </button>
        </motion.div>

        {/* Pro Plan (Highlighted) */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="bg-mbg-level2  border-mbg-lineSecondary p-8 rounded-lg shadow-lg relative border-[1.5px] border-white/10"
        >
          {/* <div className="absolute inset-0 border-[1.5px] border-white/70 rounded-lg opacity-20 -z-"></div> */}
          <div className="z-20">
            <h3 className="text-3xl font-semibold text-white">Pro</h3>
            <p className="text-white/70 border-b text-xl border-mbg-lineSecondary mt-2">
              $5 per user/month
            </p>
            <p className="text-gray-500 text-sm mt-2">Billed yearly</p>
            <div className="border-t border-mbg-lineSecondary my-4"></div>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-center space-x-3">
                <CheckIconSvg /> All Free Trial features +
              </li>
              <li className="flex items-center space-x-3">
                <CheckIconSvg /> Unlimited teams
              </li>
              <li className="flex items-center space-x-3">
                <CheckIconSvg /> Unlimited file uploads
              </li>
              <li className="flex items-center space-x-3">
                <CheckIconSvg /> Admin roles
              </li>
            </ul>
            <div className="border-t border-mbg-lineSecondary my-4"></div>
            <button
              onClick={() => {
                alert("dsfs");
              }}
              className="cursor-pointer mt-4 w-full  text-black font-semibold py-2 px-4 rounded-8 border border-white bg-btnWild medium-transition hover:bg-white transition"
            >
              Upgrade to Pro
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
