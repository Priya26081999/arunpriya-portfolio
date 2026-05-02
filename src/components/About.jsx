import React from "react";
import { Github, Mail, Code } from "lucide-react";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Tailwind CSS",
    "Redux",
    "Material UI (MUI)",
    "MySQL",
    "Java",
    "Spring Boot",
    "Supabase",
    "React",
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
         <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
  I'm <span className="font-semibold text-emerald-400">ArunPriya E</span>, 
  a passionate Frontend and Full-Stack Developer with hands-on experience in building 
  responsive and user-friendly web applications. I completed a paid internship as a 
  Frontend Developer at <span className="font-semibold text-emerald-400">Stairs7Solutions Private Limited</span>, 
  where I worked on modern UI development, reusable components, and API integration. 
  I enjoy creating clean, scalable, and interactive applications using technologies 
  like React.js, TypeScript, Redux, Java, and Spring Boot.
</p>
        </div>

       
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed">
              I’m constantly learning new tools and frameworks to stay updated with 
              modern development trends. My goal is to create impactful digital 
              experiences and contribute to innovative projects that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-5 mt-8">
              <a
                href="https://github.com/Priya26081999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 px-6 py-3 rounded-full transition duration-300 shadow-lg text-white font-medium"
              >
                <Github size={20} />
                <span>View GitHub</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-6 py-3 rounded-full transition duration-300 shadow-lg text-white font-medium"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          
          <div className="bg-slate-900/40 rounded-2xl p-8 shadow-xl border border-slate-700">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-emerald-400 mb-6">
              <Code size={22} /> Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-indigo-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
