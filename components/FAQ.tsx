'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What technologies do you specialize in?',
    a: 'I specialize in Node.js, TypeScript, React, and Next.js for the core stack. On the backend, I work extensively with PostgreSQL, Redis, and MongoDB. For infrastructure, I use Docker, Kubernetes, and AWS services. I also have experience building AI-powered features using LangChain and RAG pipelines.',
  },
  {
    q: 'What type of systems have you built?',
    a: 'I\'ve built real-time collaborative platforms (PlaySync with ~10ms sync), AI-powered applications (FitsYouAI virtual try-on), privacy-first chat systems (Koshitsu), and production order management systems. My focus is on scalable architectures that handle real-world traffic reliably.',
  },
  {
    q: 'Are you open to opportunities?',
    a: 'Yes! I\'m currently open to full-time software engineering roles. I\'m particularly interested in positions involving backend engineering, real-time systems, or infrastructure challenges. I\'m based in Nagpur, India and open to remote opportunities globally.',
  },
  {
    q: 'How do you approach system design?',
    a: 'I start with understanding the problem domain and expected scale. I design for reliability first — choosing the right database, caching strategy, and communication patterns. I believe in iterative architecture: start simple, measure performance, and optimize based on real data rather than premature optimization.',
  },
  {
    q: 'What are you currently learning?',
    a: 'I\'m deepening my knowledge of distributed systems, exploring advanced Kubernetes patterns, and experimenting with AI agent architectures using LangChain. I\'m also focused on improving my understanding of observability and building more sophisticated monitoring pipelines.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(2)

  return (
    <section className="py-24 md:py-32 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4">
            <span className="tag-pill text-charcoal/40 mb-5 inline-block">FAQ</span>
            <h2 className="text-[clamp(28px,4vw,52px)] font-display font-bold leading-tight tracking-tighter text-charcoal">
              Got Questions?<br />
              <span className="italic font-normal text-muted">I&apos;ve Got Answers.</span>
            </h2>
            <p className="mt-5 text-sm text-charcoal/50 leading-relaxed font-light max-w-xs">
              Everything you might want to know about my tech stack, experience, and how I approach engineering challenges.
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-charcoal/8">
              {faqs.map((faq, i) => (
                <div key={i} className="py-5">
                  <button
                    className="w-full flex items-center justify-between text-left group"
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  >
                    <span className={`text-sm md:text-base font-medium tracking-tight transition-colors ${
                      openIdx === i ? 'text-charcoal' : 'text-charcoal/50 group-hover:text-charcoal'
                    }`}>
                      {faq.q}
                    </span>
                    <span className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                      openIdx === i
                        ? 'bg-charcoal border-charcoal text-cream rotate-45'
                        : 'border-charcoal/20 text-charcoal/40 group-hover:border-charcoal/40'
                    }`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    openIdx === i ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm text-charcoal/50 leading-relaxed font-light pr-10">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
