import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { FaFolderClosed } from "react-icons/fa6";
import { MdOutlineTipsAndUpdates, MdTipsAndUpdates } from "react-icons/md";
import { FaBullhorn, FaChartBar, FaLightbulb } from "react-icons/fa";
import { ImBullhorn } from "react-icons/im";
import FeatureSection from "./FeatureSection";

const features = [
  {
    title: "Manage Projects End-to-End",
    description:
      "Consolidate tasks, subtasks, milestones, and key project documentation in one centralized hub for seamless execution.",
    icon: <FaFolderClosed className="text-lg" />,
  },
  {
    title: "Smart Project Updates",
    description:
      "Keep your team aligned with automated status updates and progress tracking to ensure transparency and efficiency.",
    icon: <ImBullhorn className="text-lg" />,
  },
  {
    title: "AI-Powered Task Suggestions",
    description:
      "Let AI analyze your workflow and suggest relevant tasks, reducing manual effort and improving project efficiency.",
    icon: <FaLightbulb className="text-lg" />,
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Gain actionable insights with AI-generated analytics, helping you optimize timelines and resource allocation.",
    icon: <FaChartBar className="text-lg" />,
  },
];
export default function ProductSectionFeature2Cols() {
  return (
    <section className={` `}>
      <FeatureSection
      title="Product Features"
      features={features}
      imageSrc="/landing/banner-boss-gpt.png"
    />
    </section>
  );
}
