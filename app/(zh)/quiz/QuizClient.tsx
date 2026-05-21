"use client";

import { useEffect, useMemo, useState } from "react";
import type { Question } from "@/lib/g1-questions";

type Mode = "sequential" | "shuffle";
type Locale = "zh" | "en";
type QuizLabels = {
  badge: (zhCount: number, enCount?: number) => string;
  headingPrefix: string;
  headingMarked: string;
  headingSuffix: string;
  intro: string;
  zhBank: string;
  enBank: string;
  complete: string;
  accuracy: string;
  correct: string;
  wrong: string;
  retry: string;
  switchMode: (mode: Mode) => string;
  wrongReview: (count: number) => string;
  yourAnswer: string;
  correctAnswer: string;
  progress: (answered: number, total: number) => string;
  sequential: string;
  shuffle: string;
  questionNumber: (number: number) => string;
  questionImageAlt: (number: number) => string;
  submit: string;
  answeredCorrect: string;
  answeredWrong: string;
  next: string;
  results: string;
};

const DEFAULT_LABELS: QuizLabels = {
  badge: (zhCount, enCount) => `中文 ${zhCount} 题 · English ${enCount ?? 0} questions`,
  headingPrefix: "G1 中文笔试",
  headingMarked: "模拟练习",
  headingSuffix: "。",
  intro: "作答即时告知对错并累计成绩。题目仅缓存在你当前浏览器标签中——关闭或刷新后记录自动清除，无需注册、无需登录。",
  zhBank: "中文题库",
  enBank: "English",
  complete: "练习结束 — Quiz complete",
  accuracy: "正确率",
  correct: "答对",
  wrong: "答错",
  retry: "再来一次",
  switchMode: (mode) => `切换为${mode === "shuffle" ? "顺序" : "随机"}模式`,
  wrongReview: (count) => `错题回顾（${count}）`,
  yourAnswer: "你的答案：",
  correctAnswer: "正确答案：",
  progress: (answered, total) => `进度 ${answered}/${total}`,
  sequential: "顺序",
  shuffle: "随机",
  questionNumber: (number) => `题库编号 #${number}`,
  questionImageAlt: (number) => `G1 题目 ${number} 配图`,
  submit: "提交答案",
  answeredCorrect: "✓ 答对",
  answeredWrong: "✗ 答错",
  next: "下一题",
  results: "查看成绩",
};

const EN_LABELS: QuizLabels = {
  badge: (zhCount, enCount) => `Chinese ${zhCount} questions · English ${enCount ?? 0} questions`,
  headingPrefix: "Ontario G1 ",
  headingMarked: "practice test",
  headingSuffix: ".",
  intro: "Get instant feedback as you answer. Your score only lives in this browser tab: refresh or close the page and the session clears automatically. No registration, no login.",
  zhBank: "Chinese",
  enBank: "English",
  complete: "Quiz complete",
  accuracy: "Accuracy",
  correct: "Correct",
  wrong: "Wrong",
  retry: "Try again",
  switchMode: (mode) => `Switch to ${mode === "shuffle" ? "sequential" : "shuffle"} mode`,
  wrongReview: (count) => `Review wrong answers (${count})`,
  yourAnswer: "Your answer: ",
  correctAnswer: "Correct answer: ",
  progress: (answered, total) => `Progress ${answered}/${total}`,
  sequential: "Sequential",
  shuffle: "Shuffle",
  questionNumber: (number) => `Question bank #${number}`,
  questionImageAlt: (number) => `G1 question ${number} image`,
  submit: "Submit answer",
  answeredCorrect: "✓ Correct",
  answeredWrong: "✗ Wrong",
  next: "Next",
  results: "See score",
};

function shuffled<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function QuizClient({
  questions,
  englishQuestions,
  initialLocale = "zh",
}: {
  questions: Question[];
  englishQuestions?: Question[];
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const labels = locale === "en" ? EN_LABELS : DEFAULT_LABELS;
  const activeQuestions = locale === "en" && englishQuestions ? englishQuestions : questions;
  const [mode, setMode] = useState<Mode>("sequential");
  // Session = the ordered list of question indexes we'll iterate.
  // Bumping `sessionKey` (re-mount) is the simplest way to fully reset.
  const [sessionKey, setSessionKey] = useState(0);

  const order = useMemo(() => {
    const idx = activeQuestions.map((_, i) => i);
    return mode === "shuffle" ? shuffled(idx) : idx;
    // sessionKey forces re-shuffle on reset
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeQuestions, mode, sessionKey]);

  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [history, setHistory] = useState<{ qIdx: number; picked: number; ok: boolean }[]>([]);

  useEffect(() => {
    if (!englishQuestions) return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("lang") === "en") {
      setLocale("en");
      reset(mode);
    }
    // Run once on mount to pick up /quiz?lang=en.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const total = order.length;
  const done = current >= total;
  const q = !done ? activeQuestions[order[current]] : null;
  const answered = correctCount + wrongCount;

  function submit() {
    if (picked === null || submitted || !q) return;
    const ok = picked === q.correct;
    setSubmitted(true);
    if (ok) setCorrectCount((c) => c + 1);
    else setWrongCount((c) => c + 1);
    setHistory((h) => [...h, { qIdx: order[current], picked, ok }]);
  }

  function next() {
    setPicked(null);
    setSubmitted(false);
    setCurrent((c) => c + 1);
  }

  function reset(newMode?: Mode) {
    setCurrent(0);
    setPicked(null);
    setSubmitted(false);
    setCorrectCount(0);
    setWrongCount(0);
    setHistory([]);
    if (newMode) setMode(newMode);
    setSessionKey((k) => k + 1);
  }

  function switchLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    reset(mode);
  }

  const intro = (
    <header className="max-w-5xl mx-auto px-6 pt-10 pb-8">
      <span className="sticker text-sm bg-[var(--color-canary)]">
        {labels.badge(questions.length, englishQuestions?.length)}
      </span>
      <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-[1.05]">
        {labels.headingPrefix}
        <span className="underline-wobble">{labels.headingMarked}</span>
        <span className="text-[var(--color-coral)]">{labels.headingSuffix}</span>
      </h1>
      <p className="mt-4 text-base md:text-lg max-w-2xl leading-relaxed">
        {labels.intro}
      </p>
    </header>
  );

  if (done) {
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const wrongs = history.filter((h) => !h.ok);
    return (
      <>
        {intro}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div
            className="rounded-[28px] border-4 border-[var(--color-ink)] bg-[var(--color-mint)] p-8 md:p-12 text-center"
            style={{ boxShadow: "10px 10px 0 var(--color-ink)" }}
          >
          <p className="font-[family-name:var(--font-accent)] italic text-lg">
            {labels.complete}
          </p>
          <div className="mt-3 font-[family-name:var(--font-display)] text-7xl md:text-8xl leading-none">
            {correctCount}/{total}
          </div>
          <p className="mt-3 text-2xl font-bold">{labels.accuracy} {pct}%</p>
          <p className="mt-2 text-sm opacity-70">
            {labels.correct} {correctCount} · {labels.wrong} {wrongCount}
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <button
              type="button"
              onClick={() => reset(mode)}
              className="rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-6 py-3 font-bold border-2 border-[var(--color-ink)]"
              style={{ boxShadow: "5px 5px 0 var(--color-coral)" }}
            >
              {labels.retry}
            </button>
            <button
              type="button"
              onClick={() => reset(mode === "shuffle" ? "sequential" : "shuffle")}
              className="sticker bg-[var(--color-paper)]"
            >
              {labels.switchMode(mode)}
            </button>
          </div>
          </div>

          {wrongs.length > 0 && (
            <div className="mt-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {labels.wrongReview(wrongs.length)}
            </h2>
            <ul className="mt-5 space-y-4">
              {wrongs.map((w, i) => {
                const qq = activeQuestions[w.qIdx];
                return (
                  <li
                    key={i}
                    className="card-flat p-5"
                    style={{ background: "var(--color-paper)" }}
                  >
                    <p className="font-semibold leading-snug">{qq.q}</p>
                    <p className="mt-3 text-sm">
                      <span className="font-bold text-[var(--color-coral-deep)]">{labels.yourAnswer}</span>
                      {qq.options[w.picked]}
                    </p>
                    <p className="mt-1 text-sm">
                      <span className="font-bold text-[var(--color-lake-deep)]">{labels.correctAnswer}</span>
                      {qq.options[qq.correct]}
                    </p>
                  </li>
                );
              })}
            </ul>
            </div>
          )}
        </section>
      </>
    );
  }

  if (!q) return null;

  return (
    <>
      {intro}
      <section className="max-w-5xl mx-auto px-6 pb-16">
      {/* Score + progress bar */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
        <div className="flex flex-wrap gap-2">
          {englishQuestions && (
            <>
              <button
                type="button"
                onClick={() => switchLocale("zh")}
                className={`sticker text-sm ${locale === "zh" ? "bg-[var(--color-canary)]" : "bg-[var(--color-paper)]"}`}
                aria-pressed={locale === "zh"}
              >
                {labels.zhBank}
              </button>
              <button
                type="button"
                onClick={() => switchLocale("en")}
                className={`sticker text-sm ${locale === "en" ? "bg-[var(--color-canary)]" : "bg-[var(--color-paper)]"}`}
                aria-pressed={locale === "en"}
              >
                {labels.enBank}
              </button>
            </>
          )}
          <span className="sticker text-sm bg-[var(--color-mint)]">
            ✓ {labels.correct} {correctCount}
          </span>
          <span className="sticker text-sm bg-[var(--color-coral)] text-[var(--color-paper)]">
            ✗ {labels.wrong} {wrongCount}
          </span>
          <span className="sticker text-sm bg-[var(--color-paper)]">
            {labels.progress(answered, total)}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => reset("sequential")}
            className={`sticker text-xs ${mode === "sequential" ? "bg-[var(--color-canary)]" : "bg-[var(--color-paper)]"}`}
            aria-pressed={mode === "sequential"}
          >
            {labels.sequential}
          </button>
          <button
            type="button"
            onClick={() => reset("shuffle")}
            className={`sticker text-xs ${mode === "shuffle" ? "bg-[var(--color-canary)]" : "bg-[var(--color-paper)]"}`}
            aria-pressed={mode === "shuffle"}
          >
            {labels.shuffle}
          </button>
        </div>
      </div>

      <div className="h-2 w-full rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-paper)] overflow-hidden">
        <div
          className="h-full bg-[var(--color-coral)] transition-[width] duration-300"
          style={{ width: `${(answered / total) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <article
        key={`${sessionKey}-${current}`}
        className="mt-6 rounded-[28px] border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-6 md:p-8"
        style={{ boxShadow: "10px 10px 0 var(--color-ink)" }}
      >
        <div className="flex items-baseline gap-3">
          <span className="font-[family-name:var(--font-accent)] italic text-[var(--color-coral-deep)] text-xl">
            Q{current + 1}
          </span>
          <span className="text-xs opacity-60">
            ({labels.questionNumber(order[current] + 1)})
          </span>
        </div>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl md:text-3xl leading-snug">
          {q.q}
        </h2>
        {q.image && (
          <div className="mt-5 inline-flex rounded-3xl border-2 border-[var(--color-ink)] bg-white p-4">
            <img
              src={q.image}
              alt={labels.questionImageAlt(order[current] + 1)}
              className="max-h-48 w-auto max-w-full object-contain"
            />
          </div>
        )}

        <ul className="mt-6 space-y-3">
          {q.options.map((opt, i) => {
            const isPicked = picked === i;
            const isCorrect = i === q.correct;
            const reveal = submitted;
            const cls = [
              "w-full text-left rounded-2xl border-2 border-[var(--color-ink)] px-5 py-4 font-medium transition",
              "flex gap-4 items-start",
              !submitted && isPicked ? "bg-[var(--color-canary)]" : "bg-[var(--color-paper)]",
              reveal && isCorrect ? "!bg-[var(--color-mint)]" : "",
              reveal && isPicked && !isCorrect ? "!bg-[var(--color-coral)] !text-[var(--color-paper)]" : "",
              submitted ? "cursor-default" : "hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)]",
            ].join(" ");
            return (
              <li key={i}>
                <button
                  type="button"
                  disabled={submitted}
                  onClick={() => setPicked(i)}
                  className={cls}
                  aria-pressed={isPicked}
                >
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-[var(--color-ink)] font-[family-name:var(--font-accent)] font-black text-lg shrink-0"
                    style={{ background: "var(--color-paper)", color: "var(--color-ink)" }}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="leading-snug">{opt}</span>
                  {reveal && isCorrect && (
                    <span className="ml-auto font-bold shrink-0">✓</span>
                  )}
                  {reveal && isPicked && !isCorrect && (
                    <span className="ml-auto font-bold shrink-0">✗</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {!submitted ? (
            <button
              type="button"
              onClick={submit}
              disabled={picked === null}
              className="rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-7 py-3 font-bold text-base border-2 border-[var(--color-ink)] disabled:opacity-40 disabled:cursor-not-allowed transition-transform enabled:hover:-translate-y-0.5"
              style={{ boxShadow: "5px 5px 0 var(--color-coral)" }}
            >
              {labels.submit}
            </button>
          ) : (
            <>
              <span
                className={`sticker text-base ${
                  picked === q.correct
                    ? "bg-[var(--color-mint)]"
                    : "bg-[var(--color-coral)] text-[var(--color-paper)]"
                }`}
              >
                {picked === q.correct ? labels.answeredCorrect : labels.answeredWrong}
              </span>
              {picked !== q.correct && (
                <span className="text-sm">
                  {labels.correctAnswer}
                  <strong>{String.fromCharCode(65 + q.correct)}. {q.options[q.correct]}</strong>
                </span>
              )}
              <button
                type="button"
                onClick={next}
                className="ml-auto rounded-full bg-[var(--color-coral)] text-[var(--color-paper)] px-7 py-3 font-bold text-base border-2 border-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
                style={{ boxShadow: "5px 5px 0 var(--color-ink)" }}
              >
                {current + 1 < total ? `${labels.next} →` : `${labels.results} →`}
              </button>
            </>
          )}
        </div>
      </article>
      </section>
    </>
  );
}
