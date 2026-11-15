/**
 * Absolute base URL used to resolve Open Graph image URLs.
 * Set NEXT_PUBLIC_SITE_URL in production (see .env.example).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
