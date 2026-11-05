"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CyberHUD from "@/components/CyberHUD";
import CmdKMenu from "@/components/CmdKMenu";
import InteractiveTerminal from "@/components/InteractiveTerminal";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenCmd={() => setCmdOpen(true)} />
      <main className="flex-1 w-full relative z-10">{children}</main>
      <Footer />
      <CyberHUD onOpenCmd={() => setCmdOpen(true)} />
      <CmdKMenu isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
      <InteractiveTerminal />
    </div>
  );
}

