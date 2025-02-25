import "./globals.css";
import "./App.css";
import localFont from 'next/font/local';
import Navigation from "@/components/Navigation";
import Image from "next/image";
import BackgroundImage from "../assets/background.jpg";
import ScriptsLoader from "@/components/ScriptsLoader";
import FooterWrapper from "@/components/utils/FooterWrapper";
import SuppressErrors from "@/components/utils/SuppressErrors";
import Head from "next/head";
// const CocogooseMedium = localFont({
//   src: '../../public/fonts/Cocogoose-Classic-Medium-trial.ttf',
//   weight: '400',
//   style: 'normal',
//   variable: '--font-cocogoose-medium',
// });

// const CocogooseExtraBold = localFont({
//   src: '../../public/fonts/Cocogoose-Classic-ExtraBold-trial.ttf',
//   weight: '800',
//   style: 'normal',
//   variable: '--font-cocogoose-bold',
// });

// const ImpactCustom = localFont({
//   src: '../../public/fonts/impact.ttf',
//   weight: '400',
//   style: 'normal',
//   variable: '--font-impact',
// });

// const KozGoPr6NRegular = localFont({
//   src: '../../public/fonts/KozGoPr6NRegular.woff',
//   weight: '400',
//   style: 'normal',
//   variable: '--font-kozgopr',
// });

// const FranklinGothicMedium = localFont({
//   src: '../../public/fonts/FranklinGothicMedium.ttf',
//   weight: '400',
//   style: 'normal',
//   variable: '--font-franklin',
// });

export const metadata = {
  // manifest: 'https://msa-club.com/manifest.json',
  title: "The #1 AI Project Management Tool for Smarter Teams | BossGPT",
  description:
    "Boost productivity and streamline workflows with BossGPT, the ultimate AI-powered project management tool. Automate tasks, track progress, and collaborate effortlessly. Try it now!",
  keywords: [
    "AI project management",
    "AI task automation",
    "project management tool",
    "workflow automation",
    "team collaboration software",
    "best AI productivity tool",
    "AI-powered project tracking",
    "task manager AI",
    "smart project planning",
    "time management software",
    "remote team collaboration",
    "enterprise project management",
    "business productivity software",
    "BossGPT AI tool",
    "top AI project manager",
    "best team management software",
    "automation tool for projects",
    "task scheduling AI",
    "project planning software AI",
    "AI for work productivity",
  ].join(", "), 
  generator:"bossgpt.com",
  applicationName:"nossgpt.com",
  referrer: 'origin-when-cross-origin',
  creator: 'Taimoor Hamza',
  publisher:'Artoul',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
      siteName:"BossGPT",
      locale: 'en_US',
      type: 'website',
    title: "BossGPT - The #1 AI Project Management Tool",
    description:
      "Take your productivity to the next level with BossGPT. Manage projects, automate tasks, and collaborate seamlessly with AI-powered efficiency.",
   images: [
    {
      // url: 'https://msa-club.com/logo.png', 
      width: 800,
      height: 600,
      alt: 'MSA Club Logo Image',
    },
    {
      url: 'https://msa-club.com/hero_banner.png',
      width: 1800,
      height: 1600,
      alt: 'MSA Club Logo Image',
    },
  ],
  authors: ['Taimoor Hamza',],
    url: "https://msa-academy.com/",
  },

  twitter: {
    card: "summary_large_image",
    title: "MSA Academy | Master Anime & Character Animation",
    description:
      "Join MSA Academy's industry-leading animation courses and learn anime character design, 3D animation, and more. Start your journey today!",
   images: [
    {
      url: "https://msa-club.com/hero_banner.png",
      width: 1200,
      height: 630,
      alt: "MSA Academy Logo"
    }
  ],
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning={true} className={``}>
     <head>
   <ScriptsLoader/>
     </head>
      <body >
      {/* NoScript Fallback for GTM */}
      <noscript>
  <iframe 
   src="https://www.googletagmanager.com/ns.html?id=GTM-5JFVBHSJ"
    height="0" 
    width="0" 
    style={{ display: "none", visibility: "hidden" }}
  ></iframe>
</noscript>
       <div className={`mx-0 relative bg-cover bg-center overflow-x-hidden`}  >
          {/* <Image
            src={BackgroundImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className="absolute inset-0 -z-10"
          /> */}
          {/* <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
        <Navigation  />
        {/* <SuppressErrors/> */}
        {children}
        <FooterWrapper />
        </div>
      </body>
    </html>
  );
}
