import React from 'react'
import ContentSectionWrapper from './contentSectionWrapper'
import { imagesUrl2 } from "../../config/constants";
import Image from "next/image";

function AIBossTakeLead() {
  return (
    <div>
      <ContentSectionWrapper bigHeading1="Let Your AI Boss" bigHeading2="Take the Lead" paragraph="From assigning tasks to setting deadlines your AI Boss does it all so you can focus on getting things done.">
      <Image
        src={imagesUrl2}
        height={1200}
        width={1400}
        alt=""
        className="tool-images"
      />
        </ContentSectionWrapper>
    </div>

  )
}

export default AIBossTakeLead
