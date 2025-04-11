import Link from "next/link";
import React from "react";

function ButtonPrimary({
  primary = false,
  text = "",
  banner = false,
  url,
  nav = false,
  icon = false,
  tag = "link",
}) {
  // Base styling used everywhere
  const baseClasses =
    "Z-20 cursor-pointer shadow-stack-low border text-xs lg:text-sm medium-transition flex items-center ";

  // Color/appearance classes
  let colorClasses = "";
  if (primary) {
    colorClasses = "bg-btnWild hover:bg-white border-btnWild text-woodsmoke";
  } else if (banner) {
    colorClasses = "bg-white/15 border-white/50 border-[1.6px] hover:bg-white/90 hover:text-woodsmoke";
  } else {
    colorClasses =
      "bg-gradient-to-r from-mtext-tertiary via-mtext-primary/70 to-mtext-primary/90 bg-clip-text text-transparent border-mbg-primary";
  }

  // Sizing/spacing classes
  let sizeClasses = "";
  if (nav) {
    sizeClasses = "px-3 py-1.5 lg:py-2 font-medium rounded-8";
  } else if (banner) {
    sizeClasses = "px-9 lg:px-14 py-3.5 uppercase font-black lg:font-bold rounded-14 h-[55px]";
  } else {
    sizeClasses = "px-7 py-2 font-black lg:font-semibold rounded-8 w-auto";
  }

  // Combine everything
  const combinedClasses = `${baseClasses} ${colorClasses} ${sizeClasses}`;

  // Optional right arrow icon
  const arrowIcon = (
    <svg
      className="text-pink-900"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#8a8f98"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z" />
    </svg>
  );

  // Conditionally render either a <Link> or an <a> tag
  if (tag === "link") {
    return (
      <Link href={url} className={combinedClasses} style={{backdropFilter: "blur(2px)"}}>
        {text}
        {icon && arrowIcon}
      </Link>
    );
  }

  return (
    <a href={url} className={combinedClasses}>
      {text}
      {icon && arrowIcon}
    </a>
  );
}

export default ButtonPrimary;
