import inter from '@/app/InterFont'
import React from 'react'

export default function SectionWrapper({children}) {
  return (
    <div className={`${inter.className} page-max-width mx-auto`}>
      {children}
    </div>
  )
}
