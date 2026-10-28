import { PageHero } from "./ui";
import { JsonLd, breadcrumbSchema } from "./JsonLd";

export const LEGAL_UPDATED = "October 27, 2026";

export function LegalPage({
  title,
  path,
  intro,
  children,
}: {
  title: string;
  path: string;
  intro: string;
  children: React.ReactNode;
}) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: title, href: path },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow="Legal" title={title} description={intro} crumbs={crumbs} />
      <section className="container-x pb-8">
        <article className="card prose-legal mx-auto max-w-4xl p-6 sm:p-12">
          <p className="!mb-8 text-sm">
            <strong className="text-fg">Last updated:</strong> {LEGAL_UPDATED}
          </p>
          {children}
        </article>
      </section>
    </>
  );
}
