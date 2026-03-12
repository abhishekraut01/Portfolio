'use client'

import Image from 'next/image'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="card-hover rounded-2xl overflow-hidden cursor-pointer group"
      style={{ backgroundColor: project.color }}
    >
      {/* Cover image area */}
      <div className="relative h-52 md:h-60 overflow-hidden">
        {/* Cover image */}
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Gradient overlay for readability */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to top, ${project.color} 0%, ${project.color}99 30%, ${project.color}44 60%, transparent 100%)`,
          }}
        />

        {/* Accent radial glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${project.accent}18 0%, transparent 60%)`,
          }}
        />

        {/* Metrics badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="text-[10px] tracking-wider uppercase font-bold px-3 py-1.5 rounded-full bg-white/10 text-white/70 backdrop-blur-sm"
            >
              {metric}
            </span>
          ))}
        </div>

        {/* GitHub / External link arrow */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}
        {!project.github && project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}
      </div>

      {/* Card info */}
      <div className="p-5 md:p-6">
        {/* Tags */}
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] tracking-widest uppercase font-medium text-white/30 font-mono">
              {tag}
            </span>
          ))}
        </div>

        {/* Title + Year */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg md:text-xl font-display font-bold text-white/90 tracking-tight group-hover:text-white transition-colors leading-snug">
            {project.title}
          </h3>
          <span className="text-[10px] text-white/20 font-mono shrink-0 mt-1.5">{project.year}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-white/40 mt-2 font-light leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Client badge for professional projects */}
        {project.client && (
          <div className="mt-3">
            <span className="text-[10px] tracking-wider uppercase font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">
              {project.client}
            </span>
          </div>
        )}

        {/* Duration for professional projects */}
        {project.duration && (
          <span className="inline-block mt-2.5 text-[10px] tracking-widest uppercase font-mono text-white/20">
            {project.duration}
          </span>
        )}

        {/* Impact list for professional projects */}
        {project.impact && project.impact.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.impact.map((item) => (
              <span
                key={item}
                className="text-[9px] tracking-wide font-medium px-2 py-0.5 rounded-full border text-white/35"
                style={{ borderColor: `${project.accent}25` }}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
