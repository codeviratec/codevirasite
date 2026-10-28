import Link from "next/link";
import {
  Target,
  Eye,
  Sparkles,
  ShieldCheck,
  Lightbulb,
  Handshake,
  Award,
  Globe2,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { PageHero, SectionHeading, CtaBand, Glow } from "@/components/ui";
import { JsonLd, breadcrumbSchema, orgId } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "About Us – Our Story, Mission & Values",
  description:
    "Learn about CodeVira, a software and digital growth agency founded in 2024 in Punjab, Pakistan. Discover our mission, vision, values and the way we help businesses grow worldwide.",
  path: "/about",
  keywords: ["about CodeVira", "software company Pakistan", "IT company Jhang", "digital agency Punjab"],
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
];

const values = [
  { icon: Sparkles, title: "Quality First", desc: "We sweat the details — clean code, polished design and thorough testing — because quality is what our clients remember." },
  { icon: ShieldCheck, title: "Honesty & Transparency", desc: "Realistic timelines, clear pricing and open communication. If something isn't right for you, we'll say so." },
  { icon: Lightbulb, title: "Continuous Innovation", desc: "We stay ahead of new frameworks, AI tools and marketing trends so our clients always benefit from what's next." },
  { icon: Handshake, title: "Client Partnership", desc: "We treat every project like our own business and measure success by the results our clients achieve." },
  { icon: Award, title: "Ownership & Accountability", desc: "We own our commitments, meet our deadlines and take responsibility for outcomes — not just tasks." },
  { icon: Globe2, title: "Global Mindset", desc: "We build for international audiences and work comfortably across cultures and time zones." },
];

const differentiators = [
  "A single team for development, QA and growth marketing — no hand-off gaps",
  "Business-first thinking: every feature tied to a measurable goal",
  "Modern technology stack chosen for speed, security and scalability",
  "SEO, performance and accessibility built in from day one",
  "Competitive pricing with world-class standards",
  "Dedicated project manager and weekly progress reports",
  "Full intellectual property and source code ownership",
  "Reliable post-launch support and maintenance",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About CodeVira",
            url: `${site.url}/about`,
            mainEntity: { "@id": orgId },
          },
        ]}
      />
      <PageHero
        eyebrow="About CodeVira"
        title="We Turn Bold Ideas Into"
        highlight="Digital Success"
        description="CodeVira is a full-service software and digital growth agency helping startups, entrepreneurs and established businesses build exceptional products — and grow them online."
        crumbs={crumbs}
      />

      {/* Story */}
      <section className="container-x grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <span className="eyebrow">Our Story</span>
          <h2 className="mt-4 text-3xl font-extrabold text-fg sm:text-4xl">
            Founded in 2024 with a <span className="text-gradient">simple belief</span>
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              CodeVira was founded in {site.foundingYear} in Ahmadpur Sial, Jhang, Punjab, with a simple belief: world-class
              digital products should be accessible to every business, not just large corporations with huge budgets. We saw
              countless startups and small businesses struggle with unreliable freelancers, missed deadlines and agencies that
              disappeared after launch — and we decided to do things differently.
            </p>
            <p>
              Today, CodeVira brings together skilled developers, game designers, UI/UX designers, QA engineers, SEO specialists,
              Amazon experts and digital marketers under one roof. While we are a young company, our team members bring years of
              hands-on industry experience across mobile, web, gaming, e-commerce and AI.
            </p>
            <p>
              Our name reflects who we are: <strong className="text-fg">Code</strong> for the engineering craft at our core, and{" "}
              <strong className="text-fg">Vira</strong> — inspired by the word for courage and strength — for the bold, resilient
              approach we bring to every challenge. We build with courage, and we build to last.
            </p>
          </div>
        </div>
        <div className="reveal relative">
          <Glow className="inset-10 bg-violet/25" />
          <div className="card grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            {[
              { k: `${site.foundingYear}`, v: "Year founded" },
              { k: `${services.length}+`, v: "Core services" },
              { k: "24h", v: "Average reply time" },
              { k: "Global", v: "Clients served remotely" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-line bg-bg/40 p-6">
                <p className="font-display text-4xl font-extrabold text-gradient">{s.k}</p>
                <p className="mt-2 text-sm text-muted">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container-x grid gap-6 py-16 md:grid-cols-2">
        <article className="card reveal p-8 sm:p-10">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-white">
            <Target className="h-6 w-6" />
          </span>
          <h2 className="mt-6 text-2xl font-bold text-fg">Our Mission</h2>
          <p className="mt-3 leading-relaxed text-muted">
            To empower businesses of every size with reliable, high-quality technology and data-driven marketing — delivering
            digital products that solve real problems, delight users and generate measurable growth, at a price that makes sense.
          </p>
        </article>
        <article className="card reveal p-8 sm:p-10">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-violet text-white">
            <Eye className="h-6 w-6" />
          </span>
          <h2 className="mt-6 text-2xl font-bold text-fg">Our Vision</h2>
          <p className="mt-3 leading-relaxed text-muted">
            To become one of the most trusted technology and growth partners from Pakistan for clients around the world —
            recognised for craftsmanship, integrity and the lasting success of the businesses we serve.
          </p>
        </article>
      </section>

      {/* Values */}
      <section className="container-x py-14 sm:py-20">
        <SectionHeading
          eyebrow="Our Values"
          title="The Principles That"
          highlight="Guide Our Work"
          description="These values shape every decision we make — from how we write code to how we treat our clients."
        />
        <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card card-hover reveal p-6 sm:p-7">
              <v.icon className="h-7 w-7 text-violet dark:text-cyan-light" />
              <h3 className="mt-4 text-lg font-bold text-fg">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What sets us apart */}
      <section className="container-x grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          align="left"
          eyebrow="What Sets Us Apart"
          title="More Than a Vendor —"
          highlight="Your Growth Team"
          description="Most companies need more than just code. They need a partner who understands business, users and marketing. That is exactly what CodeVira is built to be."
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {differentiators.map((d) => (
            <li key={d} className="card reveal flex items-start gap-3 p-4 text-sm text-fg">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
              {d}
            </li>
          ))}
        </ul>
      </section>

      {/* Team & location */}
      <section className="container-x grid gap-6 py-16 lg:grid-cols-3">
        <article className="card reveal p-8 lg:col-span-2">
          <h2 className="text-2xl font-bold text-fg">Our Team</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Behind CodeVira is a multidisciplinary team of mobile and web developers, Unity game developers, UI/UX designers,
            QA engineers, SEO and ASO specialists, Amazon account managers, performance marketers and AI engineers. Every project
            is led by a dedicated project manager who keeps work organised and communication clear.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            We invest continuously in learning — new frameworks, platform policies, algorithm updates and AI capabilities — so
            our clients always benefit from current best practices rather than yesterday&apos;s playbook.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-muted hover:text-fg">
                {s.shortTitle}
              </Link>
            ))}
          </div>
        </article>
        <article className="card reveal p-8">
          <MapPin className="h-7 w-7 text-violet dark:text-cyan-light" />
          <h2 className="mt-4 text-2xl font-bold text-fg">Where We Are</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Our office is in <strong className="text-fg">{site.address.full}</strong>. We serve clients locally and across the
            globe through remote collaboration.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet dark:text-cyan-light">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </section>

      <CtaBand title="Let's build your next success story together" />
    </>
  );
}
