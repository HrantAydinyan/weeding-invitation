import type { Metadata, Viewport } from "next";

import { copy, wedding } from "@/content/invitation";
import { fontVariables } from "@/lib/fonts";
import { siteUrl } from "@/lib/site";

import "./globals.css";

const { groom, bride } = wedding.couple;
const { day, month, year } = wedding.date;

const title = `${groom} և ${bride} · ${day}.${month}.${year}`;
const description = `${copy.hero.lead} — ${groom} և ${bride}, ${day}.${month}.${year}`;

// The link-preview image comes from ./opengraph-image.jpg.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: title,
  openGraph: {
    type: "website",
    locale: "hy_AM",
    title,
    description,
    siteName: `${groom} և ${bride}`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  // A private invitation: shareable by link, but kept out of search results.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f1",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hy" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
