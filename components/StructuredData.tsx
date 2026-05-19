import { SITE_URL, SERVICE_AREAS, BUSINESS_NAME_ZH, BUSINESS_NAME_EN } from "@/lib/site";

type Locale = "zh" | "en";

export function StructuredData({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const url = isZh ? SITE_URL : `${SITE_URL}/en`;
  const name = isZh ? BUSINESS_NAME_ZH : BUSINESS_NAME_EN;
  const description = isZh
    ? "尼亚加拉 / 圣凯瑟琳地区中英文驾驶教练，12 年系统化教学，G2 / G 路考一次通过率 97%。"
    : "Bilingual driving instructor in the Niagara region. 12 years teaching · 97% first-time G2 / G road-test pass rate.";

  const data = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    "@id": `${SITE_URL}#business`,
    name,
    alternateName: isZh ? BUSINESS_NAME_EN : BUSINESS_NAME_ZH,
    url,
    description,
    inLanguage: isZh ? ["zh-CN", "en-CA"] : ["en-CA", "zh-CN"],
    image: `${SITE_URL}/og.png`,
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Niagara Region, Ontario, Canada",
      },
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "ON",
      addressCountry: "CA",
      addressLocality: "St. Catharines",
    },
    knowsLanguage: ["zh-CN", "en-CA"],
    serviceType: [
      "G1 written test prep",
      "G2 road test preparation",
      "G road test preparation",
      "Winter driving lessons",
      "Highway and merge training",
      "Parallel, reverse, and 3-point parking",
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
