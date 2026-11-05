"use client";

import Link from "next/link";
import {
  ExternalLink,
  Github,
  Mail,
  Phone,
  FileText,
  GraduationCap,
  Network,
  Layers,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function LinksPage() {
  const directoryNodes = [
    {
      id: "001",
      title: "GITHUB PROFILE",
      category: "CODE REPOSITORIES",
      description: "Public codebases, project repositories, network simulation designs, and QA test suites.",
      url: "https://github.com/Yamtk1178",
      external: true,
      tag: "PRIMARY REPO",
    },
    {
      id: "002",
      title: "HAILE HOTELS NETWORK REPO",
      category: "CISCO PACKET TRACER",
      description: "500+ user hierarchical enterprise network simulation with VLAN, OSPF, DHCP, and ACL configurations.",
      url: "https://github.com/Yamtk1178/Networking-Project",
      external: true,
      tag: "NETWORKING",
    },
    {
      id: "003",
      title: "CYPRESS QA TEST SUITE",
      category: "QUALITY ASSURANCE",
      description: "End-to-end browser automation workspace testing input states, fixtures, and CI workflows.",
      url: "https://github.com/Yamtk1178/Quality-Assurance-Project",
      external: true,
      tag: "QA TESTING",
    },
    {
      id: "004",
      title: "KOTLIN LIBRARY MANAGEMENT",
      category: "SYSTEMS ARCHITECTURE",
      description: "Multi-tier layered console architecture separating presentation, service, repository, and model.",
      url: "https://github.com/Yamtk1178/kotlin__gradle_project",
      external: true,
      tag: "KOTLIN / GRADLE",
    },
    {
      id: "005",
      title: "DIGITAL RESUME // CV",
      category: "DOCUMENTATION",
      description: "Formal curriculum vitae detailing education, technical proficiencies, projects, and print-ready PDF export.",
      url: "/resume",
      external: false,
      tag: "PDF EXPORT",
    },
    {
      id: "006",
      title: "DIRECT EMAIL TRANSMISSION",
      category: "COMMUNICATION",
      description: "Direct email contact endpoint for internship opportunities, technical collaborations, and inquiries.",
      url: `mailto:${PERSONAL_INFO.email}`,
      external: true,
      tag: "EMAIL",
    },
    {
      id: "007",
      title: "DEBRE BERHAN UNIVERSITY",
      category: "ACADEMICS",
      description: "Undergraduate Software Engineering program profile and coursework catalog (Class of 2026).",
      url: "https://www.dbu.edu.et",
      external: true,
      tag: "ACADEMIC",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="mono-tag text-xs text-electric">
          [ INTERNET DIRECTORY &amp; LINKS ]
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-mono-100 uppercase text-hover-glow cursor-default">
          DIRECTORY NODES
        </h1>
        <p className="font-mono text-xs sm:text-sm text-mono-400 max-w-3xl leading-relaxed">
          Direct access endpoints to public codebases, network simulation blueprints, documentation files, and official communication channels.
        </p>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
        {directoryNodes.map((node) => (
          <div
            key={node.id}
            className="border border-mono-800 bg-monocard p-6 space-y-4 flex flex-col justify-between hover:border-electric transition-colors group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-mono-500 font-bold">{node.id}</span>
                <span className="mono-tag text-electric text-[10px] border border-electric/30 bg-electric/5 px-2 py-0.5">
                  {node.tag}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] text-mono-500 uppercase">{node.category}</div>
                <h3 className="font-display text-base font-bold text-mono-100 group-hover:text-electric transition-colors uppercase">
                  {node.title}
                </h3>
              </div>

              <p className="text-mono-400 text-[11px] leading-relaxed">
                {node.description}
              </p>
            </div>

            <div className="pt-4 border-t border-monoborder">
              {node.external ? (
                <a
                  href={node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-mono-200 hover:text-electric transition-colors font-bold text-[11px]"
                >
                  <span>ACCESS NODE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <Link
                  href={node.url}
                  className="flex items-center justify-between text-mono-200 hover:text-electric transition-colors font-bold text-[11px]"
                >
                  <span>ACCESS NODE</span>
                  <span className="text-electric">&rarr;</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

