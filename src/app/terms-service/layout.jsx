

import FooterWrapper from "@/components/utils/FooterWrapper";
import React from "react";
import faqbackground from "@/assets/faq_bg.png";
export default function layout({ children }) {
  return (
    <section  style={
      {
        backgroundImage: `url(${faqbackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        color: "white",
      } 
    }>
      {children}
      <FooterWrapper />
    </section>
  );
}
