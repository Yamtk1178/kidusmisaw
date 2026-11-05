"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Printer,
  Mail,
  Phone,
  Github,
  MapPin,
  GraduationCap,
  Briefcase,
  Layers,
  Shield,
  Code2,
  ExternalLink,
} from "lucide-react";
import {
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
  EDUCATION_HISTORY,
} from "@/data/portfolioData";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const edu = EDUCATION_HISTORY[0];

  return (
    <div className="min-h-screen bg-monodark text-mono-100 py-8 px-4 sm:px-6 print:p-0 print:bg-white print:text-black">
      {/* Top Floating Action Bar (Hidden in Print) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between no-print font-mono text-xs">
        <Link
          href="/"
          className="flex items-center space-x-2 border border-mono-800 bg-monocard px-4 py-2 text-mono-300 hover:border-electric hover:text-electric transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO BASE (HOME)</span>
        </Link>

        <button
          onClick={handlePrint}
          className="flex items-center space-x-2 border border-mono-100 bg-mono-100 px-4 py-2 font-bold text-monodark hover:bg-electric hover:border-electric transition-all"
        >
          <Printer className="w-4 h-4" />
          <span>PRINT / EXPORT PDF</span>
        </button>
      </div>

      {/* Main Resume Container */}
      <div className="max-w-4xl mx-auto border border-mono-800 bg-monocard p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-8 border-b border-monoborder print:border-slate-300">
          <div className="space-y-2 text-center sm:text-left">
            <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-mono-100 print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="font-mono text-xs sm:text-sm text-electric print:text-slate-800 uppercase font-semibold">
              Software Engineering Student &bull; Full-Stack &bull; Cybersecurity
            </h2>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs text-mono-400 print:text-slate-700 font-mono">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-1.5 hover:text-electric transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-electric print:text-black" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span>&bull;</span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center space-x-1.5 hover:text-electric transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-electric print:text-black" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span>&bull;</span>
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-electric print:text-black" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span>&bull;</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-electric transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-electric print:text-black" />
                <span>github.com/Yamtk1178</span>
              </a>
            </div>
          </div>

          <div className="relative w-24 h-24 border border-mono-700 bg-monodark overflow-hidden print:hidden shrink-0">
            <Image
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        </div>

        {/* Profile Summary */}
        <div className="py-6 border-b border-monoborder print:border-slate-300 space-y-2 font-mono">
          <div className="mono-tag text-[10px] text-electric uppercase font-bold">
            // PROFILE SUMMARY
          </div>
          <p className="text-xs text-mono-300 print:text-slate-800 leading-relaxed">
            {PERSONAL_INFO.summary} {PERSONAL_INFO.careerGoal}
          </p>
        </div>

        {/* Education Section */}
        <div className="py-6 border-b border-monoborder print:border-slate-300 space-y-4 font-mono">
          <div className="mono-tag text-[10px] text-electric uppercase font-bold flex items-center space-x-1.5">
            <GraduationCap className="w-4 h-4" />
            <span>// FORMAL EDUCATION</span>
          </div>

          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-mono-100 print:text-black">
              <span>{edu.degree}</span>
              <span className="text-electric print:text-slate-700 font-mono">
                {edu.period} (4th Year Senior)
              </span>
            </div>
            <div className="text-xs text-mono-500 print:text-slate-600">
              {edu.institution} &bull; {edu.location}
            </div>
            <p className="text-xs text-mono-300 print:text-slate-700 pt-2 leading-relaxed">
              <strong>Core Coursework:</strong> Fundamentals of Networking, Data Structures &amp; Algorithms, Database Systems, Software Testing &amp; QA, Object-Oriented Programming, Web Application Development.
            </p>
          </div>
        </div>

        {/* Technical Arsenal Grid */}
        <div className="py-6 border-b border-monoborder print:border-slate-300 space-y-4 font-mono">
          <div className="mono-tag text-[10px] text-electric uppercase font-bold flex items-center space-x-1.5">
            <Code2 className="w-4 h-4" />
            <span>// TECHNICAL CAPABILITIES &amp; STACK</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="p-3 border border-mono-800 bg-monodark print:bg-slate-50 print:border-slate-200 space-y-1"
              >
                <div className="font-bold text-mono-100 print:text-slate-900 text-xs">
                  {cat.title}
                </div>
                <div className="text-[11px] text-mono-400 print:text-slate-700">
                  {cat.skills.map((s) => s.name).join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Engineering Projects */}
        <div className="py-6 border-b border-monoborder print:border-slate-300 space-y-5 font-mono">
          <div className="mono-tag text-[10px] text-electric uppercase font-bold flex items-center space-x-1.5">
            <Briefcase className="w-4 h-4" />
            <span>// KEY ENGINEERING REPOSITORIES</span>
          </div>

          <div className="space-y-4">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="space-y-1.5 p-4 border border-mono-800 bg-monodark print:bg-slate-50 print:border-slate-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-mono-100 print:text-black">
                  <div className="flex items-center space-x-2">
                    <span>{proj.title}</span>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-electric hover:underline print:hidden"
                        title="View Code on GitHub"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <span className="text-[11px] text-mono-500 print:text-slate-600">
                    {proj.categoryLabel}
                  </span>
                </div>

                <p className="text-xs text-mono-300 print:text-slate-700 leading-relaxed">
                  {proj.description}
                </p>

                <div className="text-[11px] text-mono-400 print:text-slate-600 font-mono pt-1">
                  <strong>Stack:</strong> {proj.technologies.join(" • ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Security Labs */}
        <div className="pt-6 space-y-3 font-mono">
          <div className="mono-tag text-[10px] text-electric uppercase font-bold flex items-center space-x-1.5">
            <Shield className="w-4 h-4" />
            <span>// CYBERSECURITY PROTOCOL &amp; PRACTICAL LABS</span>
          </div>

          <div className="text-xs text-mono-300 print:text-slate-700 space-y-1.5 leading-relaxed">
            <p>
              &bull; <strong>PortSwigger Web Security Academy:</strong> Hands-on training in SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and Broken Access Control.
            </p>
            <p>
              &bull; <strong>Network Inspection:</strong> Deep packet inspection using Wireshark, active host and port discovery via Nmap, and traffic interception with Burp Suite.
            </p>
            <p>
              &bull; <strong>Operating Environments:</strong> Linux (Kali/Debian) terminal administration, bash automation scripts, and foundational Capture The Flag (CTF) challenges on Hack The Box.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
