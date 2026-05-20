'use client'

import RuntimeNav from './runtime/RuntimeNav'
import HeroSection from './runtime/HeroSection'
import SystemsSection from './runtime/SystemsSection'
import BuildProtocolSection from './runtime/BuildProtocolSection'
import AgentsSection from './runtime/AgentsSection'
import ExperienceSection from './runtime/ExperienceSection'
import ContactSection from './runtime/ContactSection'

export default function BuilderRuntime() {
  return (
    <main className="runtime-shell min-h-screen bg-[#0b0d0b] text-[#f4efe4]">
      <div className="runtime-grid-bg" />
      <RuntimeNav />
      <HeroSection />
      <SystemsSection />
      <BuildProtocolSection />
      <AgentsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
