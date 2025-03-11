import React from 'react';
import Link from "next/link";
import inter from "../app/InterFont.jsx";
import Image from 'next/image';
import useScreenStore from '../../store/useScreenStore.js';
import faqbackground from "../assets/faq_bg.png";

const Footer = () => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);

  return (
    <footer className={`bg-pmBlack py-10 text-[0.9rem] font-normal ${inter.className}`
    }     
    style={{
      backgroundImage: !isLargeScreen ? `url(${faqbackground.src})` : 'none',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      borderRadius: "12px",
      color: "white",
    }}>
      <div className="mx-auto page-max-width">
        <div className="flex flex-col md:flex-row justify-between w-full items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-icon.svg" height={1500} width={1500} className="w-36 lg:w-32 h-auto px-3 shadow-xl mb-10 lg:mb-0" alt="Logo" />
          </Link>

          {/* Navigation Links */}
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-6 text-mtext-tertiary w-90 lg:w-auto">
            {[
              { title: "Features", links: ["Plan", "Build", "Insights", "Customer Requests"], hrefs: ["/plan", "/build", "/features/insights", "/customer-requests"] },
              { title: "Product", links: ["Pricing", "Method", "Integrations", "Changelog"], hrefs: ["/pricing", "/method", "/integrations", "/changelog"] },
              { title: "Company", links: ["About", "Customers", "Careers", "Blog"], hrefs: ["/about", "/customers", "/careers", "/blog"] },
              { title: "Connect", links: ["Contact us", "X (Twitter)", "GitHub", "YouTube"], hrefs: ["/contact", "https://x.com/linear", "https://github.com/linear", "https://www.youtube.com/@linear"], external: [false, true, true, true] }
            ].map(({ title, links, hrefs, external }, index) => (
              <div key={index}>
                <h3 className="text-mtext-primary lg:mb-10">{title}</h3>
                <ul className="mt-3 space-y-5 hover:text-gray-300">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link href={hrefs[i]} target={external?.[i] ? "_blank" : "_self"} className="hover:text-gray-300">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-mtext-primary text-sm lg:text-base mt-8 lg:mt-14 pt-5 font-primary border-t-[0.5px] border-white">
        © {new Date().getFullYear()} BossGpt.com All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;