import Image from "next/image";
import Link from "next/link";
import { locked } from "@/lib/crew";
import { PortraitCard } from "@/components/CrewCard";
import Merch from "@/components/Merch";
export default function Home() {
  return (
    <>
      <section className="bg-site text-dust">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
          <div>
            <p className="inline-block rounded-full bg-hivis px-3 py-1 text-xs font-bold uppercase tracking-widest text-site">Job Site Comedy</p>
            <h1 className="font-display mt-5 text-4xl leading-[1.05] sm:text-6xl">The G&apos;Day Mate Construction Crew</h1>
            <p className="mt-5 text-xl text-dust/85">Aussie animal tradies on the tools.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/crew" className="rounded-full bg-hivis px-6 py-3 font-bold text-site transition hover:bg-hivis-dark">Meet the crew</Link>
              <Link href="/about" className="rounded-full border-2 border-dust/40 px-6 py-3 font-bold transition hover:border-hivis hover:text-hivis">What this is</Link>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-sm grid-cols-2 gap-3">
            {locked.slice(0, 4).map((m, i) => (
              <div key={m.name} className={`relative aspect-square overflow-hidden rounded-2xl border-4 border-hivis ${i % 2 ? "translate-y-6" : ""}`}>
                <Image src={`/crew/${m.img}`} alt={`${m.title}, ${m.animal.toLowerCase()} ${m.trade}`} fill sizes="200px" className="object-cover" priority />
              </div>
            ))}
          </div>
        </div>
        <div className="tape h-3" aria-hidden />
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-display text-3xl">Skits from the site.</h2>
        <p className="mt-4 text-lg">Not a safety briefing. Twenty-seven in the crew. Eight have portraits. The rest are on site as text.</p>
      </section>

      <section aria-labelledby="featured" className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 id="featured" className="font-display text-3xl">The featured eight</h2>
          <Link href="/crew" className="font-bold text-rust underline-offset-4 hover:underline">All 27 →</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locked.map((m) => <PortraitCard key={m.name} m={m} compact />)}
        </div>
      </section>
      <Merch />
    </>
  );
}
