'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <span className="tag-pill text-cream/20 border-cream/10 mb-6 inline-block">Get in Touch</span>
            <h2 className="text-[clamp(32px,5vw,64px)] font-display font-bold leading-tight tracking-tighter text-cream mb-6">
              Let&apos;s Build<br />
              <span className="italic font-normal text-cream/40">Scalable Systems Together.</span>
            </h2>
            <p className="text-sm text-cream/40 leading-relaxed font-light max-w-sm mb-10">
              Have a project that needs solid engineering? Whether it&apos;s a backend system, a real-time platform, or infrastructure work — let&apos;s talk.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-cream/25 mb-1 font-medium">Email</p>
                <a href="mailto:Abhishekgajananraut@gmail.com" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  Abhishekgajananraut@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-cream/25 mb-1 font-medium">Location</p>
                <p className="text-sm text-cream/70">Nagpur, India</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-cream/25 mb-1 font-medium">Connect</p>
                <div className="flex gap-4 mt-1">
                  <a href="https://github.com/abhishekraut01" target="_blank" rel="noopener noreferrer" className="text-xs text-cream/35 hover:text-cream transition-colors">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/sweabhishek" target="_blank" rel="noopener noreferrer" className="text-xs text-cream/35 hover:text-cream transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-cream/30 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-cream/5 border border-cream/10 rounded-xl px-4 py-3.5 text-sm text-cream placeholder:text-cream/20 focus:outline-none focus:border-cream/30 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-cream/30 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-cream/5 border border-cream/10 rounded-xl px-4 py-3.5 text-sm text-cream placeholder:text-cream/20 focus:outline-none focus:border-cream/30 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-cream/30 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-cream/5 border border-cream/10 rounded-xl px-4 py-3.5 text-sm text-cream placeholder:text-cream/20 focus:outline-none focus:border-cream/30 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`w-full py-4 rounded-xl text-sm tracking-widest uppercase font-semibold transition-all duration-300 ${
                  submitted
                    ? 'bg-[#C8FF00] text-charcoal'
                    : 'bg-cream text-charcoal hover:bg-cream/90'
                }`}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-cream/10 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[10px] tracking-widest uppercase text-cream/20 font-medium">
            © 2025 Abhishek Raut
          </p>
          <div className="flex items-center gap-5">
            <a href="https://github.com/abhishekraut01" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest uppercase text-cream/20 hover:text-cream/50 transition-colors font-medium">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sweabhishek" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest uppercase text-cream/20 hover:text-cream/50 transition-colors font-medium">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#C8FF00]" />
            <span className="text-[10px] tracking-widest uppercase text-cream/20 font-medium">Built with Next.js</span>
          </div>
        </div>
      </div>
    </section>
  )
}
