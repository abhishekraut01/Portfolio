'use client'

const testimonials = [
  {
    quote: 'Patrick\'s work on our products not only impresses our users but also inspires our team to push creative boundaries.',
    name: 'Sarah Miller',
    handle: '@sarah.designs',
    role: 'Head of Design',
  },
  {
    quote: 'Patrick Hansen\'s essential product design skills transformed our experience. His ability to merge aesthetic appeal with functional design has redefined our creative process, making our projects both innovative and highly user-friendly.',
    name: 'Emma Johnson',
    handle: '@emma_creates',
    role: 'CEO, Forma',
  },
  {
    quote: 'Working with Patrick Hansen has boosted our design quality. His strategic approach consistently ensures every detail aligns, resulting in first-class user interactions.',
    name: 'Michael Carter',
    handle: '@mike_carter_official',
    role: 'Product Lead',
  },
  {
    quote: 'His attention to detail and ability to balance aesthetics with usability is second to none. Every project he touches becomes something truly special.',
    name: 'David Thompson',
    handle: '@david.designs',
    role: 'Founder, Beacon',
  },
  {
    quote: 'An exceptional designer who brings both vision and precision. Patrick helped us ship a design system that the entire engineering team actually loves using.',
    name: 'Tom Wilson',
    handle: '@tom_creative',
    role: 'CTO, Orbit',
  },
  {
    quote: 'Patrick\'s user-centered approach transformed how we think about product development. His insights are always grounded in real user research.',
    name: 'Jessica Brown',
    handle: '@jessica.brown',
    role: 'VP Product',
  },
]

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('')
  const colors = ['#2d2922', '#1a1a2e', '#1e2535', '#2a1f1f', '#1f2a1f', '#2a1f2a']
  const color = colors[name.length % colors.length]
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white/80 shrink-0"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <span className="tag-pill text-charcoal/40 mb-4 inline-block">Testimonials</span>
            <h2 className="text-[clamp(28px,4vw,52px)] font-display font-bold leading-tight tracking-tighter text-charcoal">
              What Clients<br />
              <span className="italic font-normal text-muted">Are Saying.</span>
            </h2>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-hover break-inside-avoid bg-[#F5F2ED] rounded-2xl p-6 border border-charcoal/5"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-3 h-3 text-[#C8FF00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-charcoal/65 leading-relaxed font-light mb-5">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="text-sm font-medium text-charcoal">{t.name}</p>
                  <p className="text-xs text-charcoal/35 font-mono">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <Avatar key={i} name={t.name} />
              ))}
            </div>
            <span className="text-sm text-charcoal/50 font-light ml-2">
              <span className="font-semibold text-charcoal">4.9/5</span> from 40+ clients
            </span>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, s) => (
              <svg key={s} className="w-4 h-4 text-[#C8FF00]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
