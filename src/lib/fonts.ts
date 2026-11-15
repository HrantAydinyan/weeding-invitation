import { Cormorant_Garamond, Inter, Noto_Sans_Armenian, Noto_Serif_Armenian } from "next/font/google";

/** Serif display face (names, headings, times) — Latin glyphs and numerals. */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

/** Armenian glyphs for the serif display stack (Cormorant has none). */
const notoSerifArmenian = Noto_Serif_Armenian({
  subsets: ["armenian"],
  variable: "--font-noto-serif-armenian",
  display: "swap",
});

/** Body text: Armenian. */
const notoSansArmenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  variable: "--font-noto-sans-armenian",
  display: "swap",
});

/** Body text: Latin glyphs and digits. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fontVariables = [cormorant, notoSerifArmenian, notoSansArmenian, inter]
  .map((font) => font.variable)
  .join(" ");
