"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, FileText, Command } from "lucide-react";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "WORKS", href: "/works" },
  { label: "SECURITY", href: "/security" },
  { label: "LINKS", href: "/links" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar({ onOpenCmd }: { onOpenCmd?: () => void }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-monoborder bg-monodark/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Terminal Box */}
        <Link href="/" className="group flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center border border-mono-700 bg-monocard text-mono-100 transition-all duration-200 group-hover:border-electric group-hover:bg-electric group-hover:text-monodark">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-sm font-bold tracking-wider text-mono-100 group-hover:text-electric transition-colors uppercase">
                KIDUS
              </span>
              <span className="mono-tag text-[10px] text-mono-500">MISAW</span>
            </div>
            <div className="mono-tag text-[10px] text-mono-500">
              [SOFTWARE ENGINEER + CYBERSECURITY]
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`electric-underline mono-tag text-xs transition-colors duration-150 ${
                  isActive
                    ? "text-electric font-semibold active"
                    : "text-mono-400 hover:text-electric"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Status Pill, Command Menu Trigger & CV Action */}
        <div className="hidden items-center space-x-3 lg:flex">
          {onOpenCmd && (
            <button
              onClick={onOpenCmd}
              className="flex items-center space-x-1.5 border border-mono-800 hover:border-electric bg-monocard px-2.5 py-1 text-[11px] font-mono text-mono-400 hover:text-electric transition-colors"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="w-3 h-3 text-electric" />
              <span className="mono-tag text-[10px]">CMD // K</span>
            </button>
          )}

          <Link
            href="/resume"
            className="flex items-center space-x-1.5 border border-mono-800 hover:border-electric bg-monocard px-3 py-1 text-[11px] font-mono text-mono-300 hover:text-electric transition-colors"
          >
            <FileText className="w-3 h-3 text-electric" />
            <span className="mono-tag text-[10px]">CV // PDF</span>
          </Link>

          <div className="flex items-center space-x-2 rounded-full border border-mono-800 bg-monocard px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
            </span>
            <span className="mono-tag text-[10px] text-mono-300">
              KIDUS.OS v4.0 // DBU &apos;26
            </span>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-2 md:hidden">
          {onOpenCmd && (
            <button
              onClick={onOpenCmd}
              className="flex h-9 w-9 items-center justify-center border border-mono-800 bg-monocard text-electric hover:border-electric"
              aria-label="Open command palette"
            >
              <Command className="h-4 w-4" />
            </button>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center border border-mono-800 bg-monocard text-mono-300 hover:border-electric hover:text-electric"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-monoborder bg-monodark/95 px-6 py-6 md:hidden">
          <div className="flex flex-col space-y-4 font-mono text-xs">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-1 transition-colors ${
                  pathname === item.href
                    ? "text-electric font-bold"
                    : "text-mono-300 hover:text-electric"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-monoborder flex flex-col space-y-3">
              <Link
                href="/resume"
                onClick={() => setMobileOpen(false)}
                className="flex items-center space-x-2 text-electric font-mono text-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>VIEW CURRICULUM VITAE (CV)</span>
              </Link>
              <div className="mono-tag text-[10px] text-mono-500">
                STATUS: DEBRE BERHAN UNIVERSITY // 4TH YEAR
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
