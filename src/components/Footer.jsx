import React, { useEffect } from "react";
import Link from "next/link";
import inter from "../app/InterFont.jsx";
import Image from "next/image";
import useScreenStore from "../../store/useScreenStore.js";
import faqbackground from "../assets/faq_bg.png";
import { usePathname, useRouter } from "next/navigation";
import SubscribeForm from "./SubscribeForm.jsx";

const Footer = ({ removeBackground = false }) => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);
  const router = useRouter();
  const pathname = usePathname();
  const handleScroll = (id, external) => {
    if (external) {
      window.open(id, "_blank");
      // setMobileMenuOpen(false); 
    } else if (pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
    // setMobileMenuOpen(false); 
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
                alt="Logo bossgpt.com"
              />
              <span className="font-medium text-xl lg:text-2xl lg:pl-2 text-white">
                BOSS<span className="pl-[2.5px] font-black">GPT</span>
              </span>
            </Link>
          </div>

          {/* Subscribe Now Column */}
          <div className="flex flex-col  space-y-5 lg:space-y-2 ">
            <SubscribeForm/>
          </div>

          {/* Navigation Links */}
          <nav className="grid grid-cols-1 gap-12 text-mtext-tertiary w-90 lg:w-auto ">
            {[
              {
                title: "Important Links",
                links: ["Product", "FAQs", "Pricing", "Customer Reviews", "Privacy Policy", "Terms of Service"],
                hrefs: [
                  "#product",
                  "#faq",
                  "#pricing-section",
                  "#customers",
                  "/privacy-policy",
                  '/terms-service'
                ],
                external: [
                  false,
                  false,
                  false,
                  false,
                  true,
                  true
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
                      
                      <Link
                        href={hrefs[i]}
                        className="hover:text-gray-300 cursor-pointer"
                        onClick={(e) => {
                          if (!external?.[i] && hrefs[i].startsWith('#')) {
                            e.preventDefault();
                            handleScroll(hrefs[i].substring(1));
                          }
                        }}
                      >
                        {link}
                      </Link>
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