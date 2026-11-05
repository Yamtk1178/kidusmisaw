"use client";

import { useState } from "react";
import {
  Code2,
  Github,
  ExternalLink,
  Shield,
  Layers,
  Network,
  CheckCircle,
  FolderGit2,
  ChevronRight,
  Info,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "network-sec", label: "Network & Security" },
    { id: "fullstack", label: "Full-Stack & Web" },
    { id: "qa", label: "QA & Automation" },
    { id: "systems", label: "Systems Architecture" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-surface/30 border-y border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-mono font-medium border border-brand-500/20">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03. FEATURED ENGINEERING PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Technical Implementations
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Real codebases, network topology simulations, automated testing suites, and ongoing systems from my GitHub profile.
            </p>
          </div>

          <a
            href="https://github.com/Yamtk1178"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-surface border border-surface-border text-slate-200 hover:text-white hover:border-brand-500/50 hover:bg-surface-hover transition-colors shadow-sm self-start md:self-auto"
          >
            <Github className="w-4 h-4 text-slate-300" />
            <span>github.com/Yamtk1178</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-surface-border">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-brand-500 text-slate-950 font-semibold shadow-sm"
                  : "bg-surface text-slate-400 hover:text-white hover:bg-surface-hover border border-surface-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-surface border border-surface-border hover:border-brand-500/40 transition-all flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl hover:shadow-black/30"
            >
              {/* Card Header Top Accent */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface-secondary text-brand-400 border border-surface-border font-medium">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {project.statusLabel || "Completed"}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">{project.subtitle}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights preview */}
                <div className="space-y-1.5 pt-2 border-t border-surface-border/60">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Core Engineering Highlights
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-300">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-brand-400 font-bold shrink-0">›</span>
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-secondary text-slate-300 border border-surface-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-surface-secondary/40">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-surface-secondary/60 border-t border-surface-border flex items-center justify-between gap-2">
                <button
                  onClick={() => setModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-brand-400" />
                  <span>Inspect Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-hover transition-colors"
                      title="View source code on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-brand-400 hover:text-brand-300 hover:bg-surface-hover transition-colors"
                      title="Launch live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
}

