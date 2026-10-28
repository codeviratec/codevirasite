import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const company = [
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export function Footer() {
  return (
    <footer className="relative mt-12 border-t sm:mt-24 border-line bg-bg-soft/60">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/60 to-transparent" />
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="col-span-2 md:col-span-1 lg:col-span-4">
          <Logo id="ftr" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            CodeVira is a software and digital growth agency helping startups and businesses build apps, games, websites and
            AI solutions — and grow them with SEO, ASO and performance marketing.
          </p>
        </div>

        <nav aria-label="Services" className="col-span-2 sm:col-span-1 lg:col-span-3">
          <h2 className="text-sm font-semibold tracking-wider text-fg uppercase">Services</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-muted transition hover:text-fg">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="col-span-2 sm:col-span-1 lg:col-span-2">
          <h2 className="text-sm font-semibold tracking-wider text-fg uppercase">Company</h2>
          <ul className="mt-5 space-y-3">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted transition hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 md:col-span-1 lg:col-span-3">
          <h2 className="text-sm font-semibold tracking-wider text-fg uppercase">Get in Touch</h2>
          <address className="mt-5 space-y-4 text-sm not-italic">
            <a href={`tel:${site.phoneIntl}`} className="flex items-start gap-3 text-muted transition hover:text-fg">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-violet dark:text-cyan-light" /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-start gap-3 break-all text-muted transition hover:text-fg">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-violet dark:text-cyan-light" /> {site.email}
            </a>
            <p className="flex items-start gap-3 text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet dark:text-cyan-light" /> {site.address.full}
            </p>
            <p className="flex items-start gap-3 text-muted">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-violet dark:text-cyan-light" /> {site.hours}
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 pt-6 pb-24 text-xs text-muted sm:flex-row sm:pb-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy" className="hover:text-fg">Privacy</Link>
            <span className="mx-2">·</span>
            <Link href="/terms-and-conditions" className="hover:text-fg">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
