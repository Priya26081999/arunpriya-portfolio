import React from "react";
import { Mail, Github, Phone } from "lucide-react";

export default function Contact() {
 
return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white"
    >
   
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="mt-3 text-slate-400 text-base max-w-xl mx-auto">
          I’d love to hear from you! Whether it’s about a new project, a
          collaboration, or just a quick hello — feel free to drop a message.
        </p>
      </div>

     
      <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-md hover:shadow-emerald-500/20 transition-all">
        <h3 className="text-xl font-semibold text-emerald-300 mb-4">Contact Info</h3>
        <div className="flex flex-col items-center space-y-4 text-slate-300">
          <div className="flex items-center gap-3 bg-slate-800/40 px-5 py-2 rounded-full border border-slate-700 w-fit hover:shadow-lg hover:shadow-emerald-400/30 transition-all">
            <Mail className="text-pink-400 w-5 h-5" />
            <a href="mailto:sheebapriya30@gmail.com">sheebapriya30@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 bg-slate-800/40 px-5 py-2 rounded-full border border-slate-700 w-fit hover:shadow-lg hover:shadow-cyan-400/30 transition-all">
            <Phone className="text-cyan-400 w-5 h-5" />
            <a href="tel:+917305899605">+91 73058 99605</a>
          </div>
          <div className="flex items-center gap-3 bg-slate-800/40 px-5 py-2 rounded-full border border-slate-700 w-fit hover:shadow-lg hover:shadow-blue-400/30 transition-all">
            <Github className="text-blue-400 w-5 h-5" />
            <a
              href="https://github.com/Priya26081999"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Priya26081999
            </a>
          </div>
        </div>

       
      

     

      
          

         
        
      
      </div>
    </section>
  );
}
