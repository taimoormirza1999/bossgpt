import Link from "next/link";
import React from "react";

function ButtonPrimary({ primary = true, text = "", url, nav=false}) {
  return (
    <Link
      href={url}
      duration={800}
      className={`text-woodsmoke font-medium capitalize shadow-stack-low border border-btnWild ${nav==true?'px-3 py-1.5':'px-5 py-2.5'} text-sm rounded-lg bg-btnWild hover:bg-white medium-transition $`}
    >
      {text}
    </Link>
  );
}

export default ButtonPrimary;
