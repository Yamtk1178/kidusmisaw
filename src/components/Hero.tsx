"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Terminal,
  ArrowRight,
  FileText,
  Github,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-radial-hero bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-secondary border border-surface-border text-xs font-mono text-slate-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400">Status:</span>
              <span className="text-foreground font-medium">
                4th Year Software Engineering @ Debre Berhan University
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Engineering Scalable Systems.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-emerald-400">
                  Securing Digital Frontiers.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                I am <span className="text-white font-semibold">Kidus Misaw</span> — a software engineering student combining full-stack development, network architecture, and hands-on cybersecurity research.
              </p>
            </div>

            {/* Natural Professional Summary */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Based in Ethiopia, I build end-to-end applications with modern architectures, simulate multi-tier enterprise networks in Cisco Packet Tracer, automate testing workflows with Cypress, and analyze web vulnerabilities through hands-on ethical security labs.
            </p>

            {/* Dual Pillars indicator */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/70 border border-surface-border text-left">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Software Engineering</div>
                  <div className="text-[11px] text-slate-400">Clean code, layered design, QA testing</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/70 border border-surface-border text-left">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Cybersecurity & Networks</div>
                  <div className="text-[11px] text-slate-400">AppSec labs, OSPF/VLANs, packet analysis</div>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-500 text-slate-950 hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-surface-secondary border border-surface-border text-slate-200 hover:text-white hover:border-brand-500/50 hover:bg-surface-hover transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-brand-400" />
                <span>View Full CV</span>
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-surface-hover/60 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Snippet */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400">
              <a
                href="https://github.com/Yamtk1178"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>github.com/Yamtk1178</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="mailto:kidusmisaw7@gmail.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-300" />
                <span>kidusmisaw7@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile & System Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md rounded-2xl bg-surface/90 border border-surface-border shadow-2xl shadow-black/40 overflow-hidden relative backdrop-blur-sm">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-surface-secondary/80 border-b border-surface-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">kidus@dbu-workstation: ~</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>online</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6">
                {/* Photo + Identification */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-500/40 shadow-lg shadow-brand-500/10 shrink-0 bg-surface-secondary">
                    <Image
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80px, 80px"
                      priority
                    />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h2>
                    <div className="text-xs text-brand-400 font-medium">B.Sc. Software Engineering (4th Year)</div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>

                {/* Telemetry Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-surface-secondary/60 border border-surface-border/60">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Institution</span>
                    <span className="text-slate-200 font-medium text-xs">Debre Berhan Univ.</span>
                  </div>

                  <div className="p-3 rounded-lg bg-surface-secondary/60 border border-surface-border/60">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Target Grad</span>
                    <span className="text-emerald-400 font-medium text-xs">Class of 2026</span>
                  </div>

                  <div className="p-3 rounded-lg bg-surface-secondary/60 border border-surface-border/60">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Focus</span>
                    <span className="text-brand-300 font-medium text-xs">Full-Stack &amp; AppSec</span>
                  </div>

                  <div className="p-3 rounded-lg bg-surface-secondary/60 border border-surface-border/60">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">GitHub</span>
                    <span className="text-slate-200 font-medium text-xs">@Yamtk1178</span>
                  </div>
                </div>

                {/* Verified Technical Badges */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Verified Competency Areas
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Cisco Packet Tracer",
                      "VLAN / OSPF",
                      "Cypress QA",
                      "Kotlin & Gradle",
                      "Next.js & TypeScript",
                      "PortSwigger Labs",
                      "Wireshark / Nmap",
                      "Relational SQL",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-secondary text-slate-300 border border-surface-border"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Quote / Philosophy */}
                <div className="pt-2 border-t border-surface-border/60 text-[11px] text-slate-400 italic">
                  &ldquo;Building software with structural elegance and auditing it with a defensive security mindset.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

