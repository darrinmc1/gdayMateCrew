import Image from "next/image";
import Link from "next/link";
import { brand, heroLine, homeAbout, lockedEight, tagline } from "@/lib/canon";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-border bg-steel">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-14 md:grid-cols-[220px_1fr] md:px-6 md:py-20">
          <Image
            src="/logo.jpg"
            alt="Official yellow diamond mark. Four tradies. Hard hats."
            width={220}
            height={220}
            className="mx-auto h-auto w-48 object-contain md:w-full"
            priority
          />
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-hivis sm:text-4xl md:text-5xl">
              {brand}
            </h1>
            <p className="mt-3 text-xl font-semibold text-dust md:text-2xl">{tagline}</p>
            <p className="mt-4 text-lg text-dust-dim">{heroLine}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-hivis">About</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-dust">{homeAbout}</p>
      </section>

      <section className="border-t border-border bg-steel">
        <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-hivis">Featured eight</h2>
              <p className="mt-2 text-sm text-dust-dim">Portraits locked. One line each.</p>
            </div>
            <Link href="/crew" className="text-sm font-semibold text-hivis hover:underline">
              Full crew
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {lockedEight.map((mate) => (
              <li key={mate.slug} className="flex gap-4 rounded-lg border border-border bg-site p-4">
                <Image
                  src={mate.portrait}
                  alt={`${mate.name}, ${mate.species}`}
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 rounded-md object-cover"
                />
                <div>
                  <p className="font-bold text-hivis">{mate.name}</p>
                  <p className="text-sm text-dust-dim">
                    {mate.species}, {mate.homeTrade}.
                  </p>
                  <p className="mt-2 text-sm leading-snug">{mate.homeLine}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
