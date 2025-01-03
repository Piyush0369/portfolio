import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://piyushdewangan.com/"),
  title: "Piyush Dewangan - SWE | IXD | UX - Developer Portfolio",
  description:
    "Developer Portfolio of Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Piyush Dewangan",
    "Piyush",
    "IbiiDewangan",
    "PiyushDewangan",
    "Piyush_Dewangan",
    "Next.js",
    "ReactNative",
    "Android",
  ],
  // openGraph: {
  //   title: "Piyush Dewangan - SWE | IXD | UX",
  //   description:
  //     "Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
  //   images: "/OpenGraph.jpg",
  // },
  alternates: {
    canonical: "https://piyushdewangan.com/",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Piyush Dewangan",
              jobTitle: "Software Engineer",
              url: "",
              sameAs: [
                "https://www.linkedin.com/in/piyush0369/",
                "https://github.com/piyush0369",
              ],
            }),
          }}
        />
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        /> */}
      </head>
      <body
        className={`${inter.className} bg-[#050e39] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
