import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { PageHero, CtaBand } from "@/components/ui";
import { JsonLd, breadcrumbSchema, orgId } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Our Services – Development, Marketing, QA & AI",
  description:
    "Explore CodeVira's services: mobile app development, game development, web development, SEO, ASO, digital marketing, QA testing, Amazon e-commerce and AI solutions.",
  path: "/services",
  keywords: ["IT services", "software development services", "digital marketing services", "app and web development"],
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "CodeVira Services",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${site.url}/services/${s.slug}`,
              name: s.title,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "CodeVira Services",
            provider: { "@id": orgId },
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title, description: s.summary },
            })),
          },
        ]}
      />
      <PageHero
        eyebrow="Our Services"
        title="Everything You Need to"
        highlight="Build & Grow Online"
        description="Nine specialised services, one dedicated team. Pick a single service or combine them into a complete digital growth package."
        crumbs={crumbs}
      />

      <section className="container-x space-y-6 pb-8">
        {services.map((s, i) => (
          <article key={s.slug} className="card reveal group grid gap-8 overflow-hidden p-7 sm:p-10 lg:grid-cols-[auto_1fr_1fr] lg:items-start">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-cyan text-white shadow-lg shadow-violet/25">
              <s.icon className="h-8 w-8" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted uppercase">0{i + 1}</p>
              <h2 className="mt-1 text-2xl font-bold text-fg sm:text-3xl">
                <Link href={`/services/${s.slug}`} className="hover:text-violet dark:hover:text-cyan-light">
                  {s.title}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{s.summary}</p>
              <Link href={`/services/${s.slug}`} className="btn-ghost mt-6 !py-2.5">
                View details <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {s.offerings.slice(0, 5).map((o) => (
                <li key={o.title} className="flex items-start gap-2.5 text-sm text-fg">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                  {o.title}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <CtaBand title="Not sure which service you need?" text="Tell us your goals and we'll recommend the right mix of services — free, with no obligation." />
    </>
  );
}
