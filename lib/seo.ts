import type { Metadata } from "next";
import { site } from "./site";

export const ogImage = { url: "/og-image.png", width: 1200, height: 630, alt: `${site.name} – ${site.tagline}` };

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...keywords, ...site.keywords.slice(0, 4)],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [ogImage.url],
    },
  };
}
