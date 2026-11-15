import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    // The invitation is photo-heavy: serve AVIF first, WebP as fallback.
    formats: ["image/avif", "image/webp"],
  },
  // The invitation used to live at /new — keep links that were already shared working.
  async redirects() {
    return [{ source: "/new", destination: "/", permanent: false }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
