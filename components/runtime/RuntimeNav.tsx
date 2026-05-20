const navLinks = [
  { href: '#systems', label: 'systems' },
  { href: '#backend', label: 'backend' },
  { href: '#agents',  label: 'agents' },
  { href: '#contact', label: 'contact' },
]

export default function RuntimeNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f4efe4]/10 bg-[#0b0d0b]/88 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#boot" className="font-mono text-xs uppercase tracking-[0.2em] text-[#baff39]">
          abhishek/runtime
        </a>
        <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4efe4]/50 md:flex">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-[#f4efe4]">{label}</a>
          ))}
        </nav>
        <a href="/Resume/Abhishek_May_2026_Resume.pdf" download className="runtime-button">
          resume
        </a>
      </div>
    </header>
  )
}
