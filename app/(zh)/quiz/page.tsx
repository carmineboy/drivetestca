import type { Metadata } from "next";
import Link from "next/link";
import { QuizClient } from "./QuizClient";
import { QUESTIONS } from "@/lib/g1-questions";
import { QUESTIONS_EN } from "@/lib/g1-questions-en";

export const metadata: Metadata = {
  title: `G1 笔试模拟练习 · ${QUESTIONS.length} 中文题 / ${QUESTIONS_EN.length} English`,
  description:
    `免费 G1 笔试模拟练习，包含 ${QUESTIONS.length} 道中文题与 ${QUESTIONS_EN.length} 道英文题，作答后即时反馈对错并统计成绩。无需注册，关闭浏览器记录自动清除。`,
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

      <QuizClient
        questions={QUESTIONS}
        englishQuestions={QUESTIONS_EN}
      />

    </main>
  );
}
