"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-sm text-fg placeholder:text-muted/70 outline-none transition focus:border-violet focus:ring-4 focus:ring-violet/15";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || site.web3formsKey;
    if (!key) {
      setStatus("error");
      setMessage(`The form is not configured yet. Please email us at ${site.email} or message us on WhatsApp.`);
      return;
    }
    data.append("access_key", key);
    data.append("subject", `New enquiry from ${data.get("name")} – CodeVira website`);
    data.append("from_name", "CodeVira Website");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setMessage("Thank you! Your message has been sent. We'll get back to you within 24 hours.");
        form.reset();
      } else {
        throw new Error(json.message);
      }
    } catch {
      setStatus("error");
      setMessage(`Something went wrong. Please try again or email us directly at ${site.email}.`);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg">Full name *</label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg">Email address *</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-fg">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+92 300 0000000" className={field} />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-fg">Service *</label>
          <select id="service" name="service" required defaultValue="" className={field}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-fg">Estimated budget</label>
        <select id="budget" name="budget" defaultValue="" className={field}>
          <option value="">Prefer not to say</option>
          <option>Under $500</option>
          <option>$500 – $2,000</option>
          <option>$2,000 – $5,000</option>
          <option>$5,000 – $15,000</option>
          <option>$15,000+</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-fg">Project details *</label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project, goals and timeline..." className={field} />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70 sm:w-auto">
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>

      {(status === "success" || status === "error") && (
        <p
          role="status"
          className={`flex items-start gap-2 rounded-xl border p-4 text-sm ${
            status === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
              : "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300"
          }`}
        >
          {status === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />}
          {message}
        </p>
      )}
      <p className="text-xs text-muted">
        By submitting this form you agree to our <a href="/privacy-policy" className="underline hover:text-fg">Privacy Policy</a>.
      </p>
    </form>
  );
}
