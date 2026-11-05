"use client";

import { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, Layers, Terminal } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl border border-mono-700 bg-monocard text-mono-100 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-monoborder bg-monodark flex items-start justify-between">
          <div className="space-y-1 pr-6 font-mono">
            <div className="flex items-center space-x-2">
              <span className="mono-tag text-electric text-[10px] border border-electric/30 bg-electric/5 px-2 py-0.5">
                {project.categoryLabel}
              </span>
              <span className="text-mono-500 text-[10px]">
                // STATUS: {project.status.toUpperCase()}
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-mono-100 tracking-tight mt-1">
              {project.title}
            </h3>
            <p className="text-xs text-mono-400">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-8 w-8 items-center justify-center border border-mono-800 bg-monodark text-mono-400 hover:border-electric hover:text-electric transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 font-mono text-xs">
          {/* Architecture Overview */}
          <div className="space-y-2">
            <div className="mono-tag text-[10px] text-mono-500 uppercase">
              // ARCHITECTURAL SPECIFICATION &amp; OVERVIEW
            </div>
            <p className="text-mono-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights */}
          <div className="space-y-2.5">
            <div className="mono-tag text-[10px] text-mono-500 uppercase">
              // KEY TECHNICAL HIGHLIGHTS
            </div>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start space-x-2 text-mono-300">
                  <span className="text-electric font-bold">&bull;</span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-4 border border-mono-800 bg-monodark space-y-1">
              <div className="text-[10px] text-electric uppercase font-bold">
                SYSTEM DESIGN NOTE
              </div>
              <p className="text-mono-400 text-[11px] leading-relaxed">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-2">
            <div className="mono-tag text-[10px] text-mono-500 uppercase">
              // STACK &amp; PROTOCOLS
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="border border-mono-800 bg-monodark px-2 py-0.5 text-mono-300"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-monoborder bg-monodark flex items-center justify-between font-mono text-xs">
          <div>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 border border-mono-700 hover:border-electric bg-monocard px-3 py-1.5 text-mono-200 hover:text-electric transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>VIEW REPO</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            ) : (
              <span className="text-mono-500 italic text-[11px]">
                INTERNAL ACADEMIC CODEBASE
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="border border-mono-800 hover:border-mono-600 px-4 py-1.5 text-mono-400 hover:text-mono-200 transition-colors"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
}
