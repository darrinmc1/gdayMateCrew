import type { Metadata } from "next";
import Image from "next/image";
import { bibleOnly, lockedEight, rosterCount } from "@/lib/canon";

export const metadata: Metadata = {
  title: "Crew",
  description: "Twenty-seven on site. Eight have portraits. The rest are text.",
};

export default function CrewPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-hivis">The crew</h1>
      <p className="mt-3 max-w-2xl text-dust-dim">
        {rosterCount} on the tools. Locked eight first. Then the rest, as text.
      </p>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-hivis">Locked eight</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {lockedEight.map((mate) => (
            <li key={mate.slug} className="overflow-hidden rounded-lg border border-border bg-steel">
              <Image
                src={mate.portrait}
                alt={`${mate.name}, ${mate.species}, ${mate.trade}`}
                width={640}
                height={640}
                className="aspect-square w-full object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-bold text-hivis">{mate.name}</p>
                <p className="text-sm text-dust-dim">
                  {mate.species} · {mate.trade}
                </p>
                <p className="mt-2 text-sm">{mate.homeLine}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-border pt-10">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-hivis">More on site</h2>
        <p className="mt-3 text-sm text-dust-dim">Bible-only. Names. No portraits.</p>
        <ul className="mt-6 columns-2 gap-x-8 text-base sm:columns-3">
          {bibleOnly.map((name) => (
            <li key={name} className="mb-2 break-inside-avoid">
              {name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
