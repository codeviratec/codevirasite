import Link from "next/link";

export function LogoMark({ className = "h-9 w-9", id = "lm" }: { className?: string; id?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7C3AED" />
          <stop offset="0.55" stopColor="#4F46E5" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id={`${id}-s`} x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" />
          <stop offset=".5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id}-g)`} />
      <rect width="64" height="64" rx="16" fill={`url(#${id}-s)`} />
      <path d="M14 23 9 32l5 9M50 23l5 9-5 9" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 18l12 28 12-28" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="44" cy="18" r="4.5" fill="#A5F3FC" />
    </svg>
  );
}

export function Logo({ id = "logo" }: { id?: string }) {
  return (
    <Link href="/" aria-label="CodeVira home" className="group inline-flex shrink-0 items-center gap-2 sm:gap-2.5">
      <LogoMark id={id} className="h-8 w-8 transition-transform duration-500 group-hover:rotate-[8deg] sm:h-9 sm:w-9" />
      <span className="font-display text-lg font-extrabold tracking-tight text-fg sm:text-xl">
        Code<span className="text-gradient">Vira</span>
      </span>
    </Link>
  );
}
