import { Fragment } from "react";

import { copy, wedding, type WeddingProgramItem } from "@/content/invitation";
import { cn } from "@/lib/cn";
import { mapsUrl } from "@/lib/maps";

import { EventIcon, MapPinIcon } from "../icons";
import { PhotoCard, Reveal, SectionTitle } from "../primitives";

export function ScheduleSection() {
  const items = wedding.program;

  return (
    <section aria-labelledby="schedule-title" className="px-6 py-16">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <SectionTitle id="schedule-title">{copy.schedule.title}</SectionTitle>
        </Reveal>

        <ol className="mt-14">
          {items.map((item, index) => (
            <Fragment key={item.time}>
              {index > 0 && <ArrowDown />}
              <li>
                <Reveal delay={150}>
                  <ScheduleItem item={item} tilt={index % 2 === 0 ? "left" : "right"} />
                </Reveal>
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ScheduleItem({ item, tilt }: { item: WeddingProgramItem; tilt: "left" | "right" }) {
  return (
    <article className="flex flex-col items-center text-ink">
      <EventIcon
        kind={item.kind}
        className={cn("text-gold-deep", item.kind === "ceremony" ? "size-14" : "size-12")}
      />
      <time
        dateTime={`${wedding.date.iso}T${item.time}`}
        className="mt-5 font-display text-3xl lining-nums sm:text-4xl"
      >
        {item.time}
      </time>
      <h3 className="mt-3 text-sm tracking-wide text-ink sm:text-base">{item.title}</h3>
      <p className="mt-1 text-sm tracking-wide text-ink-soft">{item.venue.name}</p>
      {item.photo && (
        <PhotoCard
          photo={item.photo}
          sizes="15rem"
          className={cn("mt-7 w-full max-w-60", tilt === "left" ? "-rotate-2" : "rotate-2")}
        />
      )}
      <a
        href={mapsUrl(item.venue)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-xs tracking-[0.2em] text-ink-soft uppercase transition-all hover:border-gold hover:bg-white/60 hover:text-ink focus-visible:outline-gold sm:text-sm"
      >
        <MapPinIcon width={14} height={14} />
        {copy.schedule.mapLabel}
        <span className="sr-only">
          {" "}
          — {item.venue.name}, {item.venue.address}
        </span>
      </a>
    </article>
  );
}

function ArrowDown() {
  return (
    <li aria-hidden="true" className="my-10 flex justify-center">
      <svg width="16" height="34" viewBox="0 0 16 34" className="text-gold/70">
        <line x1="8" y1="0" x2="8" y2="26" stroke="currentColor" strokeWidth={1} />
        <path d="M8 32 3 24h10Z" fill="currentColor" />
      </svg>
    </li>
  );
}
