'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 12
      const y = (clientY / window.innerHeight - 0.5) * 12
      cardRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 text-[clamp(120px,18vw,220px)] font-display font-bold leading-none text-black/[0.03] select-none pointer-events-none whitespace-nowrap">
        CODE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          {/* Left content */}
          <div className="lg:col-span-8">
            {/* Status badge */}
            <div className="animate-fade-up flex items-center gap-2 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs tracking-widest uppercase text-charcoal/50 font-medium">Open to full-time roles</span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-delay-1 text-[clamp(42px,7vw,96px)] font-display font-bold leading-[0.95] tracking-tighter text-charcoal mb-8">
              <span className="block">Building</span>
              <span className="block italic font-normal text-muted">Scalable</span>
              <span className="block">Backend Systems</span>
              <span className="block">& Real-Time <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#C8FF00] mb-1 md:mb-2"></span></span>
              <span className="block">Applications.</span>
            </h1>

            {/* Description */}
            <div className="animate-fade-up-delay-2 max-w-md mt-8">
              <p className="text-[15px] text-charcoal/60 leading-relaxed font-light">
                Full-Stack Engineer with experience building production-grade systems using Node.js, TypeScript, and AWS. Focused on real-time systems, scalable APIs, and reliable infrastructure.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 bg-charcoal text-cream text-xs tracking-widest uppercase font-medium px-7 py-4 rounded-full hover:bg-charcoal/85 transition-colors group"
                >
                  View Projects
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-charcoal/60 hover:text-charcoal transition-colors border-b border-charcoal/20 pb-0.5"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Right: Profile Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div ref={cardRef} className="relative transition-transform duration-100 ease-out">
              {/* Available badge */}
              <div className="absolute -top-3 -right-3 z-10 bg-[#C8FF00] text-charcoal text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full rotate-12 shadow-lg">
                Open to work
              </div>

              {/* Profile card */}
              <div className="animate-fade-up-delay-3 w-[260px] h-[320px] md:w-[300px] md:h-[370px] rounded-2xl overflow-hidden bg-charcoal/10 relative">
                <div className="w-full h-full bg-gradient-to-b from-charcoal/20 to-charcoal/60 flex flex-col items-start justify-end p-6">
                  {/* Terminal-style decorative element */}
                  <div className="absolute top-5 left-5 right-5">
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/60"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/60"></span>
                    </div>
                    <div className="font-mono text-[11px] text-cream/25 space-y-1.5">
                      <p><span className="text-[#C8FF00]/60">const</span> engineer = {'{'}</p>
                      <p className="pl-3"><span className="text-[#C8FF00]/40">name</span>: <span className="text-cream/40">&quot;Abhishek&quot;</span>,</p>
                      <p className="pl-3"><span className="text-[#C8FF00]/40">stack</span>: <span className="text-cream/40">&quot;Full-Stack&quot;</span>,</p>
                      <p className="pl-3"><span className="text-[#C8FF00]/40">focus</span>: <span className="text-cream/40">&quot;Backend&quot;</span>,</p>
                      <p>{'}'}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-cream/90 font-display text-base font-bold">Abhishek Raut</p>
                    <p className="text-cream/50 text-xs tracking-wider uppercase mt-0.5">Full-Stack Engineer</p>
                    <p className="text-cream/30 text-xs tracking-wider mt-1">Nagpur, India</p>
                  </div>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border-2 border-charcoal/10" />
            </div>
          </div>
        </div>

        {/* Tech logos bar */}
        <div className="animate-fade-up-delay-4 mt-16 pt-8 border-t border-charcoal/10">
          <p className="text-xs tracking-widest uppercase text-charcoal/30 mb-6 font-medium">Technologies I work with</p>
          <div className="flex items-center gap-8 md:gap-10 flex-wrap">
            {['Node.js', 'TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'].map((tech, i) => (
              <span key={i} className="text-charcoal/25 font-mono text-xs font-medium tracking-wide hover:text-charcoal/50 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
