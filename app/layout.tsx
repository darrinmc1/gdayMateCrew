import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  metadataBase: new URL("https://gdaymatecrew.com"),
  title: { default: "The G'Day Mate Construction Crew — Job Site Comedy", template: "%s · G'Day Mate Crew" },
  description: "Job Site Comedy. Aussie animal tradies on the tools.",
  icons: { icon: "/logo.jpg" },
  openGraph: { images: ["/logo.jpg"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className="antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-hivis focus:px-4 focus:py-2">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
