'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#F5F2ED]/95 backdrop-blur-md border-b border-black/5' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="nav-link text-xs tracking-widest uppercase font-medium text-charcoal/70 hover:text-charcoal transition-colors">Home</a>
          <a href="#projects" className="nav-link text-xs tracking-widest uppercase font-medium text-charcoal/70 hover:text-charcoal transition-colors">Projects</a>
        </div>

        {/* Center name */}
        <a href="#" className="absolute left-1/2 -translate-x-1/2 text-sm tracking-widest uppercase font-semibold text-charcoal">
          Abhishek Raut
        </a>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          <a href="#experience" className="nav-link text-xs tracking-widest uppercase font-medium text-charcoal/70 hover:text-charcoal transition-colors">Experience</a>
          <a href="#contact" className="nav-link text-xs tracking-widest uppercase font-medium text-charcoal/70 hover:text-charcoal transition-colors">Contact</a>
          <a
            href="/Resume/Abhishek_May_2026_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-charcoal text-cream text-xs tracking-widest uppercase font-medium px-5 py-2.5 rounded-full hover:bg-charcoal/85 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
            </svg>
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#F5F2ED] border-t border-black/5 px-6 py-6 flex flex-col gap-5">
          {[
            { label: 'Home', href: '#' },
            { label: 'Projects', href: '#projects' },
            { label: 'Experience', href: '#experience' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (

            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase font-medium text-charcoal/70"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Resume/Abhishek_May_2026_Resume.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 bg-charcoal text-cream text-xs tracking-widest uppercase font-medium px-5 py-2.5 rounded-full hover:bg-charcoal/85 transition-colors w-fit"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
