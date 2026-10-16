import Link from "next/link";
import { INSTAGRAM } from "@/lib/crew";
export default function Footer() {
  return (
    <footer className="mt-24 bg-site text-dust">
      <div className="tape h-2" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div><p className="font-display text-lg">The G&apos;Day Mate Construction Crew</p><p className="text-hivis font-bold">Job Site Comedy</p></div>
        <ul className="space-y-1 text-sm">
          {[["/about","About"],["/crew","The crew"],["/contact","Contact"]].map(([h,l])=>(<li key={h}><Link className="hover:text-hivis underline-offset-4 hover:underline" href={h}>{l}</Link></li>))}
        </ul>
        <div className="text-sm space-y-1">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-bold text-hivis hover:underline">@gdaymatecrew on Instagram</a>
          <p className="text-dust/70">gdaymatecrew.com</p>
          <p className="text-dust/70">Comedy. Not a real construction company.</p>
        </div>
      </div>
    </footer>
  );
}
