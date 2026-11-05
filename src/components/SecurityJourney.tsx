"use client";

import {
  ShieldAlert,
  Terminal,
  Search,
  Lock,
  Binary,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import { SECURITY_JOURNEY } from "@/data/portfolioData";

export default function SecurityJourney() {
  return (
    <section id="security" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>04. CYBERSECURITY &amp; ETHICAL RESEARCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Hands-On Security Labs &amp; Methodologies
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Practical learning experiences in web application security, network reconnaissance, and defensive systems hardening.
            </p>
          </div>

          {/* Ethics statement badge */}
          <div className="p-3 rounded-xl bg-surface-secondary/70 border border-surface-border flex items-center gap-2.5 text-xs text-slate-300 max-w-md self-start md:self-auto">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Ethical Standards:</strong> All testing and vulnerability analyses are practiced exclusively within authorized labs, local VMs, and educational sandboxes.
            </span>
          </div>
        </div>

        {/* Security Lab Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECURITY_JOURNEY.map((milestone) => (
            <div
              key={milestone.title}
              className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-black/20"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                      {milestone.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mt-0.5">
                      {milestone.title}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-surface-secondary border border-surface-border shrink-0">
                    {milestone.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Focus Areas */}
                <div className="space-y-1.5 pt-2 border-t border-surface-border/60">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Core Focus &amp; Practical Techniques
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {milestone.focusAreas.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools footer */}
              <div className="pt-4 mt-4 border-t border-surface-border/60">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">
                    Environment:
                  </span>
                  {milestone.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-secondary text-slate-300 border border-surface-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Lab Terminal Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-surface-secondary/50 border border-surface-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">
                Application Security &amp; Network Defense Synergy
              </h4>
              <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                By understanding attack vectors from an offensive viewpoint—such as SQL injection, broken authorization, or unhardened routing protocols—I design more resilient architectures from day one in the development lifecycle.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-surface border border-surface-border text-white hover:border-emerald-500/50 hover:bg-surface-hover transition-colors shrink-0"
          >
            <span>Review Network &amp; Security Projects</span>
            <span className="text-emerald-400">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

