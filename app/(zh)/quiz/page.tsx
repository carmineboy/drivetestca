import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
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
      <SiteHeader locale="zh" />

      <QuizClient
        questions={QUESTIONS}
        englishQuestions={QUESTIONS_EN}
      />

    </main>
  );
}
