"use client";
import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "../components/Loader";
import ScrollAnimation from "../components/utils/ScrollAnimation";
import LoaderWrapper from "../components/utils/LoaderWrapper";
import CookiePolicy from "@/components/utils/CookiePolicy";
import FAQ from "@/components/FAQ";
import CustomerReviews from "@/components/CustomerReviews";
import Tool from "@/components/Tool";
import Product from "@/components/Product";
const Banner = lazy(() => import("../components/Banner"));
// import SignupForm from "../components/SignupForm";

const Home = () => {
  const [loading, setLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= totalHeight * 0.4) {
        const cookies = document.cookie.split("; ");
        const emailCookie = cookies.find((row) => row.startsWith("email="));
        if (emailCookie) {
          const email = decodeURIComponent(emailCookie.split("=")[1]);
          setShowForm(false);
        } else {
          setShowForm(true);
        }

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <div className="relative">
      {loading ? (
        <Loader />
      ) : (
        <div className="relative">
          <Banner />
          <Tool/>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                {/* <PricingSection
                  showModal={showModal}
                  setShowModal={setShowModal}
                /> */}
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Product/>
          <CookiePolicy />
          <CustomerReviews />
          <FAQ />
          {/*
          <BlogCards /> */}
          {/* {showForm && <SignupForm />} */}
        </div>
      )}
    </div>
  );
};

export default Home;
