'use client'
import { Terminal } from '@/components/ui/terminal'

export default function Hero() {
  return (
    <section className="relative  min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

      <div className="max-w-7xl  mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          {/* Left content */}
          <div className="lg:col-span-6 ">
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
              <span className="block">Fullstack AI <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#C8FF00] mb-1 md:mb-2"></span></span>
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

          {/* Right: Terminal */}
          <div className="lg:col-span-6  flex justify-center lg:justify-end animate-fade-up-delay-3 ">
            <Terminal
              username="abhishek"
              commands={[
                "cat ./about.json",
                "echo $CURRENT_STATUS",
                "node --version && npm --version",
                "cat ./stack.txt",
              ]}
              outputs={{
                0: [
                  '{',
                  '  "name": "Abhishek Raut",',
                  '  "role": "Full-Stack Engineer",',
                  '  "focus": "Backend",',
                  '  "location": "Nagpur, India"',
                  '}',
                ],
                1: [
                  "✔ Open to full-time roles",
                ],
                2: [
                  "v20.11.0",
                  "10.2.4",
                ],
                3: [
                  "TypeScript | Node.js | React",
                  "PostgreSQL | MongoDB | Redis",
                  "AWS | Docker | CI/CD",
                ],
              }}
              typingSpeed={45}
              delayBetweenCommands={1000}
            />
          </div>

        </div>

      </div>
    </section>
  )
}
