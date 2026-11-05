"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Command,
  X,
  FileText,
  Github,
  Mail,
  Network,
  Shield,
  Layers,
  Terminal,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";

interface CmdKMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOption {
  id: string;
  category: "PAGES" | "PROJECTS" | "ACTIONS" | "SECURITY";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CmdKMenu({ isOpen, onClose }: CmdKMenuProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const options: CommandOption[] = [
    // Navigation
    {
      id: "nav-home",
      category: "PAGES",
      title: "HOME BASE",
      subtitle: "Overview, telemetry & interactive CLI",
      icon: <Terminal className="w-3.5 h-3.5 text-electric" />,
      action: () => router.push("/"),
    },
    {
      id: "nav-about",
      category: "PAGES",
      title: "ABOUT // PERSONA & PHILOSOPHY",
      subtitle: "Academic journey & engineering methodology",
      icon: <Terminal className="w-3.5 h-3.5 text-electric" />,
      action: () => router.push("/about"),
    },
    {
      id: "nav-works",
      category: "PAGES",
      title: "WORKS // LABORATORY ARCHIVE",
      subtitle: "Search verified codebases & network blueprints",
      icon: <Layers className="w-3.5 h-3.5 text-electric" />,
      action: () => router.push("/works"),
    },
    {
      id: "nav-security",
      category: "PAGES",
      title: "SECURITY // ETHICAL LABS",
      subtitle: "PortSwigger, Nmap, Wireshark, Burp Suite",
      icon: <Shield className="w-3.5 h-3.5 text-electric" />,
      action: () => router.push("/security"),
    },
    {
      id: "nav-links",
      category: "PAGES",
      title: "LINKS // DIRECTORY NODES",
      subtitle: "Direct endpoints to repos & documentation",
      icon: <ExternalLink className="w-3.5 h-3.5 text-electric" />,
      action: () => router.push("/links"),
    },
    {
      id: "nav-contact",
      category: "PAGES",
      title: "CONTACT // DIRECT TRANSMISSION",
      subtitle: "Dispatch inquiry or collaboration message",
      icon: <Mail className="w-3.5 h-3.5 text-electric" />,
      action: () => router.push("/contact"),
    },
    {
      id: "nav-resume",
      category: "PAGES",
      title: "CV // PDF EXPORT",
      subtitle: "Print-ready digital curriculum vitae",
      icon: <FileText className="w-3.5 h-3.5 text-electric" />,
      action: () => router.push("/resume"),
    },

    // Projects
    {
      id: "proj-haile",
      category: "PROJECTS",
      title: "HAILE HOTELS ENTERPRISE NETWORK DESIGN",
      subtitle: "500+ users, VLAN, OSPF, DHCP, NAT, ACL (Cisco Packet Tracer)",
      icon: <Network className="w-3.5 h-3.5 text-electric" />,
      action: () => window.open("https://github.com/Yamtk1178/Networking-Project", "_blank"),
    },
    {
      id: "proj-qa",
      category: "PROJECTS",
      title: "CYPRESS QA TEST AUTOMATION WORKSPACE",
      subtitle: "End-to-end browser regression assertion suite",
      icon: <Layers className="w-3.5 h-3.5 text-electric" />,
      action: () => window.open("https://github.com/Yamtk1178/Quality-Assurance-Project", "_blank"),
    },
    {
      id: "proj-lms",
      category: "PROJECTS",
      title: "KOTLIN LAYERED LIBRARY MANAGEMENT",
      subtitle: "Multi-tier architecture in Kotlin with Gradle",
      icon: <Terminal className="w-3.5 h-3.5 text-electric" />,
      action: () => window.open("https://github.com/Yamtk1178/kotlin__gradle_project", "_blank"),
    },

    // Actions
    {
      id: "action-copy-email",
      category: "ACTIONS",
      title: "COPY DIRECT EMAIL TO CLIPBOARD",
      subtitle: PERSONAL_INFO.email,
      icon: <Mail className="w-3.5 h-3.5 text-electric" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        alert(`Copied ${PERSONAL_INFO.email} to clipboard!`);
      },
    },
    {
      id: "action-github",
      category: "ACTIONS",
      title: "OPEN GITHUB PROFILE",
      subtitle: "github.com/Yamtk1178",
      icon: <Github className="w-3.5 h-3.5 text-electric" />,
      action: () => window.open(PERSONAL_INFO.github, "_blank"),
    },
  ];

  const filtered = options.filter(
    (opt) =>
      opt.title.toLowerCase().includes(query.toLowerCase()) ||
      (opt.subtitle && opt.subtitle.toLowerCase().includes(query.toLowerCase())) ||
      opt.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : onClose(); // handled by parent toggle
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      } else if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
        } else if (e.key === "Enter" && filtered[selectedIndex]) {
          e.preventDefault();
          filtered[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl border border-mono-700 bg-monocard text-mono-100 shadow-[0_0_60px_rgba(0,0,0,0.95)] overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 bg-monodark border-b border-monoborder space-x-3">
          <Search className="w-4 h-4 text-electric" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="TYPE COMMAND, REPOSITORY, OR PAGE..."
            className="flex-1 bg-transparent border-none outline-none text-mono-100 placeholder-mono-600 text-xs focus:ring-0 p-0"
          />
          <kbd className="hidden sm:inline border border-mono-800 bg-monocard px-2 py-0.5 text-[10px] text-mono-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-mono-500">
              No matching node or command found.
            </div>
          ) : (
            filtered.map((opt, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={opt.id}
                  onClick={() => {
                    opt.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-2.5 cursor-pointer border transition-colors ${
                    isSelected
                      ? "border-electric bg-electric/10 text-mono-100 shadow-[0_0_15px_rgba(0,255,102,0.15)]"
                      : "border-transparent text-mono-300 hover:border-mono-800 hover:bg-monodark"
                  }`}
                >
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="p-1.5 border border-mono-800 bg-monodark shrink-0">
                      {opt.icon}
                    </div>
                    <div className="truncate">
                      <div className="font-bold flex items-center space-x-2">
                        <span className={isSelected ? "text-electric" : "text-mono-100"}>
                          {opt.title}
                        </span>
                        <span className="text-[10px] text-mono-500 uppercase">
                          [{opt.category}]
                        </span>
                      </div>
                      {opt.subtitle && (
                        <div className="text-[11px] text-mono-400 truncate">
                          {opt.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-3.5 h-3.5 shrink-0 ml-2 transition-transform ${
                      isSelected ? "text-electric translate-x-1" : "text-mono-600"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-monodark border-t border-monoborder flex items-center justify-between text-[10px] text-mono-500">
          <span>Navigate: &uarr; &darr; &bull; Execute: ENTER</span>
          <span className="text-electric">KIDUS.OS SPOTLIGHT</span>
        </div>
      </div>
    </div>
  );
}

