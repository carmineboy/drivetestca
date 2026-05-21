import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { SITE_URL, KEYWORDS_ZH, KEYWORDS_EN, BUSINESS_NAME_ZH } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Niagara 驾考教练 · 圣凯瑟琳中英文驾驶教练 · 自信上路",
    template: "%s · Niagara 驾考教练",
  },
  description:
    "尼亚加拉 / 圣凯瑟琳地区中英文驾驶教练，12 年系统化教学，G2 / G 路考一次通过率 97%。覆盖 St. Catharines、Niagara Falls、Welland、Thorold；冬季驾驶、路考路线预习、G1 笔试辅导一站式指导。",
  keywords: [...KEYWORDS_ZH, ...KEYWORDS_EN],
  applicationName: BUSINESS_NAME_ZH,
  authors: [{ name: BUSINESS_NAME_ZH }],
  creator: BUSINESS_NAME_ZH,
  publisher: BUSINESS_NAME_ZH,
  category: "Driving school",
  alternates: {
    canonical: "/",
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
    title: "Niagara 驾考教练 · 圣凯瑟琳中英文驾驶教练",
    description:
      "12 年本地经验 · G2 / G 路考一次通过率 97% · 覆盖 St. Catharines、Niagara Falls、Welland、Thorold。",
    url: SITE_URL,
    siteName: BUSINESS_NAME_ZH,
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_CA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niagara 驾考教练 · 自信上路",
    description:
      "尼亚加拉 / 圣凯瑟琳中英文驾驶教练 · G2 / G 路考一次通过率 97%。",
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

export default function ZhRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
