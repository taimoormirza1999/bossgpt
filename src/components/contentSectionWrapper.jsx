"use client";
import SectionHeading from "./utils/SectionHeading";
import BigheadingLeading from "./BigHeadingLeading";
const ContentSectionWrapper = ({
  children,
  bigHeading1,
  bigHeading2,
  heading,
  description,
  paragraph,
}) => {
  return (
    <section
      className="w-full pt-16 lg:py-16 text-white overflow-hidden"
      id="blogs"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        {bigHeading1 && (
          <BigheadingLeading text={bigHeading1} text2={bigHeading2} className={"text-[2rem] lg:text-5xl 2xl:text-6xl"} smallClassName={"text-[1.5rem] leading-[2.2rem]"} />
        )}

        {heading && <SectionHeading text={heading} className="uppercase" />}
        {paragraph && (
          <p className="text-lg text-white/90 leading-[1.6] font-primary lg:w-[50%] mx-auto mt-5 font-normal uppercase">
            {paragraph}
          </p>
        )}
        {description && (
          <p className="text-base text-white/90 leading-[1.6] font-primary lg:w-[40%] mx-auto lg:-mt-10 font-normal">
            {description}
          </p>
        )}
      </div>

      <div className="relative w-full mx-auto mt-10">
        {children}

        {/* Gradient overlays with hardware acceleration */}
        <div className="absolute left-0 top-0 h-full w-10 lg:w-32 bg-gradient-to-r from-black to-transparent z-10 transform-gpu"></div>
        <div className="absolute right-0 top-0 h-full w-10 lg:w-32 bg-gradient-to-l from-black to-transparent z-10 transform-gpu"></div>
      </div>
    </section>
  );
};

export default ContentSectionWrapper;
