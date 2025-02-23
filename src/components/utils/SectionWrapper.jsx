import inter from '@/app/InterFont'
import React from 'react'

export default function SectionWrapper({children, page_max_width=true, }) {
  return (
    <div className={`${inter.className} ${page_max_width==true &&('page-max-width')} mx-auto`}>
      {children}
    </div>
  )
}
