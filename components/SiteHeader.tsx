"use client";

import Link from "next/link";

type SiteHeaderProps = {
  locale?: "zh" | "en";
};

export function SiteHeader({ locale = "zh" }: SiteHeaderProps) {
  const isEn = locale === "en";
  const homeHref = isEn ? "/en" : "/";
  const voicesHref = isEn ? "/en#voices" : "/#voices";
  const bookHref = isEn ? "/en#book" : "/#book";
  const quizHref = isEn ? "/quiz?lang=en" : "/quiz";

  return (
    <nav className="relative z-20 max-w-6xl mx-auto px-6 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Link href={homeHref} className="flex items-center gap-3">
        <span
          className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border-2 border-[var(--color-ink)] bg-[var(--color-coral)] text-[var(--color-paper)] font-[family-name:var(--font-display)] text-2xl"
          style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
        >
          {isEn ? "ND" : "驾"}
        </span>
        <span className="font-[family-name:var(--font-display)] text-xl">
          {isEn ? "Niagara Driving Instructor" : "Niagara 驾考教练"}
        </span>
      </Link>

      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold md:gap-6">
        <Link href={voicesHref} className="hover:text-[var(--color-coral-deep)]">
          {isEn ? "Students" : "学员评价"}
        </Link>
        <Link href="/guides" className="hover:text-[var(--color-coral-deep)]">
          {isEn ? "Road guides" : "路考图解"}
        </Link>
        <Link href="/handbook" className="hover:text-[var(--color-coral-deep)]">
          {isEn ? "Handbook" : "驾驶手册"}
        </Link>
        <Link href="/commands" className="hover:text-[var(--color-coral-deep)]">
          {isEn ? "Test Commands" : "考官指令"}
        </Link>
        <Link href={quizHref} className="hover:text-[var(--color-coral-deep)]">
          {isEn ? "G1 Quiz" : "G1 模拟"}
        </Link>
        <Link href={bookHref} className="hover:text-[var(--color-coral-deep)]">
          {isEn ? "Book" : "预约"}
        </Link>
        <Link
          href={isEn ? "/" : "/en"}
          className="sticker text-xs"
          aria-label={isEn ? "切换中文" : "Switch to English"}
        >
          {isEn ? "中" : "EN"}
        </Link>
      </div>
    </nav>
  );
}
