import { buildProtocol, archLayers } from '@/data/runtime'

function ProtocolSteps() {
  return (
    <div className="runtime-panel overflow-hidden">
      {buildProtocol.map((step) => (
        <div
          key={step.id}
          className="group cursor-default border-b border-[#f4efe4]/08 px-6 py-5 transition-colors last:border-b-0 hover:bg-[#baff39]/03"
        >
          <div className="flex items-start gap-5">
            <span className="mt-0.5 shrink-0 font-mono text-sm text-[#baff39]">{step.id}</span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#baff39]/60">
                {step.phase}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold text-[#f4efe4]">{step.title}</h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[#f4efe4]/50">{step.copy}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {step.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#f4efe4]/10 bg-[#f4efe4]/03 px-3 py-1 font-mono text-[11px] text-[#f4efe4]/42 transition-colors group-hover:border-[#baff39]/22 group-hover:text-[#f4efe4]/65"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ArchitectureLayers() {
  return (
    <div className="runtime-panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#f4efe4]/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f4efe4]/40">
        <span>architecture layers</span>
        <span className="status-online" style={{ fontSize: '10px' }}>live</span>
      </div>
      <div className="arch-panel">
        <div className="arch-flow-cursor" />
        {archLayers.map((layer) => (
          <div key={layer.id} className="arch-layer">
            <p
              className="arch-label"
              style={{ color: layer.color === 'cyan' ? 'var(--cyan)' : 'var(--lime)' }}
            >
              {layer.label}
            </p>
            <p className="arch-tech">{layer.tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BuildProtocolSection() {
  return (
    <section id="backend" className="runtime-section-bench border-t border-[#f4efe4]/10">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="section-heading">
          <p>// build protocol</p>
          <h2>Engineering from the spine out.</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_300px]">
          <ProtocolSteps />
          <ArchitectureLayers />
        </div>
      </div>
    </section>
  )
}
