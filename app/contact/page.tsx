import type { Metadata } from "next";
import { email } from "@/lib/canon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get on the blower. No walk-ins.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-hivis">Get on the blower</h1>
      <p className="mt-6 text-lg">
        <a href={`mailto:${email}`} className="font-semibold text-hivis hover:underline">
          {email}
        </a>
      </p>
      <p className="mt-6 text-dust-dim">No walk-ins.</p>
    </div>
  );
}
