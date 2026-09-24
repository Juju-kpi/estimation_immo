/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation images activée (WebP/AVIF auto)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
  },

  // Headers de performance et sécurité
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Sécurité
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Performance
          { key: "Vary", value: "Accept-Encoding" },
        ],
      },
      // Cache long sur les assets statiques
      {
        source: "/(.*)\\.(png|jpg|jpeg|webp|avif|ico|svg|woff2|woff)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Redirections 301 (pages fusionnées — évite la cannibalisation SEO)
  async redirects() {
    return [
      { source: "/presentation", destination: "/agence-immobiliere-paris", permanent: true },
    ];
  },

  // Compression activée
  compress: true,

  // Pas de powered-by header
  poweredByHeader: false,

  // Bundle analyzer (décommenter pour analyser)
  // experimental: { bundleAnalyzer: true },
};

module.exports = nextConfig;