import type { Metadata, Viewport } from "next";
import "../globals.css";
import { SITE_URL, KEYWORDS_EN, BUSINESS_NAME_EN } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Niagara Drive Coach · St. Catharines bilingual driving instructor",
    template: "%s · Niagara Drive Coach",
  },
  description:
    "Bilingual driving instructor in St. Catharines and the Niagara region. 12 years local · 97% first-time G2 / G pass rate · winter driving, road-test route prep, and G1 written help.",
  keywords: KEYWORDS_EN,
  applicationName: BUSINESS_NAME_EN,
  authors: [{ name: BUSINESS_NAME_EN }],
  creator: BUSINESS_NAME_EN,
  publisher: BUSINESS_NAME_EN,
  category: "Driving school",
  alternates: {
    canonical: "/en",
    languages: {
      "zh-CN": "/",
      "en-CA": "/en",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Niagara Drive Coach — St. Catharines bilingual driving instructor",
    description:
      "12 years local · 97% first-time pass · G2 / G road-test prep across St. Catharines, Niagara Falls, Welland, Thorold.",
    url: `${SITE_URL}/en`,
    siteName: BUSINESS_NAME_EN,
    type: "website",
    locale: "en_CA",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Catharines & Niagara driving instructor",
    description:
      "Bilingual G2 / G road-test coach · 97% first-time pass · 12 years across the Niagara region.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf5ea",
  width: "device-width",
  initialScale: 1,
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&family=Noto+Sans+SC:wght@400;500;700;900&family=Fraunces:opsz,wght,SOFT@9..144,300..900,0..100&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
