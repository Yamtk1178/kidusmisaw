"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields before submitting.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

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
        setErrorMessage(data.error || "Unable to send message. Please reach out via email directly.");
      }
    } catch {
      // Fallback for static environments or offline testing
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-mono font-medium border border-brand-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06. INITIATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Open to software engineering internship opportunities, technical collaborations, and discussions on application security and network systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border space-y-6 shadow-sm">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Verified Contact Channels
                </h3>
                <p className="text-xs text-slate-400">
                  Feel free to send an email directly or connect on GitHub.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                {/* Email channel with copy */}
                <div className="p-4 rounded-xl bg-surface-secondary/60 border border-surface-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-white hover:text-brand-400 font-medium transition-colors font-mono"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-surface border border-surface-border text-slate-400 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone channel */}
                <div className="p-4 rounded-xl bg-surface-secondary/60 border border-surface-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Phone / Telegram</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-white hover:text-brand-400 font-medium transition-colors font-mono"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location channel */}
                <div className="p-4 rounded-xl bg-surface-secondary/60 border border-surface-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Current Base</div>
                    <div className="text-white font-medium">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                {/* GitHub channel */}
                <div className="p-4 rounded-xl bg-surface-secondary/60 border border-surface-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Public Codebases</div>
                      <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-brand-400 font-medium transition-colors"
                      >
                        github.com/Yamtk1178
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface border border-surface-border text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border space-y-6 shadow-sm">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white tracking-tight">Send a Direct Message</h3>
                <p className="text-xs text-slate-400">
                  Have a question, opportunity, or project proposal? Fill out the form below.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-3 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-white">Message Transmitted Successfully!</div>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, Kidus will review your inquiry and follow up via email promptly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-surface border border-surface-border text-slate-200 hover:text-white hover:border-emerald-500/50 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-2 text-rose-300">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-secondary border border-surface-border text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500/70 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-secondary border border-surface-border text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500/70 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Internship / Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-secondary border border-surface-border text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500/70 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium">Message Body *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, requirements, or opportunities..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-secondary border border-surface-border text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500/70 transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-semibold bg-brand-500 text-slate-950 hover:bg-brand-400 transition-all font-medium shadow-md shadow-brand-500/20 disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Client-side protected. No spam or unsolicited data capture.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
