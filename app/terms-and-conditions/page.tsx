import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions governing the use of the CodeVira website and our software development, marketing, QA, e-commerce and AI services.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms-and-conditions"
      intro="Please read these terms carefully. They govern your use of our website and the services we provide."
    >
      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the {site.name} website at{" "}
        <Link href="/">{site.url.replace("https://", "")}</Link> (the &quot;Website&quot;) and any services provided by{" "}
        {site.name} (&quot;{site.name}&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;). By using the Website or engaging our
        services, you (&quot;Client&quot; or &quot;you&quot;) agree to these Terms. If you do not agree, please do not use the
        Website or our services.
      </p>

      <h2>1. Our Services</h2>
      <p>
        {site.name} provides mobile app development, game development, web development and design, search engine optimisation
        (SEO), app store optimisation (ASO), digital marketing, quality assurance and software testing, Amazon and e-commerce
        services, AI solutions and related consulting (the &quot;Services&quot;). The exact scope, deliverables, timeline and fees for
        each engagement are defined in a written proposal, quotation, statement of work or agreement (the &quot;Agreement&quot;).
        Where the Agreement conflicts with these Terms, the Agreement prevails.
      </p>

      <h2>2. Use of the Website</h2>
      <ul>
        <li>You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of others.</li>
        <li>You must not attempt to gain unauthorised access to, disrupt or damage the Website or its servers.</li>
        <li>You must not submit false, misleading, abusive or spam content through our forms.</li>
      </ul>

      <h2>3. Quotes & Project Scope</h2>
      <p>
        Quotes are based on the information you provide and are valid for 30 days unless stated otherwise. Requests that fall
        outside the agreed scope (&quot;change requests&quot;) may affect cost and timelines and will be quoted separately before
        work begins.
      </p>

      <h2>4. Payments</h2>
      <ul>
        <li>Unless otherwise agreed, projects require an advance payment before work begins, with remaining payments due at agreed milestones.</li>
        <li>Monthly services such as SEO, marketing, ASO, account management and maintenance are billed in advance for each period.</li>
        <li>Invoices are payable within the period stated on the invoice. Late payments may result in work being paused.</li>
        <li>Advertising spend (for example, Google, Meta or Amazon ads) is paid directly by the Client to the platform and is separate from our fees.</li>
        <li>Prices are exclusive of any applicable taxes, payment gateway or bank transfer charges unless stated otherwise.</li>
      </ul>

      <h2>5. Client Responsibilities</h2>
      <ul>
        <li>Provide accurate information, content, feedback, approvals and access in a timely manner.</li>
        <li>Ensure that any materials you provide (text, images, logos, data) do not infringe third-party rights.</li>
        <li>Maintain ownership of and responsibility for your third-party accounts (app stores, hosting, domain, Amazon, ad accounts) and comply with their policies.</li>
      </ul>
      <p>Delays in client feedback or materials may extend project timelines accordingly.</p>

      <h2>6. Intellectual Property</h2>
      <p>
        Upon receipt of full payment, the Client owns the final deliverables created specifically for the project, including
        custom source code and designs. {site.name} retains ownership of its pre-existing tools, libraries, frameworks and
        know-how, and grants the Client a perpetual, non-exclusive licence to use any such components included in the
        deliverables. Third-party and open-source components remain subject to their respective licences. Unless the Client
        requests otherwise in writing, we may reference the project in our portfolio without disclosing confidential
        information.
      </p>

      <h2>7. Confidentiality</h2>
      <p>
        Both parties agree to keep confidential any non-public business, technical or financial information received from the
        other party, and to use it only for the purpose of the engagement. We are happy to sign a separate Non-Disclosure
        Agreement on request.
      </p>

      <h2>8. Results & Third-Party Platforms</h2>
      <p>
        SEO, ASO, marketing and e-commerce outcomes depend on factors outside our control, including search engine and app store
        algorithms, marketplace policies, competition and market conditions. While we apply proven best practices, we do not
        guarantee specific rankings, downloads, sales, revenue or approval by third-party platforms such as Google, Apple or
        Amazon. Suspensions or policy actions taken by those platforms are not the responsibility of {site.name}.
      </p>

      <h2>9. Revisions, Testing & Acceptance</h2>
      <p>
        The number of design and development revisions is defined in the Agreement. Deliverables are considered accepted if no
        material issues are reported within 7 days of delivery. Bugs that fall within the original scope and are reported
        during the agreed support period will be fixed free of charge.
      </p>

      <h2>10. Refunds & Cancellation</h2>
      <p>
        Either party may cancel an engagement with written notice. The Client is responsible for payment for all work completed
        up to the date of cancellation. Advance payments covering work already performed are non-refundable. Any refund for
        unused, pre-paid work will be assessed fairly on a case-by-case basis.
      </p>

      <h2>11. Warranties & Limitation of Liability</h2>
      <p>
        The Website and its content are provided &quot;as is&quot; for general information. To the maximum extent permitted by law,{" "}
        {site.name} shall not be liable for any indirect, incidental, special or consequential damages, including loss of
        profits, data or business opportunities. Our total liability for any claim relating to the Services is limited to the
        amount paid by the Client for the specific Service giving rise to the claim.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold {site.name} harmless from any claims, damages or expenses arising from content or
        materials you provide, your use of the deliverables, or your breach of these Terms.
      </p>

      <h2>13. Third-Party Links</h2>
      <p>
        The Website may contain links to third-party websites or services. We are not responsible for their content, policies or
        practices.
      </p>

      <h2>14. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute shall first be resolved through good
        faith negotiation, and if unresolved, shall be subject to the exclusive jurisdiction of the competent courts of Punjab,
        Pakistan.
      </p>

      <h2>15. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The updated version will be posted on this page with a revised &quot;Last
        updated&quot; date. Continued use of the Website or Services after changes constitutes acceptance of the updated Terms.
      </p>

      <h2>16. Contact Us</h2>
      <ul>
        <li><strong>Company:</strong> {site.name}</li>
        <li><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
        <li><strong>Phone / WhatsApp:</strong> <a href={`tel:${site.phoneIntl}`}>{site.phoneDisplay}</a></li>
        <li><strong>Address:</strong> {site.address.full}</li>
      </ul>
      <p>
        Please also review our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
