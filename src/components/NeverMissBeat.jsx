import React from 'react'
import ContentSectionWrapper from './contentSectionWrapper'
import {imagesUrl3 } from "../../config/constants";
import Image from "next/image";

function NeverMissBeat() {
  return (
    <div className="lg:-mt-20">
      <ContentSectionWrapper heading="Never Miss a Beat" description="With AI Boss, you'll never miss a beat. From assigning tasks to setting deadlines, your AI Boss does it all so you can focus on getting things done.">
      <Image
        src={imagesUrl3}
        height={1200}
        width={1400}
        alt="NeverMissBeat bossgpt.com"
        draggable={false}
        className="tool-images"
      />
        </ContentSectionWrapper>
    </div>

  )
}

export default NeverMissBeat
