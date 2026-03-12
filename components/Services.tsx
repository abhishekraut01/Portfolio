'use client'

const philosophyItems = [
  {
    label: 'Backend Engineering',
  },
  {
    label: 'Real-Time Systems',
  },
  {
    label: 'DevOps & Infra',
  },
]

const capabilities = [
  {
    title: 'Backend Engineering',
    description: 'Building scalable APIs, robust data models, and maintainable architecture patterns. Focus on clean code, efficient database design, and systems that handle real-world load with grace.',
  },
  {
    title: 'Real-Time Systems',
    description: 'Designing low-latency systems using WebSockets, Redis pub/sub, and event-driven architecture. From collaborative platforms to live notifications — making the web feel instant.',
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Automating CI/CD pipelines with GitHub Actions and Argo CD. Deploying containerized systems on AWS with Docker and Kubernetes. Monitoring with Prometheus and Grafana.',
  },
]

export default function Services() {
  return (
    <section className="section-dark py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top tagline */}
        <div className="mb-20">
          <p className="text-[clamp(22px,3.5vw,40px)] font-display font-light leading-tight text-cream/60 max-w-3xl">
            I build systems that prioritize{' '}
            <span className="text-[#C8FF00] italic font-bold">reliability, scalability</span>{' '}
            and clean engineering principles.
          </p>
        </div>

        {/* Service labels */}
        <div className="grid grid-cols-3 gap-4 mb-20">
          {philosophyItems.map((s) => (
            <div key={s.label} className="border-t border-cream/10 pt-5 group">
              <h3 className="text-xs tracking-widest uppercase font-medium text-cream/30 group-hover:text-cream/60 transition-colors mb-3">
                {s.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Horizontal divider */}
        <div className="w-full h-px bg-cream/10 mb-16" />

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {capabilities.map((cap) => (
            <div key={cap.title} className="group">
              <h3 className="text-xl md:text-2xl font-display font-bold text-cream/80 mb-4 tracking-tight group-hover:text-cream transition-colors">
                {cap.title}
              </h3>
              <p className="text-sm text-cream/35 leading-relaxed font-light">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee text */}
        <div className="mt-24 overflow-hidden border-t border-cream/5 pt-8">
          <div className="flex gap-0 animate-marquee whitespace-nowrap">
            {Array(8).fill(['Full-Stack Engineer', '•', 'Nagpur, India', '•', 'Open to Work', '•']).flat().map((text, i) => (
              <span key={i} className={`text-xs tracking-widest uppercase font-medium pr-8 ${text === '•' ? 'text-[#C8FF00]' : 'text-cream/20'}`}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
