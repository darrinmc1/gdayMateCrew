import ContactForm from "@/components/ContactForm";
import { INSTAGRAM } from "@/lib/crew";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <>
      <section className="bg-site text-dust">
        <div className="mx-auto max-w-5xl px-4 py-16"><h1 className="font-display text-4xl sm:text-5xl">Get on the blower</h1><p className="mt-3 text-lg text-dust/85">Bookings, press, &ldquo;is this a real crew&rdquo;, the lot.</p></div>
        <div className="tape h-3" aria-hidden />
      </section>
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr]">
        <ContactForm />
        <aside className="space-y-4">
          <div className="rounded-2xl bg-site p-6 text-dust"><h2 className="font-display text-xl">On the socials</h2>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-hivis hover:underline">@gdaymatecrew on Instagram</a></div>
          <p className="rounded-2xl border-2 border-dashed border-site/40 p-6 font-bold">No walk-ins. We&apos;re on site.</p>
        </aside>
      </div>
    </>
  );
}
