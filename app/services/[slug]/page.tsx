import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { services, getService } from "@/lib/services";
import { PageHero, SectionHeading, FaqList, CtaBand, Glow } from "@/components/ui";
import { JsonLd, breadcrumbSchema, faqSchema, orgId } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}`, keywords: s.keywords });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: s.shortTitle, href: `/services/${s.slug}` },
  ];
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(s.faqs),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            serviceType: s.shortTitle,
            description: s.metaDescription,
            url: `${site.url}/services/${s.slug}`,
            provider: { "@id": orgId },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: s.title,
              itemListElement: s.offerings.map((o) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: o.title, description: o.desc },
              })),
            },
          },
        ]}
      />

      <PageHero eyebrow={s.shortTitle} title={s.title} description={s.tagline} crumbs={crumbs}>
        <div className="animate-fade-up mt-9 flex [animation-delay:120ms] flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Talk on WhatsApp
          </a>
        </div>
      </PageHero>

      {/* Intro */}
      <section className="container-x grid gap-10 py-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
          <h2 className="text-2xl font-bold text-fg sm:text-3xl">
            {s.shortTitle} services that <span className="text-gradient">deliver results</span>
          </h2>
          {s.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <aside className="card reveal relative overflow-hidden p-6 sm:p-7">
          <Glow className="-top-10 -right-10 h-40 w-40 bg-violet/30" />
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-cyan text-white">
            <s.icon className="h-7 w-7" />
          </span>
          <h2 className="mt-5 text-lg font-bold text-fg">Why choose CodeVira</h2>
          <ul className="mt-4 space-y-3">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /> {b}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Offerings */}
      <section className="container-x py-14 sm:py-20">
        <SectionHeading
          eyebrow="What We Offer"
          title={`Our ${s.shortTitle}`}
          highlight="Solutions"
          description={s.summary}
        />
        <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.offerings.map((o, i) => (
            <div key={o.title} className="card card-hover reveal p-6 sm:p-7">
              <span className="font-display text-sm font-bold text-gradient">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-fg">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-16">
        <SectionHeading eyebrow="Our Process" title="How We" highlight="Deliver" />
        <ol className="relative mt-10 sm:mt-14 grid gap-5 md:grid-cols-2 lg:grid-flow-col lg:grid-cols-none lg:auto-cols-fr">
          {s.process.map((p, i) => (
            <li key={p.title} className="card reveal p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet to-cyan font-display text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-bold text-fg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Tools */}
      <section className="container-x py-16">
        <SectionHeading eyebrow="Tools & Technologies" title="Built With" highlight="Industry-Leading Tools" />
        <ul className="reveal mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {s.tools.map((t) => (
            <li key={t} className="glass rounded-full px-5 py-2.5 text-sm font-semibold text-fg">
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="container-x py-14 sm:py-20">
        <SectionHeading eyebrow="FAQ" title={`${s.shortTitle}`} highlight="FAQs" />
        <div className="mt-12">
          <FaqList faqs={s.faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="container-x py-12">
        <h2 className="reveal text-center text-2xl font-bold text-fg sm:text-3xl">
          Explore <span className="text-gradient">related services</span>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} href={`/services/${o.slug}`} className="card card-hover reveal group flex items-center gap-4 p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet/10 text-violet dark:text-cyan-light">
                <o.icon className="h-6 w-6" />
              </span>
              <span className="flex-1">
                <span className="block font-bold text-fg">{o.shortTitle}</span>
                <span className="line-clamp-1 text-sm text-muted">{o.tagline}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:text-fg" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={`Let's talk about your ${s.shortTitle} project`} />
    </>
  );
}
