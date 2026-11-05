"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Github,
  Globe,
  ShieldCheck,
  Code2,
  CheckCircle,
  FileText,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface/40 border-y border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-mono font-medium border border-brand-500/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background, Philosophy &amp; Vision
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            How I approach software engineering, why I focus on cybersecurity, and what drives my work every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Quick Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-surface-border bg-surface-secondary shadow-xl max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface/90 backdrop-blur-md border border-surface-border">
                  <div className="text-sm font-bold text-white">{PERSONAL_INFO.name}</div>
                  <div className="text-xs text-brand-400 font-medium">B.Sc. Software Engineering Candidate</div>
                  <div className="text-[11px] text-slate-400 mt-1">Debre Berhan University · Graduating 2026</div>
                </div>
              </div>
            </div>

            {/* Quick Fact Box */}
            <div className="p-5 rounded-2xl bg-surface border border-surface-border space-y-3.5 max-w-md mx-auto lg:max-w-none">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Verified Profile Metrics
              </h3>
              
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-surface-border/60">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-400" /> Education
                  </span>
                  <span className="text-slate-200 font-medium">Debre Berhan University</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-surface-border/60">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-400" /> Location
                  </span>
                  <span className="text-slate-200 font-medium">Debre Birhan, Ethiopia</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-surface-border/60">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand-400" /> Email
                  </span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-brand-400 hover:underline font-mono">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-surface-border/60">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand-400" /> Phone
                  </span>
                  <span className="text-slate-200 font-mono">{PERSONAL_INFO.phone}</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-brand-400" /> Languages
                  </span>
                  <span className="text-slate-200 font-medium">Amharic (Native), English (Proficient)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Building reliable software by understanding how systems operate—and how they break.
              </h3>

              <p>
                I am a fourth-year Software Engineering student at Debre Berhan University. My path into computing began with curiosity about how software interacts with networks and underlying operating system layers. I did not want to just write frontend interfaces; I wanted to understand how packets traverse routers, how databases maintain transactional integrity, and how services defend against malicious requests.
              </p>

              <p>
                Throughout my academic journey, I have taken on rigorous practical projects. I designed and simulated an enterprise-scale network for Haile Hotels &amp; Resorts in Cisco Packet Tracer, incorporating VLAN segmentation, OSPF dynamic routing, and Access Control Lists. I built an end-to-end automated testing workspace with Cypress to validate critical user flows, and engineered a layered Library Management System in Kotlin strictly separating model, repository, service, and presentation logic.
              </p>

              <p>
                My passion is combining software engineering with cybersecurity. When developing applications, I constantly consider security from the start—input sanitization, role-based authorization, and protocol safety. In parallel, I invest dedicated time into practical security labs including the PortSwigger Web Security Academy, packet analysis with Wireshark, active reconnaissance with Nmap, and hands-on testing with Burp Suite.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-secondary/70 border border-surface-border space-y-2">
                <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Software Engineering Mindset</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Committed to clean architecture, modular design patterns, test automation, and maintainable TypeScript and Java/Kotlin codebases.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-secondary/70 border border-surface-border space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Security-First Mentality</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Eager to identify application security vulnerabilities, practice responsible disclosure, and engineer applications that withstand real-world attacks.
                </p>
              </div>
            </div>

            {/* Career Goals */}
            <div className="p-5 rounded-xl bg-brand-500/5 border border-brand-500/20 space-y-2">
              <h4 className="text-xs font-mono font-bold text-brand-400 uppercase tracking-wider">
                Career Direction &amp; Ambition
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.careerGoal}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-surface border border-surface-border text-slate-200 hover:text-white hover:border-brand-500/50 hover:bg-surface-hover transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-brand-400" />
                <span>Read Full Curriculum Vitae</span>
              </Link>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-brand-400 transition-colors"
              >
                <span>Jump to verified projects</span>
                <span className="text-brand-400">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

