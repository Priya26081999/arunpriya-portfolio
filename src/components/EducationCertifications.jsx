import React from "react";
import { GraduationCap, Award } from "lucide-react";

export default function EducationCertifications() {
  return (
    <section
      id="education-certifications"
      className="py-16 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
          Education & Certifications
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          My academic background and certifications that helped shape my journey as a developer.
        </p>
      </div>

     
      <div className="grid md:grid-cols-3 gap-6">
       
        <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-emerald-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-full group-hover:bg-emerald-500/20 transition-colors">
              <GraduationCap className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-emerald-300">B.Sc. in Mathematics</h3>
          </div>
          <p className="text-slate-300 text-sm">
            ST. Thomas College (2020) <br />
            <span className="text-slate-400">Percentage: 79%</span>
          </p>
        </div>

        
        <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-emerald-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-full group-hover:bg-emerald-500/20 transition-colors">
              <GraduationCap className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-emerald-300">HSC & SSLC</h3>
          </div>
          <p className="text-slate-300 text-sm">
            HSC — 82% (2017) <br />
            SSLC — 90% (2015)
          </p>
        </div>

       
        <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-emerald-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-full group-hover:bg-emerald-500/20 transition-colors">
              <Award className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-emerald-300">Full Stack Developer (Java)</h3>
          </div>
          <p className="text-slate-300 text-sm">
            Besant Technologies, Chennai <br />
            <span className="text-slate-400">(2024 - 2025)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
