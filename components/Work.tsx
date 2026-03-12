'use client'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Arcane Dashboard',
    category: 'UI/UX Design',
    year: '2024',
    tags: ['Product Design', 'Figma', 'Design System'],
    color: '#1a1a1a',
    accent: '#C8FF00',
    description: 'End-to-end redesign of a SaaS analytics platform, increasing user retention by 34%.',
  },
  {
    id: 2,
    title: 'Forma App',
    category: 'Mobile Design',
    year: '2024',
    tags: ['iOS', 'Motion', 'Branding'],
    color: '#2d2922',
    accent: '#F4A261',
    description: 'A mindfulness app with fluid micro-interactions and adaptive dark interface.',
  },
  {
    id: 3,
    title: 'Beacon Brand',
    category: 'Branding',
    year: '2023',
    tags: ['Identity', 'Strategy', 'Web'],
    color: '#1e2535',
    accent: '#A8D8FF',
    description: 'Full brand identity system for a climate-tech startup entering Series A.',
  },
  {
    id: 4,
    title: 'Orbit Design System',
    category: 'Design System',
    year: '2023',
    tags: ['Components', 'Tokens', 'Documentation'],
    color: '#1f1a2e',
    accent: '#D4A0FF',
    description: 'Scalable design system used across 12 product teams at an enterprise SaaS company.',
  },
]

export default function Work() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 md:py-32 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <span className="tag-pill text-charcoal/40 mb-4 inline-block">Selected Work</span>
            <h2 className="text-[clamp(32px,5vw,60px)] font-display font-bold leading-tight tracking-tighter text-charcoal">
              Design Products<br />
              <span className="italic font-normal text-muted">People Love.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-xs tracking-widest uppercase font-medium text-charcoal/50 border-b border-charcoal/20 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors self-end"
          >
            View all projects →
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="card-hover rounded-2xl overflow-hidden cursor-pointer group"
              style={{ backgroundColor: project.color }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image area */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                {/* Abstract design placeholder */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `radial-gradient(ellipse at 30% 50%, ${project.accent}22 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, ${project.accent}15 0%, transparent 50%)`,
                  }}
                />
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-32 h-32 rounded-full border opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
                    style={{ borderColor: project.accent }}
                  />
                  <div
                    className="absolute w-20 h-20 rounded-2xl border-2 opacity-30 rotate-45 transition-all duration-700 group-hover:rotate-[60deg]"
                    style={{ borderColor: project.accent }}
                  />
                  <div
                    className="absolute w-8 h-8 rounded-full opacity-60"
                    style={{ backgroundColor: project.accent }}
                  />
                </div>
                {/* Arrow */}
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] tracking-widest uppercase font-medium text-white/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white/90 tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/40 mt-1 font-light max-w-xs">
                    {project.description}
                  </p>
                </div>
                <span className="text-xs text-white/20 font-mono ml-4 shrink-0">{project.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* More projects button */}
        <div className="mt-10 flex justify-end">
          <button className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-charcoal/40 hover:text-charcoal transition-colors group">
            More projects
            <span className="w-8 h-px bg-charcoal/20 group-hover:bg-charcoal transition-colors group-hover:w-12 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
