import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd, breadcrumbSchema, orgId } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Contact Us – Get a Free Project Consultation",
  description: `Contact CodeVira for app, game, web development, SEO, marketing, QA, Amazon or AI services. Call ${site.phoneDisplay}, email ${site.email} or visit us in ${site.address.full}.`,
  path: "/contact",
  keywords: ["contact CodeVira", "hire app developers", "get a quote software development", "software house Jhang contact"],
});

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

const cards = [
  { icon: Phone, label: "Call us", value: site.phoneDisplay, href: `tel:${site.phoneIntl}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: site.whatsapp },
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Visit us", value: site.address.full, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}` },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact CodeVira",
            url: `${site.url}/contact`,
            mainEntity: { "@id": orgId },
          },
        ]}
      />
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start Your"
        highlight="Next Project"
        description="Have an idea, a question or a project in mind? Send us a message — we reply within 24 hours with a free consultation."
        crumbs={crumbs}
      />

      <section className="container-x grid gap-8 pb-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="card card-hover reveal flex items-start gap-4 p-5"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-white">
                <c.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold tracking-wider text-muted uppercase">{c.label}</span>
                <span className="mt-1 block font-semibold break-words text-fg">{c.value}</span>
              </span>
            </a>
          ))}
          <div className="card reveal flex items-start gap-4 p-5">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet/10 text-violet dark:text-cyan-light">
              <Clock className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-wider text-muted uppercase">Business hours</span>
              <span className="mt-1 block font-semibold text-fg">{site.hours}</span>
              <span className="mt-1 block text-sm text-muted">We also schedule calls in your time zone.</span>
            </span>
          </div>
        </div>

        <div className="card reveal p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-fg sm:text-3xl">Send us a message</h2>
          <p className="mt-2 mb-8 text-muted">Fill in the form and our team will get back to you shortly.</p>
          <ContactForm />
        </div>
      </section>

      <section className="container-x pb-8">
        <div className="card reveal overflow-hidden p-2">
          <iframe
            title="CodeVira location – Ahmadpur Sial, Jhang, Punjab, Pakistan"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`}
            className="h-[360px] w-full rounded-xl border-0 dark:opacity-90 dark:[filter:invert(0.9)_hue-rotate(180deg)]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
