"use client";

import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  Layers,
  CheckCircle,
} from "lucide-react";
import { EDUCATION_HISTORY } from "@/data/portfolioData";

export default function Education() {
  const edu = EDUCATION_HISTORY[0];

  return (
    <section id="education" className="py-24 bg-surface/30 border-y border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-mono font-medium border border-brand-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05. ACADEMIC FORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Core Coursework
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal undergraduate foundation in computer science and software engineering principles at Debre Berhan University.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8 space-y-8 shadow-sm">
          {/* Main Institution Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-surface-border gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">{edu.degree}</h3>
                <div className="text-sm font-medium text-brand-400">{edu.institution}</div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.period}</span>
                  </span>
                </div>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start md:self-auto">
              {edu.status}
            </span>
          </div>

          {/* Overview text */}
          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            {edu.overview}
          </p>

          {/* Relevant Coursework Grid */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              <BookOpen className="w-4 h-4 text-brand-400" />
              <span>Key Academic Coursework Modules</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {edu.keyCoursework.map((course) => (
                <div
                  key={course.name}
                  className="p-4 rounded-xl bg-surface-secondary/60 border border-surface-border space-y-1.5"
                >
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                    <span>{course.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

