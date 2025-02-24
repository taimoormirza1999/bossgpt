import React from 'react'

function CheckIconSvg({height=18, width=18}) {
  return (
  <svg
    className='me-2'
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill='#828fff'
    role="img"
    focusable="false"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.784-8.571a.885.885 0 0 0-.037-1.2.768.768 0 0 0-1.13.04L7.148 9.19 5.332 7.477a.768.768 0 0 0-1.13.07.885.885 0 0 0 .067 1.199l2.011 1.897c.54.509 1.365.47 1.859-.09l3.645-4.124Z"
    />
  </svg>

  )
}

export default CheckIconSvg
