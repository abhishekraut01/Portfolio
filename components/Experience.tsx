'use client'

const experiences = [
  {
    company: 'DevSync.in',
    role: 'Freelance Software Engineer',
    period: 'June 2025 – Present',
    current: true,
    highlights: [
      'Built a production order management system',
      'Designed scalable backend services with Node.js & PostgreSQL',
      'Managed Docker-based deployments on AWS',
      'Implemented CI/CD pipelines with GitHub Actions',
      'Maintained production infrastructure and monitoring',
    ],
  },
  {
    company: 'The Boring Education',
    role: 'SDE Intern',
    period: 'Jan 2025 – June 2025',
    current: false,
    highlights: [
      'Led team of 7 interns across multiple projects',
      'Migrated projects to monorepo, reducing build time by 40–50%',
      'Shipped 20+ features to production',
      'Built PlaySync — a real-time music streaming platform',
      'Set up CI/CD and deployment workflows',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <span className="tag-pill-dark mb-4 inline-block">Experience</span>
          <h2 className="text-[clamp(28px,4vw,52px)] font-display font-bold leading-tight tracking-tighter text-cream">
            Where I&apos;ve<br />
            <span className="italic font-normal text-cream/30">Worked.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, idx) => (
            <div key={exp.company} className="relative flex gap-6 md:gap-10 pb-16 last:pb-0">
              {/* Timeline line & dot */}
              <div className="flex flex-col items-center">
                <div className={exp.current ? 'timeline-dot' : 'timeline-dot-muted'} />
                {idx < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-cream/15 to-cream/5 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 -mt-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-cream/85 tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-cream/45 font-light mt-0.5">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {exp.current && (
                      <span className="exp-pill">Current</span>
                    )}
                    <span className="text-xs text-cream/25 font-mono">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-cream/35 font-light leading-relaxed">
                      <span className="text-[#C8FF00]/40 mt-1.5 shrink-0">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
