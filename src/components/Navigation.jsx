"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import inter from "../app/InterFont.jsx";
import ButtonPrimary from "./utils/ButtonPrimary.jsx";
import Image from "next/image";

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
      className={`bg-mbg-primary/90 border-b-[0.5px] border-[white]/[20%] fixed top-0 left-0 right-0 z-50 shadow-lg py-2.5 md:py-1 xl:py-0 h-[74px]  ${inter.className} `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between   page-max-width ">
        <Link
          href="/"
          className="cursor-pointer flex flex-row items-center"
          suppressHydrationWarning={true}
        >
          <img
            src="/logo-icon.svg"
            // height={1500}
            // width={1500}
            className="w-20 h-auto px-3 shadow-xl"
            alt="Logo"
          />
          <span className="font-medium text-xl">BOSS<span className=" pl-[2.5px] font-black">GPT</span></span>
        </Link>

        <ul className="hidden md:flex space-x-6  px-3 pl-5 font-normal text-osloGray text-[0.96rem]">
          <li className="animate-bounce">
            <span
              onClick={() => handleScroll("enroll-checkout")}
              className="  primary-link "
            >
              Enroll
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("drawing-course")}
              className="primary-link "
            >
              Drawing Course
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("animation-course")}
              className="primary-link "
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
          <button className="text-white text-2xl " onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FiX className="text-pink200 text-4xl" />
            ) : (
              <FiMenu className="text-white text-4xl" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-black md:hidden py-1">
          <ul className="flex flex-col items-center space-y-4 text-white ">
            <li onClick={() => handleScroll("enroll-checkout")}>ENROLL</li>
            <li onClick={() => handleScroll("drawing-course")}>
              DRAWING COURSE
            </li>
            <li onClick={() => handleScroll("animation-course")}>
              ANIMATION COURSE
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
