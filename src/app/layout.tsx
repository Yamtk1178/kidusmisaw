import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "KIDUS // SOFTWARE ENGINEER & CYBERSECURITY BUILDER",
  description:
    "Personal digital space & engineering portfolio of Kidus Misaw. Software engineering student and security practitioner bridging robust backend architecture with proactive application security, secure coding standards, and rigorous penetration testing.",
  keywords: [
    "Kidus Misaw",
    "Software Engineer",
    "Debre Berhan University",
    "Ethical Hacking",
    "Cybersecurity",
    "Cisco Packet Tracer",
    "Cypress QA",
    "Next.js Developer",
  ],
  authors: [{ name: "Kidus Misaw", url: "https://github.com/Yamtk1178" }],
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-monodark text-mono-100 antialiased min-h-screen flex flex-col selection:bg-electric selection:text-monodark bg-grid-pattern font-sans">
        <div className="scanline-overlay" />
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
