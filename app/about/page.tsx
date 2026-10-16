import Image from "next/image";
import Merch from "@/components/Merch";
export const metadata = { title: "About" };
export default function About() {
  return (
    <>
      <section className="bg-site text-dust">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center">
          <Image src="/logo.jpg" alt="The G'Day Mate Construction Crew logo: yellow diamond with four animal tradies in hard hats" width={150} height={150} className="rounded-xl" />
          <div><h1 className="font-display text-4xl sm:text-5xl">Job Site Comedy.</h1><p className="mt-3 text-xl text-hivis font-bold">That&apos;s the job.</p></div>
        </div>
        <div className="tape h-3" aria-hidden />
      </section>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-10">
        <p className="text-xl">Aussie animal tradies on the tools. Skits from the site. Short. Dry. The sort of thing you tell at smoko and then get back on the tools.</p>
        <p className="text-lg text-site/80">Not a safety briefing. Not a brand deck. Not a feel-good campaign.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-site bg-white p-6 shadow-[6px_6px_0_0_#16130f]">
            <h2 className="font-display text-xl">What this is</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5"><li>Comedy from a job site.</li><li>Animal tradies. Real trades. Fake PPE compliance.</li><li>Twenty-seven in the crew.</li><li>@gdaymatecrew everywhere.</li></ul>
          </div>
          <div className="rounded-2xl border-2 border-site bg-white p-6 shadow-[6px_6px_0_0_#b5471d]">
            <h2 className="font-display text-xl">What this isn&apos;t</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5"><li>Not a real construction company.</li><li>Not a safety course.</li><li>Not an awards reel. We haven&apos;t won any. We haven&apos;t entered any.</li></ul>
          </div>
        </div>
      </div>
      <Merch />
    </>
  );
}
