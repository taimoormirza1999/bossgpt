"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import inter from "../app/InterFont.jsx";
import ButtonPrimary from "./utils/ButtonPrimary.jsx";
import Image from "next/image";
import { motion } from "framer-motion";
import CrossSvg from "./utils/icons/CrossSvg.jsx";
import MenuSvg from "./utils/icons/MenuSvg.jsx";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <nav
      className={`bg-black/20  border-b-[0.5px] border-[white]/[20%] fixed top-0 left-0 right-0 z-50 shadow-lg py-0 md:py-2 xl:py-0 h-[78px] lg:h-[78px]  ${inter.className} `}
    >
      <div className="max-w-7xl mx-auto w-90 lg:w-full py-4 flex items-center justify-between   page-max-width ">
        <Link
          href="/"
          className="cursor-pointer flex flex-row items-center"
          suppressHydrationWarning={true}
        >
          <img
            src="/logo-icon.svg"
            className="w-14 lg:w-14 h-auto  shadow-xl"
            alt="Logo"
          />
          <span className="font-medium text-base lg:text-xl lg:pl-2 text-white">
            BOSS<span className=" pl-[2.5px] font-black">GPT</span>
          </span>
        </Link>

        <ul className="hidden md:flex space-x-2 px-3 pl-5 font-normal text-osloGray text-[0.96rem]">
          <li className="animate-bounce">
            <span
              onClick={() => handleScroll("enroll-checkout")}
              className="nav-primary-link "
            >
              Product
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("faq")}
              className="nav-primary-link "
            >
              FAQ
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("pricing-section")}
              className="nav-primary-link "
            >
              Pricing
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("customers")}
              className="nav-primary-link "
            >
              Customers
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("animation-course")}
              className="nav-primary-link "
            >
              Blog
            </span>
          </li>
          {/* <li>
            <span
              onClick={() => handleScroll("animation-course")}
              className="nav-primary-link "
            >
              Contact
            </span>
          </li> */}
        </ul>

        <div className="flex items-center font-normal  space-x-5 text-base">
          <Link
            href="https://bossgpt.com/tool/v1/"
            className=" px-4 py-1.5 rounded-lg primary-link "
          >
            Login
          </Link>

          <ButtonPrimary
            primary={true}
            text="Signup"
            url="https://bossgpt.com/tool/v1/?page=register"
            nav={true}
          />
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white/70text-2xl text-white"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <CrossSvg />
            ) : (
              // <FiMenu className="text-white/70text-2xl" />
              <MenuSvg />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="bg-mbg-primary/90 md:hidden w-90 mx-auto rounded-lg border border-mbg-translucent py-7"
          initial={{ opacity: 0,  }}
          animate={{ opacity: 1, }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.ul
            className="flex flex-col items-center space-y-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <li
              className="font-normal text-osloGray text-sm"
              onClick={() => handleScroll("enroll-checkout")}
            >
              Product
            </li>
            <li
              className="font-normal text-osloGray text-sm"
              onClick={() => handleScroll("drawing-course")}
            >
              FAQ
            </li>
            <li
              className="font-normal text-osloGray text-sm"
              onClick={() => handleScroll("animation-course")}
            >
              Pricing
            </li>
            <li
              className="font-normal text-osloGray text-sm"
              onClick={() => handleScroll("animation-course")}
            >
               Customers
            </li>
            <li
              className="font-normal text-osloGray text-sm"
              onClick={() => handleScroll("animation-course")}
            >
              Blogs
            </li>
          </motion.ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
