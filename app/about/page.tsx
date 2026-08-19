import type { Metadata } from "next";
import {
  aboutMission,
  aboutWhatThisIs,
  aboutWhatThisIsnt,
  tagline,
} from "@/lib/canon";

export const metadata: Metadata = {
  title: "About",
  description: "Job Site Comedy. That's the job.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-hivis">Mission</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-hivis">{tagline}</h1>
      <div className="mt-8 space-y-3 text-lg leading-relaxed">
        {aboutMission.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <section className="mt-12 border-t border-border pt-10">
        <h2 className="text-xl font-bold text-hivis">What this is</h2>
        <div className="mt-4 space-y-3 text-dust">
          {aboutWhatThisIs.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-border pt-10">
        <h2 className="text-xl font-bold text-hivis">What this isn’t</h2>
        <div className="mt-4 space-y-3 text-dust">
          {aboutWhatThisIsnt.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
