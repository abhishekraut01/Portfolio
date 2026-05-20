import Image from 'next/image'
import { runtimeSignals, coreMetrics, stackGroups } from '@/data/runtime'

function PhotoPanel() {
  return (
    <section className="runtime-panel relative flex min-h-[500px] flex-col overflow-hidden">
      <Image
        src="/Profile/clean_image.png"
        alt="Abhishek Raut"
        fill
        className="object-cover object-top"
        priority
        sizes="(max-width: 1024px) 100vw, 28vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0b] via-[#0b0d0b]/50 to-[#0b0d0b]/08" />
      <div className="relative z-10 flex items-center justify-between border-b border-[#f4efe4]/10 p-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4efe4]/50">
        <span>operator</span>
        <span className="status-online">online</span>
      </div>
      <div className="relative z-10 mt-auto p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#baff39]">Abhishek Raut</p>
        <p className="mt-3 text-2xl font-semibold leading-snug text-[#f4efe4] sm:text-3xl">
          Backend. AI systems.<br />Deployable products.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#systems" className="runtime-button runtime-button-bright">inspect builds</a>
          <a href="#contact" className="runtime-button">start a thread</a>
        </div>
      </div>
    </section>
  )
}

function SystemMap() {
  return (
    <section className="runtime-panel flex flex-col p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-[#f4efe4]/10 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4efe4]/50">
        <span>system map</span>
        <span>scratch to scale</span>
      </div>
      <div className="system-map flex-1">
        <div className="map-link link-api-data" />
        <div className="map-link link-api-agent" />
        <div className="map-link link-agent-tools" />
        <div className="map-link link-data-deploy" />
        <div className="map-node node-api"><span>API</span><strong>FastAPI / Node</strong></div>
        <div className="map-node node-data"><span>State</span><strong>Postgres / Redis</strong></div>
        <div className="map-node node-agent"><span>Agents</span><strong>LangGraph / MCP</strong></div>
        <div className="map-node node-tools"><span>Tools</span><strong>RAG / workers</strong></div>
        <div className="map-node node-deploy"><span>Deploy</span><strong>Docker / AWS</strong></div>
        <div className="map-node node-observe"><span>Observe</span><strong>Prometheus / Grafana</strong></div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {coreMetrics.map((metric) => (
          <div key={metric.label} className="metric-tile">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function BuildFeed() {
  return (
    <section className="runtime-panel flex flex-col p-5 sm:p-6">
      <div className="mb-5 border-b border-[#f4efe4]/10 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4efe4]/50">
        build feed
      </div>
      <div className="terminal-feed" aria-label="Engineering build feed">
        <p><span>$</span> bootstrap product idea</p>
        <p><span>&gt;</span> model domain, data, workflows</p>
        <p><span>&gt;</span> build API and persistence first</p>
        <p><span>&gt;</span> wire agents only where they earn trust</p>
        <p><span>&gt;</span> containerize, deploy, observe, iterate</p>
        <p><span>ok</span> ship useful systems, not demos</p>
      </div>
      <div className="mt-6 space-y-4">
        {stackGroups.map((group, index) => (
          <div key={index} className="stack-row">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>{group.map((item) => <b key={item}>{item}</b>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function HeroSection() {
  return (
    <section id="boot" className="relative mx-auto max-w-[1440px] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mb-5 grid gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4efe4]/48 md:grid-cols-4">
        {runtimeSignals.map((signal) => (
          <div key={signal.label} className="runtime-strip">
            <span>{signal.label}</span>
            <strong>{signal.value}</strong>
          </div>
        ))}
      </div>
      <div className="grid min-h-[calc(100vh-150px)] grid-cols-1 gap-4 lg:grid-cols-[0.95fr_1.35fr_1fr]">
        <PhotoPanel />
        <SystemMap />
        <BuildFeed />
      </div>
    </section>
  )
}
