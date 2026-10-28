import type { NextConfig } from "next";

// Set PAGES_BASE_PATH=/codevirasite when serving from username.github.io/codevirasite.
// Leave it empty once the custom domain (codevira.uk) is connected.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
