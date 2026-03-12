'use client'

const services = [
  {
    label: 'UI/UX Design',
    description: 'Crafting clean, intuitive interfaces grounded in user research and behavioral psychology.',
  },
  {
    label: 'Motion',
    description: 'Bringing interfaces to life with purposeful animation and fluid micro-interactions.',
  },
  {
    label: 'Branding',
    description: 'Building cohesive visual identities that resonate deeply with target audiences.',
  },
]

const capabilities = [
  {
    title: 'No-Code',
    description: 'Leverage innovative no-code platforms to rapidly build innovative prototypes, enabling quick iterations and user testing that validate design concepts and accelerate product development across any platform.',
  },
  {
    title: 'Strategy',
    description: 'Conduct research and strategic planning to align design decisions with business objectives, integrating user insights and market trends to inform product innovation and ensure advantage.',
  },
  {
    title: 'Interactions',
    description: 'Refine digital product interactions through iterative testing and analysis, ensuring usability, accessibility, and overall user engagement to deliver intuitive experiences that satisfy diverse audience needs.',
  },
]

export default function Services() {
  return (
    <section className="section-dark py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top tagline */}
        <div className="mb-20">
          <p className="text-[clamp(22px,3.5vw,40px)] font-display font-light leading-tight text-cream/60 max-w-3xl">
            I create sturdy bonds through{' '}
            <span className="text-[#C8FF00] italic font-bold">deep alignment</span>{' '}
            with my clients' aims and values.
          </p>
        </div>

        {/* Service labels */}
        <div className="grid grid-cols-3 gap-4 mb-20">
          {services.map((s) => (
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
            {Array(8).fill(['Senior Product Designer', '•', 'Los Angeles, CA', '•', 'Available for Work', '•']).flat().map((text, i) => (
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
