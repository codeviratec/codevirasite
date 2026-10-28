import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Read CodeVira's Privacy Policy to understand how we collect, use, store and protect your personal information when you use our website and services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      intro="Your privacy matters to us. This policy explains what information we collect, why we collect it and how we keep it safe."
    >
      <p>
        This Privacy Policy describes how {site.name} (&quot;{site.name}&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;),
        located in {site.address.full}, collects, uses and protects information when you visit{" "}
        <Link href="/">{site.url.replace("https://", "")}</Link> (the &quot;Website&quot;) or engage us for our services. By using
        the Website, you agree to the practices described in this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>a) Information you provide to us</h3>
      <ul>
        <li>Contact details such as your name, email address, phone or WhatsApp number and company name.</li>
        <li>Project information you share through our contact form, email, WhatsApp, or calls — such as your requirements, budget and timelines.</li>
        <li>Account credentials or access you voluntarily provide to let us perform services (for example, app store, Amazon Seller Central, hosting or analytics access).</li>
        <li>Billing information needed to issue invoices and process payments.</li>
      </ul>
      <h3>b) Information collected automatically</h3>
      <ul>
        <li>Technical data such as IP address, browser type, device type, operating system and referring pages.</li>
        <li>Usage data such as pages visited, time spent on pages and links clicked, collected through cookies and similar technologies.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to your enquiries and provide quotes or consultations.</li>
        <li>To plan, deliver, support and improve the services you request.</li>
        <li>To communicate with you about projects, invoices, updates and support.</li>
        <li>To analyse Website traffic and improve our content, performance and user experience.</li>
        <li>To protect the Website against spam, fraud and security threats.</li>
        <li>To comply with applicable legal, tax and regulatory obligations.</li>
      </ul>
      <p>We do not sell, rent or trade your personal information to third parties.</p>

      <h2>3. Cookies & Analytics</h2>
      <p>
        Our Website may use essential cookies (for example, to remember your light or dark theme preference) and analytics tools
        such as Google Analytics to understand how visitors use the Website. These tools may collect anonymised usage data. You
        can control or disable cookies through your browser settings; however, some features of the Website may not function
        properly without them.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>We use trusted third-party providers to operate our Website and services, including:</p>
      <ul>
        <li><strong>Web3Forms</strong> — to securely deliver messages submitted through our contact form to our email inbox.</li>
        <li><strong>Google services</strong> (such as Google Maps, Analytics and Search Console) — for maps, traffic analysis and search performance.</li>
        <li><strong>WhatsApp</strong> — when you choose to contact us via WhatsApp, your communication is subject to WhatsApp&apos;s privacy policy.</li>
        <li><strong>Hosting and cloud providers</strong> — to host the Website and project files securely.</li>
      </ul>
      <p>
        These providers process data only as needed to provide their services and are governed by their own privacy policies.
      </p>

      <h2>5. Client Data & Confidentiality</h2>
      <p>
        Any business information, source code, credentials, product data or customer data you share with us during a project is
        treated as strictly confidential. It is accessed only by team members who need it to perform the work and is never
        disclosed to third parties without your permission. We are happy to sign a Non-Disclosure Agreement (NDA) on request.
        Access credentials should be revoked or changed by you after project completion.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfil the purposes described in this policy, including
        maintaining business records and meeting legal, accounting or reporting requirements. Enquiries that do not lead to a
        project are generally deleted within 24 months.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We use reasonable administrative, technical and organisational safeguards — including HTTPS encryption, access controls
        and secure storage — to protect your information. However, no method of transmission over the internet or electronic
        storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>8. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Request correction of inaccurate or incomplete information.</li>
        <li>Request deletion of your personal information.</li>
        <li>Object to or restrict certain processing, or withdraw consent at any time.</li>
        <li>Opt out of marketing communications.</li>
      </ul>
      <p>
        To exercise any of these rights, email us at <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond within
        a reasonable timeframe and in accordance with applicable law.
      </p>

      <h2>9. International Clients</h2>
      <p>
        We are based in Pakistan and serve clients worldwide. By contacting us or using our services, you understand that your
        information may be processed in Pakistan and in countries where our service providers operate. We take steps to ensure
        your data remains protected wherever it is processed.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our Website and services are not directed at children under 13, and we do not knowingly collect personal information from
        children. If you believe a child has provided us with personal data, please contact us and we will delete it.
      </p>

      <h2>11. External Links</h2>
      <p>
        The Website may contain links to third-party websites. We are not responsible for the privacy practices or content of
        those websites and encourage you to review their privacy policies.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes take effect when posted on this page with an updated
        &quot;Last updated&quot; date. We encourage you to review this page periodically.
      </p>

      <h2>13. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
      <ul>
        <li><strong>Company:</strong> {site.name}</li>
        <li><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
        <li><strong>Phone / WhatsApp:</strong> <a href={`tel:${site.phoneIntl}`}>{site.phoneDisplay}</a></li>
        <li><strong>Address:</strong> {site.address.full}</li>
      </ul>
    </LegalPage>
  );
}
