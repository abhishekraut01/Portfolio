'use client'

const achievements = [
  {
    metric: '1500+',
    label: 'DSA Problems Solved',
    description: 'Across LeetCode, GeeksforGeeks, and HackerRank with a 500+ day coding streak.',
  },
  {
    metric: '1879+',
    label: 'LeetCode Rating',
    description: 'Ranking in the Top 5% worldwide in competitive programming.',
  },
  {
    metric: 'Rank 13',
    label: 'InterviewBit Global',
    description: 'GeeksforGeeks Global Rank 98, with consistent Institute Rank 1.',
  },
  {
    metric: '40+',
    label: 'Engineers Mentored',
    description: 'Mentored engineers in full-stack development at an early-stage startup.',
  },
]

export default function Achievements() {
  return (
    <section className="section-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <span className="tag-pill-dark mb-4 inline-block">Achievements</span>
          <h2 className="text-[clamp(28px,4vw,52px)] font-display font-bold leading-tight tracking-tighter text-cream">
            Milestones &<br />
            <span className="italic font-normal text-cream/30">Recognition.</span>
          </h2>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="metric-card rounded-2xl bg-cream/[0.03] border border-cream/[0.06] p-6 group"
            >
              <span className="text-3xl md:text-4xl font-display font-bold text-[#C8FF00] tracking-tight block mb-2">
                {a.metric}
              </span>
              <h3 className="text-sm font-semibold text-cream/70 tracking-tight mb-3 group-hover:text-cream transition-colors">
                {a.label}
              </h3>
              <p className="text-xs text-cream/35 leading-relaxed font-light">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
