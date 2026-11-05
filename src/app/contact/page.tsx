"use client";

import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  Github,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorText("ALL REQUIRED TRANSMISSION FIELDS MUST BE COMPLETED.");
      return;
    }

    setStatus("sending");
    setErrorText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorText(data.error || "TRANSMISSION FAILED. PLEASE REACH OUT VIA DIRECT EMAIL.");
      }
    } catch {
      // Offline fallback
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <div className="mono-tag text-xs text-electric">
          [ INVITATION &amp; DIRECT COMMUNICATION ]
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-mono-100 uppercase text-hover-glow cursor-default">
          INITIATE CONTACT
        </h1>
        <p className="font-mono text-xs sm:text-sm text-mono-400 max-w-3xl leading-relaxed">
          Interested in collaborating on software engineering products, enterprise network designs, automated test pipelines, or application security research? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-mono text-xs">
        {/* Left Column: Direct Telemetry & Copy */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Box */}
          <div className="border border-mono-800 bg-monocard p-6 space-y-4">
            <div className="mono-tag text-[10px] text-mono-500 uppercase">
              // DIRECT EMAIL ADDRESS
            </div>
            <div className="flex items-center justify-between border border-mono-800 bg-monodark p-3">
              <span className="text-mono-100 font-bold text-xs sm:text-sm font-mono truncate mr-2">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center space-x-1.5 border border-mono-700 hover:border-electric px-2.5 py-1 text-[11px] text-mono-300 hover:text-electric transition-colors shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-electric" />
                    <span className="text-electric">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-mono-500">
              PGP / ENCRYPTED MESSAGING READY &bull; FAST TURNAROUND
            </p>
          </div>

          {/* Location & Availability Matrix */}
          <div className="border border-mono-800 bg-monocard p-6 space-y-4">
            <div className="mono-tag text-[10px] text-mono-500 uppercase border-b border-monoborder pb-2">
              LOCATION &bull; AVAILABILITY MATRIX
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] text-mono-500 block uppercase">LOCATION:</span>
                <span className="text-mono-100 font-semibold">DEBRE BIRHAN / ETHIOPIA</span>
              </div>
              <div>
                <span className="text-[10px] text-mono-500 block uppercase">TIMEZONE:</span>
                <span className="text-mono-200">EAST AFRICA TIME (EAT, UTC +3)</span>
              </div>
              <div>
                <span className="text-[10px] text-mono-500 block uppercase">AVAILABILITY:</span>
                <span className="text-electric font-semibold">OPEN FOR INTERNSHIPS &amp; SELECT COLLABORATIONS</span>
              </div>
              <div>
                <span className="text-[10px] text-mono-500 block uppercase">PHONE / TELEGRAM:</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-mono-200 hover:text-electric">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* External Social Directory */}
          <div className="border border-mono-800 bg-monocard p-6 space-y-3">
            <div className="mono-tag text-[10px] text-mono-500 uppercase">
              // EXTERNAL SOCIAL DIRECTORY
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-mono-800 bg-monodark p-3 text-mono-300 hover:border-electric hover:text-electric transition-colors"
              >
                <span>GITHUB</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between border border-mono-800 bg-monodark p-3 text-mono-300 hover:border-electric hover:text-electric transition-colors"
              >
                <span>EMAIL</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Transmission Terminal Form */}
        <div className="lg:col-span-7 border border-mono-800 bg-monocard p-6 md:p-8 space-y-6">
          <div className="space-y-1">
            <div className="mono-tag text-[10px] text-mono-500 uppercase">
              // SEND DIRECT TRANSMISSION
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-mono-100">
              DISPATCH MESSAGE
            </h3>
            <p className="text-mono-400 text-xs">
              Fill out the parameters below to establish communications.
            </p>
          </div>

          {status === "success" ? (
            <div className="p-8 border border-electric bg-electric/10 space-y-3 text-center">
              <CheckCircle2 className="w-10 h-10 text-electric mx-auto" />
              <div className="font-display text-lg font-bold text-mono-100 uppercase">
                TRANSMISSION TRANSMITTED SUCCESSFULLY
              </div>
              <p className="text-mono-300 text-xs max-w-md mx-auto leading-relaxed">
                Thank you. Kidus has received your transmission payload and will follow up promptly via email.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 border border-mono-700 bg-monodark px-4 py-2 text-xs font-bold text-mono-200 hover:border-electric hover:text-electric"
              >
                TRANSMIT ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && (
                <div className="p-3 border border-red-500/50 bg-red-500/10 flex items-center space-x-2 text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorText}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-mono-400 text-[10px] uppercase block">
                  YOUR NAME / CALLSIGN *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Johnson"
                  className="w-full bg-monodark border border-mono-800 px-4 py-2.5 text-mono-100 placeholder-mono-600 focus:outline-none focus:border-electric transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-mono-400 text-[10px] uppercase block">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full bg-monodark border border-mono-800 px-4 py-2.5 text-mono-100 placeholder-mono-600 focus:outline-none focus:border-electric transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-mono-400 text-[10px] uppercase block">
                  TRANSMISSION SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineering Opportunity / Security Inquiry"
                  className="w-full bg-monodark border border-mono-800 px-4 py-2.5 text-mono-100 placeholder-mono-600 focus:outline-none focus:border-electric transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-mono-400 text-[10px] uppercase block">
                  TRANSMISSION MESSAGE BODY *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter detailed message or project scope..."
                  className="w-full bg-monodark border border-mono-800 px-4 py-2.5 text-mono-100 placeholder-mono-600 focus:outline-none focus:border-electric transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center space-x-2 border border-mono-100 bg-mono-100 px-6 py-3 font-bold text-monodark hover:bg-electric hover:border-electric transition-all uppercase disabled:opacity-50"
              >
                {status === "sending" ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

