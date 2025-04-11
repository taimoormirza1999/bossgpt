import React from 'react'

export default function SignatureContainer({children}) {
  return (
    <div className='bg-gradient-to-b from-white to-[#08090A] rounded-24 w-[90%] mx-auto lg:w-full overflow-hidden group'>
      {children}
    </div>
  )
}
