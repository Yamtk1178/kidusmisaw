"use client";

import { useState, useEffect } from "react";
import { Clock, Eye, EyeOff, Terminal, Sparkles, Command } from "lucide-react";

interface CyberHUDProps {
  onOpenCmd: () => void;
}

export default function CyberHUD({ onOpenCmd }: CyberHUDProps) {
  const [time, setTime] = useState("");
  const [scanlinesActive, setScanlinesActive] = useState(true);
  const [matrixActive, setMatrixActive] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to East Africa Time (UTC+3)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Addis_Ababa",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleScanlines = () => {
    const overlay = document.querySelector(".scanline-overlay");
    if (overlay) {
      if (scanlinesActive) {
        overlay.classList.add("hidden");
        setScanlinesActive(false);
      } else {
        overlay.classList.remove("hidden");
        setScanlinesActive(true);
      }
    }
  };

  const toggleMatrix = () => {
    setMatrixActive((prev) => !prev);
  };

  return (
    <>
      {/* Matrix Rain Canvas (Optional Background Effect) */}
      {matrixActive && <MatrixRainCanvas onClose={() => setMatrixActive(false)} />}

      {/* Floating Bottom-Right Cyber HUD Widget */}
      <div className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center space-x-2 border border-mono-800 bg-monocard/90 backdrop-blur-md px-3 py-1.5 font-mono text-[11px] text-mono-400 shadow-xl select-none">
        {/* Debre Birhan Live Time */}
        <div className="flex items-center space-x-1.5 border-r border-monoborder pr-3">
          <Clock className="w-3.5 h-3.5 text-electric" />
          <span className="text-mono-200 font-semibold">{time || "12:00:00"}</span>
          <span className="text-mono-500 text-[10px]">EAT (DBU)</span>
        </div>

        {/* Scanlines Toggle */}
        <button
          onClick={toggleScanlines}
          title={scanlinesActive ? "Disable CRT Scanlines" : "Enable CRT Scanlines"}
          className={`px-2 py-0.5 border transition-colors ${
            scanlinesActive
              ? "border-electric/40 text-electric bg-electric/5"
              : "border-mono-800 text-mono-500 hover:text-mono-300"
          }`}
        >
          {scanlinesActive ? "CRT: ON" : "CRT: OFF"}
        </button>

        {/* Matrix Rain Toggle */}
        <button
          onClick={toggleMatrix}
          title="Toggle Cyber Matrix Digital Rain"
          className={`px-2 py-0.5 border transition-colors ${
            matrixActive
              ? "border-electric text-monodark bg-electric font-bold"
              : "border-mono-800 text-mono-500 hover:text-electric"
          }`}
        >
          MATRIX
        </button>

        {/* Terminal Overlay Toggle */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("toggle-terminal"))}
          title="Toggle Static CLI Terminal Overlay (Press ` or ~)"
          className="flex items-center space-x-1 border border-mono-800 hover:border-electric bg-monodark px-2 py-0.5 text-mono-300 hover:text-electric transition-colors"
        >
          <Terminal className="w-3 h-3 text-electric" />
          <span>CLI: ~</span>
        </button>

        {/* Command Palette Trigger */}
        <button
          onClick={onOpenCmd}
          className="flex items-center space-x-1 border border-mono-800 hover:border-electric bg-monodark px-2 py-0.5 text-mono-300 hover:text-electric transition-colors"
        >
          <Command className="w-3 h-3 text-electric" />
          <span>CTRL+K</span>
        </button>
      </div>
    </>
  );
}

function MatrixRainCanvas({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01KIDUSMISAWDBUSOFTWAREENGINEERINGCYBERSECURITY10101010";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -50;
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff66";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-30 pointer-events-none opacity-45">
      <canvas id="matrix-canvas" className="w-full h-full" />
    </div>
  );
}

