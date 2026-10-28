import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Users,
  Gauge,
  Lock,
  MessagesSquare,
  Layers,
  HeartHandshake,
  Compass,
  PenTool,
  Code2,
  Bug,
  Rocket,
  LineChart,
  HeartPulse,
  GraduationCap,
  Store,
  Landmark,
  Plane,
  Building2,
  Clapperboard,
  Truck,
} from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { LogoMark } from "@/components/Logo";
import { SectionHeading, Glow, FaqList, CtaBand } from "@/components/ui";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const metadata = {
  ...pageMetadata({
    title: "App, Game, Web Development & Digital Marketing Agency",
    description: site.description,
    path: "/",
  }),
  title: { absolute: `${site.name} – App, Game, Web Development & Digital Marketing Agency` },
};

const stack = [
  "Flutter", "React Native", "Next.js", "React", "Unity", "Node.js", "Laravel", "Python", "Firebase",
  "WordPress", "Shopify", "Figma", "Google Ads", "Meta Ads", "Ahrefs", "Helium 10", "OpenAI", "Claude", "Playwright",
];

const reasons = [
  { icon: Layers, title: "All Services Under One Roof", desc: "Build, test, launch and market with a single accountable team — no juggling multiple vendors." },
  { icon: Users, title: "Skilled, Dedicated Team", desc: "Experienced developers, designers, QA engineers and marketers assigned to your project." },
  { icon: MessagesSquare, title: "Transparent Communication", desc: "Weekly updates, shared progress boards and a single point of contact who answers quickly." },
  { icon: Gauge, title: "Performance & SEO by Default", desc: "Every product is built fast, accessible and search-ready from the very first sprint." },
  { icon: Lock, title: "You Own Everything", desc: "Full ownership of source code, designs and accounts. Strict confidentiality with NDA on request." },
  { icon: HeartHandshake, title: "Long-Term Partnership", desc: "We stay after launch with support, improvements and growth marketing as you scale." },
];

const steps = [
  { icon: Compass, title: "Discover", desc: "We learn your business, goals, users and competitors to define clear success metrics." },
  { icon: PenTool, title: "Design", desc: "Wireframes, user flows and premium UI that reflect your brand and convert visitors." },
  { icon: Code2, title: "Develop", desc: "Agile sprints with clean, scalable code and regular demos you can test yourself." },
  { icon: Bug, title: "Test", desc: "Manual and automated QA across devices to make sure everything works flawlessly." },
  { icon: Rocket, title: "Launch", desc: "Smooth deployment to the web, Google Play or the App Store — with zero drama." },
  { icon: LineChart, title: "Grow", desc: "SEO, ASO and marketing campaigns that turn your launch into lasting growth." },
];

const industries = [
  { icon: Store, name: "E-Commerce & Retail" },
  { icon: HeartPulse, name: "Healthcare & Fitness" },
  { icon: GraduationCap, name: "Education & E-Learning" },
  { icon: Landmark, name: "Finance & Fintech" },
  { icon: Clapperboard, name: "Gaming & Entertainment" },
  { icon: Plane, name: "Travel & Hospitality" },
  { icon: Building2, name: "Real Estate" },
  { icon: Truck, name: "Logistics & Delivery" },
];

const faqs = [
  { q: "What services does CodeVira offer?", a: "CodeVira offers mobile app development, game development, web development and design, SEO, App Store Optimization (ASO), digital marketing, QA and software testing, Amazon and e-commerce services, and AI solutions such as chatbots and automation." },
  { q: "Do you work with international clients?", a: "Yes. While we are based in Punjab, Pakistan, we work remotely with startups and businesses worldwide, including the UK, USA, Europe, the Middle East and Australia, and we adapt to your time zone for meetings." },
  { q: "How do I get a quote for my project?", a: "Simply fill in the contact form, email us or message us on WhatsApp with a short description of your project. We reply within 24 hours with questions or a free estimate." },
  { q: "How do you price projects?", a: "We offer fixed-price quotes for well-defined projects and flexible monthly or hourly plans for ongoing work such as marketing, SEO and maintenance. There are never hidden costs." },
  { q: "Will I own the source code?", a: "Yes. Once the project is paid for, you receive full ownership of the source code, designs and related assets." },
  { q: "Do you provide support after launch?", a: "Absolutely. We offer post-launch support, maintenance plans and growth services so your product keeps improving after it goes live." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-28">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <Glow className="top-10 -left-32 h-[420px] w-[420px] bg-violet/30 dark:bg-violet/35" />
        <Glow className="top-40 right-[-120px] h-[380px] w-[380px] bg-cyan/25" />

        <div className="container-x grid items-center gap-12 sm:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <span className="eyebrow animate-fade-up">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" /> Software & Digital Growth Agency
            </span>
            <h1 className="animate-fade-up [animation-delay:60ms] mt-6 text-4xl leading-[1.08] font-extrabold text-fg sm:text-5xl lg:text-6xl xl:text-[4.1rem]">
              We Build Apps, Games & Websites That <span className="text-gradient">Grow Your Business</span>
            </h1>
            <p className="animate-fade-up [animation-delay:120ms] mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
              CodeVira designs, develops and markets digital products for ambitious brands — from mobile apps and games to
              SEO, Amazon growth and AI automation. One team, end-to-end, built for results.
            </p>
            <div className="animate-fade-up [animation-delay:180ms] mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-ghost w-full sm:w-auto">
                Explore Services
              </Link>
            </div>
            <ul className="animate-fade-up [animation-delay:240ms] mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted lg:justify-start">
              {["Free project consultation", "Transparent pricing", "Reply within 24 hours"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero visual */}
          <div className="animate-fade-up [animation-delay:150ms] relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[460px]" aria-hidden>
            <div className="absolute inset-[6%] rounded-full border border-dashed border-violet/25" />
            <div className="absolute inset-[20%] rounded-full border border-line" />
            <div className="absolute inset-0 animate-spin-slow">
              {services.slice(0, 8).map((s, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const x = 50 + 44 * Math.cos(angle);
                const y = 50 + 44 * Math.sin(angle);
                return (
                  <div
                    key={s.slug}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="glass flex h-10 w-10 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl text-violet shadow-lg [animation:spin_18s_linear_infinite_reverse] dark:text-cyan-light sm:h-14 sm:w-14">
                      <s.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute inset-[30%] flex items-center justify-center">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet to-cyan opacity-40 blur-2xl" />
              <LogoMark id="hero" className="relative h-full w-full drop-shadow-2xl" />
            </div>
            <div className="glass animate-float absolute top-[4%] -left-3 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl sm:-left-6">
              <p className="text-[11px] text-muted">Lighthouse SEO</p>
              <p className="font-display text-base font-bold text-fg sm:text-lg">100 / 100</p>
            </div>
            <div className="glass animate-float absolute -right-3 bottom-[6%] rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl [animation-delay:-3s] sm:-right-6">
              <p className="flex items-center gap-1.5 text-[11px] text-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Build passed
              </p>
              <p className="font-display text-base font-bold text-fg sm:text-lg">Ready to launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech marquee */}
      <section aria-label="Technologies we use" className="border-y border-line bg-bg-soft/50 py-6">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {[...stack, ...stack].map((t, i) => (
              <li key={i} aria-hidden={i >= stack.length} className="font-display text-lg font-bold whitespace-nowrap text-muted/70">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-x py-16 sm:py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Digital Services That"
          highlight="Drive Real Results"
          description="From the first line of code to the first thousand customers — we cover every stage of building and growing your digital product."
        />
        <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card card-hover reveal p-6 sm:p-7">
              <div aria-hidden className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-violet/20 to-cyan/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-white shadow-lg shadow-violet/25">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-fg">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet dark:text-cyan-light">
                Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        <Glow className="top-1/3 left-1/2 h-[400px] w-[700px] -translate-x-1/2 bg-violet/15" />
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why CodeVira"
              title="A Partner That Cares About"
              highlight="Your Success"
              description="We are a young, fast-moving company founded in 2024 — powered by a team of experienced engineers, designers and marketers. We combine startup energy with professional processes, so you get senior-level quality with personal attention."
            />
            <div className="reveal mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4">
              {[
                { k: "9+", v: "Specialised services" },
                { k: "24h", v: "Response time" },
                { k: "100%", v: "Code & IP ownership" },
                { k: "2024", v: "Founded in Pakistan" },
              ].map((s) => (
                <div key={s.v} className="card p-4 sm:p-5">
                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-gradient">{s.k}</p>
                  <p className="mt-1 text-sm text-muted">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="card card-hover reveal p-6">
                <r.icon className="h-7 w-7 text-violet dark:text-cyan-light" />
                <h3 className="mt-4 text-lg font-bold text-fg">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-16 sm:py-24">
        <SectionHeading
          eyebrow="How We Work"
          title="A Proven Process From"
          highlight="Idea to Growth"
          description="A clear, collaborative workflow that keeps you informed and in control at every stage."
        />
        <ol className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="card reveal relative overflow-hidden p-6 sm:p-7">
              <span aria-hidden className="absolute top-4 right-5 font-display text-6xl font-extrabold text-fg/[0.05]">
                0{i + 1}
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet/30 bg-violet/10 text-violet dark:text-violet-light">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-fg">
                <span className="text-muted">Step {i + 1} · </span>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Industries */}
      <section className="container-x py-16">
        <SectionHeading
          eyebrow="Industries"
          title="Solutions for"
          highlight="Every Industry"
          description="We understand the unique challenges of different markets and tailor technology to fit."
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-4">
          {industries.map((ind) => (
            <li key={ind.name} className="card card-hover reveal flex flex-col items-center gap-3 p-4 text-center sm:p-6">
              <ind.icon className="h-7 w-7 text-violet dark:text-cyan-light" />
              <span className="text-sm font-semibold text-fg">{ind.name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="container-x py-16 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked" highlight="Questions" />
        <div className="mt-12">
          <FaqList faqs={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
