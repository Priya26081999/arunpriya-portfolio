import React from "react";
import { ArrowRight, Download, Code2 } from "lucide-react";

export default function Hero() {
  const handleDownload = () => {
   
    const link = document.createElement("a");
    link.href = "/ArunPriya_E_Resume.pdf";
    link.download = "ArunPriya_E_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900 overflow-hidden"
    >
    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.15),transparent_50%)] animate-pulse" />


      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-to-r from-emerald-400 to-indigo-500 p-4 rounded-full shadow-lg animate-bounce">
            <Code2 className="text-white w-8 h-8" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            ArunPriya E
          </span>
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl mb-8">
          A passionate Full-Stack Developer who loves building modern, responsive
          web applications using React, Java, and Spring Boot.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            View My Projects <ArrowRight size={18} />
          </a>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 border border-indigo-400 hover:bg-indigo-600 hover:text-white text-indigo-300 px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
