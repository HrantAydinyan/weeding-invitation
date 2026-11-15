import { copy, wedding } from "@/content/invitation";

import { Countdown } from "../countdown";
import { Reveal, SectionTitle } from "../primitives";

export function CountdownSection() {
  const { title, units, done } = copy.countdown;

  return (
    <section aria-labelledby="countdown-title" className="px-6 py-16">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <SectionTitle id="countdown-title">{title}</SectionTitle>
        </Reveal>
        <Reveal delay={150} className="mt-12">
          <Countdown target={wedding.date.startsAt} units={units} doneLabel={done} />
        </Reveal>
      </div>
    </section>
  );
}
