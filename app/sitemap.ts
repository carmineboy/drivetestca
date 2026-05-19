import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "zh-CN": `${SITE_URL}/`,
          "en-CA": `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "zh-CN": `${SITE_URL}/`,
          "en-CA": `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/quiz`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
