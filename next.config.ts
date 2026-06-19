import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TRUCO SEOTÉCNICO: Evita que Vercel le ponga una barra "/" al final a tu sitemap.xml
  trailingSlash: false,
};

export default nextConfig;
