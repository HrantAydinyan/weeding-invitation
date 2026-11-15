import Image from "next/image";

import { copy, wedding } from "@/content/invitation";
import { cn } from "@/lib/cn";

import { CARD_SHADOW, Reveal } from "../primitives";

export function HeroSection() {
  const { groom, bride } = wedding.couple;
  const { iso, day, month, year } = wedding.date;
  const { illustration } = wedding.photos;
  const { eyebrow, lead, sublead } = copy.hero;

  return (
    <header className="px-6 pt-20 pb-16 sm:pt-28">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <p lang="en" className="text-[10px] tracking-[0.45em] text-gold-deep uppercase sm:text-xs">
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-8 font-display text-xl leading-relaxed text-balance text-ink-soft italic sm:text-2xl">
            {lead}
          </p>
          <p className="mt-2 font-display text-lg leading-relaxed text-balance text-ink-soft italic sm:text-xl">
            {sublead}
          </p>
        </Reveal>

        {/*
          The "letter" from the envelope: a watercolor card whose empty sky
          holds the names and date. Sized in container units so the text
          always lands in the same spot of the illustration.
        */}
        <Reveal delay={300} className="mt-12">
          <div
            className={cn(
              "@container relative mx-auto max-w-md overflow-hidden rounded-md ring-1 ring-gold/25",
              CARD_SHADOW,
            )}
          >
            <Image
              src={illustration.src}
              alt={illustration.alt}
              sizes="(min-width: 31rem) 28rem, calc(100vw - 3rem)"
              placeholder="blur"
              className="block h-auto w-full"
            />

            <div className="absolute inset-x-0 top-[26%] flex flex-col items-center">
              <h1 className="font-display text-[13cqi] leading-[1.05] tracking-tight text-ink">
                {groom}
                <span className="my-[1cqi] block text-[8cqi] font-light text-gold-deep italic">&amp;</span>
                {bride}
              </h1>
              <div className="mt-[4cqi] inline-flex items-center gap-[3cqi]">
                <span aria-hidden="true" className="h-px w-[9cqi] bg-gold/70" />
                <time dateTime={iso} className="text-[3.6cqi] tracking-[0.35em] text-ink-soft">
                  {day} · {month} · {year}
                </time>
                <span aria-hidden="true" className="h-px w-[9cqi] bg-gold/70" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
