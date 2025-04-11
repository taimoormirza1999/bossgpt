"use client";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./utils/SectionHeading";
import { useEffect, useRef, useState } from "react";
import ButtonPrimary from "./utils/ButtonPrimary";
// import b1 from "@/assets/blogs/b1.png";
// import b2 from "@/assets/blogs/b2.png";
// import b3 from "@/assets/blogs/b3.png";
// import b4 from "@/assets/blogs/b4.png";
// import b5 from "@/assets/blogs/b5.png";
import Link from "next/link";
// import b6 from "@/assets/blogs/b6.png";

// const reviews = [
//   {
//     title: "Why Every Business Needs an AI-Powered Boss",

//     imageUrl: b1,
//   },
//   {
//     title: "From Chaos to Clarity: Let AI Manage Your Tasks",
//     imageUrl: b2,
//   },
//   {
//     title: "AI Boss vs. Traditional Management: Who Wins?",
//     imageUrl: b3,
//   },
//   {
//     title: "Personal AI Assistant: Your 24/7 Work Companion",
//     imageUrl: b4,
//   },
//   {
//     title: "How AI Can Make You a More Effective Leader",
//     imageUrl: b5,
//   },
// ];

const Blogs = ({ URL }) => {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const [blogData, setBlogData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const startAnimation = async () => {
      if (containerRef.current && blogData && blogData.length > 0) {
        const scrollWidth = containerRef.current.scrollWidth;
        const clientWidth = containerRef.current.clientWidth;
        
        // Only animate if content is wider than container
        if (scrollWidth > clientWidth) {
          await controls.start({
            x: [0, -(scrollWidth - clientWidth)],
            transition: {
              duration: 30, // Increased duration
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          });
        }
      }
    };

    startAnimation();
  }, [controls, blogData]); // Add blogData as dependency

  return (
    <section
      className="w-full pt-16 lg:py-16 text-white overflow-hidden"
      id="blogs"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <SectionHeading text={"The Future of Leadership"} />
        <p className="text-base text-white/90 leading-[1.6] font-primary lg:w-[70%] mx-auto -mt-5 font-normal">
          Explore the latest trends in AI-driven leadership, workplace
          automation, and intelligent decision-making. Our blog brings you
          expert insights, case studies, and future predictions on how AI is
          transforming the way businesses operate. Stay ahead in the era of
          AI-powered leadership!
        </p>
      </div>

      <div className="relative w-full">
        <div 
          ref={containerRef} 
          className="w-full overflow-hidden"
          onMouseEnter={() => {
            setIsHovered(true);
            controls.stop();
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            controls.start({
              x: [controls.get("x"), -(containerRef.current.scrollWidth - containerRef.current.clientWidth)],
              transition: {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              },
            });
          }}
        >
          <motion.div
            animate={controls}
            className="flex gap-5 lg:gap-5 w-fit"
            style={{ willChange: "transform" }}
          >
            {blogData?.map((blogItem, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[250px] lg:w-[340px] 2xl:w-[380px] overflow-hidden relative group cursor-pointer"
                style={{ willChange: "transform" }}
              >
                <Link href={`/blog/post/${blogData[index].friendlyUrl}`}>
                  <div className="bg-white/10 border-[1.6px] border-white/50 hover:border-[#3A3A3A] transition-all duration-300 p-3 rounded-[24px]">
                    <Image
                      src={blogData[index].coverImage}
                      alt={blogData[index].title}
                      width={400}
                      height={250}
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                      className="w-full h-[200px] lg:h-[230px] 2xl:lg:h-[250px] object-cover rounded-[24px] transform-gpu"
                    />
                  </div>
                  {/* Dark gradient overlay */}

                  {/* Content overlay */}
                  <div className=" p-4 px-3 flex flex-col justify-end">
                    <h3 className="text-xl lg:text-xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                      {blogData[index].title}
                    </h3>
                    
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
                    <div className="flex justify-between gap-6 pt-4">
                      {/* Date */}
                      <div className="flex items-center gap-2">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm text-white/80">15 Mar</span>
                      </div>
                      <div className="flex items-end justify-end gap-4">
                        {/* Likes */}
                        <div className="flex items-center gap-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.69001C1.25 5.19001 4.08 2.35001 7.56 2.35001C9.25 2.35001 10.83 3.01001 12 4.19001C13.17 3.01001 14.75 2.35001 16.44 2.35001C19.92 2.35001 22.75 5.19001 22.75 8.69001C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-white/80">15</span>
                        </div>

                        {/* Views */}
                        <div className="flex items-center gap-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.47003 3.71997 5.18003 5.79997 2.89003 9.39997C1.99003 10.81 1.99003 13.18 2.89003 14.59C5.18003 18.19 8.47003 20.27 12 20.27Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-white/80">15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays with hardware acceleration */}
        <div className="absolute left-0 top-0 h-full w-10 lg:w-32 bg-gradient-to-r from-black to-transparent z-10 transform-gpu"></div>
        <div className="absolute right-0 top-0 h-full w-10 lg:w-32 bg-gradient-to-l from-black to-transparent z-10 transform-gpu"></div>
      </div>
    </section>
  );
};

export default Blogs;
