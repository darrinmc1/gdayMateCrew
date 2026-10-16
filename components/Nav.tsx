"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [["/", "Home"], ["/about", "About"], ["/crew", "Crew"], ["/contact", "Contact"]];
export default function Nav() {
  const p = usePathname(); const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-site text-dust shadow-lg">
      <div className="tape h-1.5" aria-hidden />
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.jpg" alt="The G'Day Mate Construction Crew logo" width={44} height={44} className="rounded" priority />
          <span className="font-display text-sm leading-tight sm:text-base">G&apos;Day Mate<span className="block text-hivis text-xs tracking-widest uppercase">Job Site Comedy</span></span>
        </Link>
        <button className="rounded border border-dust/30 px-3 py-1.5 text-sm md:hidden" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>Menu</button>
        <ul id="menu" className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 bg-site px-4 pb-4 md:static md:flex md:flex-row md:p-0`}>
          {links.map(([h, l]) => (
            <li key={h}><Link href={h} onClick={() => setOpen(false)} aria-current={p === h ? "page" : undefined}
              className={`block rounded px-3 py-2 text-sm font-bold uppercase tracking-wide transition ${p === h ? "bg-hivis text-site" : "hover:bg-dust/10"}`}>{l}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
