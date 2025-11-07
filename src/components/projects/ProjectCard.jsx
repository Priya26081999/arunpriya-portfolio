import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function ProjectCard({project}){
  return (
    <div className="bg-themeCard p-5 rounded-2xl border border-slate-900 hover:scale-[1.02] transition-transform">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-300"><ExternalLink /></a>
      </div>
      <p className="mt-3 text-slate-300 text-sm">{project.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map(t=> <span key={t} className="text-xs px-2 py-1 bg-black/25 rounded">{t}</span>)}
      </div>
      <div className="mt-4">
        <a href={project.live} target="_blank" rel="noreferrer" className="text-emerald-300 text-sm">Live Demo</a>
      </div>
    </div>
  )
}
