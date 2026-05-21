"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { FloatingShape } from "@/components/FloatingShape";
import { SiteHeader } from "@/components/SiteHeader";
import { CHAPTERS, type Chapter } from "./handbook-data";

const OFFICIAL_EN_URL = "https://www.ontario.ca/document/official-mto-drivers-handbook";

// Split long text block into paragraphs at sentence boundaries
function splitParagraphs(text: string): string[] {
  const normalized = text
    .replace(/\u200b/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n");

  const parts = normalized
    .split(/(?<=[。！？；\n])\s*/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0 && !/^\s+$/.test(p));
  return parts;
}

function splitImageCaption(caption?: string): { caption?: string; overflow: string[] } {
  if (!caption) return { overflow: [] };

  const clean = caption.replace(/\u200b/g, "").replace(/\r\n/g, "\n").trim();
  if (clean.length <= 160) return { caption: clean, overflow: [] };

  const firstSentence = clean.match(/^(.{1,260}?[。！？；])/);
  if (!firstSentence) {
    return {
      caption: clean.slice(0, 120),
      overflow: splitParagraphs(clean.slice(120)),
    };
  }

  const shortCaption = firstSentence[1].trim();
  const rest = clean.slice(shortCaption.length).trim();
  return {
    caption: shortCaption,
    overflow: splitParagraphs(rest),
  };
}

// Render a single chapter's content
function ChapterContent({ chapter }: { chapter: Chapter }) {
  return (
    <div className="space-y-3">
      {chapter.blocks.map((block, bi) => {
        if (block.type === "text") {
          const paras = splitParagraphs(block.text);
          return paras.map((p, pi) => (
            <p key={`${bi}-${pi}`} className="text-base leading-[1.85]">
              {p}
            </p>
          ));
        }
        if (block.type === "image") {
          const caption = splitImageCaption(block.caption);
          return (
            <div key={bi}>
              <figure className="my-6 flex flex-col items-center">
                <img
                  src={block.src}
                  alt={block.alt}
                  loading="lazy"
                  className="max-w-full rounded-xl border-2 border-[var(--color-ink)]"
                />
                {caption.caption && (
                  <figcaption className="mt-2 text-sm text-center opacity-70 max-w-lg leading-snug">
                    {caption.caption}
                  </figcaption>
                )}
              </figure>
              {caption.overflow.length > 0 && (
                <div className="space-y-3">
                  {caption.overflow.map((p, pi) => (
                    <p key={pi} className="text-base leading-[1.85]">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function HandbookPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<Record<string, HTMLElement>>({});
  const [activeId, setActiveId] = useState<string>(CHAPTERS[0]?.id ?? "");
  const [loadedIds, setLoadedIds] = useState<Set<string>>(
    () => new Set(CHAPTERS.slice(0, 2).map((chapter) => chapter.id))
  );

  const scrollToChapter = useCallback(
    (id: string) => {
      const el = chapterRefs.current[id];
      if (el && contentRef.current) {
        contentRef.current.scrollTo({
          top: el.offsetTop - 16,
          behavior: "smooth",
        });
      }
    },
    []
  );

  const handleChapterClick = useCallback((id: string) => {
    setActiveId(id);
    scrollToChapter(id);
  }, [scrollToChapter]);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    const activeObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { root: contentEl, rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );

    const loadObserver = new IntersectionObserver(
      (entries) => {
        setLoadedIds((prev) => {
          let next: Set<string> | null = null;
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const id = entry.target.id;
            if (prev.has(id)) continue;
            next ??= new Set(prev);
            next.add(id);
          }
          return next ?? prev;
        });
      },
      { root: contentEl, rootMargin: "650px 0px", threshold: 0 }
    );

    CHAPTERS.forEach(({ id }) => {
      const el = chapterRefs.current[id];
      if (el) {
        activeObserver.observe(el);
        loadObserver.observe(el);
      }
    });

    return () => {
      activeObserver.disconnect();
      loadObserver.disconnect();
    };
  }, []);

  return (
    <main className="relative overflow-hidden min-h-screen">
      <SiteHeader locale="zh" />

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-8 pb-8 md:pt-14 md:pb-12">
        <FloatingShape variant="sun" size={56} className="top-4 right-[15%] hidden md:block" />
        <FloatingShape variant="sign" size={68} rotate={-6} className="bottom-4 right-4 hidden lg:block" />

        <span className="sticker text-sm bg-[var(--color-mint)]">
          安大略省 · G1 / G2 / G 学习材料
        </span>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl md:text-6xl leading-[1.02]">
          安省驾驶员手册
          <span className="underline-wobble">中文版</span>
          <span className="text-[var(--color-coral)]">。</span>
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl leading-relaxed opacity-80">
          依据安大略省政府官网 Ontario.ca 发布的官方 MTO Driver&apos;s Handbook 制作的中文全文译文，
          涵盖道路规则、安全驾驶、分级驾照制度、交通标志和考试准备。
        </p>
      </section>

      {/* Source info + key points */}
      <section className="max-w-6xl mx-auto px-6 pb-8 grid sm:grid-cols-2 gap-4">
        <div className="card-flat p-5 bg-[var(--color-canary)]">
          <div className="text-xs font-bold tracking-[0.2em] opacity-60 mb-3">来源信息</div>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            <div>
              <dt className="font-bold text-xs opacity-70">发布机构</dt>
              <dd>Ontario Ministry of Transportation</dd>
            </div>
            <div>
              <dt className="font-bold text-xs opacity-70">最新更新</dt>
              <dd>2022年8月26日</dd>
            </div>
            <div className="col-span-2">
              <dt className="font-bold text-xs opacity-70">英文原文</dt>
              <dd>
                <a
                  href={OFFICIAL_EN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  Ontario.ca 官方页面
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="card-flat p-5 bg-[var(--color-paper-warm)]">
          <div className="text-xs font-bold tracking-[0.2em] opacity-60 mb-3">学习要点</div>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2 items-start">
              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-mint)] text-[10px] font-black shrink-0">✓</span>
              <span>G1 重点：驾照分类、分级制度、G1/G2 限制、路权规则</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-mint)] text-[10px] font-black shrink-0">✓</span>
              <span>G2/G 路考：把文字规则转化为车上动作</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-mint)] text-[10px] font-black shrink-0">✓</span>
              <span>安省冬季和高速驾驶是新手高风险场景</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Main: TOC + Content */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-[248px_1fr] gap-5 lg:items-stretch">
          {/* Sticky TOC */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="card-flat p-4 bg-[var(--color-paper)] lg:h-[72vh] lg:overflow-y-auto">
              <div className="text-xs font-bold tracking-[0.2em] opacity-60 mb-3">目录</div>
              <nav>
                <ol className="space-y-0.5">
                  {CHAPTERS.map((chapter, index) => (
                    <li key={chapter.id}>
                      <button
                        onClick={() => handleChapterClick(chapter.id)}
                        className={`w-full text-left text-sm leading-snug px-2 py-1.5 rounded transition-all ${
                          activeId === chapter.id
                            ? "bg-[var(--color-coral)] text-[var(--color-paper)] font-bold"
                            : "hover:bg-[var(--color-canary)]"
                        }`}
                      >
                        <span className="font-[family-name:var(--font-accent)] text-xs opacity-50 mr-1.5">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {chapter.title}
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="mt-4 pt-3 border-t border-[var(--color-ink)]/10">
                <a
                  href={OFFICIAL_EN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sticker text-xs w-full text-center block"
                >
                  英文官方手册
                </a>
              </div>
            </div>
          </aside>

          {/* Scrollable content area */}
          <div
            ref={contentRef}
            className="h-[72vh] overflow-y-auto snap-y rounded-2xl border-2 border-[var(--color-ink)] bg-[var(--color-paper)]"
          >
            <div className="p-6 space-y-8">
              {CHAPTERS.map((chapter, index) => {
                const isLoaded = loadedIds.has(chapter.id);
                const isActive = activeId === chapter.id;

                return (
                  <article
                    key={chapter.id}
                    id={chapter.id}
                    ref={(el) => {
                      if (el) chapterRefs.current[chapter.id] = el;
                    }}
                    className="snap-start scroll-mt-6"
                  >
                    {/* Chapter heading — always visible */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h2 className="font-[family-name:var(--font-display)] text-2xl leading-tight">
                        {chapter.title}
                      </h2>
                      <span className="sticker text-xs bg-[var(--color-mint)] shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content loads automatically as chapters approach the scroll viewport. */}
                    {isLoaded ? (
                      <ChapterContent chapter={chapter} />
                    ) : (
                      <div
                        aria-live={isActive ? "polite" : "off"}
                        className="w-full py-6 text-center text-sm text-[var(--color-coral-deep)] border-2 border-dashed border-[var(--color-coral)]/30 rounded-xl"
                      >
                        继续滚动，即将载入“{chapter.title}”
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
