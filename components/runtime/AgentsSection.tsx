import { agentPipeline, agentTrace } from '@/data/runtime'

function AgentRail() {
  return (
    <div className="agent-rail mt-10">
      {agentPipeline.map((step, index) => (
        <div key={step} className="agent-step">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  )
}

function AgentTrace() {
  return (
    <div className="runtime-panel p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-[#f4efe4]/10 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4efe4]/50">
        <span>agent trace</span>
        <span>LangGraph / MCP / RAG</span>
      </div>
      <div className="trace-stack">
        {agentTrace.map(({ label, copy }) => (
          <div key={label}>
            <span>{label}</span>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AgentsSection() {
  return (
    <section id="agents" className="runtime-section border-t border-[#f4efe4]/10">
      <div className="mx-auto grid max-w-[1440px] gap-4 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <div className="section-heading">
            <p>// ai control plane</p>
            <h2>AI systems as workflows, tools, memory, and evaluation.</h2>
            <span>No magic wrapper energy. The agent earns its place by doing useful work inside a reliable system.</span>
          </div>
          <AgentRail />
        </div>
        <AgentTrace />
      </div>
    </section>
  )
}
