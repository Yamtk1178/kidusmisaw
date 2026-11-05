"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Minus, Sparkles, Command } from "lucide-react";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from "@/data/portfolioData";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

// Static Pill button matching the screenshot to place below profile or anywhere
export function TerminalLauncherPill() {
  const toggle = () => {
    window.dispatchEvent(new CustomEvent("toggle-terminal"));
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center space-x-3.5 rounded-full border border-emerald-500/35 hover:border-electric bg-[#0b1019] hover:bg-[#0f1724] px-5 py-2.5 font-mono text-sm text-mono-100 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,255,102,0.25)] select-none group cursor-pointer"
      title="Toggle Static CLI Terminal Overlay (Press ` or ~)"
    >
      <span className="text-electric font-bold tracking-tight text-base group-hover:scale-110 transition-transform">
        &gt;_
      </span>
      <span className="font-semibold tracking-wide text-slate-100 text-xs sm:text-sm">
        CLI Terminal
      </span>
      <span className="rounded-md border border-[#2a3449] bg-[#161e2e] px-2 py-0.5 text-[11px] text-[#c084fc] font-mono font-semibold">
        `~`
      </span>
    </button>
  );
}

// Static Fixed Overlay Window that does not shift or move page content
export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "kidus --init",
      output: (
        <div className="space-y-1 text-mono-400">
          <div className="text-electric font-bold">
            [+] KIDUS.OS v4.0.2 [STATIC OVERLAY READY]
          </div>
          <div>
            Kidus Misaw &bull; 4th-Year Software Engineering &bull; Debre Berhan University
          </div>
          <div className="text-mono-500">
            Type <span className="text-electric">&apos;help&apos;</span> to inspect commands or click quick chips below.
          </div>
        </div>
      ),
    },
  ]);

  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [enteredCommands, setEnteredCommands] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [history, isOpen]);

  // Listen for toggle event and global `~` / ` hotkey
  useEffect(() => {
    const handleToggleEvent = () => {
      setIsOpen((prev) => !prev);
    };

    const handleGlobalTilde = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (
          activeTag !== "input" &&
          activeTag !== "textarea" &&
          document.activeElement !== inputRef.current
        ) {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener("toggle-terminal", handleToggleEvent);
    window.addEventListener("keydown", handleGlobalTilde);
    return () => {
      window.removeEventListener("toggle-terminal", handleToggleEvent);
      window.removeEventListener("keydown", handleGlobalTilde);
    };
  }, []);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setEnteredCommands((prev) => [...prev, rawCmd]);
    setCommandIndex(-1);

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-mono-300">
            <div className="text-electric font-semibold">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
              <div>
                <span className="text-electric font-bold">whoami</span> - Identity &amp; university profile
              </div>
              <div>
                <span className="text-electric font-bold">skills</span> - Categorized technical stack
              </div>
              <div>
                <span className="text-electric font-bold">projects</span> - Verified engineering repos
              </div>
              <div>
                <span className="text-electric font-bold">security</span> - Practical labs &amp; toolchain
              </div>
              <div>
                <span className="text-electric font-bold">contact</span> - Direct communication channels
              </div>
              <div>
                <span className="text-electric font-bold">status</span> - Academic telemetry &amp; cohort
              </div>
              <div>
                <span className="text-electric font-bold">network</span> - Cisco Packet Tracer topology info
              </div>
              <div>
                <span className="text-electric font-bold">ctf</span> - Capture The Flag cipher challenge
              </div>
              <div>
                <span className="text-electric font-bold">matrix</span> - Stream digital rain signal
              </div>
              <div>
                <span className="text-electric font-bold">clear</span> - Flush terminal screen
              </div>
              <div>
                <span className="text-electric font-bold">repo</span> - Open main portfolio GitHub
              </div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-mono-300">
            <div className="text-electric font-bold">{PERSONAL_INFO.name}</div>
            <div>{PERSONAL_INFO.role}</div>
            <div className="text-mono-400">
              Institution: {PERSONAL_INFO.university} ({PERSONAL_INFO.academicYear})
            </div>
            <div className="text-mono-400">
              Location: {PERSONAL_INFO.location} [09&deg;41&apos;N 39&deg;32&apos;E]
            </div>
            <div className="text-mono-400 pt-1 italic">
              &quot;{PERSONAL_INFO.summary}&quot;
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-mono-300">
            <div className="text-electric font-bold">TECHNICAL PROFICIENCIES:</div>
            {SKILL_CATEGORIES.map((c) => (
              <div key={c.title} className="text-[11px]">
                <span className="text-mono-400 font-bold uppercase">{c.title}:</span>{" "}
                <span className="text-mono-200">
                  {c.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-mono-300">
            <div className="text-electric font-bold">VERIFIED REPOSITORIES:</div>
            {PROJECTS.slice(0, 4).map((p, i) => (
              <div key={p.id} className="text-[11px] space-y-0.5">
                <div className="text-mono-100 font-bold">
                  {i + 1}. {p.title}
                </div>
                <div className="text-mono-400">{p.subtitle}</div>
                <div className="text-electric text-[10px]">
                  Stack: {p.technologies.slice(0, 4).join(", ")}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "security":
        output = (
          <div className="space-y-1 text-mono-300">
            <div className="text-electric font-bold">PRACTICAL CYBERSECURITY PROTOCOL:</div>
            <div className="text-[11px]">
              &bull; <strong className="text-mono-100">PortSwigger Web Security Academy:</strong> SQLi, XSS, CSRF, Broken Access Control
            </div>
            <div className="text-[11px]">
              &bull; <strong className="text-mono-100">Network Reconnaissance:</strong> Wireshark deep packet analysis, Nmap active host discovery
            </div>
            <div className="text-[11px]">
              &bull; <strong className="text-mono-100">Interception Proxies:</strong> Burp Suite request tampering &amp; repeater testing
            </div>
            <div className="text-[11px]">
              &bull; <strong className="text-mono-100">Operating Environment:</strong> Linux (Kali / Debian) bash automation &amp; CTF sandboxes
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-mono-300">
            <div className="text-electric font-bold">COMMUNICATION CHANNELS:</div>
            <div className="text-[11px]">Email: <span className="text-mono-100">{PERSONAL_INFO.email}</span></div>
            <div className="text-[11px]">Phone: <span className="text-mono-100">{PERSONAL_INFO.phone}</span></div>
            <div className="text-[11px]">GitHub: <span className="text-mono-100">{PERSONAL_INFO.github}</span></div>
            <div className="text-[11px]">Coordinates: <span className="text-mono-100">{PERSONAL_INFO.location}</span></div>
          </div>
        );
        break;

      case "status":
        output = (
          <div className="space-y-1 text-mono-300">
            <div className="text-electric font-bold">SYSTEM TELEMETRY:</div>
            <div className="text-[11px]">NODE: Debre Berhan University Workstation</div>
            <div className="text-[11px]">COHORT: 4th-Year Undergraduate (Expected 2026)</div>
            <div className="text-[11px]">INTEGRITY: 100% Verified Academic &amp; Repository Records</div>
            <div className="text-[11px] text-electric">STATUS: Ready for Internships &amp; Collaborations</div>
          </div>
        );
        break;

      case "network":
        output = (
          <div className="space-y-1 text-mono-300">
            <div className="text-electric font-bold">HAILE HOTELS TOPOLOGY SUBNETS:</div>
            <div className="text-[11px]">VLAN 10: 192.168.10.0/24 [Management / SSHv2]</div>
            <div className="text-[11px]">VLAN 20: 192.168.20.0/24 [Staff &amp; Operations]</div>
            <div className="text-[11px]">VLAN 30: 172.16.30.0/24 [Guest Wi-Fi / ACL Filtered]</div>
            <div className="text-[11px]">VLAN 40: 10.10.40.0/24 [Core Server Farm]</div>
            <div className="text-[10px] text-mono-500">Routing: OSPF Area 0 &bull; Translation: NAT/PAT Overload</div>
          </div>
        );
        break;

      case "ctf":
      case "cipher":
        output = (
          <div className="space-y-1.5 p-2 border border-mono-800 bg-monodark text-mono-300">
            <div className="text-electric font-bold flex items-center space-x-1">
              <span>[+] CTF EASTER EGG // HIDDEN ENCRYPTED SIGNAL:</span>
            </div>
            <div className="text-[11px] font-mono text-mono-200 bg-monocard p-1.5 border border-mono-800">
              ZmxhZ3tkYnVfc29mdHdhcmVfZW5naW5lZXJpbmdfMjAyNn0=
            </div>
            <div className="text-[10px] text-mono-500">
              Hint: Standard Base64 encoded payload. Decodes to: <span className="text-electric">flag&#123;dbu_software_engineering_2026&#125;</span>
            </div>
          </div>
        );
        break;

      case "matrix":
        output = (
          <div className="text-electric text-[10px] font-mono leading-tight whitespace-pre">
{`01001011 01001001 01000100 01010101 01010011
[+] STREAMING TELEMETRY MATRIX TO LOCAL CLIENT BUFFER...
01010011 01010111 01000101 00101101 01000100 01000010 01010101`}
          </div>
        );
        break;

      case "repo":
        window.open(PERSONAL_INFO.github, "_blank");
        output = (
          <div className="text-electric text-[11px]">
            [+] Dispatched browser redirect to GitHub repository: {PERSONAL_INFO.github}
          </div>
        );
        break;

      case "sudo":
        output = (
          <div className="text-amber-400 text-[11px]">
            [!] Permission denied: Ethical researchers do not require root elevation here.
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <div className="text-red-400 text-[11px]">
            command not found: &apos;{cmd}&apos;. Type <span className="text-electric underline cursor-pointer" onClick={() => handleCommand("help")}>&apos;help&apos;</span> to inspect valid operations.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (enteredCommands.length > 0) {
        const nextIndex =
          commandIndex === -1
            ? enteredCommands.length - 1
            : Math.max(0, commandIndex - 1);
        setCommandIndex(nextIndex);
        setInput(enteredCommands[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandIndex !== -1) {
        const nextIndex = commandIndex + 1;
        if (nextIndex < enteredCommands.length) {
          setCommandIndex(nextIndex);
          setInput(enteredCommands[nextIndex]);
        } else {
          setCommandIndex(-1);
          setInput("");
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-16 right-4 sm:right-6 z-50 w-[94vw] sm:w-[560px] max-w-[560px] border border-mono-700 bg-monocard/95 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.95)] overflow-hidden font-mono text-xs animate-fade-in text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-monodark border-b border-monoborder select-none">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(false)}
            className="w-2.5 h-2.5 rounded-full bg-red-500/80 hover:opacity-100 transition-opacity"
            title="Minimize"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="w-2.5 h-2.5 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity"
            title="Collapse"
          />
          <div className="w-2.5 h-2.5 rounded-full bg-electric/80" />
          <span className="text-[11px] text-mono-400 ml-2 font-semibold">
            kidus@dbu-node: ~ (static overlay)
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[10px] text-mono-500">
          <span className="text-electric flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            <span>OVERLAY ACTIVE</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-mono-500 hover:text-electric ml-2"
            title="Close Terminal Overlay (Press ` or ~)"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Body Screen */}
      <div
        className="p-4 space-y-3 max-h-72 overflow-y-auto bg-monodark/95 cursor-text text-left"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1 leading-relaxed">
            <div className="flex items-center space-x-2 text-mono-400">
              <span className="text-electric font-bold">kidus@dbu-node:~$</span>
              <span className="text-mono-100">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}

        {/* Live Input Prompt */}
        <div className="flex items-center space-x-2 text-mono-100 pt-1">
          <span className="text-electric font-bold">kidus@dbu-node:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-mono-100 font-mono text-xs focus:ring-0 p-0"
            placeholder="type 'help' or click quick chips..."
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Interactive Command Chips Bar */}
      <div className="px-4 py-2 bg-monocard border-t border-monoborder flex flex-wrap items-center gap-1.5 text-[10px] text-mono-400">
        <span className="text-mono-500 mr-1 uppercase">Quick:</span>
        {["help", "whoami", "skills", "projects", "network", "security", "ctf", "contact", "clear"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="border border-mono-800 bg-monodark hover:border-electric hover:text-electric px-2 py-0.5 transition-colors uppercase"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
