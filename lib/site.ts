export const site = {
  name: "CodeVira",
  legalName: "CodeVira",
  url: "https://codevira.uk",
  tagline: "Engineering Digital Growth",
  description:
    "CodeVira is a full-service software and digital growth agency offering mobile app development, game development, web design and development, SEO, ASO, digital marketing, QA testing, Amazon e-commerce and AI solutions for businesses worldwide.",
  foundingYear: 2024,
  email: "bashirrimsha34@gmail.com",
  phone: "03276966233",
  phoneIntl: "+923276966233",
  phoneDisplay: "+92 327 6966233",
  whatsapp: "https://wa.me/923276966233",
  address: {
    street: "Ahmadpur Sial",
    locality: "Ahmadpur Sial",
    region: "Punjab",
    district: "Jhang",
    country: "Pakistan",
    countryCode: "PK",
    postalCode: "35090",
    full: "Ahmadpur Sial, Jhang, Punjab, Pakistan",
  },
  geo: { lat: 30.6778, lng: 71.7444 },
  hours: "Mon–Sat, 9:00 AM – 7:00 PM (PKT)",
  // Web3Forms access key for the contact form. It is a public key by design (it is sent from
  // the browser and only lets the form deliver mail to our inbox), so it is safe to commit.
  web3formsKey: "825a3c99-0c77-400b-a3e9-42262acfdbb6",
  keywords: [
    "CodeVira",
    "software house in Pakistan",
    "app development company",
    "mobile app development",
    "game development studio",
    "web development agency",
    "SEO services",
    "app store optimization",
    "digital marketing agency",
    "QA testing services",
    "Amazon FBA services",
    "AI development services",
    "software company Jhang",
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;
