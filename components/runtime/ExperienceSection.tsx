import { experienceLog, achievements } from '@/data/runtime'

function ProductionLog() {
  return (
    <div className="runtime-panel p-5 sm:p-7">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#f4efe4]/10 pb-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#baff39]">production log</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#f4efe4] md:text-4xl">
            Ignix Social / Software Engineer
          </h2>
        </div>
        <span className="runtime-badge">Jan 2025 - Present</span>
      </div>
      <div className="change-log">
        {experienceLog.map((item, index) => (
          <div key={item} className="change-item">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SignalLedger() {
  return (
    <div className="runtime-panel p-5 sm:p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#baff39]">signal ledger</p>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {achievements.map((achievement) => (
          <div key={achievement.label} className="proof-tile">
            <strong>{achievement.metric}</strong>
            <span>{achievement.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 border-t border-[#f4efe4]/10 pt-5 text-sm leading-6 text-[#f4efe4]/58">
        Competitive programming gave me the patience to reason through edge cases. Product work gave me the instinct to turn that reasoning into systems people can actually use.
      </p>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section className="runtime-section border-t border-[#f4efe4]/10">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1fr_420px]">
          <ProductionLog />
          <SignalLedger />
        </div>
      </div>
    </section>
  )
}
