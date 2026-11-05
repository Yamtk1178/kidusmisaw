"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Terminal,
  ArrowRight,
  Shield,
  Cpu,
  Layers,
  Network,
  ExternalLink,
  Github,
  CheckCircle2,
  FileText,
  MapPin,
  Lock,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS, SECURITY_JOURNEY } from "@/data/portfolioData";
import { TerminalLauncherPill } from "@/components/InteractiveTerminal";

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 space-y-28">
      {/* ================= HERO SECTION ================= */}
      <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            {/* System Status Tag */}
            <div className="mono-tag text-xs text-electric flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
              </span>
              <span className="text-interactive">SYSTEM STATUS: ENGAGED // SENIOR SWE &amp; APPSEC</span>
            </div>

            {/* Display Heading with Word-Level Hover Glow */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-mono-100 uppercase leading-[1.05]">
              <span className="text-interactive">I</span>{" "}
              <span className="text-interactive">BUILD</span>{" "}
              <span className="text-interactive">SYSTEMS</span>{" "}
              <span className="text-interactive">THAT</span>{" "}
              <span className="text-interactive">STAND</span>{" "}
              <span className="text-interactive">UP</span>{" "}
              <span className="text-interactive">TO</span>{" "}
              <span className="text-electric block sm:inline text-interactive font-extrabold drop-shadow-[0_0_15px_rgba(0,255,102,0.3)]">
                THREATS.
              </span>
            </h1>

            {/* Narrative summary */}
            <p className="font-mono text-xs sm:text-sm text-mono-400 max-w-2xl leading-relaxed">
              Software engineering student and security practitioner bridging robust backend architecture with proactive application security, secure coding standards, and rigorous penetration testing.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
            <Link
              href="/works"
              className="flex items-center space-x-2 border border-mono-100 bg-mono-100 px-6 py-3 font-bold text-monodark hover:bg-electric hover:border-electric transition-all uppercase hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]"
            >
              <span>INSPECT ARCHIVE [WORKS]</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about"
              className="flex items-center space-x-2 border border-mono-800 bg-monocard px-6 py-3 font-bold text-mono-300 hover:border-electric hover:text-electric transition-all uppercase"
            >
              <span>PERSONA &amp; PHILOSOPHY</span>
            </Link>

            <Link
              href="/resume"
              className="flex items-center space-x-2 border border-mono-800 bg-monocard px-4 py-3 font-bold text-electric hover:bg-electric hover:text-monodark transition-all uppercase"
            >
              <FileText className="w-4 h-4" />
              <span>CV.PDF</span>
            </Link>
          </div>

          {/* Telemetry Strip */}
          <div className="pt-4 border-t border-monoborder grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-mono-500">
            <div>
              <span className="text-mono-400 block text-[10px] uppercase">COORDINATES &bull; LOCATION</span>
              <span className="text-mono-200 text-hover-glow cursor-default">
                DEBRE BIRHAN / ETHIOPIA [09&deg;41&apos;N 39&deg;32&apos;E]
              </span>
            </div>
            <div>
              <span className="text-mono-400 block text-[10px] uppercase">STATUS &bull; COHORT</span>
              <span className="text-electric text-hover-glow cursor-default">
                4TH YEAR SENIOR // EXPECTED 2026
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Cyber Portrait Box & CLI Terminal Below */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
          {/* Cyber Portrait Frame */}
          <div className="relative w-full max-w-md border border-mono-800 bg-monocard p-4 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            {/* Crosshairs in corners */}
            <span className="absolute -top-2 -left-2 font-mono text-xs text-electric font-bold">+</span>
            <span className="absolute -top-2 -right-2 font-mono text-xs text-electric font-bold">+</span>
            <span className="absolute -bottom-2 -left-2 font-mono text-xs text-electric font-bold">+</span>
            <span className="absolute -bottom-2 -right-2 font-mono text-xs text-electric font-bold">+</span>

            {/* Top Bar of Terminal Frame */}
            <div className="flex items-center justify-between pb-3 border-b border-monoborder mb-3 font-mono text-[11px] text-mono-400">
              <span className="text-mono-200 uppercase font-bold tracking-wider text-hover-glow cursor-default">
                KIDUS // PORTRAIT
              </span>
              <span className="text-electric">09&deg;41&apos;N 39&deg;32&apos;E</span>
            </div>

            {/* Real Photo with subtle overlay */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-mono-800 bg-monodark group">
              <Image
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                fill
                priority
                className="object-cover contrast-105 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-monodark via-transparent to-transparent opacity-60" />
            </div>

            {/* Bottom Telemetry Data */}
            <div className="mt-3 pt-3 border-t border-monoborder flex items-center justify-between font-mono text-[10px] text-mono-500">
              <span className="text-electric uppercase tracking-wider font-semibold text-hover-glow cursor-default">
                BUILDER CORE
              </span>
              <span>SYS.VER.2026 // DBU</span>
            </div>
          </div>

          {/* Static Pill Launcher Below Profile */}
          <div className="w-full max-w-md flex justify-center lg:justify-end mt-4">
            <TerminalLauncherPill />
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURAL MATRIX ================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-monoborder pb-3 font-mono text-xs">
          <div className="text-mono-400 uppercase tracking-wider text-hover-glow cursor-default">
            // ARCHITECTURAL MATRIX
          </div>
          <div className="text-electric text-[11px] flex items-center space-x-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-electric rounded-full animate-pulse" />
            <span>LIVE SIGNAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 border border-mono-800 bg-monocard space-y-3 hover:border-electric transition-colors group">
            <div className="flex items-center justify-between text-mono-500 font-mono text-xs">
              <span className="group-hover:text-electric transition-colors">01</span>
              <Cpu className="w-4 h-4 text-electric group-hover:rotate-12 transition-transform" />
            </div>
            <div className="font-display text-base font-bold text-mono-100 uppercase group-hover:text-electric transition-colors">
              Full-Stack Architecture
            </div>
            <p className="font-mono text-xs text-mono-400 leading-relaxed group-hover:text-mono-200 transition-colors">
              Layered multi-tier architecture, Next.js App Router, TypeScript, React, and REST API contracts.
            </p>
          </div>

          <div className="p-5 border border-mono-800 bg-monocard space-y-3 hover:border-electric transition-colors group">
            <div className="flex items-center justify-between text-mono-500 font-mono text-xs">
              <span className="group-hover:text-electric transition-colors">02</span>
              <Network className="w-4 h-4 text-electric group-hover:rotate-12 transition-transform" />
            </div>
            <div className="font-display text-base font-bold text-mono-100 uppercase group-hover:text-electric transition-colors">
              Enterprise Networks
            </div>
            <p className="font-mono text-xs text-mono-400 leading-relaxed group-hover:text-mono-200 transition-colors">
              Cisco Packet Tracer simulation (500+ users), VLAN 802.1Q trunking, OSPF routing, DHCP, NAT/PAT, and ACL filters.
            </p>
          </div>

          <div className="p-5 border border-mono-800 bg-monocard space-y-3 hover:border-electric transition-colors group">
            <div className="flex items-center justify-between text-mono-500 font-mono text-xs">
              <span className="group-hover:text-electric transition-colors">03</span>
              <Shield className="w-4 h-4 text-electric group-hover:rotate-12 transition-transform" />
            </div>
            <div className="font-display text-base font-bold text-mono-100 uppercase group-hover:text-electric transition-colors">
              Application Security
            </div>
            <p className="font-mono text-xs text-mono-400 leading-relaxed group-hover:text-mono-200 transition-colors">
              Hands-on PortSwigger Web Security Academy labs, OWASP Top 10 vulnerabilities, Nmap reconnaissance, and Burp Suite.
            </p>
          </div>

          <div className="p-5 border border-mono-800 bg-monocard space-y-3 hover:border-electric transition-colors group">
            <div className="flex items-center justify-between text-mono-500 font-mono text-xs">
              <span className="group-hover:text-electric transition-colors">04</span>
              <Layers className="w-4 h-4 text-electric group-hover:rotate-12 transition-transform" />
            </div>
            <div className="font-display text-base font-bold text-mono-100 uppercase group-hover:text-electric transition-colors">
              Quality Assurance
            </div>
            <p className="font-mono text-xs text-mono-400 leading-relaxed group-hover:text-mono-200 transition-colors">
              End-to-end automated testing workspace built with Cypress, fixture assertions, and headless CI-ready suites.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SELECTED LABORATORY WORKS ================= */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-monoborder pb-4 gap-2">
          <div>
            <div className="mono-tag text-xs text-mono-500 uppercase tracking-wider text-hover-glow cursor-default">
              // SELECTED LABORATORY WORKS
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-mono-100 text-hover-glow cursor-default">
              PROJECTS I DID
            </h2>
          </div>

          <Link
            href="/works"
            className="font-mono text-xs text-electric hover:underline flex items-center space-x-1"
          >
            <span>VIEW ALL WORKS ({PROJECTS.length})</span>
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-mono-800 bg-monocard p-6 flex flex-col justify-between hover:border-electric transition-all group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="mono-tag text-electric border border-electric/30 bg-electric/5 px-2 py-0.5">
                    {project.categoryLabel}
                  </span>
                  <span className="text-mono-500">
                    [STATUS: {project.status.toUpperCase()}]
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-xl font-bold text-mono-100 group-hover:text-electric transition-colors uppercase">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-mono-400">
                    {project.subtitle}
                  </p>
                </div>

                <p className="font-mono text-xs text-mono-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-1 pt-2 border-t border-monoborder">
                  <div className="font-mono text-[10px] text-mono-500 uppercase">
                    Key Highlights:
                  </div>
                  <ul className="font-mono text-[11px] text-mono-400 space-y-1">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-electric">&bull;</span>
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions & Tags */}
              <div className="pt-4 border-t border-monoborder flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-mono-400 border border-mono-800 px-2 py-0.5 bg-monodark hover:border-electric hover:text-electric transition-colors cursor-default"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mono-300 hover:text-electric flex items-center space-x-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>CODE</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  ) : (
                    <span className="text-mono-500 italic text-[11px]">
                      TEAM REPO
                    </span>
                  )}
                  <Link
                    href="/works"
                    className="text-electric hover:underline text-[11px]"
                  >
                    INSPECT &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CYBERSECURITY PROTOCOL ================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-monoborder pb-3 font-mono text-xs">
          <div className="text-mono-400 uppercase tracking-wider text-hover-glow cursor-default">
            // CYBERSECURITY PROTOCOL &amp; LABS
          </div>
          <Link href="/security" className="text-electric hover:underline">
            EXPLORE LABS &rarr;
          </Link>
        </div>

        <div className="border border-mono-800 bg-monocard p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="mono-tag text-xs text-electric flex items-center space-x-2">
                <Lock className="w-3.5 h-3.5" />
                <span>ETHICAL RESEARCH &bull; CONTROLLED SANDBOXES</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-mono-100 text-hover-glow cursor-default">
                APPLICATION SECURITY LABS &amp; RECONNAISSANCE
              </h3>
            </div>
            <Link
              href="/security"
              className="border border-mono-700 hover:border-electric bg-monodark px-4 py-2 font-mono text-xs text-mono-200 hover:text-electric transition-colors self-start md:self-auto"
            >
              SECURITY DIRECTORY
            </Link>
          </div>

          <p className="font-mono text-xs text-mono-400 max-w-3xl leading-relaxed">
            I practice hands-on vulnerability analysis on the PortSwigger Web Security Academy (SQL Injection, XSS, CSRF, Broken Access Control), inspect transport layers and network handshakes using Wireshark, scan targets with Nmap, and test requests using Burp Suite proxy configurations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 border border-mono-800 bg-monodark hover:border-electric transition-colors group">
              <span className="text-[10px] text-mono-500 uppercase block">PLATFORM</span>
              <span className="text-mono-200 font-semibold group-hover:text-electric transition-colors">PortSwigger Academy</span>
            </div>
            <div className="p-3 border border-mono-800 bg-monodark hover:border-electric transition-colors group">
              <span className="text-[10px] text-mono-500 uppercase block">INTERCEPTION</span>
              <span className="text-mono-200 font-semibold group-hover:text-electric transition-colors">Burp Suite Proxy</span>
            </div>
            <div className="p-3 border border-mono-800 bg-monodark hover:border-electric transition-colors group">
              <span className="text-[10px] text-mono-500 uppercase block">INSPECTION</span>
              <span className="text-mono-200 font-semibold group-hover:text-electric transition-colors">Wireshark &bull; Nmap</span>
            </div>
            <div className="p-3 border border-mono-800 bg-monodark hover:border-electric transition-colors group">
              <span className="text-[10px] text-mono-500 uppercase block">ENVIRONMENT</span>
              <span className="text-electric font-semibold group-hover:drop-shadow-[0_0_8px_rgba(0,255,102,0.8)] transition-all">Linux &bull; Bash CLI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIRECT TRANSMISSION CALLOUT ================= */}
      <section className="border border-mono-800 bg-monocard p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="mono-tag text-xs text-electric">
            // DIRECT TRANSMISSION
          </div>
          <h3 className="font-display text-2xl font-bold uppercase text-mono-100 text-hover-glow cursor-default">
            HAVE A PROJECT, INTERNSHIP, OR SECURITY INQUIRY?
          </h3>
          <p className="font-mono text-xs text-mono-400 max-w-xl">
            I am currently open for software engineering internships, technical collaborations, and penetration testing exploration.
          </p>
        </div>

        <Link
          href="/contact"
          className="flex items-center space-x-2 border border-mono-100 bg-mono-100 px-6 py-3 font-mono text-xs font-bold text-monodark hover:bg-electric hover:border-electric transition-all uppercase shrink-0 hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]"
        >
          <span>INITIATE CONTACT</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
