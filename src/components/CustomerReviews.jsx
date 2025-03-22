"use client";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./utils/SectionHeading";
import { useEffect, useRef } from "react";
import ButtonPrimary from "./utils/ButtonPrimary";

const reviews = [
  {
    name: "Emily Johnson",
    review:
      "This AI tool has completely transformed how I work! It's fast, reliable, and makes everything so much easier.",

    // *  imageUrl: "https://source.unsplash.com/200x200/?woman,portrait",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Lee",
    review:
      "Absolutely love the simplicity and power of this platform. Highly recommended for anyone managing projects.",
    //   imageUrl: "https://source.unsplash.com/200x200/?man,portrait",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophia Brown",
    review:
      "From automation to smooth workflows, this tool has exceeded my expectations. It's a game changer!",
    //   imageUrl: "https://source.unsplash.com/200x200/?girl,smile",
    imageUrl:
      "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?q=80&w=2509&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "James Carter",
    review:
      "I can't imagine going back to my old workflow. This has made everything so much more efficient.",
    //   imageUrl: "https://source.unsplash.com/200x200/?man,smiling",
    imageUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Olivia Davis",
    review:
      "BossGPT has made managing my business so much easier. The automation features are spot on!",
    //   imageUrl: "https://source.unsplash.com/200x200/?woman,smiling",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "William Harris",
    review:
      "The AI's ability to handle repetitive tasks has saved me so much time. It's like having an extra team member!",
    //   imageUrl: "https://source.unsplash.com/200x200/?man,professional",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ava Miller",
    review:
      "I'm really impressed with how BossGPT understands my business needs and adapts. Truly an essential tool.",
    //   imageUrl: "https://source.unsplash.com/200x200/?woman,business",
    imageUrl:
      "https://images.unsplash.com/photo-1512375890245-7862e320210a?q=80&w=3686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trial: "p",
  },
  {
    name: "Benjamin Wilson",
    review:
      "From automation to smooth workflows, this tool has exceeded my expectations. It’s a game changer!",
    //   imageUrl: "https://source.unsplash.com/200x200/?man,thinking",
    imageUrl:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=3246&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Isabella Martinez",
    review:
      "The support team is incredible! They helped me integrate BossGPT seamlessly into my workflow.",
    //   imageUrl: "https://source.unsplash.com/200x200/?woman,office",
    imageUrl:
      "https://images.unsplash.com/photo-1613424969431-62a604d2cf67?q=80&w=3686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lucas Anderson",
    review:
      "BossGPT's simplicity combined with its power is unmatched. This is the future of business automation.",
    //   imageUrl: "https://source.unsplash.com/200x200/?man,casual",
    imageUrl:
      "https://images.unsplash.com/photo-1508908324153-d1a219719814?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CustomerReviews = () => {
  const containerRef = useRef(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const animateScroll = async () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;
        const clientWidth = containerRef.current.clientWidth;

        await controls.start({
          x: [0, -(scrollWidth - clientWidth)],
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          },
        });
      }
    };

    animateScroll();
  }, [controls]);

  return (
    <section
      className="w-full  pt-16 lg:py-16  text-white overflow-hidden"
      id="customers"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <SectionHeading text={"SEE WHAT OUR USERS"} text2="THINK ABOUT US" />
      </div>

      <div className="relative w-full">
        <div ref={containerRef} className="w-full overflow-hidden">
          <motion.div animate={controls} className="flex gap-5 lg:gap-5 w-fit">
            {/* First set of reviews */}
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                
                className="flex-shrink-0 w-[250px] lg:w-[400px] 2xl:w-[380px] rounded-[24px] bg-white/10  border-[1.6px] border-white/50 hover:border-[#3A3A3A] transition-all duration-300"
              >
                <div className="flex flex-row gap-1 2xl:gap-x-3 ml-3 me-2 lg:mx-4 mt-3  lg:mt-2 mb-2">
                  <Image
                    src={review.imageUrl}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12 lg:w-14 lg:h-14 mt-2 flex-shrink-0 shadow-lg"
                  />
                  <div className="flex flex-col  gap-2  mt-3">
                    <h3 className="text-[18px] font-extrabold font-primary  text-white">
                      {review.name}
                    </h3>
                    <p className="text-[14px] text-[#A1A1A1] leading-[1.6] font-primary  ">
                      {review.review}
                    </p>
                    <div className="flex mb-1 lg:mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="13"
                          height="13"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#FFD700]"
                        >
                          <path
                            d="M9.99 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L9.99 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L9.99 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 h-full w-10 lg:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-10 lg:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
      <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.14 }}
              className="flex flex-col lg:flex-row items-center  mt-8 lg:mt-10 justify-center "
            >
              <ButtonPrimary
                // primary={true}
                banner="true"
                text="SUBMIT YOUR REVIEW"
                url="https://bossgpt.com/tool/v1"
              />
            </motion.div>
    </section>
  );
};

export default CustomerReviews;
