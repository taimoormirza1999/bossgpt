import React from 'react'
import ContentSectionWrapper from './contentSectionWrapper'
import {imagesUrl4 } from "../../config/constants";
import Image from "next/image";

function TimelinesWithoutHassle() {
  return (
    <div className="lg:-mt-20">
      <ContentSectionWrapper heading="Timelines Without the Hassle" description="Get clear, AI-generated timelines that help you prioritize and meet deadlines—no manual planning required.">
      <Image
        src={imagesUrl4}
        height={1200}
        width={1400}
        alt="bossgpt.com timelines without hassle"
        draggable={false}
        className="tool-images"
      />
        </ContentSectionWrapper>
        <h2 className="text-center text-white/90 font-primary text-base font-normal leading-[1.6] lg:-mt-16 lg:w-[30%] mx-auto">
        Your AI Boss can create and assign tasks for you based on conversations or goals—so nothing slips through the cracks.
        </h2>
    </div>

  )
}

export default TimelinesWithoutHassle
