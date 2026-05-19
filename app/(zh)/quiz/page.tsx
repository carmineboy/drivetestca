import type { Metadata } from "next";
import Link from "next/link";
import { QuizClient } from "./QuizClient";
import { QUESTIONS } from "@/lib/g1-questions";

export const metadata: Metadata = {
  title: "G1 笔试模拟练习 · 105 题交通常识",
  description:
    "免费 G1 中文笔试模拟练习，105 道安省交通常识题，作答后即时反馈对错并统计成绩。无需注册，关闭浏览器记录自动清除。",
  alternates: { canonical: "/quiz" },
  robots: { index: true, follow: true },
};

export default function QuizPage() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <nav className="relative z-20 max-w-5xl mx-auto px-6 pt-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border-2 border-[var(--color-ink)] bg-[var(--color-coral)] text-[var(--color-paper)] font-[family-name:var(--font-display)] text-2xl"
            style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
          >
            驾
          </span>
          <span className="font-[family-name:var(--font-display)] text-xl">
            Niagara 驾考教练
          </span>
        </Link>
        <Link href="/" className="sticker text-xs">
          返回首页
        </Link>
      </nav>

      <header className="max-w-5xl mx-auto px-6 pt-10 pb-8">
        <span className="sticker text-sm bg-[var(--color-canary)]">
          交通常识 · 105 题
        </span>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-[1.05]">
          G1 中文笔试
          <span className="underline-wobble">模拟练习</span>
          <span className="text-[var(--color-coral)]">。</span>
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl leading-relaxed">
          作答即时告知对错并累计成绩。题目仅缓存在你当前浏览器标签中——
          关闭或刷新后记录自动清除，无需注册、无需登录。
        </p>
      </header>

      <QuizClient questions={QUESTIONS} />

      <footer className="max-w-5xl mx-auto px-6 py-12 text-sm opacity-60">
        题库来源：doc/G1.pdf · 交通常识部分。交通标志题需配合图片，本练习未包含。
      </footer>
    </main>
  );
}
