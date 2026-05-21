import Link from "next/link";
import Image from "next/image";
import { HeroScene } from "@/components/HeroScene";
import { FloatingShape } from "@/components/FloatingShape";
import { StructuredData } from "@/components/StructuredData";
import { XiaohongshuIcon } from "@/components/XiaohongshuIcon";
import { SOCIAL_LINKS } from "@/lib/site";

const STATS = [
  { value: "97%", label: "一次通过率", note: "近三年学员实测" },
  { value: "1000+", label: "通过学员", note: "G2 / G 全路考" },
  { value: "6 年", label: "本地教学", note: "自 2020 扎根尼亚加拉" },
];

const METHOD = [
  {
    tag: "01",
    title: "路考线路逐站拆解",
    body: "St. Catharines 是尼亚加拉地区唯一考场——约 9 条 G2 路线、3 条 G 路线，每个停车点、每个考点、每一处避雷事项都了如指掌。考前陪你走一遍，心里不慌。",
    color: "var(--color-coral)",
  },
  {
    tag: "02",
    title: "平行停车 · 三点掉头 · 上下坡",
    body: "图片 + 视频双讲解，动作原理与注意事项分情况拆开讲。浅显易懂、轻松无压力，告别看运气式的考前练习。",
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
    title: "考官研判 · 临场把控",
    body: "熟悉考场每位考官的考评风格、扣分侧重，考前为你定制对应注意事项，让应试动作贴合评判思路，把临场失误率压到最低。",
    color: "var(--color-mint)",
  },
];

const VOICES = [
  {
    name: "美少女壮士",
    plate: "G2 通过 · 第 3 次",
    body: "G2 挂了 2 次，第三次特地跑来圣凯考。虽然只买了 1.5 小时熟悉路线，闫教练嘴巴像着火一样把每一个扣分点都讲了一遍——最后稳过。不凶不吼不骂，对学员特别好。",
    href: "https://www.xiaohongshu.com/discovery/item/669725b800000000250068de?source=webshare&xhsshare=pc_web&xsec_token=CBZ5zf4oUJzQrKiVVE2_GNP3Anb4z6oq8ICuFHflN6j8E=&xsec_source=pc_share",
  },
  {
    name: "momo",
    plate: "G2 一次通过",
    body: "平行停车一不小心擦到路缘，吓得心都凉了——但还是一次过！闫教练专业、耐心，对紧张的新手特别包容。",
    href: "https://www.xiaohongshu.com/discovery/item/692b26d8000000001f00d213?source=webshare&xhsshare=pc_web&xsec_token=CBXdUJr6vZk0x0J1ORKRBTFwqqN2u-mv0uEd5P4_XXKH4=&xsec_source=pc_share",
  },
  {
    name: "六爺516",
    plate: "G 通过 · 雪天考场",
    body: "来加拿大一个多月就考 G——清晨 8 点、雪没清完、晴天晃眼，广东人从没在雪里开过车。只找教练练了两次，结果 Pass 了！",
    href: "https://www.xiaohongshu.com/discovery/item/696af04f000000000c036591?source=webshare&xhsshare=pc_web&xsec_token=CBzYh4tpn_udt0PsOoCBSugIgm3sjqgFYgVvZKBdSWaYY=&xsec_source=pc_share",
  },
  {
    name: "非常想用大名当昵称留子版",
    plate: "G2 通过 · 留学生",
    body: "纯车痴小白，G1 后等了一年才考 G2。教练讲解非常细致，细节考点、易错点都一一说明，还有配套小红书视频复习——一条龙帮约考位，顺利通过！",
    href: "https://www.xiaohongshu.com/discovery/item/68be1aa5000000001d004f17?source=webshare&xhsshare=pc_web&xsec_token=CBFg444lqkOgQMyShQs-sk_PadaNPq8_mMsUP_0A_KXaI=&xsec_source=pc_share",
  },
];

const MORE_SUCCESS_CASES_URL = "https://www.xiaohongshu.com/user/profile/66cd427f000000001d022018";

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
      <ExamCenter />
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
        <Link href="/guides" className="hover:text-[var(--color-coral-deep)]">路考图解</Link>
        <Link href="/handbook" className="hover:text-[var(--color-coral-deep)]">驾驶手册</Link>
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
            深耕本地驾培五六载的资深教练，把路考拆解成精细化实操练习清单，考场要点烂熟于心。
            <strong className="text-[var(--color-coral-deep)]">一次通过率稳居高位</strong>
            ，凭扎实教学实力彻底告别"考试靠运气"。教学风格鲜活有活力、耐心细致好沟通，轻松带你稳稳拿证。
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
              <span>EST. 2020</span>
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
                <p className="text-sm opacity-80">Driving Instructor Yan · 安省持证教练</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="sticker text-xs bg-[var(--color-canary)]">MTO 持证</span>
              <span className="sticker text-xs bg-[var(--color-mint)]">中 · EN</span>
              <span className="sticker text-xs bg-[var(--color-paper)]">G2 / G</span>
            </div>
          </div>
          <span className="absolute -top-4 -right-4 sticker bg-[var(--color-canary)] rotate-6">
            自 2020 起
          </span>
        </div>

        <div>
          <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-lake-deep)] text-lg">
            About the instructor
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight">
            6 年只做<span className="text-[var(--color-coral)]">一件</span>事：
            <br />
            让你少走弯路。
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            <p>
              闫教练自 2020 年扎根尼亚加拉地区深耕驾驶教学，
              成功助力上千余名学员顺利拿下 G2 / G 全级别驾照，
              近三年考场一次通过率稳定高达 <strong>97%</strong>，
              口碑稳居本地驾培前列。
            </p>
            <p>
              教学摒弃死记硬背的应试套路，不止教考场技巧，更深挖加拿大本土行车规则与驾驶底层原理，
              兼顾考试通关刚需与日常上路实用能力。
            </p>
            <p>
              将全套驾考流程精细化拆解——方向盘的操控、后视镜与盲点的观察频次、路况预判逻辑、
              考官重点扣分细节，全部梳理成标准化动作清单，搭配通俗易记的实用口诀与图片，
              量化教学、简单易学，零基础也能快速吃透。
            </p>
            <p>
              支持中英双语无缝授课，适配新移民、留学生不同语言需求，沟通零障碍。
              贴合安省本地路况实景教学：路权与安全、冬季冰雪行车、雨雪湿滑路面控车、
              高速安全并线、城郊道路避险等本地高频刚需驾驶技能。
            </p>
            <p>
              不止轻松稳过驾照考试，更悉心传授北美道路通行礼仪、路权划分逻辑、
              通勤代步与长途出行的实打实日常经验，
              手把手帮学员快速融入加拿大本土驾驶节奏，拿证即可独立安心上路。
            </p>
          </div>
          <div className="mt-8 space-y-3">
            <div className="flex flex-wrap gap-2">
              {["MTO 认证", "中英文教学", "G1 辅导", "驾校签约", "商业保险", "四驱教练车", "车况崭新"].map((t) => (
                <span key={t} className="sticker text-sm bg-[var(--color-paper-warm)]">
                  {t}
                </span>
              ))}
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.2em] opacity-60 mb-2">
                安全配置 / SAFETY SUITE
              </div>
              <div className="flex flex-wrap gap-2">
                {["DRCC", "LTA", "LCA", "BSM", "RCTA", "RSA", "LDA"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-paper)] px-3 py-1 text-xs font-bold tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
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
            我把六年的本地教学经验沉淀成四个模块。每节课都对应清晰的目标，
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

function ExamCenter() {
  return (
    <section
      id="exam-center"
      className="relative max-w-6xl mx-auto px-6 py-20 md:py-28"
    >
      <FloatingShape variant="sign" size={90} rotate={-8} className="top-10 right-4 hidden md:block" />
      <FloatingShape variant="ripple" size={120} className="bottom-10 -left-10 opacity-50 hidden md:block" />

      <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 items-start relative z-10">
        <div>
          <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-coral-deep)] text-lg">
            St. Catharines · 专属考场研究
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight">
            考场我熟，<br />
            <span className="underline-wobble">考官我懂</span>。
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="sticker text-xs bg-[var(--color-canary)]">9 条 G2 路线</span>
            <span className="sticker text-xs bg-[var(--color-mint)]">3 条 G 路线</span>
            <span className="sticker text-xs bg-[var(--color-paper-warm)]">考官风格档案</span>
          </div>
        </div>

        <div className="space-y-5 text-[17px] leading-relaxed">
          <p>
            专注深耕圣凯（St. Catharines）专属考场，潜心钻研考场全流程规则，
            教学训练精准贴合本地考评标准。深知路考以人工评判为主、存在主观倾向，
            场内每位考官的考评风格、评判偏好、扣分侧重，我都心中有数。
          </p>
          <p>
            日常教学严格前置把关——技术与心态未达标准绝不安排赴考，
            提前筛选学员综合水平。长久以来与考场考官建立深厚默契与高度信任，
            我方输送学员的整体素质，早已收获考场一致认可。
          </p>
          <p>
            考前会针对性为学员分析对应考官的考评特点，
            梳理注意事项与应对方式，贴合评判思路调整行车细节、
            顺应考评习惯规范驾驶动作。专业把控加上独家考场经验，
            大幅降低临场失误率，让你的应试表现更贴合考评要求。
          </p>
          <div
            className="card-flat p-5 bg-[var(--color-canary)]"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            <p className="text-base leading-relaxed">
              <span className="font-[family-name:var(--font-display)] text-xl">真实口碑 ·</span>{" "}
              凭借过硬教学口碑，连考官 <strong>J</strong> 都把自己的孩子安排到我这边练车和路考。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="voices" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
      <FloatingShape variant="star" size={70} rotate={-12} className="top-12 right-8 hidden md:block" />
      <div className="flex flex-wrap items-center gap-4">
        <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-lake-deep)] text-lg">
          学员的话 · In their words
        </p>
        <a
          href={MORE_SUCCESS_CASES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-canary)] px-4 py-2 text-xs font-black tracking-wider text-[var(--color-ink)] shadow-[3px_3px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
        >
          <XiaohongshuIcon size={18} />
          更多成功案例
        </a>
      </div>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight max-w-2xl">
        每一张<span className="text-[var(--color-coral)]">驾照</span>背后，<br />
        都是一段稳稳走过的路。
      </h2>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <a
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-xs font-bold tracking-widest text-[var(--color-coral-deep)] hover:underline"
            >
              查看小红书原帖
            </a>
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
              微信、电话或 WhatsApp 联系，告诉我你的考试日期、当前练习情况，
              我会给你一份免费的练习路线建议。
            </p>
          </div>

          <div className="space-y-4">
            <div
              className="bg-[var(--color-mint)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="text-xs font-bold tracking-widest opacity-70">电话 / WhatsApp</div>
              <div className="font-[family-name:var(--font-display)] text-3xl mt-1">
                +1 (905) 360-0320
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="tel:+19053600320"
                  className="rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-4 py-3 text-center text-sm font-bold border-2 border-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
                >
                  拨打电话
                </a>
                <a
                  href="https://wa.me/19053600320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--color-paper)] text-[var(--color-ink)] px-4 py-3 text-center text-sm font-bold border-2 border-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div
              className="bg-[var(--color-paper)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold tracking-widest opacity-70">微信 / WECHAT</div>
                  <p className="text-sm mt-2 leading-relaxed">
                    扫码添加，备注&quot;驾校&quot;。
                  </p>
                </div>
                <div className="shrink-0 rounded-xl border-2 border-[var(--color-ink)] overflow-hidden bg-white">
                  <Image
                    src="/wechat-qr.jpg"
                    alt="闫教练微信二维码"
                    width={888}
                    height={1131}
                    sizes="160px"
                    className="block w-[140px] h-auto"
                  />
                </div>
              </div>
            </div>
            <a
              href={SOCIAL_LINKS.xiaohongshu}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[var(--color-paper)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5 transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <span
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl border-2 border-[var(--color-ink)]"
                style={{ background: "#ff2442" }}
              >
                <XiaohongshuIcon size={28} />
              </span>
              <span className="flex-1">
                <div className="text-xs font-bold tracking-widest opacity-70">小红书 / XIAOHONGSHU</div>
                <div className="font-[family-name:var(--font-display)] text-2xl mt-1 leading-none">
                  @闫教练
                </div>
                <p className="text-xs mt-2 opacity-70">关注查看 G2 评分细节、扣分点拆解</p>
              </span>
            </a>
            <div
              className="bg-[var(--color-canary)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="text-xs font-bold tracking-widest opacity-70">服务区域 / SERVICE AREAS</div>
              <div className="font-[family-name:var(--font-display)] text-lg mt-1 leading-snug">
                St. Catharines · Welland · Thorold · Niagara Falls · Pelham · Niagara-on-the-Lake · Fort Erie
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
            一位扎根本地 6 年的驾驶教练，
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
            <li><a href="#exam-center" className="hover:text-[var(--color-canary)]">考场专研</a></li>
            <li><a href="#voices" className="hover:text-[var(--color-canary)]">学员评价</a></li>
            <li><a href="#book" className="hover:text-[var(--color-canary)]">预约</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest text-[var(--color-canary)]">关注 / FOLLOW</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={SOCIAL_LINKS.xiaohongshu}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[var(--color-canary)]"
              >
                <XiaohongshuIcon size={16} />
                小红书 · @闫教练
              </a>
            </li>
          </ul>
          <div className="text-xs font-bold tracking-widest text-[var(--color-canary)] mt-6">语言 / LANGUAGE</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[var(--color-canary)]">中文（当前）</Link></li>
            <li><Link href="/en" className="hover:text-[var(--color-canary)]">English</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[var(--color-paper)]/15 text-xs opacity-60 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Niagara Driving Instructor. All rights reserved.</span>
        <span>占位内容 · Replace with real content before launch.</span>
      </div>
    </footer>
  );
}
