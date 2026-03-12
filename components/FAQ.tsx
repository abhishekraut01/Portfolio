'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What is your role?',
    a: 'I\'m a Senior Product Designer specializing in UI/UX, motion design, and brand strategy. I work with startups and scale-ups to craft digital experiences that are both functionally excellent and visually memorable.',
  },
  {
    q: 'How do you use user personas?',
    a: 'Personas are central to my process. I build them through qualitative interviews, usage analytics, and contextual inquiry. They serve as a north star during design reviews to keep decisions anchored in real user needs rather than assumptions.',
  },
  {
    q: 'Which design tools do you use?',
    a: 'Figma is my primary tool for UI design and prototyping. I use ProtoPie and Principle for complex interactions, Framer for web, Lottie/After Effects for motion, and Notion for documentation. I also work comfortably in no-code platforms like Webflow.',
  },
  {
    q: 'How do you collaborate with teams?',
    a: 'I embed tightly with product and engineering from discovery to launch. I run design critiques, hold regular design-dev syncs, and document decisions clearly to reduce ambiguity. Good design is a team sport.',
  },
  {
    q: 'How do you balance innovation and constraints?',
    a: 'I treat constraints as creative fuel. Understanding technical, business, and user limits upfront actually sharpens solutions. I push for innovation within the space of what\'s buildable — bold ideas grounded in what can actually ship.',
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
              <span className="italic font-normal text-muted">I've Got Answers.</span>
            </h2>
            <p className="mt-5 text-sm text-charcoal/50 leading-relaxed font-light max-w-xs">
              Everything you might want to know about how I work, what I use, and how we can create something great together.
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
