'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useMemo, useState } from 'react'
import { projects } from '@/data/projects'

const runtimeSignals = [
  { label: 'Role target', value: 'SDE / Backend / AI Systems' },
  { label: 'Current mode', value: 'Open to full-time roles' },
  { label: 'Base', value: 'Nagpur, India' },
  { label: 'Builder bias', value: 'Ship from scratch, then harden' },
]

const coreMetrics = [
  { value: '5+', label: 'Agentic AI systems shipped' },
  { value: '60%', label: 'Order processing time reduced' },
  { value: '10ms', label: 'Playback sync target reached' },
  { value: '1500+', label: 'DSA problems solved' },
]

const backendLayers = [
  {
    id: '01',
    title: 'API and product servers',
    copy: 'TypeScript, Node.js, Python, FastAPI, Express, REST, GraphQL, gRPC, WebSockets.',
  },
  {
    id: '02',
    title: 'State, cache, and retrieval',
    copy: 'PostgreSQL, MongoDB, Redis, Prisma, Mongoose, ChromaDB, Qdrant, Pinecone.',
  },
  {
    id: '03',
    title: 'Deployment surfaces',
    copy: 'Docker, Kubernetes, AWS EC2/ECS/ECR/ASG, Nginx, GitHub Actions, Argo CD.',
  },
  {
    id: '04',
    title: 'Reliability loop',
    copy: 'Prometheus, Grafana, debouncing, lazy loading, memoization, measured optimization.',
  },
]

const agentPipeline = [
  'Intent router',
  'LangGraph state machine',
  'MCP-compatible tools',
  'RAG / semantic memory',
  'LoRA fine-tuning',
  'Trace and evaluate',
]

const experienceLog = [
  'Led an Order Management System for a fashion designer and cut order processing time by 60%.',
  'Built QR-based restaurant SaaS for contactless menu browsing and ordering across multiple clients.',
  'Delivered LLM fine-tuning on customer support data to improve relevance and reduce human handoff.',
  'Designed and shipped 5+ agentic AI systems using LangGraph, LangChain, and LoRA fine-tuned models.',
  'Built ERP modules with TypeScript, React, and Zustand; cut unnecessary re-renders by 40%.',
]

const achievements = [
  { metric: '1879+', label: 'LeetCode rating' },
  { metric: 'Top 5%', label: 'Competitive programming' },
  { metric: 'Rank 13', label: 'InterviewBit global' },
  { metric: '40+', label: 'Engineers mentored' },
]

const stackGroups = [
  ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Zustand'],
  ['Python', 'FastAPI', 'Node.js', 'Express.js', 'WebSockets'],
  ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'ChromaDB'],
  ['Docker', 'Kubernetes', 'AWS', 'Argo CD', 'GitHub Actions'],
  ['LangGraph', 'LangChain', 'MCP', 'RAG', 'Fine-tuning'],
]

export default function BuilderRuntime() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? 1)
  const [contact, setContact] = useState({ name: '', email: '', message: '' })

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? projects[0],
    [activeProjectId],
  )

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${contact.name || 'builder runtime'}`)
    const body = encodeURIComponent(
      [`Name: ${contact.name}`, `Email: ${contact.email}`, '', contact.message].join('\n'),
    )
    window.location.href = `mailto:Abhishekgajananraut@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="runtime-shell min-h-screen bg-[#0b0d0b] text-[#f4efe4]">
      <div className="runtime-grid-bg" />

      <header className="runtime-nav sticky top-0 z-50 border-b border-[#f4efe4]/10 bg-[#0b0d0b]/88 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#boot" className="font-mono text-xs uppercase tracking-[0.2em] text-[#baff39]">
            abhishek/runtime
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4efe4]/50 md:flex">
            <a href="#systems" className="hover:text-[#f4efe4]">systems</a>
            <a href="#backend" className="hover:text-[#f4efe4]">backend</a>
            <a href="#agents" className="hover:text-[#f4efe4]">agents</a>
            <a href="#contact" className="hover:text-[#f4efe4]">contact</a>
          </nav>
          <a
            href="/Resume/Abhishek_May_2026_Resume.pdf"
            download
            className="runtime-button"
          >
            resume
          </a>
        </div>
      </header>

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
          <section className="runtime-panel flex flex-col justify-between p-5 sm:p-6">
            <div>
              <div className="mb-6 flex items-center justify-between border-b border-[#f4efe4]/10 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4efe4]/50">
                <span>operator</span>
                <span className="status-online">online</span>
              </div>
              <div className="operator-frame">
                <Image
                  src="/Profile/clean_image.png"
                  alt="Abhishek Raut"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 28vw"
                />
              </div>
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#baff39]">Abhishek Raut</p>
                <h1 className="mt-3 text-4xl font-semibold leading-[1.05] text-[#f4efe4] sm:text-5xl lg:text-6xl">
                  Builder of backend systems, deployable products, and AI agents.
                </h1>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#systems" className="runtime-button runtime-button-bright">inspect builds</a>
              <a href="#contact" className="runtime-button">start a thread</a>
            </div>
          </section>

          <section className="runtime-panel p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-[#f4efe4]/10 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4efe4]/50">
              <span>system map</span>
              <span>scratch to scale</span>
            </div>
            <div className="system-map">
              <div className="map-link link-api-data" />
              <div className="map-link link-api-agent" />
              <div className="map-link link-agent-tools" />
              <div className="map-link link-data-deploy" />
              <div className="map-node node-api">
                <span>API</span>
                <strong>FastAPI / Node</strong>
              </div>
              <div className="map-node node-data">
                <span>State</span>
                <strong>Postgres / Redis</strong>
              </div>
              <div className="map-node node-agent">
                <span>Agents</span>
                <strong>LangGraph / MCP</strong>
              </div>
              <div className="map-node node-tools">
                <span>Tools</span>
                <strong>RAG / workers</strong>
              </div>
              <div className="map-node node-deploy">
                <span>Deploy</span>
                <strong>Docker / AWS</strong>
              </div>
              <div className="map-node node-observe">
                <span>Observe</span>
                <strong>Prometheus / Grafana</strong>
              </div>
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

          <section className="runtime-panel p-5 sm:p-6">
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
                  <div>
                    {group.map((item) => (
                      <b key={item}>{item}</b>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section id="systems" className="runtime-section border-t border-[#f4efe4]/10">
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="section-heading">
            <p>// build queue</p>
            <h2>Systems that prove the builder mindset.</h2>
            <span>Projects are shown as engineering artifacts: constraints, architecture, and measurable behavior.</span>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[360px_1fr]">
            <div className="runtime-panel p-3">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  aria-pressed={project.id === activeProject.id}
                  onClick={() => setActiveProjectId(project.id)}
                  className={`project-switch ${project.id === activeProject.id ? 'project-switch-active' : ''}`}
                >
                  <span>{project.codename}</span>
                  <strong>{project.title}</strong>
                  <em>{project.category}</em>
                </button>
              ))}
              <Link href="/projects" className="project-archive-link">
                open full systems archive -&gt;
              </Link>
            </div>

            <article className="runtime-panel overflow-hidden">
              <div className="project-inspector">
                <div className="project-visual">
                  <Image
                    src={activeProject.coverImage}
                    alt={activeProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#f4efe4]/10 pb-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#baff39]">
                        {activeProject.codename} / {activeProject.year}
                      </p>
                      <h3 className="mt-2 text-3xl font-semibold leading-tight text-[#f4efe4] md:text-4xl">
                        {activeProject.title}
                      </h3>
                    </div>
                    <a
                      href={activeProject.github ?? activeProject.live ?? 'https://github.com/abhishekraut01'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="runtime-button"
                    >
                      source
                    </a>
                  </div>
                  <p className="max-w-3xl text-base leading-7 text-[#f4efe4]/66">
                    {activeProject.description}
                  </p>
                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    <div className="inspector-block">
                      <span>architecture</span>
                      <p>{activeProject.architecture}</p>
                    </div>
                    <div className="inspector-block">
                      <span>proof</span>
                      <p>{activeProject.proof}</p>
                    </div>
                    <div className="inspector-block">
                      <span>role</span>
                      <p>{activeProject.role}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="runtime-chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="backend" className="runtime-section runtime-section-light">
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="section-heading section-heading-dark">
            <p>// backend and deployment bench</p>
            <h2>Designed around systems that can run, fail, recover, and grow.</h2>
            <span>My work is strongest where product code meets infrastructure, data, and operational pressure.</span>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {backendLayers.map((layer) => (
              <div key={layer.id} className="layer-panel">
                <span>{layer.id}</span>
                <h3>{layer.title}</h3>
                <p>{layer.copy}</p>
              </div>
            ))}
          </div>

          <div className="deploy-console mt-10">
            <div className="deploy-line">
              <span>01</span>
              <strong>model the domain</strong>
              <p>Start with workflows, data ownership, and failure paths before styling screens.</p>
            </div>
            <div className="deploy-line">
              <span>02</span>
              <strong>build the working spine</strong>
              <p>API, auth, persistence, cache, background work, and deployment path come early.</p>
            </div>
            <div className="deploy-line">
              <span>03</span>
              <strong>measure the bottleneck</strong>
              <p>Optimize with traces and numbers: sync drift, re-renders, handoff rate, latency, throughput.</p>
            </div>
            <div className="deploy-line">
              <span>04</span>
              <strong>ship and harden</strong>
              <p>Containerize, monitor, iterate, and keep the system understandable after launch.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="agents" className="runtime-section border-y border-[#f4efe4]/10">
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="section-heading">
              <p>// ai control plane</p>
              <h2>AI systems as workflows, tools, memory, and evaluation.</h2>
              <span>No magic wrapper energy. The agent earns its place by doing useful work inside a reliable system.</span>
            </div>
            <div className="agent-rail mt-10">
              {agentPipeline.map((step, index) => (
                <div key={step} className="agent-step">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="runtime-panel p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-[#f4efe4]/10 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#f4efe4]/50">
              <span>agent trace</span>
              <span>LangGraph / MCP / RAG</span>
            </div>
            <div className="trace-stack">
              <div><span>orchestrator</span><p>Routes user intent to domain agents and structured tools.</p></div>
              <div><span>state store</span><p>Maintains multi-turn context across Redis-backed sessions.</p></div>
              <div><span>retrieval</span><p>Pulls historical incidents, product data, or support knowledge into the loop.</p></div>
              <div><span>tool execution</span><p>Runs MCP-compatible tools, API calls, and workflow actions with guardrails.</p></div>
              <div><span>evaluation</span><p>Checks root-cause quality, response relevance, and human handoff reduction.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="runtime-section">
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_420px]">
            <div className="runtime-panel p-5 sm:p-7">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#f4efe4]/10 pb-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#baff39]">production log</p>
                  <h2 className="mt-2 text-3xl font-semibold text-[#f4efe4] md:text-4xl">Ignix Social / Software Engineer</h2>
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
          </div>
        </div>
      </section>

      <section id="contact" className="runtime-section-light border-t border-[#0b0d0b]/10">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2f5f00]">// open channel</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#11130f] md:text-6xl">
              Bring me hard systems, early products, and useful AI problems.
            </h2>
            <div className="mt-8 space-y-3 font-mono text-sm text-[#11130f]/68">
              <p>email: <a href="mailto:Abhishekgajananraut@gmail.com">Abhishekgajananraut@gmail.com</a></p>
              <p>github: <a href="https://github.com/abhishekraut01" target="_blank" rel="noopener noreferrer">abhishekraut01</a></p>
              <p>linkedin: <a href="https://linkedin.com/in/sweabhishek" target="_blank" rel="noopener noreferrer">sweabhishek</a></p>
            </div>
          </div>

          <form onSubmit={submitContact} className="contact-console">
            <label>
              <span>name</span>
              <input
                value={contact.name}
                onChange={(event) => setContact({ ...contact, name: event.target.value })}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              <span>email</span>
              <input
                type="email"
                value={contact.email}
                onChange={(event) => setContact({ ...contact, email: event.target.value })}
                placeholder="you@company.com"
                required
              />
            </label>
            <label>
              <span>message</span>
              <textarea
                value={contact.message}
                onChange={(event) => setContact({ ...contact, message: event.target.value })}
                placeholder="What are we building?"
                rows={6}
                required
              />
            </label>
            <button type="submit">compose email -&gt;</button>
          </form>
        </div>
      </section>
    </main>
  )
}
