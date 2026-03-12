'use client'

const metrics = [
  {
    value: '1000+',
    label: 'Active Users Served',
    description: 'PlaySync real-time music platform',
  },
  {
    value: '~10ms',
    label: 'Real-Time Sync Latency',
    description: 'WebSocket-based synchronization',
  },
  {
    value: '20+',
    label: 'Developers Mentored',
    description: 'Led intern teams and code reviews',
  },
  {
    value: '40–50%',
    label: 'Build Time Optimization',
    description: 'Monorepo migration with Turborepo',
  },
  {
    value: '25%',
    label: 'Cloud Cost Reduction',
    description: 'Infrastructure optimization on AWS',
  },
  {
    value: '3+',
    label: 'Production Systems Shipped',
    description: 'End-to-end build and deployment',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <span className="tag-pill text-charcoal/40 mb-4 inline-block">Impact</span>
            <h2 className="text-[clamp(28px,4vw,52px)] font-display font-bold leading-tight tracking-tighter text-charcoal">
              Measurable<br />
              <span className="italic font-normal text-muted">Results.</span>
            </h2>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="metric-card bg-[#F5F2ED] rounded-2xl p-6 border border-charcoal/5"
            >
              {/* Value */}
              <p className="text-[clamp(32px,5vw,48px)] font-display font-bold text-charcoal tracking-tighter leading-none mb-2">
                {m.value}
              </p>

              {/* Label */}
              <p className="text-sm font-medium text-charcoal/70 tracking-tight mb-2">
                {m.label}
              </p>

              {/* Description */}
              <p className="text-xs text-charcoal/35 font-light leading-relaxed">
                {m.description}
              </p>

              {/* Accent line */}
              <div className="mt-4 w-8 h-0.5 bg-[#C8FF00] rounded-full" />
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="mt-12 flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C8FF00]" />
            <span className="text-sm text-charcoal/50 font-light">
              <span className="font-semibold text-charcoal">1+ year</span> of production engineering experience
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C8FF00]" />
            <span className="text-sm text-charcoal/50 font-light">
              <span className="font-semibold text-charcoal">Full-stack</span> — frontend to infrastructure
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
