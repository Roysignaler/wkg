// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "W/KG Calculator - Essential Tool for Cyclists",
  description:
    "Calculate your power-to-weight ratio easily with W/KG Calculator. A must-have tool for cyclists to gauge performance.",
  openGraph: {
    title: "W/KG Calculator",
    description:
      "Essential tool for cyclists. Measure performance and progress with our power-to-weight ratio calculator.",
    url: "https://yourdomain.com",
    siteName: "W/KG Calculator",
    images: [
      {
        url: "/og-image.png",
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
      "Calculate your power-to-weight ratio easily with W/KG Calculator.",
    images: ["/og-image.png"],
  },
};
