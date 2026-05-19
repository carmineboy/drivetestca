import Link from "next/link";
import { HeroScene } from "@/components/HeroScene";
import { FloatingShape } from "@/components/FloatingShape";
import { StructuredData } from "@/components/StructuredData";

const STATS = [
  { value: "97%", label: "一次通过率", note: "近三年学员实测" },
  { value: "500+", label: "通过学员", note: "G2 / G 全路考" },
  { value: "12 年", label: "本地教学", note: "扎根尼亚加拉地区" },
];

const METHOD = [
  {
    tag: "01",
    title: "路考线路逐站拆解",
    body: "St. Catharines、Welland、Niagara Falls 三大考场每条路线、每个停车点、每次并线节奏都画好图，考前一遍走完心里不慌。",
    color: "var(--color-coral)",
  },
  {
    tag: "02",
    title: "倒车入位 · 三点 · 平行",
    body: "用粉笔与雪糕筒在停车场画出考官视角的参考线，告别玄学。两次课内稳定入位、平行进库一次到位。",
    color: "var(--color-lake)",
  },
  {
    tag: "03",
    title: "冬季驾驶生存课",
    body: "尼亚加拉冬天的雪、冰、雨水镜面，每一种我都带你真车体验。何时点刹、如何修向，老司机的肌肉记忆全部口诀化。",
    color: "var(--color-canary)",
  },
  {
    tag: "04",
    title: "心态与考官沟通",
    body: "考前焦虑、半坡熄火怎么救场、被扣分后如何稳住后半程——把'考试'拆成可练习的小动作，紧张不再是借口。",
    color: "var(--color-mint)",
  },
];

const VOICES = [
  {
    name: "Lily Z.",
    plate: "G2 一次通过",
    body: "我之前在另一家学了 8 节课还是不会停车。跟闫教练上了 3 节，每个动作都有口诀，路考当天考官夸我入位很干脆。",
  },
  {
    name: "Kevin H.",
    plate: "G 一次通过",
    body: "冬天下大雪那次，他特意约我练上 QEW。这种真实场景的训练，比刷十遍 G1 题目都管用。",
  },
  {
    name: "陈阿姨",
    plate: "55 岁重新学车",
    body: "我中文学车，教练很有耐心。每节课结束都会发一段语音总结，让我回家继续在脑子里走一遍线路。",
  },
];

const TICKER = [
  "G2 一次通过",
  "G 一次通过",
  "St Catharines 考场",
  "Welland 考场",
  "Niagara Falls 考场",
  "冬季驾驶训练",
  "中英文教学",
  "Z字停车 · 三点掉头",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <StructuredData locale="zh" />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Method />
      <Testimonials />
      <Ticker />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
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
      <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
        <a href="#method" className="hover:text-[var(--color-coral-deep)]">教学法</a>
        <a href="#voices" className="hover:text-[var(--color-coral-deep)]">学员评价</a>
        <Link href="/quiz" className="hover:text-[var(--color-coral-deep)]">G1 模拟</Link>
        <a href="#book" className="hover:text-[var(--color-coral-deep)]">预约</a>
        <Link
          href="/en"
          className="sticker text-xs"
          aria-label="Switch to English"
        >
          EN
        </Link>
      </div>
      <Link href="#book" className="md:hidden sticker text-sm">
        预约
      </Link>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-10 pb-24 md:pt-20 md:pb-32">
      <FloatingShape variant="sun" size={70} className="top-6 right-[42%] hidden md:block" />
      <FloatingShape variant="ripple" size={80} rotate={-6} className="top-[55%] -left-4 hidden md:block" />
      <FloatingShape variant="star" size={64} rotate={12} className="top-1/2 right-8 hidden lg:block" />

      <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-6 items-center stagger">
        <div className="relative z-10">
          <span className="sticker text-sm bg-[var(--color-canary)]">
            尼亚加拉地区 · 中英文教学
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] leading-[0.95] text-[14vw] sm:text-7xl md:text-[5.5rem]">
            在 Niagara
            <br />
            <span className="underline-wobble">自信上路</span>
            <span className="text-[var(--color-coral)]">。</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed">
            12 年扎根本地的驾驶教练，把路考拆成可练习的动作清单。
            <strong className="text-[var(--color-coral-deep)]">一次通过率 97%</strong>
            ，把"运气"从你的考试方程式里删掉。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-7 py-4 font-bold text-lg border-2 border-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "6px 6px 0 var(--color-coral)" }}
            >
              预约第一节课
              <span aria-hidden>→</span>
            </a>
            <a
              href="#method"
              className="font-semibold underline decoration-2 decoration-[var(--color-lake)] underline-offset-4 hover:text-[var(--color-lake-deep)]"
            >
              看教学法 ↓
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-[family-name:var(--font-accent)] text-3xl md:text-4xl font-black text-[var(--color-coral-deep)]">
                  {s.value}
                </dt>
                <dd className="text-xs md:text-sm font-semibold mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <HeroScene />
          <div
            className="absolute -bottom-6 -left-2 md:-left-8 sticker bg-[var(--color-mint)] text-base"
            style={{ transform: "rotate(-4deg)" }}
          >
            ⭐ G2 / G 全路考
          </div>
          <div
            className="absolute top-6 -right-2 md:-right-6 sticker text-base bg-[var(--color-coral)] text-[var(--color-paper)] border-[var(--color-ink)]"
            style={{ transform: "rotate(6deg)" }}
          >
            真车真路真天气
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative bg-[var(--color-ink)] text-[var(--color-paper)] py-16 md:py-20 border-y-4 border-[var(--color-ink)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-canary)] text-xl tracking-wide">
          By the numbers —
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-10 md:gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="relative">
              <div className="font-[family-name:var(--font-display)] text-7xl md:text-8xl leading-none text-[var(--color-canary)]">
                {s.value}
              </div>
              <div className="mt-3 text-2xl font-bold">{s.label}</div>
              <div className="mt-1 text-sm opacity-70">{s.note}</div>
              <div
                className="absolute -top-3 -left-3 w-3 h-3 rounded-full bg-[var(--color-coral)]"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
      <FloatingShape variant="blob" size={220} className="top-10 -left-24 opacity-60 hidden md:block" />
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-start relative z-10">
        <div className="relative">
          <div
            className="aspect-[4/5] rounded-[28px] border-2 border-[var(--color-ink)] bg-[var(--color-paper-warm)] p-6 md:p-7 flex flex-col"
            style={{ boxShadow: "10px 10px 0 var(--color-ink)" }}
          >
            <div className="flex items-center justify-between text-[11px] font-bold tracking-[0.2em] opacity-70">
              <span>NIAGARA · ONTARIO</span>
              <span>EST. 2014</span>
            </div>
            <div className="flex-1 grid place-items-center my-4">
              <div className="text-center">
                <div
                  className="mx-auto inline-flex items-center justify-center w-32 h-32 md:w-36 md:h-36 rounded-3xl border-2 border-[var(--color-ink)] bg-[var(--color-coral)] text-[var(--color-paper)] font-[family-name:var(--font-display)] text-7xl md:text-8xl leading-none"
                  style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
                  aria-hidden
                >
                  闫
                </div>
                <p className="mt-5 font-[family-name:var(--font-display)] text-3xl">闫教练</p>
                <p className="text-sm opacity-80">Coach Yan · 安省持证教练</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="sticker text-xs bg-[var(--color-canary)]">MTO 持证</span>
              <span className="sticker text-xs bg-[var(--color-mint)]">中 · EN</span>
              <span className="sticker text-xs bg-[var(--color-paper)]">G2 / G</span>
            </div>
          </div>
          <span className="absolute -top-4 -right-4 sticker bg-[var(--color-canary)] rotate-6">
            自 2014 起
          </span>
        </div>

        <div>
          <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-lake-deep)] text-lg">
            About the coach
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight">
            12 年只做<span className="text-[var(--color-coral)]">一件</span>事：
            <br />
            让你少走弯路。
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            <p>
              闫教练自 2014 年起在尼亚加拉地区从事驾驶教学，
              累计带出超过 500 位 G2 / G 通过学员，
              其中近三年一次通过率保持在 <strong>97%</strong>。
            </p>
            <p>
              他擅长把"考试"拆解为可重复练习的动作清单——从打方向的圈数、
              观察后视镜的节奏，到考官最在意的安全细节，全部口诀化、可量化。
            </p>
            <p>
              中文 / 英文教学双语切换，照顾新移民学员的语言习惯；
              冬季驾驶、雨雪路面、高速并线等本地必修科目，都用真车真路面带你过一遍。
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["MTO 持证", "中英文教学", "G1 笔试辅导", "新车 / 旧车皆可"].map((t) => (
              <span key={t} className="sticker text-sm bg-[var(--color-paper-warm)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="method" className="relative bg-[var(--color-paper-warm)] py-20 md:py-28 border-y-4 border-[var(--color-ink)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-coral-deep)] text-lg">
              The Systematic Driver — 系统教学法
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight max-w-xl">
              不是"多开几次就熟了"，<br />是<span className="underline-wobble">每一步都讲得清</span>。
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed">
            我把 12 年的教学经验沉淀成四个模块。每节课都对应清晰的目标，
            上完课你知道下一节练什么，离路考通过还差几步。
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {METHOD.map((m, i) => (
            <article
              key={m.tag}
              className="card-flat p-7 md:p-8 relative"
              style={{ background: i % 2 === 0 ? "var(--color-paper)" : "var(--color-paper)" }}
            >
              <div
                className="absolute -top-4 -left-4 w-14 h-14 rounded-2xl border-2 border-[var(--color-ink)] grid place-items-center font-[family-name:var(--font-accent)] font-black text-2xl"
                style={{ background: m.color, boxShadow: "4px 4px 0 var(--color-ink)" }}
              >
                {m.tag}
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight">
                {m.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[15px]">{m.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="voices" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
      <FloatingShape variant="star" size={70} rotate={-12} className="top-12 right-8 hidden md:block" />
      <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-lake-deep)] text-lg">
        学员的话 · In their words
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight max-w-2xl">
        每一张<span className="text-[var(--color-coral)]">驾照</span>背后，<br />
        都是一段稳稳走过的路。
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {VOICES.map((v, i) => (
          <figure
            key={v.name}
            className="card-flat p-7"
            style={{ transform: `rotate(${i === 1 ? "1.5deg" : i === 2 ? "-1.5deg" : "0deg"})` }}
          >
            <div className="text-3xl text-[var(--color-coral)] font-[family-name:var(--font-accent)] leading-none">
              &ldquo;
            </div>
            <blockquote className="mt-2 leading-relaxed">{v.body}</blockquote>
            <figcaption className="mt-5 flex items-center justify-between border-t-2 border-dashed border-[var(--color-ink)] pt-4">
              <span className="font-[family-name:var(--font-display)] text-xl">{v.name}</span>
              <span className="sticker text-xs bg-[var(--color-canary)]">{v.plate}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Ticker() {
  return (
    <section
      aria-hidden
      className="relative overflow-hidden bg-[var(--color-coral)] text-[var(--color-paper)] border-y-4 border-[var(--color-ink)] py-5"
    >
      <div className="flex whitespace-nowrap" style={{ animation: "var(--animate-marquee)" }}>
        {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
          <span
            key={i}
            className="font-[family-name:var(--font-display)] text-2xl md:text-3xl px-8 flex items-center gap-8"
          >
            {t}
            <span className="text-[var(--color-canary)]">★</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="book"
      className="relative max-w-6xl mx-auto px-6 py-20 md:py-28"
    >
      <div
        className="relative rounded-[36px] border-4 border-[var(--color-ink)] p-8 md:p-14 bg-[var(--color-lake)] text-[var(--color-paper)]"
        style={{ boxShadow: "12px 12px 0 var(--color-ink)" }}
      >
        <FloatingShape variant="sun" size={90} className="-top-10 -right-6" />
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-canary)] text-lg">
              准备好上路了 — Ready when you are.
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight">
              第一节课，<br />我们先把基础打稳。
            </h2>
            <p className="mt-5 text-lg max-w-md leading-relaxed">
              微信或电话联系，告诉我你的考试日期、当前练习情况，
              我会给你一份免费的练习路线建议。
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="tel:XXXXXXXXXX"
              className="block bg-[var(--color-paper)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5 transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="text-xs font-bold tracking-widest opacity-70">电话 / PHONE</div>
              <div className="font-[family-name:var(--font-display)] text-3xl mt-1">
                XXX-XXX-XXXX
              </div>
            </a>
            <div
              className="bg-[var(--color-paper)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="text-xs font-bold tracking-widest opacity-70">微信 / WECHAT</div>
              <div className="font-[family-name:var(--font-display)] text-3xl mt-1">
                yanxu320
              </div>
              <p className="text-xs mt-2 opacity-70">添加时请备注"驾校"</p>
            </div>
            <div
              className="bg-[var(--color-canary)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="text-xs font-bold tracking-widest opacity-70">服务区域</div>
              <div className="font-[family-name:var(--font-display)] text-xl mt-1 leading-snug">
                St. Catharines · Niagara Falls · Welland · Thorold
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[var(--color-ink)] text-[var(--color-paper)] py-14 mt-0">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <span className="font-[family-name:var(--font-display)] text-3xl">Niagara 驾考教练</span>
          <p className="mt-3 text-sm opacity-80 max-w-sm leading-relaxed">
            一位扎根本地 12 年的驾驶教练，
            帮尼亚加拉的新司机自信上路。
            <br />
            学员社区即将上线，敬请期待。
          </p>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest text-[var(--color-canary)]">导航</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[var(--color-canary)]">关于教练</a></li>
            <li><a href="#method" className="hover:text-[var(--color-canary)]">教学法</a></li>
            <li><a href="#voices" className="hover:text-[var(--color-canary)]">学员评价</a></li>
            <li><a href="#book" className="hover:text-[var(--color-canary)]">预约</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest text-[var(--color-canary)]">语言 / LANGUAGE</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[var(--color-canary)]">中文（当前）</Link></li>
            <li><Link href="/en" className="hover:text-[var(--color-canary)]">English</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[var(--color-paper)]/15 text-xs opacity-60 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Niagara Drive Coach. All rights reserved.</span>
        <span>占位内容 · Replace with real content before launch.</span>
      </div>
    </footer>
  );
}
