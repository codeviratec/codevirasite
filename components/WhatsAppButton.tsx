import { site } from "@/lib/site";

export function WhatsAppButton() {
  const href = `${site.whatsapp}?text=${encodeURIComponent("Hi CodeVira, I'd like to discuss a project.")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CodeVira on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C8.9 3 3.1 8.78 3.1 15.9c0 2.27.6 4.5 1.73 6.46L3 29l6.82-1.78a12.9 12.9 0 0 0 6.21 1.58h.01c7.13 0 12.93-5.79 12.93-12.9A12.82 12.82 0 0 0 16.04 3Zm0 23.6h-.01a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-4.05 1.06 1.08-3.94-.25-.4a10.66 10.66 0 0 1-1.64-5.7c0-5.9 4.82-10.7 10.73-10.7a10.7 10.7 0 0 1 10.72 10.71c0 5.9-4.82 10.7-10.73 10.7Zm5.88-8.02c-.32-.16-1.91-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.22-.37.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.8-2.22-.18-.32-.01-.5.15-.65.14-.15.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-1-2.38-.26-.62-.52-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.21 2.26 3.44 5.47 4.83.77.33 1.36.52 1.83.67.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.54.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-lg bg-surface-solid px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-fg opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
