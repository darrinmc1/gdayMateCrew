import { INSTAGRAM } from "@/lib/crew";
export default function Merch() {
  return (
    <section aria-labelledby="merch" className="mx-auto mt-20 max-w-6xl px-4">
      <div className="relative overflow-hidden rounded-2xl bg-hivis p-8 sm:p-12">
        <div className="tape absolute inset-x-0 top-0 h-3" aria-hidden />
        <p className="text-xs font-bold uppercase tracking-widest">Etsy shop pending</p>
        <h2 id="merch" className="font-display mt-2 text-3xl sm:text-4xl">Merch coming soon</h2>
        <p className="mt-3 max-w-xl">Shirts and stickers are still on the truck. Follow along and you&apos;ll hear first.</p>
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-site px-6 py-3 font-bold text-hivis transition hover:bg-black">Follow @gdaymatecrew</a>
      </div>
    </section>
  );
}
