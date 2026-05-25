import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { CommandsClient } from "./CommandsClient";

export const metadata: Metadata = {
  title: "路考英文与考官指令大全 · 双语语音在线练习",
  description:
    "精选收录加拿大安大略省 G2 / G 路考中最常用的考官英文口令与检查项目，带中文翻译与在线语音播放发音，助你轻松应对路面考试。",
  alternates: { canonical: "/commands" },
  robots: { index: true, follow: true },
};

export default function CommandsPage() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <SiteHeader locale="zh" />
      <CommandsClient />
    </main>
  );
}
