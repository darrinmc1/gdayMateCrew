import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand, siteUrl, tagline } from "@/lib/canon";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${brand} — ${tagline}`,
    template: `%s — ${brand}`,
  },
  description: "Aussie animal tradies on the tools. Job Site Comedy.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className="flex min-h-screen flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
