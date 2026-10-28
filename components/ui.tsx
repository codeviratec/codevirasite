import Link from "next/link";
import { ArrowRight, ChevronRight, Plus, MessageCircle } from "lucide-react";
import type { Faq } from "@/lib/services";
import { site } from "@/lib/site";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  as: Tag = "h2",
  intro = false,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  /** Above-the-fold heading: animate in with CSS instead of waiting for the scroll observer. */
  intro?: boolean;
}) {
  return (
    <div className={`${intro ? "animate-fade-up" : "reveal"} max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="mt-4 text-[1.75rem] leading-tight font-extrabold text-fg sm:text-4xl lg:text-[2.75rem]">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </Tag>
      {description && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </div>
  );
}

export function Glow({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`} />
  );
}

export type Crumb = { name: string; href: string };

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-10 sm:pt-44 sm:pb-20">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <Glow className="top-0 left-1/2 h-[380px] w-[620px] -translate-x-1/2 bg-violet/25 dark:bg-violet/30" />
      <Glow className="top-24 right-0 h-[260px] w-[300px] bg-cyan/20" />
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-fg">{c.name}</span>
                ) : (
                  <Link href={c.href} className="hover:text-fg">{c.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <SectionHeading as="h1" intro eyebrow={eyebrow} title={title} highlight={highlight} description={description} />
        {children}
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="card reveal group p-0 open:border-violet/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 text-left font-semibold text-fg sm:p-6 [&::-webkit-details-marker]:hidden">
            <h3 className="text-[15px] sm:text-lg">{f.q}</h3>
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet/10 text-violet transition group-open:rotate-45 dark:text-violet-light">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p className="px-4 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-base">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Ready to build something remarkable?",
  text = "Tell us about your idea. We'll reply within 24 hours with a free consultation and a clear, honest plan to bring it to life.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-14 sm:py-20">
      <div className="reveal relative isolate overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#1b1145] via-[#121a4a] to-[#06283a] px-5 py-12 text-center sm:px-12 sm:py-20">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60 [--grid:rgba(255,255,255,0.06)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <Glow className="-top-20 -left-20 h-72 w-72 bg-violet/50" />
        <Glow className="-right-16 -bottom-24 h-72 w-72 bg-cyan/40" />
        <h2 className="mx-auto max-w-2xl text-2xl font-extrabold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
