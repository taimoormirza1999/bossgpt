"use client";
import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "../components/Loader";
import SignupForm from "../components/SignupForm";
import ScrollAnimation from "../components/utils/ScrollAnimation";
import LoaderWrapper from "../components/utils/LoaderWrapper";
import MarqueeWrapper2 from "../components/MarqueeWrapper2";
import BlogCards from "../components/blog/BlogCards";
import BannerTextHeadingImage from "@/components/utils/BannerTextHeadingImage1";
import ProjectPlanningSection from "@/components/utils/ProjectPlanningSection";
import Team from "@/components/Team";
import BuiltOnStrongFoundations from "@/components/BuiltOnStrongFoundations";
import PricingSection from "@/components/PricingSection";
import ClientsSection from "@/components/ClientsSection";
import Blogg from "@/components/Blogg";
import BannerTextHeadingImage3 from "@/components/utils/BannerTextHeadingImage3";
import CookiePolicy from "@/components/utils/CookiePolicy";
import FAQ from "@/components/FAQ";
import CustomerReviews from "@/components/CustomerReviews";
import ProjectPlanningSection1 from "@/components/utils/ProjectPlanningSection1";
import ProjectPlanningSection2 from "@/components/utils/ProjectPlanningSection2";
import FloatingActionButton from "@/components/FloatingActionButton";
const Banner = lazy(() => import("../components/Banner"));
const EnrollmentBanner = lazy(() => import("../components/EnrollmentBanner"));
const YourPath = lazy(() => import("../components/YourPath"));
const Animation = lazy(() => import("../components/Animation"));
const Drawing = lazy(() => import("../components/Drawing"));
const Mentors = lazy(() => import("../components/Mentors"));
const YouWillLearn = lazy(() => import("../components/YouWillLearn"));
const CommunityMap = lazy(() => import("../components/CommunityMap"));
const Checkout = lazy(() => import("../components/Checkout"));

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Banner />
          <FloatingActionButton/>
          <ClientsSection />
          <Suspense fallback={<Loader />}>
            <Suspense fallback={<Loader />}>
              <Team />
            </Suspense>
            {/* <BannerTextHeadingImage3/> */}
            <ProjectPlanningSection
            direction="right"
            image="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              color="bg-[#68CC58]"
              description1={"Let AI Plan & Manage for You"}
              heading={"Your AI Boss in Action"}
              paragraph={
                <span className="text-white/70 font-normal">
                  <span className="text-white/90 font-medium">
                  Stop worrying about planning and deadlines—BossGPT AI takes care of it for you.
                  </span>{" "}
                  Create tasks, set deadlines, and track progress easily. BossGPT does all the organizing, so you can just focus on getting things done.
                </span>
              }
            />
            <ProjectPlanningSection1
            direction="left"
            image="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              color="bg-[#68CC58]"
              description1={"From Planning to Action—Made Easy"}
              heading={"Your AI Assistant for Seamless Execution"}
              paragraph={
                <span className="text-white/70 font-normal">
                  <span className="text-white/90 font-medium">
                  No more stress over tasks! Let BossGPT handle it all.
                  </span>{" "}
                  Set goals, let BossGPT break them down, and it will remind you what to do next. All you need to do is follow the simple plan it creates for you.
                </span>
              }
            />
            <ProjectPlanningSection2
            direction="left"
            image="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              color="bg-[#68CC58]"
              description1={"Let AI Lead, While You Work"}
              heading={"AI That Helps You Stay on Track"}
              paragraph={
                <span className="text-white/70 font-normal">
                  <span className="text-white/90 font-medium">
                  Imagine a boss that always helps you stay on track. BossGPT organizes everything for you, gives smart suggestions
                  </span>{" "}
                  and makes sure you never forget a task. It’s like having a personal assistant that makes work super easy.
                </span>
              }
            />

            {/* <BannerTextHeadingImage /> */}
          </Suspense>
          {/* <Suspense fallback={<Loader />}>
            <BuiltOnStrongFoundations />
          </Suspense> */}

          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <PricingSection
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <CookiePolicy />
          <FAQ />
          <CustomerReviews />
          {/*
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <YourPath />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <Animation />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <Drawing />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <Mentors />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <YouWillLearn />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper>
                <CommunityMap />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <EnrollmentBanner />
          </Suspense>
          
          <Suspense fallback={<Loader />}>
            <ScrollAnimation>
              <LoaderWrapper>
                <main className="flex items-center justify-center pt-5 mb-32 lg:-mb-10 lg:pt-24 overflow-x-hidden ">
                  <div
                    className="container-fluid w-[99.5%] max-w-[1920px]  mx-auto  rounded-full shadow-2xl px-2 py-3 shadow-primary200 radius-[8px]  ultrawide:shadow-inner-left-right "
                    style={{ borderRadius: "8px" }}>
                    <MarqueeWrapper2 />
                  </div>
                </main>
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <BlogCards /> */}
          {/* {showForm && <SignupForm />} */}
        </>
      )}
    </>
  );
};

export default Home;
