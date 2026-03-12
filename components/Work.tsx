'use client'

import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

const professionalProjects = projects.filter((p) => p.type === 'professional')
const personalProjects = projects.filter((p) => p.type === 'personal')

export default function Work() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <span className="tag-pill text-charcoal/40 mb-4 inline-block">Featured Projects</span>
            <h2 className="text-[clamp(32px,5vw,60px)] font-display font-bold leading-tight tracking-tighter text-charcoal">
              Engineering Projects<br />
              <span className="italic font-normal text-muted">People Use.</span>
            </h2>
          </div>
          <a
            href="https://github.com/abhishekraut01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase font-medium text-charcoal/50 border-b border-charcoal/20 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors self-end"
          >
            View all on GitHub →
          </a>
        </div>

        {/* ── Professional Work ─────────────────────────────────── */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal/30 font-mono">
              01
            </span>
            <h3 className="text-lg md:text-xl font-display font-semibold tracking-tight text-charcoal">
              Professional Work
            </h3>
            <span className="flex-1 h-px bg-charcoal/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {professionalProjects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* ── Personal Projects ─────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal/30 font-mono">
              02
            </span>
            <h3 className="text-lg md:text-xl font-display font-semibold tracking-tight text-charcoal">
              Personal Projects
            </h3>
            <span className="flex-1 h-px bg-charcoal/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {personalProjects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* View More button */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-charcoal/50 border border-charcoal/15 rounded-full px-8 py-3.5 hover:text-charcoal hover:border-charcoal/40 hover:bg-charcoal/[0.03] transition-all duration-300 group"
          >
            View More Projects
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
