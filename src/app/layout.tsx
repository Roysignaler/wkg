// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Audiowide, Inter, Poppins } from "next/font/google";
import "./globals.css";

// Local fonts setup
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google Fonts setup
const audiowide = Audiowide({
  subsets: ["latin"],
  variable: "--font-audiowide",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "W/KG Calculator - Essential Tool for Cyclists",
  description:
    "Calculate your power-to-weight ratio easily with W/KG Calculator. A must-have tool for cyclists to gauge performance.",
  icons: {
    icon: "/app/favicon.ico", // path to your favicon in the public folder
  },
  openGraph: {
    title: "W/KG Calculator",
    description:
      "Essential tool for cyclists. Measure performance and progress with our power-to-weight ratio calculator.",
    url: "https://yourdomain.com",
    siteName: "W/KG Calculator",
    images: [
      {
        url: "/og-image.png", // specify an Open Graph image if available
        width: 1200,
        height: 630,
        alt: "W/KG Calculator - Essential Tool for Cyclists",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "W/KG Calculator",
    description:
      "Calculate your power-to-weight ratio easily with W/KG Calculator. Perfect for cyclists to measure their performance!",
    images: ["/og-image.png"], // specify a Twitter card image if available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${audiowide.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
