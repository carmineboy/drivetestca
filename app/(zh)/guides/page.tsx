import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FloatingShape } from "@/components/FloatingShape";

const GUIDE_GROUPS = [
  {
    id: "stop",
    title: "STOP 停牌路口",
    tag: "2 张图",
    color: "var(--color-coral)",
    intro: "All-way stop、普通停牌、T 字路口、十字路口、行人和先后顺序判断。",
    items: [
      {
        title: "停牌路口决策流程（中文）",
        language: "中文",
        image: "/road-guides/stop-zh.jpg",
        width: 1975,
        height: 4096,
        note: "适合复习全停、普通停牌、行人优先、直行/左转/右转出路口的判断。",
      },
      {
        title: "Stop Sign Decision Flow (English)",
        language: "English",
        image: "/road-guides/stop-en.jpg",
        width: 2164,
        height: 4096,
        note: "English version for all-way stop, regular stop, crossroad, T-junction and pedestrian checks.",
      },
    ],
  },
  {
    id: "left-turn",
    title: "左转路口",
    tag: "2 张图",
    color: "var(--color-canary)",
    intro: "保护左转箭头、黄灯/红灯变化、对向车流、左转待转区和离开路口时机。",
    items: [
      {
        title: "左转路口流程（中文）",
        language: "中文",
        image: "/road-guides/left-turn-zh.jpg",
        width: 2902,
        height: 4096,
        note: "覆盖绿箭头、圆灯、对向车辆、行人、自行车与待转位置判断。",
      },
      {
        title: "Left Turn Decision Flow (English)",
        language: "English",
        image: "/road-guides/left-turn-en.jpg",
        width: 2866,
        height: 4096,
        note: "English version for protected arrows, yielding, intersection entry and safe exit timing.",
      },
    ],
  },
  {
    id: "right-turn",
    title: "右转路口",
    tag: "4 张图",
    color: "var(--color-mint)",
    intro: "红灯右转、让牌、安全岛、行人灯、右侧行人、自行车与视线受阻处理。",
    items: [
      {
        title: "右转 + 停牌 / 让牌判断（中文）",
        language: "中文",
        image: "/road-guides/right-turn-zh-yield-stop.jpg",
        width: 2445,
        height: 4096,
        note: "把有无安全岛、让牌、红灯右转限制、停车线和视线受阻分开判断。",
      },
      {
        title: "Right Turn + Yield Sign (English)",
        language: "English",
        image: "/road-guides/right-turn-en-yield.jpg",
        width: 2972,
        height: 4096,
        note: "English guide for right turns with yield signs and multiple traffic light states.",
      },
      {
        title: "右转 + 行人灯判断（中文）",
        language: "中文",
        image: "/road-guides/right-turn-zh-pedestrian-light.jpg",
        width: 3382,
        height: 4096,
        note: "重点看右侧行人灯、左侧信号、对向转弯车与是否必须停车让行。",
      },
      {
        title: "Right Turn Decision Flow (English)",
        language: "English",
        image: "/road-guides/right-turn-en.jpg",
        width: 3552,
        height: 4096,
        note: "English version for median island, red light, yellow light, blocked sight and pedestrian checks.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "路考图解指南 · 停牌 / 左转 / 右转",
  description:
    "按停牌路口、左转路口、右转路口分类整理的中英文路考流程图，适合 G2 / G 路考前复习。",
  alternates: { canonical: "/guides" },
  robots: { index: true, follow: true },
};

export default function RoadGuidesPage() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <nav className="relative z-20 max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between">
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
        <div className="flex items-center gap-3">
          <Link href="/quiz" className="sticker text-xs bg-[var(--color-canary)]">
            G1 模拟
          </Link>
          <Link href="/" className="sticker text-xs">
            返回首页
          </Link>
        </div>
      </nav>

      <section className="relative max-w-6xl mx-auto px-6 pt-12 pb-14 md:pt-20 md:pb-20">
        <FloatingShape variant="sun" size={76} className="top-8 right-[20%] hidden md:block" />
        <FloatingShape variant="ripple" size={92} rotate={-6} className="bottom-10 left-2 hidden lg:block" />
        <span className="sticker text-sm bg-[var(--color-mint)]">
          G2 / G 路考 · 图解复习
        </span>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          停牌、左转、右转
          <span className="underline-wobble">流程图合集</span>
          <span className="text-[var(--color-coral)]">。</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl leading-relaxed">
          把路考里最容易混乱的路口判断拆成 8 张流程图。先按分类看，再把每一张图带到实车练习里对应路口复盘。
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {GUIDE_GROUPS.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="sticker bg-[var(--color-paper)]">
              {group.title}
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-18">
        {GUIDE_GROUPS.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-6">
            <div className="flex flex-wrap items-end justify-between gap-5 border-t-4 border-[var(--color-ink)] pt-8">
              <div>
                <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-lake-deep)] text-lg">
                  {group.tag}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-tight">
                  {group.title}
                </h2>
              </div>
              <p className="max-w-xl text-base md:text-lg leading-relaxed">
                {group.intro}
              </p>
            </div>

            <div className="mt-8 grid lg:grid-cols-2 gap-8">
              {group.items.map((item, index) => (
                <article
                  key={item.image}
                  className="card-flat bg-[var(--color-paper)] p-4 md:p-5"
                  style={{ transform: `rotate(${index % 2 === 0 ? "-0.25deg" : "0.25deg"})` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 px-1 pb-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed opacity-75">
                        {item.note}
                      </p>
                    </div>
                    <span
                      className="sticker text-xs"
                      style={{ background: group.color }}
                    >
                      {item.language}
                    </span>
                  </div>
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-[18px] border-2 border-[var(--color-ink)] bg-white"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={item.width}
                      height={item.height}
                      sizes="(min-width: 1024px) 540px, 100vw"
                      className="block h-auto w-full"
                    />
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
