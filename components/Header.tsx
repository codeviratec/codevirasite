"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { nav } from "@/lib/site";
import { services } from "@/lib/services";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? "border-b border-line bg-bg"
          : scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo id="hdr" />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition hover:text-fg ${
                    isActive(item.href) ? "text-fg" : "text-muted"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute top-full left-1/2 w-[640px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-surface-solid p-3 shadow-2xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-violet/10"
                      >
                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet/20 to-cyan/20 text-violet dark:text-cyan-light">
                          <s.icon className="h-[18px] w-[18px]" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-fg">{s.shortTitle}</span>
                          <span className="line-clamp-1 text-xs text-muted">{s.tagline}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition hover:text-fg ${
                  isActive(item.href) ? "text-fg" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary !gap-1.5 !px-3 !py-2 !text-xs whitespace-nowrap sm:!gap-2 sm:!px-6 sm:!py-2.5 sm:!text-sm">
            <span className="sm:hidden">Get Quote</span>
            <span className="hidden sm:inline">Get a Free Quote</span>
            <ArrowRight className="hidden h-4 w-4 sm:block" />
          </Link>
          <button
            type="button"
            className="glass inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>

      {/* Kept outside <header>: its backdrop-filter would otherwise trap this fixed panel inside the 72px bar. */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto overscroll-contain bg-bg transition-all duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-4 py-3 text-lg font-semibold ${isActive(item.href) ? "bg-violet/10 text-fg" : "text-muted"}`}
            >
              {item.label}
            </Link>
          ))}
          <p className="mt-4 px-4 text-xs font-semibold tracking-widest text-muted uppercase">Services</p>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-muted hover:text-fg">
                <s.icon className="h-4 w-4 text-violet dark:text-cyan-light" />
                {s.shortTitle}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-6">
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </>
  );
}
