"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const ScriptsLoader = () => {
  const [loadScripts, setLoadScripts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadScripts(true);
    }, 8000);
  }, []);

  return (
    <>
      {loadScripts && (
        <>
          {/* Google Tag Manager */}
           <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5JFVBHSJ');
        `}
      </Script>
       {/* Hotjar Tracking */}
          <Script
            id="hotjar-script"
            src="https://static.hotjar.com/c/hotjar-5271325.js"
            strategy="lazyOnload"
          />
             
        </>
      )}
    </>
  );
};

export default ScriptsLoader;