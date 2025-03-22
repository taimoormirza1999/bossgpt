import React, { useEffect } from "react";
import Link from "next/link";
import inter from "../app/InterFont.jsx";
import Image from "next/image";
import useScreenStore from "../../store/useScreenStore.js";
import faqbackground from "../assets/faq_bg.png";
import { usePathname, useRouter } from "next/navigation";

const Footer = ({ removeBackground = false }) => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);
  const router = useRouter();
  const pathname = usePathname();
  const handleScroll = (id) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => scrollToSection(hash), 300);
    }
  }, [pathname]);
  return (
    <footer
      className={`py-10 text-[0.9rem] font-normal ${inter.className} ${!removeBackground ? 'bg-pmBlack' : 'bg-transparent'}`}
      style={
        !removeBackground
          ? {
              backgroundImage: !isLargeScreen ? `url(${faqbackground.src})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "12px",
              color: "white",
            }
          : { color: "white" } // Only set text color when background is removed
      }
    >
      <div className="mx-auto page-max-width">
        <div className="flex flex-col md:flex-row justify-between w-full items-center md:items-start space-y-10 md:space-y-0">
          {/* Logo Column */}
          <div className="flex flex-col items-center lg:items-start mb-0 lg:mb-5">
            <Link
              href="/"
              className="flex flex-col items-center space-x-2 space-y-3"
            >
              <Image
                src="/logo.svg"
                height={1500}
                width={1500}
                className="w-36 lg:w-36 h-auto px-3 shadow-xl mb-3 lg:mb-0"
                alt="Logo"
              />
              <span className="font-medium text-xl lg:text-2xl lg:pl-2 text-white">
                BOSS<span className="pl-[2.5px] font-black">GPT</span>
              </span>
            </Link>
          </div>

          {/* Subscribe Now Column */}
          <div className="flex flex-col  space-y-5 lg:space-y-2 ">
            <h3 className="text-mtext-primary lg:mb-4 text-xl font-medium font-primary text-center">
              Subscribe Now
            </h3>
            <p className="text-white/90 text-sm max-w-lg text-center w-80 mx-auto lg:w-[93%] -mt-4">
            Stay ahead with AI-powered task management! Subscribe to our newsletter for updates, tips, and exclusive insights on boosting productivity.
            </p>
            <div className=" mb-4 flex flex-col items-center lg:justify-center justify-center ">
              <input
                type="text"
                placeholder="Enter email"
             
                className="w-[75vw] mt-3 lg:w-[40vh] h-12 bg-white/10  border border-white/50 text-white/50 rounded-lg px-6 outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-200 placeholder:text-white/50 block mb-4"
              />
              <a
               href={process.env.TRY_NOW_LINK}
                className="inline-block text-center text-xs lg:text-[0.85rem] rounded-12 bg-white text-black hover:bg-gray-200 transition-all duration-300 ease-in-out px-6  lg:px-8 py-3 font-semibold self-center"
              >
               SUBSCRIBE
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="grid grid-cols-1 gap-12 text-mtext-tertiary w-90 lg:w-auto ">
            {[
              {
                title: "Important Links",
                links: ["Product", "FAQs", "Pricing", "Customer Reviews"],
                hrefs: [
                  "product",
                  "faq",
                  "pricing-section",
                  "customers",
                ],
              },
            ].map(({ title, links, hrefs, external }, index) => (
              <div key={index} className="text-center lg:text-left">
                <h3 className="text-mtext-primary lg:mb-4 text-xl font-medium font-primary ">
                  {title}
                </h3>
                <ul className="mt-3 space-y-5">
                  {links?.map((link, i) => (
                    <li key={i}>
                      <span
                        onClick={() => handleScroll(hrefs[i])}
                        target={external?.[i] ? "_blank" : "_self"}
                        className="hover:text-gray-300 cursor-pointer  "
                      >
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-mtext-primary text-sm lg:text-base mt-8 lg:mt-14 pt-5 font-primary border-t-[0.2px] border-white/50">
        © {new Date().getFullYear()} BossGpt.com All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;