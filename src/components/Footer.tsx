"use client";

import Link from "next/link";
import { Terminal, ArrowUp, Github, Mail, Phone, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-monoborder bg-monodark/90 py-12 text-mono-400 relative z-10">
      <div className="mx-auto max-w-7xl px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-monoborder">
          {/* Logo & Terminal Identity */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="flex h-7 w-7 items-center justify-center border border-mono-700 bg-monocard text-electric">
                <Terminal className="h-3.5 w-3.5" />
              </div>
              <span className="font-mono text-sm font-bold tracking-wider text-mono-100 uppercase">
                {PERSONAL_INFO.name}
              </span>
              <span className="mono-tag text-[10px] text-electric">[SYSTEM STABLE]</span>
            </div>
            <p className="font-mono text-xs text-mono-500 max-w-md">
              Software Engineering Student at Debre Berhan University. Building robust systems, simulating enterprise networks, and testing applications with defensive security rigor.
            </p>
          </div>

          {/* Quick Endpoints */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <Link href="/" className="hover:text-electric transition-colors">
              HOME
            </Link>
            <Link href="/about" className="hover:text-electric transition-colors">
              ABOUT
            </Link>
            <Link href="/works" className="hover:text-electric transition-colors">
              WORKS
            </Link>
            <Link href="/security" className="hover:text-electric transition-colors">
              SECURITY
            </Link>
            <Link href="/links" className="hover:text-electric transition-colors">
              LINKS
            </Link>
            <Link href="/contact" className="hover:text-electric transition-colors">
              CONTACT
            </Link>
            <Link href="/resume" className="text-electric hover:underline transition-colors">
              CV.PDF
            </Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center space-x-2 border border-mono-800 hover:border-electric bg-monocard px-3 py-1.5 font-mono text-xs text-mono-300 hover:text-electric transition-all"
          >
            <span>RETURN TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-electric" />
          </button>
        </div>

        {/* Telemetry Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-mono-500">
          <div className="flex items-center space-x-4">
            <span>LOC: DEBRE BIRHAN / ETHIOPIA [09°41&apos;N 39°32&apos;E]</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>CLASS OF 2026</span>
          </div>

          <div className="flex items-center space-x-4 text-mono-400">
            <a
              href="https://github.com/Yamtk1178"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-electric transition-colors flex items-center space-x-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
            <span>&bull;</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-electric transition-colors flex items-center space-x-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>EMAIL</span>
            </a>
          </div>

          <div>
            &copy; {new Date().getFullYear()} KIDUS MISAW // ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
