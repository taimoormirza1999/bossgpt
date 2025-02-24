import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

const FeatureSection = ({ title, features, imageSrc }) => {
  return (
    <section className="bg-mbg-primary text-white/70 md:py-20 px-6 font-normal">
      <SectionWrapper page_max_width={false}>
        <div className="page-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Content */}
          <div>
            {features.map((feature, index) => (
              <div key={index} className="mb-6">
                <div className="flex mb-4 items-center space-x-2 text-lg text-white/90 font-semibold">
                  <span className="p-2.5 me-3 border-[0.9px] bg-white/5 border-white/80 rounded-circle ">
                    {feature.icon}
                  </span>
                  <span>{feature.title}</span>
                </div>
                <p className="text-white/70 leading-7 text-base font-light">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right Side Illustration */}
          <div className="relative">
          <div className="w-full h-auto">
  <Image
    className="object-contain w-full"
    src={imageSrc}
    alt={title}
    width={500}
    height={500}
  />
</div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default FeatureSection;
