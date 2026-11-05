"use client";

import Link from "next/link";
import {
  ShieldAlert,
  Terminal,
  Lock,
  Search,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Binary,
  ArrowRight,
} from "lucide-react";
import { SECURITY_JOURNEY, PERSONAL_INFO } from "@/data/portfolioData";
import SecurityVulnerabilityLab from "@/components/SecurityVulnerabilityLab";

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <div className="mono-tag text-xs text-electric">
          [ CYBERSECURITY &amp; ETHICAL RESEARCH PROTOCOL ]
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-mono-100 uppercase text-hover-glow cursor-default">
          SECURITY LABS &amp; AUDITS
        </h1>
        <p className="font-mono text-xs sm:text-sm text-mono-400 max-w-3xl leading-relaxed">
          Applied practice in web application penetration testing, network reconnaissance, and defensive engineering. Conducted strictly within authorized labs, local virtual machines, and educational sandboxes.
        </p>
      </div>

      {/* Ethics Banner */}
      <div className="border border-mono-800 bg-monocard p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="mono-tag text-xs text-electric flex items-center space-x-2">
            <Lock className="w-3.5 h-3.5" />
            <span>ETHICAL RESEARCH &amp; RESPONSIBLE DISCLOSURE</span>
          </div>
          <h2 className="font-display text-xl font-bold text-mono-100 uppercase">
            Strict Adherence to Authorized Boundaries
          </h2>
          <p className="font-mono text-xs text-mono-400 max-w-2xl leading-relaxed">
            All offensive techniques, vulnerability scanners, and traffic interception setups are utilized for defense, educational mastery, and hardening production software.
          </p>
        </div>

        <div className="font-mono text-xs text-electric border border-electric/40 bg-electric/5 px-4 py-3 shrink-0">
          STATUS: ETHICAL // SANDBOX ONLY
        </div>
      </div>

      {/* Interactive AppSec Vulnerability & Defense Simulator */}
      <SecurityVulnerabilityLab />

      {/* Security Lab Milestones */}
      <div className="space-y-6">
        <div className="mono-tag text-xs text-mono-500 uppercase border-b border-monoborder pb-3">
          // PRACTICAL SECURITY LAB NODES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECURITY_JOURNEY.map((milestone) => (
            <div
              key={milestone.title}
              className="border border-mono-800 bg-monocard p-6 space-y-6 flex flex-col justify-between hover:border-electric transition-colors"
            >
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="mono-tag text-electric text-[10px] border border-electric/30 bg-electric/5 px-2 py-0.5">
                    {milestone.category}
                  </span>
                  <span className="text-mono-500">[{milestone.period}]</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-mono-100 uppercase">
                    {milestone.title}
                  </h3>
                </div>

                <p className="text-mono-300 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Focus Items */}
                <div className="space-y-2 pt-2 border-t border-monoborder">
                  <div className="text-[10px] text-mono-500 uppercase">
                    Core Focus &amp; Practical Exercises:
                  </div>
                  <ul className="space-y-1.5 text-mono-400 text-[11px]">
                    {milestone.focusAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-electric">&bull;</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools row */}
              <div className="pt-4 border-t border-monoborder flex flex-wrap gap-1.5 font-mono text-[10px]">
                {milestone.tools.map((t) => (
                  <span
                    key={t}
                    className="border border-mono-800 bg-monodark px-2 py-0.5 text-mono-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Synergistic Callout */}
      <div className="border border-mono-800 bg-monocard p-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
        <div className="space-y-2 text-center md:text-left">
          <div className="mono-tag text-electric">
            // FULL-STACK DEFENSE SYNERGY
          </div>
          <h3 className="font-display text-xl font-bold uppercase text-mono-100">
            CONNECT SECURITY AUDITS TO YOUR REPOSITORIES
          </h3>
          <p className="text-mono-400 max-w-xl">
            Want to see how these security concepts are integrated into verified software projects like the Haile Hotels enterprise network simulation?
          </p>
        </div>

        <Link
          href="/works"
          className="border border-mono-100 bg-mono-100 text-monodark px-6 py-3 font-bold hover:bg-electric hover:border-electric transition-all uppercase shrink-0"
        >
          VIEW NETWORK &amp; SEC PROJECTS &rarr;
        </Link>
      </div>
    </div>
  );
}

