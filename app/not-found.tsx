import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Glow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <Glow className="top-1/3 left-1/2 h-[360px] w-[560px] -translate-x-1/2 bg-violet/30" />
      <div className="container-x text-center">
        <p className="font-display text-8xl font-extrabold text-gradient sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-fg sm:text-4xl">This page drifted into another dimension</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">The page you are looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <Link href="/services" className="btn-ghost">Explore Services</Link>
        </div>
      </div>
    </section>
  );
}
