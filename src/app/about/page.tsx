"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Terminal,
  ArrowRight,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Calendar,
  Layers,
  Shield,
  Code2,
} from "lucide-react";
import {
  PERSONAL_INFO,
  SKILL_CATEGORIES,
  EDUCATION_HISTORY,
} from "@/data/portfolioData";

export default function AboutPage() {
  const edu = EDUCATION_HISTORY[0];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 space-y-24">
      {/* 01 // ARCHITECTURE & PHILOSOPHY */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="mono-tag text-xs text-electric">
            [ 01 // ARCHITECTURE &amp; PHILOSOPHY ]
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-mono-100 uppercase text-hover-glow cursor-default">
            I BUILD FIRST. AUDIT CONSTANTLY.
          </h1>
          <p className="font-mono text-xs sm:text-sm text-mono-400 max-w-3xl leading-relaxed">
            Operating at the intersection of software engineering, network protocol simulation, and application security research. Most of my work starts with understanding how a system actually functions under the hood.
          </p>
        </div>

        {/* Persona Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 border border-mono-800 bg-monocard p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <div className="mono-tag text-xs text-mono-500 uppercase">
                // PERSONA MATRIX
              </div>
              <h2 className="font-display text-2xl font-bold uppercase text-mono-100">
                PRACTICAL ENGINEERING OVER THEORETICAL NOISE
              </h2>
            </div>

            <div className="font-mono text-xs text-mono-300 space-y-4 leading-relaxed">
              <p>
                I am a fourth-year Software Engineering student at <strong>Debre Berhan University</strong> (Ethiopia). I started programming because I wanted to build tangible systems that function reliably. Over the past four years, I have engineered full-stack applications, simulated multi-floor enterprise networks in Cisco Packet Tracer, automated regression test suites with Cypress, and investigated web application attack surfaces.
              </p>
              <p>
                My guiding philosophy is that great software engineers must understand how systems break. By analyzing attack vectors—such as SQL injection, Cross-Site Scripting, and improper network access lists—I design architectures that are inherently robust from the first line of code.
              </p>
            </div>

            <div className="pt-4 border-t border-monoborder grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-3 border border-mono-800 bg-monodark">
                <span className="text-[10px] text-mono-500 uppercase block">IDENTITY</span>
                <span className="text-mono-100 font-semibold">SOFTWARE ENGINEER &bull; APPSEC</span>
              </div>
              <div className="p-3 border border-mono-800 bg-monodark">
                <span className="text-[10px] text-mono-500 uppercase block">STATUS</span>
                <span className="text-electric font-semibold">4TH YEAR SENIOR // ACTIVE DBU</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Column */}
          <div className="lg:col-span-4 border border-mono-800 bg-monocard p-6 space-y-4 font-mono text-xs">
            <div className="mono-tag text-[10px] text-mono-500 uppercase border-b border-monoborder pb-2">
              TELEMETRY &bull; NODE RECORD
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] text-mono-500 block uppercase">FULL NAME</span>
                <span className="text-mono-100 font-bold">{PERSONAL_INFO.name}</span>
              </div>
              <div>
                <span className="text-[10px] text-mono-500 block uppercase">INSTITUTION</span>
                <span className="text-mono-200">{PERSONAL_INFO.university}</span>
              </div>
              <div>
                <span className="text-[10px] text-mono-500 block uppercase">ACADEMIC DEGREE</span>
                <span className="text-mono-200">B.Sc. Software Engineering</span>
              </div>
              <div>
                <span className="text-[10px] text-mono-500 block uppercase">COORDINATES</span>
                <span className="text-electric">09&deg;41&apos;N 39&deg;32&apos;E // ETHIOPIA</span>
              </div>
              <div>
                <span className="text-[10px] text-mono-500 block uppercase">LANGUAGES</span>
                <span className="text-mono-200">Amharic (Native), English (Professional)</span>
              </div>
            </div>

            <div className="pt-4 border-t border-monoborder">
              <Link
                href="/resume"
                className="w-full text-center block border border-mono-700 hover:border-electric bg-monodark py-2 text-xs font-bold text-mono-200 hover:text-electric transition-colors"
              >
                VIEW FULL CV &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02 // WORKING METHODOLOGY */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-monoborder pb-4">
          <div className="mono-tag text-xs text-mono-500 uppercase">
            // WORKING METHODOLOGY
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-mono-100">
            02 // HOW I OPERATE &amp; CODE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-6 border border-mono-800 bg-monocard space-y-2">
            <span className="mono-tag text-electric font-bold">01 / ARCHITECTURE</span>
            <h3 className="font-display text-base font-bold text-mono-100 uppercase">
              Structure Before Code
            </h3>
            <p className="text-mono-400 leading-relaxed">
              Always separate concerns into clean layers (Presentation, Service, Repository, Model) rather than throwing everything into monolithic files.
            </p>
          </div>

          <div className="p-6 border border-mono-800 bg-monocard space-y-2">
            <span className="mono-tag text-electric font-bold">02 / PROTOCOL DEPTH</span>
            <h3 className="font-display text-base font-bold text-mono-100 uppercase">
              Understanding Internals
            </h3>
            <p className="text-mono-400 leading-relaxed">
              I dig underneath abstractions to see how packets, handshakes, TCP sockets, and SQL transactions actually execute across routers and kernels.
            </p>
          </div>

          <div className="p-6 border border-mono-800 bg-monocard space-y-2">
            <span className="mono-tag text-electric font-bold">03 / SECURITY FIRST</span>
            <h3 className="font-display text-base font-bold text-mono-100 uppercase">
              Defensive Rigor
            </h3>
            <p className="text-mono-400 leading-relaxed">
              Input sanitization, parameterized queries, least privilege access lists, and strict authentication flows are built in by design.
            </p>
          </div>

          <div className="p-6 border border-mono-800 bg-monocard space-y-2">
            <span className="mono-tag text-electric font-bold">04 / AUTOMATED QA</span>
            <h3 className="font-display text-base font-bold text-mono-100 uppercase">
              Regression Testing
            </h3>
            <p className="text-mono-400 leading-relaxed">
              Automated UI testing with Cypress and unit assertion pipelines to catch breaking state anomalies before they hit production.
            </p>
          </div>

          <div className="p-6 border border-mono-800 bg-monocard space-y-2">
            <span className="mono-tag text-electric font-bold">05 / CONSTANT PRACTICE</span>
            <h3 className="font-display text-base font-bold text-mono-100 uppercase">
              Hands-On Lab Research
            </h3>
            <p className="text-mono-400 leading-relaxed">
              Continuous practical training in PortSwigger Web Security Academy, Nmap network scanning, and Wireshark packet capture analysis.
            </p>
          </div>

          <div className="p-6 border border-mono-800 bg-monocard space-y-2">
            <span className="mono-tag text-electric font-bold">06 / RESPONSIBLE CONDUCT</span>
            <h3 className="font-display text-base font-bold text-mono-100 uppercase">
              Ethical Standards
            </h3>
            <p className="text-mono-400 leading-relaxed">
              All offensive security research is strictly bound to authorized sandbox environments, local virtual machines, and dedicated educational labs.
            </p>
          </div>
        </div>
      </section>

      {/* 03 // SYSTEM CAPABILITIES & STACK */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-monoborder pb-4">
          <div className="mono-tag text-xs text-mono-500 uppercase">
            // SYSTEM CAPABILITIES
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-mono-100">
            03 // THINGS I&apos;VE TOUCHED &amp; BUILT WITH
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="border border-mono-800 bg-monocard p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-monoborder pb-3">
                <span className="font-display text-sm font-bold text-mono-100 uppercase">
                  {category.title}
                </span>
                <span className="mono-tag text-[10px] text-electric">
                  [{category.skills.length} NODES]
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((s) => (
                  <span
                    key={s.name}
                    className="border border-mono-800 bg-monodark px-2.5 py-1 text-mono-300 hover:border-electric hover:text-electric transition-colors"
                  >
                    #{s.name}
                  </span>
                ))}
              </div>

              <p className="text-mono-500 text-[11px] pt-2 border-t border-monoborder">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 // ACADEMIC TIMELINE & BUILDS */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-monoborder pb-4">
          <div className="mono-tag text-xs text-mono-500 uppercase">
            // ACADEMIC TIMELINE &amp; BUILDS
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-mono-100">
            04 // EDUCATION &amp; UNDERGRADUATE TRACK
          </h2>
        </div>

        <div className="border border-mono-800 bg-monocard p-6 md:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-monoborder pb-4 font-mono text-xs">
            <div>
              <span className="mono-tag text-electric text-[10px]">CURRENT PROGRAM</span>
              <h3 className="font-display text-xl font-bold text-mono-100 uppercase mt-1">
                {edu.degree}
              </h3>
              <p className="text-mono-400">{edu.institution} &bull; {edu.location}</p>
            </div>

            <div className="text-left sm:text-right font-mono">
              <span className="text-electric font-bold">{edu.period}</span>
              <span className="text-mono-500 block text-[11px]">{edu.status}</span>
            </div>
          </div>

          <p className="font-mono text-xs text-mono-300 leading-relaxed">
            {edu.overview}
          </p>

          <div className="space-y-3 pt-2">
            <div className="mono-tag text-[10px] text-mono-500 uppercase">
              KEY ACADEMIC MODULES COMPLETED:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
              {edu.keyCoursework.map((course) => (
                <div key={course.name} className="p-3 border border-mono-800 bg-monodark space-y-1">
                  <div className="text-mono-100 font-bold flex items-center space-x-1.5">
                    <span className="text-electric">&bull;</span>
                    <span>{course.name}</span>
                  </div>
                  <p className="text-[11px] text-mono-500 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

