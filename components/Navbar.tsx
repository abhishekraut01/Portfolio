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
          <span className="text-xs tracking-widest uppercase font-medium text-charcoal/40">Full-Stack Engineer</span>
          <a href="#experience" className="nav-link text-xs tracking-widest uppercase font-medium text-charcoal/70 hover:text-charcoal transition-colors">Experience</a>
          <a href="#contact" className="nav-link text-xs tracking-widest uppercase font-medium text-charcoal/70 hover:text-charcoal transition-colors">Contact</a>
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
        </div>
      </div>
    </nav>
  )
}
