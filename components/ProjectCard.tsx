'use client'

import Image from 'next/image'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div
      className={`card-hover rounded-2xl overflow-hidden cursor-pointer group ${featured ? 'md:col-span-2' : ''}`}
      style={{ backgroundColor: project.color }}
    >
      {/* Cover image area */}
      <div className={`relative ${featured ? 'h-64 md:h-80' : 'h-64 md:h-72'} overflow-hidden`}>
        {/* Cover image */}
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          sizes={featured ? '(max-width: 768px) 100vw, 100vw' : '(max-width: 768px) 100vw, 50vw'}
        />

        {/* Gradient overlay for readability */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to top, ${project.color} 0%, ${project.color}99 30%, ${project.color}44 60%, transparent 100%)`,
          }}
        />

        {/* Accent radial glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${project.accent}18 0%, transparent 60%)`,
          }}
        />

        {/* Metrics badges */}
        <div className="absolute top-5 left-5 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="text-[10px] tracking-wider uppercase font-bold px-3 py-1.5 rounded-full bg-white/10 text-white/70 backdrop-blur-sm"
            >
              {metric}
            </span>
          ))}
        </div>

        {/* Client badge for professional projects */}
        {project.client && (
          <div className="absolute bottom-5 left-5">
            <span className="text-[10px] tracking-wider uppercase font-medium px-3 py-1.5 rounded-full bg-white/5 text-white/50 backdrop-blur-sm border border-white/10">
              {project.client}
            </span>
          </div>
        )}

        {/* GitHub / External link arrow */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-white/20"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-white/20"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}
      </div>

      {/* Card info */}
      <div className="p-6 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-widest uppercase font-medium text-white/30 font-mono">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white/90 tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-white/40 mt-1 font-light max-w-md">
            {project.description}
          </p>

          {/* Duration for professional projects */}
          {project.duration && (
            <span className="inline-block mt-3 text-[10px] tracking-widest uppercase font-mono text-white/25">
              {project.duration}
            </span>
          )}

          {/* Impact list for professional projects */}
          {project.impact && project.impact.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.impact.map((item) => (
                <span
                  key={item}
                  className="text-[10px] tracking-wide font-medium px-2.5 py-1 rounded-full border text-white/40"
                  style={{ borderColor: `${project.accent}30` }}
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="text-xs text-white/20 font-mono ml-4 shrink-0">{project.year}</span>
      </div>
    </div>
  )
}
