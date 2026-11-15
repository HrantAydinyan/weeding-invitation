import type { Venue } from "@/content/types";

/** Google Maps search link for a venue (opens the app on phones). */
export function mapsUrl(venue: Venue): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.mapsQuery)}`;
}
