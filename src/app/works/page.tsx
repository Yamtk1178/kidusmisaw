"use client";

import { useState } from "react";
import {
  Search,
  ExternalLink,
  Github,
  Layers,
  Shield,
  Network,
  Info,
  CheckCircle2,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "@/components/ProjectModal";
import NetworkTopologyInspector from "@/components/NetworkTopologyInspector";

export default function WorksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "ALL" },
    { id: "network-sec", label: "NETWORK & SECURITY" },
    { id: "fullstack", label: "FULL-STACK" },
    { id: "qa", label: "QA & TESTING" },
    { id: "systems", label: "SYSTEMS ARCHITECTURE" },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory =
      selectedCategory === "all" || proj.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="mono-tag text-xs text-electric">
          [ LABORATORY WORK ARCHIVE ]
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-mono-100 uppercase text-hover-glow cursor-default">
          WORKS &amp; EXPERIMENTS
        </h1>
        <p className="font-mono text-xs sm:text-sm text-mono-400 max-w-3xl leading-relaxed">
          A comprehensive catalog of enterprise network topology simulations, automated testing workspaces, layered console architectures, and full-stack software systems.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="space-y-4 font-mono text-xs">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mono-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="SEARCH REPOSITORY / STACK / PROTOCOL (e.g. OSPF, CYPRESS, KOTLIN)..."
            className="w-full bg-monocard border border-mono-800 px-11 py-3 text-mono-100 placeholder-mono-600 focus:outline-none focus:border-electric transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-mono-500 hover:text-electric text-[11px]"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 border-b border-monoborder pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 border transition-all ${
                selectedCategory === cat.id
                  ? "border-electric bg-electric text-monodark font-bold"
                  : "border-mono-800 bg-monocard text-mono-400 hover:border-mono-600 hover:text-mono-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Network Topology & Packet Trace Inspector */}
      <NetworkTopologyInspector />

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="border border-mono-800 bg-monocard p-12 text-center space-y-4 font-mono">
          <div className="mono-tag text-xs text-electric">
            // NO LABORATORY WORKS MATCHED YOUR QUERY
          </div>
          <p className="text-xs text-mono-400">
            No projects matched the search &quot;{searchQuery}&quot; in the selected category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="border border-mono-700 bg-monodark px-4 py-2 text-xs text-mono-200 hover:border-electric hover:text-electric"
          >
            RESET SEARCH &amp; FILTERS
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="border border-mono-800 bg-monocard p-6 flex flex-col justify-between hover:border-electric transition-all group space-y-6"
            >
              <div className="space-y-4">
                {/* Index & Category Row */}
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-mono-500 font-bold">
                    00{idx + 1}
                  </span>
                  <span className="mono-tag text-electric text-[10px] border border-electric/30 bg-electric/5 px-2 py-0.5">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-mono-100 group-hover:text-electric transition-colors uppercase leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-mono-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="font-mono text-xs text-mono-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-monoborder">
                  <div className="font-mono text-[10px] text-mono-500 uppercase">
                    Key Specifications:
                  </div>
                  <ul className="font-mono text-[11px] text-mono-400 space-y-1">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-electric">&bull;</span>
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="space-y-3 pt-4 border-t border-monoborder font-mono text-xs">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] text-mono-400 border border-mono-800 px-2 py-0.5 bg-monodark"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

                {/* Links Row */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setModalProject(project)}
                    className="text-mono-300 hover:text-electric flex items-center space-x-1"
                  >
                    <Info className="w-3.5 h-3.5 text-electric" />
                    <span>INSPECT SPEC</span>
                  </button>

                  <div className="flex items-center space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mono-300 hover:text-electric flex items-center space-x-1"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>CODE</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </div>
  );
}

