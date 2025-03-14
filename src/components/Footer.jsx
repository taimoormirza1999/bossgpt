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
        <div className="flex flex-col md:flex-row justify-between w-full items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo Column */}
          <div className="flex flex-col items-center lg:items-start mb-5 lg:mb-5">
            <Link
              href="/"
              className="flex flex-col items-center space-x-2 space-y-3"
            >
              <Image
                src="/logo-icon.svg"
                height={1500}
                width={1500}
                className="w-36 lg:w-36 h-auto px-3 shadow-xl mb-3 lg:mb-0"
                alt="Logo"
              />
              <span className="font-medium text-2xl lg:text-2xl lg:pl-2 text-white">
                BOSS<span className="pl-[2.5px] font-black">GPT</span>
              </span>
            </Link>
          </div>

          {/* Subscribe Now Column */}
          <div className="flex flex-col lg:items-start space-y-5 lg:space-y-2">
            <h3 className="text-mtext-primary lg:mb-4 text-xl font-medium font-primary">
              Subscribe Now
            </h3>
            <div className=" mb-4 flex flex-col lg:items-start justify-start ">
              <input
                type="text"
                placeholder="Enter email"
                className="w-[75vw] lg:w-[25rem] h-12 bg-[#1A1A1A] border border-[#333333] text-gray-300 rounded-lg px-6 outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-200 placeholder:text-gray-500 block mb-4"
              />
              <Link
               href={process.env.TRY_NOW_LINK}
                className="inline-block text-center py-3 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors px-10 font-semibold self-center lg:self-start"
              >
                TRY NOW
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="grid grid-cols-2 gap-12 text-mtext-tertiary w-90 lg:w-auto">
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
              {
                title: "Connect",
                links: ["Contact us", "X (Twitter)", "GitHub", "YouTube"],
                hrefs: [
                  "/contact",
                  "https://x.com/linear",
                  "https://github.com/linear",
                  "https://www.youtube.com/@linear",
                ],
                external: [false, true, true, true],
              },
            ].map(({ title, links, hrefs, external }, index) => (
              <div key={index}>
                <h3 className="text-mtext-primary lg:mb-4 text-xl font-medium font-primary">
                  {title}
                </h3>
                <ul className="mt-3 space-y-5">
                  {links.map((link, i) => (
                    <li key={i}>
                      <span
                        onClick={() => handleScroll(hrefs[i])}
                        target={external?.[i] ? "_blank" : "_self"}
                        className="hover:text-gray-300 cursor-pointer"
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
