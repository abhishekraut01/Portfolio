export type Project = {
  id: number
  type: 'professional' | 'personal'
  title: string
  category: string
  year: string
  tags: string[]
  color: string
  accent: string
  description: string
  metrics: string[]
  coverImage: string
  github: string | null
  live: string | null
  client?: string
  duration?: string
  impact?: string[]
}

export const projects: Project[] = [
  // ── Personal Projects ──────────────────────────────────────────
  {
    id: 1,
    type: 'personal',
    title: 'Swiggy Multi-Agent Ordering System',
    category: 'AI Multi-Agent System',
    year: '2025',
    tags: ['Python', 'FastAPI', 'LangGraph', 'OpenAI', 'MCP', 'Redis'],
    color: '#1a1a2e',
    accent: '#FF6B35',
    description:
      'Architected a multi-agent system on LangGraph with an orchestrator agent routing user and structured tool calls. Built a FastAPI backend with async agent orchestration and Redis-backed session state, sustaining multi-turn conversations across agents without context loss.',
    metrics: ['Multi-agent orchestration', 'MCP-compatible tools'],
    coverImage: '/projects/swiggy-multi-agent.png',
    github: 'https://github.com/abhishekraut01',
    live: null,
  },
  {
    id: 2,
    type: 'personal',
    title: 'AI Incident Investigator',
    category: 'DevOps Automation Agent',
    year: '2025',
    tags: ['TypeScript', 'Node.js', 'LangGraph.js', 'ChromaDB', 'Next.js', 'AWS'],
    color: '#1c2826',
    accent: '#5CE0B8',
    description:
      'Built an autonomous AI agent that investigates application errors and proposes code fixes, achieving 80% correct root-cause identification on 10 seeded production bugs. Ships a Next.js dashboard showing agent reasoning traces, backed by a ChromaDB retrieval layer over historical incidents.',
    metrics: ['80% root-cause accuracy', '4-tool agent pipeline'],
    coverImage: '/projects/ai-incident-investigator.png',
    github: 'https://github.com/abhishekraut01',
    live: null,
  },
  {
    id: 3,
    type: 'personal',
    title: 'PlaySync',
    category: 'Real-Time Platform',
    year: '2025',
    tags: ['TypeScript', 'Turborepo', 'Next.js', 'Node.js', 'Redis', 'NextAuth', 'PostgreSQL', 'Prisma', 'Socket.io'],
    color: '#1a1a1a',
    accent: '#C8FF00',
    description:
      'Architected a real-time music streaming platform with synchronized playback across rooms, serving 1,000+ registered users. Engineered Socket.io pub/sub over Redis to cut sync drift from 120ms to 10ms (91% lower) at 5K+ msgs/sec.',
    metrics: ['1000+ users', '~10ms sync latency'],
    coverImage: '/projects/playsync.png',
    github: 'https://github.com/abhishekraut01',
    live: null,
  },
  {
    id: 4,
    type: 'personal',
    title: 'Koshitsu',
    category: 'Privacy-First Chat',
    year: '2025',
    tags: ['React', 'PostgreSQL', 'Redis', 'Docker'],
    color: '#1e2535',
    accent: '#A8D8FF',
    description:
      'Privacy-first real-time chat platform with encrypted messaging, persistent group chats, and ephemeral private rooms.',
    metrics: ['WebSocket messaging', 'E2E encrypted'],
    coverImage: '/projects/koshitsu.png',
    github: 'https://github.com/abhishekraut01',
    live: null,
  },
]
