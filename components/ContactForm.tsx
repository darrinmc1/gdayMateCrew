"use client";
import { useState } from "react";
const ENDPOINT = "https://n8n.peelboss.com/webhook/site-contact";
type S = "idle" | "sending" | "ok" | "error";
export default function ContactForm() {
  const [s, setS] = useState<S>("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setS("sending");
    try {
      const r = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ site: "gdaymatecrew", name: f.get("name"), email: f.get("email"), message: f.get("message"), website: f.get("website") ?? "" }) });
      if (!r.ok) throw new Error(String(r.status));
      setS("ok"); (e.target as HTMLFormElement).reset();
    } catch { setS("error"); }
  }
  if (s === "ok") return (
    <div role="status" className="rounded-2xl border-2 border-site bg-hivis p-8 shadow-[6px_6px_0_0_#16130f]">
      <h2 className="font-display text-2xl">Message received.</h2><p className="mt-2">It&apos;s in the shed. We&apos;ll get back to you after smoko.</p>
      <button onClick={() => setS("idle")} className="mt-5 rounded-full bg-site px-5 py-2 font-bold text-hivis">Send another</button>
    </div>
  );
  const input = "mt-1 w-full rounded-lg border-2 border-site/30 bg-white px-3 py-2.5 focus:border-site focus:outline-none";
  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border-2 border-site bg-white p-6 shadow-[6px_6px_0_0_#16130f] sm:p-8" noValidate={false}>
      <div><label htmlFor="name" className="font-bold">Name</label><input id="name" name="name" required autoComplete="name" className={input} /></div>
      <div><label htmlFor="email" className="font-bold">Email</label><input id="email" name="email" type="email" required autoComplete="email" className={input} /></div>
      <div><label htmlFor="message" className="font-bold">Message</label><textarea id="message" name="message" required rows={5} className={input} /></div>
      <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      {s === "error" && <p role="alert" className="rounded-lg bg-rust/10 p-3 font-bold text-rust">That didn&apos;t go through. Give it another go in a minute, or message @gdaymatecrew on Instagram.</p>}
      <button disabled={s === "sending"} className="w-full rounded-full bg-site px-6 py-3 font-bold text-hivis transition hover:bg-black disabled:opacity-60 sm:w-auto">{s === "sending" ? "Sending…" : "Send it"}</button>
    </form>
  );
}
