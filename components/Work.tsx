'use client'

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
        <div className="mb-20">
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
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} featured={index === 0} />
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
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} featured={index === 0} />
            ))}
          </div>
        </div>

        {/* More projects button */}
        <div className="mt-10 flex justify-end">
          <a
            href="https://github.com/abhishekraut01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-charcoal/40 hover:text-charcoal transition-colors group"
          >
            More on GitHub
            <span className="w-8 h-px bg-charcoal/20 group-hover:bg-charcoal group-hover:w-12 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
