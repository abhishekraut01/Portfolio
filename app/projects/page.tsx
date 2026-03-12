import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects — Abhishek Raut',
  description:
    'All engineering projects by Abhishek Raut — professional client work and personal side projects.',
}

const professionalProjects = projects.filter((p) => p.type === 'professional')
const personalProjects = projects.filter((p) => p.type === 'personal')

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F5F2ED]">
      {/* Navigation bar */}
      <nav className="sticky top-0 z-50 bg-[#F5F2ED]/80 backdrop-blur-md border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs tracking-widest uppercase font-medium text-charcoal/50 hover:text-charcoal transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <a
            href="https://github.com/abhishekraut01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase font-medium text-charcoal/50 hover:text-charcoal transition-colors"
          >
            GitHub →
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Page header */}
        <div className="mb-16">
          <span className="tag-pill text-charcoal/40 mb-4 inline-block">All Projects</span>
          <h1 className="text-[clamp(36px,5vw,64px)] font-display font-bold leading-tight tracking-tighter text-charcoal">
            Projects
          </h1>
          <p className="text-base text-muted mt-3 max-w-lg font-light">
            A collection of professional client work and personal engineering projects — built with modern tools, real users, and production‑grade systems.
          </p>
        </div>

        {/* ── Professional Work ─────────────────────────────────── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal/30 font-mono">
              01
            </span>
            <h2 className="text-lg md:text-xl font-display font-semibold tracking-tight text-charcoal">
              Professional Work
            </h2>
            <span className="flex-1 h-px bg-charcoal/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {professionalProjects.map((project) => (
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
            <h2 className="text-lg md:text-xl font-display font-semibold tracking-tight text-charcoal">
              Personal Projects
            </h2>
            <span className="flex-1 h-px bg-charcoal/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-charcoal/40 hover:text-charcoal transition-colors group"
          >
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
