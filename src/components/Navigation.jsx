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
      className={`bg-mbg-primary/90  border-b-[0.5px] border-[white]/[20%] fixed top-0 left-0 right-0 z-50 shadow-lg py-0 md:py-2 xl:py-0 h-[78px] lg:h-[74px]  ${inter.className} `}
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
              Enroll
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("drawing-course")}
              className="nav-primary-link "
            >
              Drawing Course
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("animation-course")}
              className="nav-primary-link "
            >
              Animation Course
            </span>
          </li>
        </ul>

        <div className="flex items-center font-normal  space-x-5 text-base">
          <Link href="/" className=" px-4 py-1.5 rounded-lg primary-link">
            Login
          </Link>

          <ButtonPrimary primary={true} text="Signup" url="/" nav={true} />
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white/70text-2xl text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <CrossSvg/>
            ) : (
              // <FiMenu className="text-white/70text-2xl" />
             <MenuSvg/>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="bg-mbg-primary md:hidden py-1 w-90 mx-auto rounded-lg border border-mbg-translucent py-10"
          initial={{ opacity: 0, x: -90 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.9, ease: "easeInOut" }}
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
              ENROLL
            </li>
            <li
              className="font-normal text-osloGray text-sm"
              onClick={() => handleScroll("drawing-course")}
            >
              DRAWING COURSE
            </li>
            <li
              className="font-normal text-osloGray text-sm"
              onClick={() => handleScroll("animation-course")}
            >
              ANIMATION COURSE
            </li>
          </motion.ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
