import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
   {id: "education-certifications" , label: "EducationCertifications"},
   
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-30 bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-600 shadow-lg backdrop-blur-md transition-all duration-500">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
  
        <div className="flex items-center space-x-3">
          <div className="rounded-full w-10 h-10 bg-gradient-to-br from-emerald-300 to-indigo-400 flex items-center justify-center text-black font-bold">
            AP
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">
            ArunPriya E
          </span>
        </div>

      
        <div className="hidden md:flex items-center space-x-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-white/90 hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

      
        <div className="md:hidden">
          <button
            aria-label="menu"
            className="p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-700 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col items-center space-y-4 py-4">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/90 hover:text-yellow-300 transition-colors duration-300 font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
