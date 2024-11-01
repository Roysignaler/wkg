// src/app/layout.tsx
"use client";

import { useEffect } from "react";
import { Audiowide, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider, useTheme } from "./components/ThemeContext"; // Import ThemeProvider and useTheme

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

function LayoutWithFavicon({ children }: { children: React.ReactNode }) {
  const { isWarmTheme } = useTheme();

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute(
        "href",
        isWarmTheme ? "/watticonorange.svg" : "/watticonblue.svg"
      );
    }
  }, [isWarmTheme]);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          href={isWarmTheme ? "/watticonorange.svg" : "/watticonblue.svg"}
          sizes="any"
        />
      </head>
      <body
        className={`${audiowide.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <LayoutWithFavicon>{children}</LayoutWithFavicon>
    </ThemeProvider>
  );
}
