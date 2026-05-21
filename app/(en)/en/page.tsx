import Link from "next/link";
import Image from "next/image";
import { HeroScene } from "@/components/HeroScene";
import { FloatingShape } from "@/components/FloatingShape";
import { StructuredData } from "@/components/StructuredData";
import { XiaohongshuIcon } from "@/components/XiaohongshuIcon";
import { SOCIAL_LINKS } from "@/lib/site";

const STATS = [
  { value: "97%", label: "First-time pass", note: "Last 3 years of students" },
  { value: "1000+", label: "Students passed", note: "G2 / G road tests" },
  { value: "6 yr", label: "Teaching locally", note: "Rooted in Niagara since 2020" },
];

const METHOD = [
  {
    tag: "01",
    title: "Test route, station by station",
    body: "St. Catharines is the only test centre in the Niagara region — roughly 9 G2 routes and 3 G routes. Every stop, every scoring point, every gotcha mapped out. Walk it once with me and your head's clear on test day.",
    color: "var(--color-coral)",
  },
  {
    tag: "02",
    title: "Parallel · 3-point · hill parking",
    body: "Photos plus video walk-throughs for every manoeuvre. The physics, the cues, the failure modes — broken down by scenario. Plain language, low pressure, drillable until it sticks.",
    color: "var(--color-lake)",
  },
  {
    tag: "03",
    title: "Winter driving, on real roads",
    body: "Niagara winters bring snow, black ice, and glassy rain. We drive in all of it. When to ease the brakes, how to correct a slide — turned into muscle-memory cues.",
    color: "var(--color-canary)",
  },
  {
    tag: "04",
    title: "Examiner read · test-day composure",
    body: "I know each examiner's scoring style and the deductions they care about. Before your test we tailor cues to match — so your driving lines up with how they actually grade.",
    color: "var(--color-mint)",
  },
];

const VOICES = [
  {
    name: "Meishaonu Zhuangshi",
    plate: "G2 passed · 3rd try",
    body: "After two failed G2 attempts, I came to St. Catharines for the third one. I only booked 1.5 hours to learn the route, but Instructor Yan covered every scoring point at full speed. Calm, kind, no yelling — and I passed.",
    href: "https://www.xiaohongshu.com/discovery/item/669725b800000000250068de?source=webshare&xhsshare=pc_web&xsec_token=CBZ5zf4oUJzQrKiVVE2_GNP3Anb4z6oq8ICuFHflN6j8E=&xsec_source=pc_share",
  },
  {
    name: "momo",
    plate: "G2 · 1st try",
    body: "I bumped the curb a little during parallel parking and thought it was over — but still passed on the first try. Instructor Yan is professional, patient, and especially reassuring for nervous beginners.",
    href: "https://www.xiaohongshu.com/discovery/item/692b26d8000000001f00d213?source=webshare&xhsshare=pc_web&xsec_token=CBXdUJr6vZk0x0J1ORKRBTFwqqN2u-mv0uEd5P4_XXKH4=&xsec_source=pc_share",
  },
  {
    name: "Liuye 516",
    plate: "G passed · snowy test day",
    body: "I took the G test just over a month after arriving in Canada: 8 a.m., snow still on the road, bright glare everywhere. I had never driven in snow before. Two lessons with Instructor Yan, then pass.",
    href: "https://www.xiaohongshu.com/discovery/item/696af04f000000000c036591?source=webshare&xhsshare=pc_web&xsec_token=CBzYh4tpn_udt0PsOoCBSugIgm3sjqgFYgVvZKBdSWaYY=&xsec_source=pc_share",
  },
  {
    name: "International student",
    plate: "G2 passed · beginner",
    body: "I was a total beginner and waited a full year after G1 before taking G2. The explanations were detailed, every tricky point was covered, and the Xiaohongshu videos helped me review. Route booking and prep were all handled smoothly.",
    href: "https://www.xiaohongshu.com/discovery/item/68be1aa5000000001d004f17?source=webshare&xhsshare=pc_web&xsec_token=CBFg444lqkOgQMyShQs-sk_PadaNPq8_mMsUP_0A_KXaI=&xsec_source=pc_share",
  },
];

const MORE_SUCCESS_CASES_URL = "https://www.xiaohongshu.com/user/profile/66cd427f000000001d022018";

const TICKER = [
  "G2 · 1st time pass",
  "G · 1st time pass",
  "St. Catharines centre",
  "Welland centre",
  "Niagara Falls centre",
  "Winter driving",
  "Bilingual instruction",
  "Reverse · 3-point · parallel",
];

export default function HomeEn() {
  return (
    <main className="relative overflow-hidden">
      <StructuredData locale="en" />
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
      <Link href="/en" className="flex items-center gap-3">
        <span
          className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border-2 border-[var(--color-ink)] bg-[var(--color-coral)] text-[var(--color-paper)] font-[family-name:var(--font-display)] text-2xl"
          style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}
        >
          ND
        </span>
        <span className="font-[family-name:var(--font-display)] text-xl">
          Niagara Driving Instructor
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
        <a href="#method" className="hover:text-[var(--color-coral-deep)]">Method</a>
        <a href="#voices" className="hover:text-[var(--color-coral-deep)]">Students</a>
        <Link href="/quiz?lang=en" className="hover:text-[var(--color-coral-deep)]">G1 Quiz</Link>
        <a href="#book" className="hover:text-[var(--color-coral-deep)]">Book</a>
        <Link href="/" className="sticker text-xs" aria-label="切换中文">
          中
        </Link>
      </div>
      <Link href="#book" className="md:hidden sticker text-sm">
        Book
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
            Niagara region · Bilingual instructor
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] leading-[0.95] text-[14vw] sm:text-7xl md:text-[5.5rem]">
            Drive Niagara
            <br />
            <span className="underline-wobble">with confidence</span>
            <span className="text-[var(--color-coral)]">.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed">
            Six years of local driving instruction, broken down into a drillable, no-guesswork checklist.
            <strong className="text-[var(--color-coral-deep)]"> 97% first-time pass</strong>
            {" "}— luck out of the equation. Patient, energetic, bilingual coaching that gets you licensed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-7 py-4 font-bold text-lg border-2 border-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "6px 6px 0 var(--color-coral)" }}
            >
              Book your first lesson
              <span aria-hidden>→</span>
            </a>
            <a
              href="#method"
              className="font-semibold underline decoration-2 decoration-[var(--color-lake)] underline-offset-4 hover:text-[var(--color-lake-deep)]"
            >
              See the method ↓
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
            ⭐ G2 / G road test
          </div>
          <div
            className="absolute top-6 -right-2 md:-right-6 sticker text-base bg-[var(--color-coral)] text-[var(--color-paper)] border-[var(--color-ink)]"
            style={{ transform: "rotate(6deg)" }}
          >
            Real car. Real roads.
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
              <div className="absolute -top-3 -left-3 w-3 h-3 rounded-full bg-[var(--color-coral)]" aria-hidden />
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
                <p className="mt-5 font-[family-name:var(--font-display)] text-3xl">Instructor Yan</p>
                <p className="text-sm opacity-80">MTO-certified · Niagara</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="sticker text-xs bg-[var(--color-canary)]">MTO certified</span>
              <span className="sticker text-xs bg-[var(--color-mint)]">EN · 中文</span>
              <span className="sticker text-xs bg-[var(--color-paper)]">G2 / G</span>
            </div>
          </div>
          <span className="absolute -top-4 -right-4 sticker bg-[var(--color-canary)] rotate-6">
            Since 2020
          </span>
        </div>

        <div>
          <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-lake-deep)] text-lg">
            About the instructor
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight">
            Six years, <span className="text-[var(--color-coral)]">one</span> job:
            <br />
            shorten your road to the licence.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            <p>
              Instructor Yan has taught driving across the Niagara region since 2020,
              helping over <strong>1,000 students</strong> pass their G2 / G,
              with a <strong>97% first-attempt pass rate</strong> over the last three years.
              His name is one of the most trusted in local driving education.
            </p>
            <p>
              No rote-memorised test tricks. Lessons cover both the moves the examiner is grading
              and the Ontario road rules and driving fundamentals behind them —
              so you're ready for the test and ready for the road that comes after it.
            </p>
            <p>
              Every part of the road test, broken down: steering input, mirror &amp; blind-spot
              cadence, hazard scanning, the small details examiners deduct on. All turned into
              a standardised, drillable checklist — with photos, video, and plain-language cues
              that work even for first-time drivers.
            </p>
            <p>
              Fully bilingual lessons (English / Mandarin) for newcomers and international students.
              Real local conditions: right-of-way and safety, winter snow and ice, slick wet pavement,
              highway merges, suburban and rural hazards — the high-frequency skills Niagara actually
              demands.
            </p>
            <p>
              Beyond just passing: North American road etiquette, right-of-way logic, commuting and
              long-distance driving experience — so you walk out of the test centre ready to drive
              independently, not just legally.
            </p>
          </div>
          <div className="mt-8 space-y-3">
            <div className="flex flex-wrap gap-2">
              {["MTO certified", "EN / 中文", "G1 written prep", "Driving-school partner", "Commercial insured", "AWD training car", "Brand-new condition"].map((t) => (
                <span key={t} className="sticker text-sm bg-[var(--color-paper-warm)]">
                  {t}
                </span>
              ))}
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.2em] opacity-60 mb-2">
                SAFETY SUITE
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
              The Systematic Driver
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight max-w-xl">
              Not "drive more, you'll get it."
              <br />
              <span className="underline-wobble">Every step, spelled out.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed">
            Six years of local teaching, distilled into four modules.
            Each lesson has a clear target. You'll know what to practise next,
            and how far you are from passing.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {METHOD.map((m) => (
            <article key={m.tag} className="card-flat p-7 md:p-8 relative">
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
            St. Catharines · Test-centre deep dive
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight">
            I know the centre.
            <br />
            <span className="underline-wobble">I know the examiners.</span>
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="sticker text-xs bg-[var(--color-canary)]">9 G2 routes</span>
            <span className="sticker text-xs bg-[var(--color-mint)]">3 G routes</span>
            <span className="sticker text-xs bg-[var(--color-paper-warm)]">Examiner profiles</span>
          </div>
        </div>

        <div className="space-y-5 text-[17px] leading-relaxed">
          <p>
            I focus exclusively on the St. Catharines test centre — its routes, its rules,
            its scoring criteria. Road tests are graded by humans, which means style matters:
            every examiner has their own scoring tendencies and the deductions they care about,
            and after years on site, I know them.
          </p>
          <p>
            My students don't book a test until they're ready. That gatekeeping protects your
            pass rate and, over time, has built real trust between this practice and the centre.
            The quality of the students I send is recognised on test day.
          </p>
          <p>
            Before your test, we go over the specific examiner you're likely to draw —
            their scoring style, what to emphasise, the driving details to adjust. Pairing
            preparation with insider familiarity drops your in-the-moment mistakes and lines
            your driving up with how you'll actually be graded.
          </p>
          <div
            className="card-flat p-5 bg-[var(--color-canary)]"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            <p className="text-base leading-relaxed">
              <span className="font-[family-name:var(--font-display)] text-xl">Quiet endorsement —</span>{" "}
              Examiner <strong>J</strong> sends their own child to me for lessons and the road test.
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
          In their words
        </p>
        <a
          href={MORE_SUCCESS_CASES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-canary)] px-4 py-2 text-xs font-black tracking-wider text-[var(--color-ink)] shadow-[3px_3px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
        >
          <XiaohongshuIcon size={18} />
          More success stories
        </a>
      </div>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight max-w-2xl">
        Behind every <span className="text-[var(--color-coral)]">licence</span>,
        <br />
        a steady road well walked.
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
              View Xiaohongshu post
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
    <section id="book" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div
        className="relative rounded-[36px] border-4 border-[var(--color-ink)] p-8 md:p-14 bg-[var(--color-lake)] text-[var(--color-paper)]"
        style={{ boxShadow: "12px 12px 0 var(--color-ink)" }}
      >
        <FloatingShape variant="sun" size={90} className="-top-10 -right-6" />
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-canary)] text-lg">
              Ready when you are.
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight">
              Lesson one,
              <br />
              we lay the foundation.
            </h2>
            <p className="mt-5 text-lg max-w-md leading-relaxed">
              Call, WhatsApp, or WeChat me with your test date and what you've been practising.
              I'll send back a free route suggestion to work on this week.
            </p>
          </div>

          <div className="space-y-4">
            <div
              className="bg-[var(--color-mint)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="text-xs font-bold tracking-widest opacity-70">PHONE / WHATSAPP</div>
              <div className="font-[family-name:var(--font-display)] text-3xl mt-1">
                +1 (905) 360-0320
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="tel:+19053600320"
                  className="rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] px-4 py-3 text-center text-sm font-bold border-2 border-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
                >
                  Call
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
                  <div className="text-xs font-bold tracking-widest opacity-70">WECHAT</div>
                  <p className="text-sm mt-2 leading-relaxed">
                    Scan to add me. Mention &ldquo;driving lessons&rdquo; in your request.
                  </p>
                </div>
                <div className="shrink-0 rounded-xl border-2 border-[var(--color-ink)] overflow-hidden bg-white">
                  <Image
                    src="/wechat-qr.jpg"
                    alt="Instructor Yan WeChat QR code"
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
                <div className="text-xs font-bold tracking-widest opacity-70">XIAOHONGSHU / RED</div>
                <div className="font-[family-name:var(--font-display)] text-2xl mt-1 leading-none">
                  @闫教练
                </div>
                <p className="text-xs mt-2 opacity-70">G2 scoring breakdowns and lesson clips.</p>
              </span>
            </a>
            <div
              className="bg-[var(--color-canary)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="text-xs font-bold tracking-widest opacity-70">SERVICE AREAS</div>
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
    <footer className="relative bg-[var(--color-ink)] text-[var(--color-paper)] py-14">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <span className="font-[family-name:var(--font-display)] text-3xl">Niagara Driving Instructor</span>
          <p className="mt-3 text-sm opacity-80 max-w-sm leading-relaxed">
            A local instructor of six years, helping new drivers across Niagara get on the road with confidence.
            <br />
            Student community launching soon.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest text-[var(--color-canary)]">NAVIGATE</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[var(--color-canary)]">About</a></li>
            <li><a href="#method" className="hover:text-[var(--color-canary)]">Method</a></li>
            <li><a href="#exam-center" className="hover:text-[var(--color-canary)]">Test centre</a></li>
            <li><a href="#voices" className="hover:text-[var(--color-canary)]">Students</a></li>
            <li><a href="#book" className="hover:text-[var(--color-canary)]">Book</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest text-[var(--color-canary)]">FOLLOW</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={SOCIAL_LINKS.xiaohongshu}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[var(--color-canary)]"
              >
                <XiaohongshuIcon size={16} />
                Xiaohongshu · @闫教练
              </a>
            </li>
          </ul>
          <div className="text-xs font-bold tracking-widest text-[var(--color-canary)] mt-6">LANGUAGE</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[var(--color-canary)]">中文</Link></li>
            <li><Link href="/en" className="hover:text-[var(--color-canary)]">English (current)</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[var(--color-paper)]/15 text-xs opacity-60 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Niagara Driving Instructor. All rights reserved.</span>
        <span>Placeholder content — replace before launch.</span>
      </div>
    </footer>
  );
}
