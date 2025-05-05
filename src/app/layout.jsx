import "./globals.css";
import "./App.css";
import Navigation from "@/components/Navigation";
import ScriptsLoader from "@/components/ScriptsLoader";
import localFont from "next/font/local";
import ScreenProvider from "@/components/ScreenProvider";

const Geist = localFont({
  src: "../../public/fonts/Geist-Medium.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-geist-variable",
});
const CabinetGroteskVariable = localFont({
  src: "../../public/fonts/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet-grotesk-variable",
  display: "swap",
});

export const metadata = {
  manifest: '/manifest.json',
  themeColor: "#000000",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  title: "BossGPT: AI Project Management & Task Automation Tool",
  description:
    "Boost productivity and streamline workflows with BossGPT, the ultimate AI-powered project management tool. Automate tasks, track progress, and collaborate effortlessly. Try it now!",
  keywords: [
    "AI to do app",
    "AI task planner",
    "AI productivity assistant",
    "smart to-do list app",
    "automated task manager",
    "AI project management",
    "AI task automation",
    "workflow automation software",
    "project management tool",
    "AI productivity assistant",
    "team collaboration platform",
    "task manager AI",
    "smart deadline tracker",
    "AI project planner",
    "personal assistant AI for tasks",
    "organize my tasks with AI",
    "remote work task manager",
    "AI work assistant",
    "AI project tracking software",
    "enterprise task automation",
    "automated project manager",
    "BossGPT AI assistant",
    "best project management AI tool",
    "intelligent task scheduler",
    "AI tool for business productivity",
    "time management with AI",
    "top AI tools for project managers",
  ].join(", "),
  alternates: {
    canonical: "https://bossgpt.com/",
  },
  generator: "https://bossgpt.com",
  applicationName: "bossgpt.com-BossGPT",
  referrer: "origin-when-cross-origin",
  creator: "Taimoor Hamza",
  publisher: "Artoul",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "BossGPT",
    locale: "en_US",
    type: "website",
    url: "https://bossgpt.com/",
    title: "BossGPT - The Ultimate AI Project Asssitant Tool",
    description:
      "Streamline your workflow with BossGPT. AI-powered project planning, task automation, reminders, and smart insights – all in one intelligent tool.",
    images: [
      {
        url: "https://bossgpt.com/boss-gpt.png",
        width: 1800,
        height: 1600,
        alt: 'BossGPT Productivity AI Tool',
      },
    ],
    authors: ["Taimoor Hamza"],
   
  },

  twitter: {
    card: "summary_large_image",
    title: "BossGPT: Your AI Assistant for Smarter Project Management",
    description:
      "Unlock peak performance with BossGPT – your AI-powered assistant for managing projects, deadlines, and tasks with precision.",
    images: [
      {
        url: "https://bossgpt.com/boss-gpt.png",
        width: 1200,
        height: 630,
       alt: "BossGPT AI Assistant Platform Preview"
      },
    ],
    site: "@bossgpt",
    creator: "@taimoorhamza",
    publisher: "@taimoorhamza",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${CabinetGroteskVariable.variable} ${Geist.variable}`}
    >
      <head>
        <ScriptsLoader />
      </head>
      <body>
        {/* NoScript Fallback for GTM */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JFVBHSJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className={`mx-0 relative bg-cover bg-center overflow-x-hidden`}>
          <Navigation />
          <ScreenProvider>{children}</ScreenProvider>
        </div>
      </body>
    </html>
  );
}
