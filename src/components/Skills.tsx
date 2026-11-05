"use client";

import { useState } from "react";
import {
  Code2,
  Layout,
  Server,
  Database,
  Network,
  ShieldAlert,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-4 h-4" />;
      case "Layout":
        return <Layout className="w-4 h-4" />;
      case "Server":
        return <Server className="w-4 h-4" />;
      case "Database":
        return <Database className="w-4 h-4" />;
      case "Network":
        return <Network className="w-4 h-4" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-4 h-4" />;
      case "Terminal":
        return <Terminal className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const displayedCategories =
    activeCategory === "all"
      ? SKILL_CATEGORIES
      : [SKILL_CATEGORIES[activeCategory]];

  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-mono font-medium border border-brand-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>02. TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Categorized Technical Proficiencies
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Verified skills and technologies practiced across academic projects, personal implementations, and hands-on security labs.
            </p>
          </div>

          {/* Honest Metric Callout */}
          <div className="p-3.5 rounded-xl bg-surface-secondary/70 border border-surface-border flex items-start gap-3 max-w-md text-xs text-slate-300">
            <Info className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
            <span>
              <strong>Authentic Representation:</strong> Skills are presented with practical context rather than arbitrary &quot;percentage bars&quot; to reflect actual applied experience.
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-surface-border">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCategory === "all"
                ? "bg-brand-500 text-slate-950 font-semibold shadow-sm"
                : "bg-surface text-slate-400 hover:text-white hover:bg-surface-hover border border-surface-border"
            }`}
          >
            All Disciplines ({SKILL_CATEGORIES.length})
          </button>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === idx
                  ? "bg-brand-500 text-slate-950 font-semibold shadow-sm"
                  : "bg-surface text-slate-400 hover:text-white hover:bg-surface-hover border border-surface-border"
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-surface/70 border border-surface-border hover:border-brand-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-black/20"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-surface-border flex items-center justify-center text-brand-400 group-hover:border-brand-500/50 transition-colors">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400">{category.description}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-surface-secondary px-2 py-0.5 rounded border border-surface-border/80">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skill List */}
                <div className="space-y-2.5 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-surface-secondary/50 border border-surface-border/50 hover:bg-surface-secondary hover:border-surface-border transition-colors text-xs"
                    >
                      <div className="flex items-center justify-between font-semibold text-slate-200">
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10">
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.note && (
                        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

