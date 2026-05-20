import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "安省驾驶员手册中文版",
  description:
    "安大略省 MTO Driver's Handbook 官方手册中文全文译文，覆盖 G1 笔试、G2/G 路考、道路规则、交通标志、安全驾驶和驾照责任。",
  alternates: { canonical: "/handbook" },
  robots: { index: true, follow: true },
};

export default function HandbookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}