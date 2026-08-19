import { email, handle, siteUrl, tagline } from "@/lib/canon";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-steel">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-dust-dim md:px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-hivis">{tagline}</p>
        <p>
          <a href="https://instagram.com/gdaymatecrew" className="hover:text-hivis">
            {handle}
          </a>
        </p>
        <p>
          <a href={siteUrl} className="hover:text-hivis">
            gdaymatecrew.com
          </a>
        </p>
        <p>
          <a href={`mailto:${email}`} className="hover:text-hivis">
            {email}
          </a>
        </p>
      </div>
    </footer>
  );
}
