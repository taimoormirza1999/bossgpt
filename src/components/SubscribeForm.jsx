"use client"; // Needed for event handling in Next.js App Router

import { useEffect, useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null); 
      }, 4000); 

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mailchimp requires form submission via POST
    const formData = new FormData();
    formData.append("EMAIL", email);

    const actionUrl =
      "https://bossgpt.us11.list-manage.com/subscribe/post?u=a5b04cb32ecc5b75ca2859cb1&id=1643e35623";

    try {
      const response = await fetch(actionUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col space-y-5 lg:space-y-2">
      <h3 className="text-mtext-primary lg:mb-4 text-xl font-medium font-primary text-center">
        Subscribe Now
      </h3>
      <p className="text-white/90 text-sm max-w-lg text-center w-[75%] mx-auto lg:w-[93%] -mt-4 font-light lg:font-normal">
        Stay ahead with AI-powered task management! Subscribe to our newsletter for updates, tips, and exclusive insights on boosting productivity.
      </p>
      <div className="mb-4 flex flex-col items-center lg:justify-center justify-center">
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <input
            type="email"
            name="EMAIL"
            required
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[75vw] mt-3 lg:w-[40vh] h-12 bg-white/10 border border-white/50 text-white/50 rounded-lg px-6 outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-200 placeholder:text-white/50 block mb-4"
          />
          <button
            type="submit"
            className="inline-block text-center text-xs lg:text-[0.85rem] rounded-12 bg-white text-black hover:bg-gray-200 transition-all duration-300 ease-in-out px-6 lg:px-8 py-3 font-semibold self-center"
          >
            SUBSCRIBE
          </button>
        </form>

        {/* Success & Error Messages */}
        {status === "success" && (
          <p className="text-green-500 mt-2 text-sm">Thank you for subscribing!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-2 text-sm">Something went wrong. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default SubscribeForm;
