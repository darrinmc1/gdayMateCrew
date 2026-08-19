import Image from "next/image";
import Link from "next/link";
import { brand, nav } from "@/lib/canon";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-site/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="The G'Day Mate Construction Crew yellow diamond mark"
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-sm object-cover"
            priority
          />
          <span className="truncate text-sm font-bold tracking-tight text-hivis md:text-base">
            {brand}
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-dust-dim md:gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-hivis">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
