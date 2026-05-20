export const runtimeSignals = [
  { label: 'Role target', value: 'SDE / Backend / AI Systems' },
  { label: 'Current mode', value: 'Open to full-time roles' },
  { label: 'Base', value: 'Nagpur, India' },
  { label: 'Builder bias', value: 'Ship from scratch, then harden' },
]

export const coreMetrics = [
  { value: '5+', label: 'Agentic AI systems shipped' },
  { value: '60%', label: 'Order processing time reduced' },
  { value: '10ms', label: 'Playback sync target reached' },
  { value: '1500+', label: 'DSA problems solved' },
]

export const stackGroups = [
  ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Zustand'],
  ['Python', 'FastAPI', 'Node.js', 'Express.js', 'WebSockets'],
  ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'ChromaDB'],
  ['Docker', 'Kubernetes', 'AWS', 'Argo CD', 'GitHub Actions'],
  ['LangGraph', 'LangChain', 'MCP', 'RAG', 'Fine-tuning'],
]

export const buildProtocol = [
  {
    id: '01',
    phase: 'model the domain',
    title: 'Data, workflows, and failure paths first.',
    copy: 'Define ownership, edge cases, and system contracts before writing a single endpoint.',
    tech: ['PostgreSQL', 'Prisma', 'event modeling', 'schema design'],
  },
  {
    id: '02',
    phase: 'build the working spine',
    title: 'API, auth, persistence, cache, background work.',
    copy: 'Ship the hardest parts early. Auth, data layer, job queues, and CI/CD path come before polish.',
    tech: ['FastAPI', 'Node.js', 'Express', 'Redis', 'JWT', 'WebSockets'],
  },
  {
    id: '03',
    phase: 'deploy and harden',
    title: 'Container on day one. Push to production without fear.',
    copy: 'CI/CD, containerization, and infrastructure wired before feature work accelerates.',
    tech: ['Docker', 'Kubernetes', 'AWS ECS', 'GitHub Actions', 'Nginx', 'Argo CD'],
  },
  {
    id: '04',
    phase: 'measure and iterate',
    title: 'Numbers first, then optimization.',
    copy: 'Trace sync drift, latency, re-renders, and throughput. Fix what data confirms.',
    tech: ['Prometheus', 'Grafana', 'load testing', 'profiling'],
  },
]

export const archLayers = [
  { id: 'ingress', label: 'INGRESS',       tech: 'Nginx · AWS ALB · Route 53',                    color: 'cyan' },
  { id: 'api',     label: 'API LAYER',     tech: 'FastAPI · Node.js · Express · gRPC · WebSockets', color: 'lime' },
  { id: 'state',   label: 'STATE + CACHE', tech: 'PostgreSQL · MongoDB · Redis · Prisma',           color: 'lime' },
  { id: 'agents',  label: 'AI AGENTS',     tech: 'LangGraph · MCP · ChromaDB · Qdrant · RAG',      color: 'cyan' },
  { id: 'deploy',  label: 'DEPLOY',        tech: 'Docker · Kubernetes · AWS ECS · Argo CD',        color: 'lime' },
  { id: 'observe', label: 'OBSERVE',       tech: 'Prometheus · Grafana · GitHub Actions',           color: 'lime' },
] as const

export const agentPipeline = [
  'Intent router',
  'LangGraph state machine',
  'MCP-compatible tools',
  'RAG / semantic memory',
  'LoRA fine-tuning',
  'Trace and evaluate',
]

export const agentTrace = [
  { label: 'orchestrator',   copy: 'Routes user intent to domain agents and structured tools.' },
  { label: 'state store',    copy: 'Maintains multi-turn context across Redis-backed sessions.' },
  { label: 'retrieval',      copy: 'Pulls historical incidents, product data, or support knowledge into the loop.' },
  { label: 'tool execution', copy: 'Runs MCP-compatible tools, API calls, and workflow actions with guardrails.' },
  { label: 'evaluation',     copy: 'Checks root-cause quality, response relevance, and human handoff reduction.' },
]

export const experienceLog = [
  'Led an Order Management System for a fashion designer and cut order processing time by 60%.',
  'Built QR-based restaurant SaaS for contactless menu browsing and ordering across multiple clients.',
  'Delivered LLM fine-tuning on customer support data to improve relevance and reduce human handoff.',
  'Designed and shipped 5+ agentic AI systems using LangGraph, LangChain, and LoRA fine-tuned models.',
  'Built ERP modules with TypeScript, React, and Zustand; cut unnecessary re-renders by 40%.',
]

export const achievements = [
  { metric: '1879+', label: 'LeetCode rating' },
  { metric: 'Top 5%', label: 'Competitive programming' },
  { metric: 'Rank 13', label: 'InterviewBit global' },
  { metric: '40+',    label: 'Engineers mentored' },
]
