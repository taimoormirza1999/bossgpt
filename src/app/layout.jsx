import "./globals.css";
import "./App.css";
import Navigation from "@/components/Navigation";
import ScriptsLoader from "@/components/ScriptsLoader";
import localFont from 'next/font/local'
import ScreenProvider from "@/components/ScreenProvider";


const Geist = localFont({
  src: '../../public/fonts/Geist-Medium.woff2',
  weight: '500',
  style: 'normal',
  variable: '--font-geist-variable',
});
const CabinetGroteskVariable = localFont({
  src: '../../public/fonts/CabinetGrotesk-Variable.ttf',
  variable: '--font-cabinet-grotesk-variable',
  display: 'swap',
});

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
      url: 'https://bossgpt.com/boss-gpt.png',
      width: 1800,
      height: 1600,
      alt: 'MSA Club Logo Image',
    },
  ],
  authors: ['Taimoor Hamza',],
    url: "https://bossgpt.com/",
  },

  twitter: {
    card: "summary_large_image",
    title: "BossGPT | Master Anime & Character Animation",
    description:
      "Join BossGPT's industry-leading animation courses and learn anime character design, 3D animation, and more. Start your journey today!",
   images: [
    {
      url: "https://bossgpt.com/boss-gpt.png",
      width: 1200,
      height: 630,
      alt: "BossGPT Logo"
    }
  ],
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning={true} className={`${CabinetGroteskVariable.variable} ${Geist.variable}`}>
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
       
        <Navigation  />
        <ScreenProvider>{children}</ScreenProvider>
        {/* <FooterWrapper /> */}
        </div>
      </body>
    </html>
  );
}
