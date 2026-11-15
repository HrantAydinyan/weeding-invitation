import { useId, type JSX, type SVGProps } from "react";

import type { EventKind } from "@/content/types";

type IconProps = SVGProps<SVGSVGElement>;

const lineProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Heart with a warm gold gradient — the design's signature ornament. */
export function GoldHeart(props: IconProps) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c98a" />
          <stop offset="50%" stopColor="#c9a25c" />
          <stop offset="100%" stopColor="#a67f3c" />
        </linearGradient>
      </defs>
      <path
        d="M12 21s-7.2-4.35-9.6-9.15C.9 8.4 2.7 4.8 6.15 4.8c2.05 0 3.5 1.05 4.35 2.55h1.5c.85-1.5 2.3-2.55 4.35-2.55 3.45 0 5.25 3.6 3.75 7.05C19.2 16.65 12 21 12 21z"
        fill={`url(#${gradientId})`}
        stroke="#a67f3c"
        strokeWidth={0.4}
      />
    </svg>
  );
}

export function ChurchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" {...lineProps} {...props}>
      <path d="M24 4v8M20 8h8" />
      <path d="M24 12 14 22v22h20V22Z" />
      <path d="M20 44V32h8v12" />
      <path d="M24 22v6M21 25h6" />
    </svg>
  );
}

export function RingsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" {...lineProps} {...props}>
      <circle cx="19" cy="30" r="10" />
      <circle cx="30" cy="30" r="10" />
      <path d="m15 20 4-6h4l-4 6" />
    </svg>
  );
}

export function ToastIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" {...lineProps} {...props}>
      <g transform="rotate(14 20 12)">
        <path d="M15 12h10l-1.2 13q-3.8 4-7.6 0Z" />
        <path d="M20 28v12M16 40h8" />
      </g>
      <g transform="rotate(-14 28 12)">
        <path d="M23 12h10l-1.2 13q-3.8 4-7.6 0Z" />
        <path d="M28 28v12M24 40h8" />
      </g>
      <path d="M24 3v4M19 5l1.6 2.6M29 5l-1.6 2.6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const eventIcons = {
  church: ChurchIcon,
  ceremony: RingsIcon,
  celebration: ToastIcon,
} satisfies Record<EventKind, (props: IconProps) => JSX.Element>;

export function EventIcon({ kind, ...props }: IconProps & { kind: EventKind }) {
  const Icon = eventIcons[kind];
  return <Icon {...props} />;
}
