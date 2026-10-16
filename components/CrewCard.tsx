import Image from "next/image";
import type { Member } from "@/lib/crew";
export function PortraitCard({ m, compact }: { m: Member; compact?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-2xl border-2 border-site bg-white shadow-[6px_6px_0_0_#16130f] transition hover:-translate-y-1">
      <div className="relative aspect-square bg-hivis">
        <Image src={`/crew/${m.img}`} alt={`${m.title}, a ${m.animal.toLowerCase()} ${m.trade}, in hard hat on site`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-site px-3 py-1 text-xs font-bold uppercase tracking-wide text-hivis">{m.trade}</span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg">{compact ? m.name : m.title}</h3>
        <p className="text-xs font-bold uppercase tracking-wide text-rust">{m.animal}</p>
        <p className="mt-2 text-sm">{compact ? m.short : m.bio}</p>
        {!compact && <p className="mt-3 border-l-4 border-hivis pl-3 text-sm font-bold italic">&ldquo;{m.line}&rdquo;</p>}
      </div>
    </article>
  );
}
export function TextCard({ m }: { m: Member }) {
  return (
    <article className="rounded-xl border-2 border-dashed border-site/40 bg-white p-4">
      <h3 className="font-display">{m.title}</h3>
      <p className="text-xs font-bold uppercase tracking-wide text-rust">{m.animal} · {m.trade}</p>
      <p className="mt-2 text-sm">{m.bio}</p>
    </article>
  );
}
