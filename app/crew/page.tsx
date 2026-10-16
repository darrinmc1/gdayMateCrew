import { locked, bible } from "@/lib/crew";
import { PortraitCard, TextCard } from "@/components/CrewCard";
export const metadata = { title: "The crew" };
export default function Crew() {
  return (
    <>
      <section className="bg-site text-dust">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="font-display text-4xl sm:text-5xl">The crew</h1>
          <p className="mt-3 text-lg text-dust/85">Twenty-seven on the roster. Eight with portraits. Nineteen more on site.</p>
        </div>
        <div className="tape h-3" aria-hidden />
      </section>
      <section aria-labelledby="eight" className="mx-auto max-w-6xl px-4 pt-14">
        <h2 id="eight" className="font-display text-3xl">The locked eight</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{locked.map((m) => <PortraitCard key={m.name} m={m} />)}</div>
      </section>
      <section aria-labelledby="more" className="mx-auto max-w-6xl px-4 pt-20">
        <h2 id="more" className="font-display text-3xl">More on site</h2>
        <p className="mt-2 text-site/75">Nineteen more. Names and jobs. No portraits yet.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{bible.map((m) => <TextCard key={m.title} m={m} />)}</div>
      </section>
    </>
  );
}
