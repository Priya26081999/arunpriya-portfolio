import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Medication Reminder App",
      description:
        "A smart health tracker that helps patients and caretakers manage medications, track doses, and send reminders with email alerts.",
      tech: ["React", "Tailwind CSS", "Supabase (PostgreSQL)"],
      github: "https://github.com/Priya26081999/medication-reminder",
      live: "https://medication-reminder-one.vercel.app/",
    },
    {
      title: "Movie Hunt",
      description:
        "A movie discovery app that allows users to search, filter, and view details about movies using the TMDB API.",
      tech: ["React", "Bootstrap", "TMDB API"],
      github: "https://github.com/Priya26081999/movie-hunt",
      live: "https://movie-hunt-liard.vercel.app/",
    },
    {
      title: "Recipe Finder App",
      description:
        "Find recipes by ingredients or name, explore categories, and save your favorites using localStorage.",
      tech: ["React", "Tailwind CSS", "TheMealDB API", "Local Storage"],
      github: "https://github.com/Priya26081999/recipe-finder-app",
      live: "https://recipe-finder-app-snowy.vercel.app/",
    },
    {
      title: "Healthcare Website",
      description:
        "A modern healthcare website with sections like Hero, About, Services, Reviews, and Contact — built using React and Tailwind CSS..",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/Priya26081999/healthcare-website",
      live: "https://healthcare-website-delta.vercel.app/",
    },
    {
      title: "Employee Management System",
      description:
        "A full-stack CRUD web app that manages employee details with add, edit, delete, and view features.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/Priya26081999/crud-fullstack-app",
      live: "",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-indigo-900 via-purple-800 to-indigo-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-12">
          Here are some of the projects I’ve built using modern web technologies.
          Each project reflects my skills in full-stack development and UI design.
        </p>

       
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-indigo-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

           
              <div className="flex items-center gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full transition duration-300 text-sm font-medium shadow-md"
                >
                  <Github size={16} /> GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 px-4 py-2 rounded-full transition duration-300 text-sm font-medium shadow-md"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
