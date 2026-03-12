'use client'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'PlaySync',
    category: 'Real-Time Platform',
    year: '2025',
    tags: ['Next.js', 'Redis', 'Socket.io', 'PostgreSQL'],
    color: '#1a1a1a',
    accent: '#C8FF00',
    description: 'Real-time collaborative music streaming platform — users create rooms and listen together with synchronized playback.',
    metrics: ['1000+ active users', '~10ms sync latency'],
    github: 'https://github.com/abhishekraut01',
  },
  {
    id: 2,
    title: 'FitsYouAI',
    category: 'AI Platform',
    year: '2025',
    tags: ['Next.js', 'MongoDB', 'Gemini API', 'Node.js'],
    color: '#2d2922',
    accent: '#F4A261',
    description: 'AI-powered virtual try-on platform that generates realistic outfit previews from user photos and clothing images.',
    metrics: ['<3s generation', '25% cost reduction'],
    github: 'https://github.com/abhishekraut01',
  },
  {
    id: 3,
    title: 'Koshitsu',
    category: 'Privacy-First Chat',
    year: '2025',
    tags: ['React', 'PostgreSQL', 'Redis', 'Docker'],
    color: '#1e2535',
    accent: '#A8D8FF',
    description: 'Privacy-first real-time chat platform with encrypted messaging, persistent group chats, and ephemeral private rooms.',
    metrics: ['WebSocket messaging', 'E2E encrypted'],
    github: 'https://github.com/abhishekraut01',
  },
]

export default function Work() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`card-hover rounded-2xl overflow-hidden cursor-pointer group ${project.id === 1 ? 'md:col-span-2' : ''}`}
              style={{ backgroundColor: project.color }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image area */}
              <div className={`relative ${project.id === 1 ? 'h-64 md:h-80' : 'h-64 md:h-72'} overflow-hidden`}>
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

                {/* Metrics badges */}
                <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="text-[10px] tracking-wider uppercase font-bold px-3 py-1.5 rounded-full bg-white/10 text-white/70 backdrop-blur-sm">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* GitHub Arrow */}
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
              </div>

              {/* Info */}
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
                </div>
                <span className="text-xs text-white/20 font-mono ml-4 shrink-0">{project.year}</span>
              </div>
            </div>
          ))}
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
