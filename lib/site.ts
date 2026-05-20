// Single source of truth for site-wide SEO + structured data.
// Update SITE_URL to the production domain before launch.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://niagara-drive-coach.vercel.app";

export const SERVICE_AREAS = [
  "St. Catharines",
  "Niagara Falls",
  "Welland",
  "Thorold",
  "Niagara-on-the-Lake",
  "Fort Erie",
  "Lincoln",
  "Pelham",
];

export const KEYWORDS_ZH = [
  "尼亚加拉驾驶教练",
  "圣凯瑟琳驾驶教练",
  "St Catharines 华人驾校",
  "Niagara 驾校",
  "尼亚加拉华人驾校",
  "圣凯瑟琳华人驾校",
  "Niagara Falls 驾校",
  "Welland 驾校",
  "Thorold 驾校",
  "安省 G1 笔试辅导",
  "G2 路考辅导",
  "G 路考辅导",
  "中文驾驶教练",
  "尼亚加拉冬季驾驶",
  "St Catharines 路考路线",
  "Niagara Falls 路考路线",
  "Welland 路考路线",
  "MTO 持证教练",
];

export const KEYWORDS_EN = [
  "Niagara driving instructor",
  "St Catharines driving instructor",
  "St Catharines driving lessons",
  "Niagara driving school",
  "Niagara Falls driving lessons",
  "Welland driving lessons",
  "Thorold driving lessons",
  "G2 road test prep Niagara",
  "G road test prep Niagara",
  "G1 written test help Ontario",
  "bilingual driving instructor Niagara",
  "Mandarin driving lessons St Catharines",
  "Chinese driving instructor Niagara",
  "winter driving lessons Niagara",
  "MTO certified driving instructor Ontario",
];

export const BUSINESS_NAME_ZH = "Niagara 驾考教练";
export const BUSINESS_NAME_EN = "Niagara Driving Instructor";

export const SOCIAL_LINKS = {
  xiaohongshu: "https://www.xiaohongshu.com/user/profile/598210c36a6a6906302a532f",
} as const;
