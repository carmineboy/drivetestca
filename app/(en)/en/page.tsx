import Link from "next/link";
import { HeroScene } from "@/components/HeroScene";
import { FloatingShape } from "@/components/FloatingShape";
import { StructuredData } from "@/components/StructuredData";

const STATS = [
  { value: "97%", label: "First-time pass", note: "Last 3 years of students" },
  { value: "500+", label: "Students passed", note: "G2 / G road tests" },
  { value: "12 yr", label: "Teaching locally", note: "Rooted in Niagara" },
];

const METHOD = [
  {
    tag: "01",
    title: "Test route, station by station",
    body: "St. Catharines, Welland, and Niagara Falls test centres — every route, every stop, every merge mapped out. Walk the whole thing on paper before you ever sit the test.",
    color: "var(--color-coral)",
  },
  {
    tag: "02",
    title: "Reverse · 3-point · parallel",
    body: "Chalk lines and pylons in the parking lot give you the examiner's view. No more guesswork — clean reverse parking and parallel within two sessions.",
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
    title: "Composure & examiner talk",
    body: "Stalling on a hill start. Recovering after a deduction. Pre-test nerves. We break 'the test' into small, drillable moves — so nerves stop being your excuse.",
    color: "var(--color-mint)",
  },
];

const VOICES = [
  {
    name: "Lily Z.",
    plate: "G2 · 1st try",
    body: "I'd had 8 lessons elsewhere and still couldn't park. Three sessions with Coach Yan, every move had a cue. Examiner said my parking was textbook.",
  },
  {
    name: "Kevin H.",
    plate: "G · 1st try",
    body: "He took me up the QEW during the worst snow of the season. That kind of real-condition training beats any G1 quiz app.",
  },
  {
    name: "Mrs. Chen",
    plate: "Re-learning at 55",
    body: "I learned in Mandarin. He's incredibly patient. After every lesson he sent me a voice memo so I could walk through the route again at home.",
  },
];

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
          Niagara Drive Coach
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
        <a href="#method" className="hover:text-[var(--color-coral-deep)]">Method</a>
        <a href="#voices" className="hover:text-[var(--color-coral-deep)]">Students</a>
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
            Niagara region · Bilingual coach
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] leading-[0.95] text-[14vw] sm:text-7xl md:text-[5.5rem]">
            Drive Niagara
            <br />
            <span className="underline-wobble">with confidence</span>
            <span className="text-[var(--color-coral)]">.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed">
            Twelve years of local driving instruction, turned into a drillable checklist.
            <strong className="text-[var(--color-coral-deep)]"> 97% first-time pass</strong>
            {" "}— luck removed from the equation.
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
                <p className="mt-5 font-[family-name:var(--font-display)] text-3xl">Coach Yan</p>
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
            Since 2014
          </span>
        </div>

        <div>
          <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-lake-deep)] text-lg">
            About the coach
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight">
            Twelve years, <span className="text-[var(--color-coral)]">one</span> job:
            <br />
            shorten your road to the licence.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            <p>
              Coach Yan has been teaching driving in the Niagara region since 2014.
              Over 500 students passed their G2 / G under his instruction,
              with a <strong>97% first-attempt pass rate</strong> in the last three years.
            </p>
            <p>
              His approach: turn "the test" into a list of repeatable moves —
              steering-wheel turns, mirror-check rhythm, the small safety details
              examiners watch for. All cued, all measurable.
            </p>
            <p>
              Lessons in English or Mandarin. Winter driving, wet pavement, highway
              merging — every local must-know covered on real roads.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["MTO certified", "EN / 中文", "G1 written prep", "Your car or his"].map((t) => (
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
              The Systematic Driver
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight max-w-xl">
              Not "drive more, you'll get it."
              <br />
              <span className="underline-wobble">Every step, spelled out.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed">
            Twelve years of teaching, distilled into four modules.
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

function Testimonials() {
  return (
    <section id="voices" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
      <FloatingShape variant="star" size={70} rotate={-12} className="top-12 right-8 hidden md:block" />
      <p className="font-[family-name:var(--font-accent)] italic text-[var(--color-lake-deep)] text-lg">
        In their words
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight max-w-2xl">
        Behind every <span className="text-[var(--color-coral)]">licence</span>,
        <br />
        a steady road well walked.
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
              Call or WeChat me with your test date and what you've been practising.
              I'll send back a free route suggestion to work on this week.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="tel:XXXXXXXXXX"
              className="block bg-[var(--color-paper)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5 transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="text-xs font-bold tracking-widest opacity-70">PHONE</div>
              <div className="font-[family-name:var(--font-display)] text-3xl mt-1">
                XXX-XXX-XXXX
              </div>
            </a>
            <div
              className="bg-[var(--color-paper)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="text-xs font-bold tracking-widest opacity-70">WECHAT</div>
              <div className="font-[family-name:var(--font-display)] text-3xl mt-1">
                yanxu320
              </div>
              <p className="text-xs mt-2 opacity-70">Mention "driving lessons" when adding.</p>
            </div>
            <div
              className="bg-[var(--color-canary)] text-[var(--color-ink)] rounded-2xl border-2 border-[var(--color-ink)] p-5"
              style={{ boxShadow: "6px 6px 0 var(--color-ink)" }}
            >
              <div className="text-xs font-bold tracking-widest opacity-70">SERVICE AREA</div>
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
    <footer className="relative bg-[var(--color-ink)] text-[var(--color-paper)] py-14">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <span className="font-[family-name:var(--font-display)] text-3xl">Niagara Drive Coach</span>
          <p className="mt-3 text-sm opacity-80 max-w-sm leading-relaxed">
            A local instructor of twelve years, helping new drivers across Niagara get on the road with confidence.
            <br />
            Student community launching soon.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest text-[var(--color-canary)]">NAVIGATE</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[var(--color-canary)]">About</a></li>
            <li><a href="#method" className="hover:text-[var(--color-canary)]">Method</a></li>
            <li><a href="#voices" className="hover:text-[var(--color-canary)]">Students</a></li>
            <li><a href="#book" className="hover:text-[var(--color-canary)]">Book</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest text-[var(--color-canary)]">LANGUAGE</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[var(--color-canary)]">中文</Link></li>
            <li><Link href="/en" className="hover:text-[var(--color-canary)]">English (current)</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[var(--color-paper)]/15 text-xs opacity-60 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Niagara Drive Coach. All rights reserved.</span>
        <span>Placeholder content — replace before launch.</span>
      </div>
    </footer>
  );
}
