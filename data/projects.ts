export type Project = {
  id: number
  type: 'professional' | 'personal'
  codename: string
  title: string
  category: string
  year: string
  tags: string[]
  description: string
  coverImage: string
  github: string | null
  live: string | null
  architecture: string
  proof: string
  role: string
}

export const projects: Project[] = [
    {
    id: 1,
    type: 'personal',
    codename: 'SYNC-ROOM',
    title: 'PlaySync',
    category: 'Real-Time Platform',
    year: '2025',
    tags: ['TypeScript', 'Turborepo', 'Next.js', 'Node.js', 'Redis', 'NextAuth', 'PostgreSQL', 'Prisma', 'Socket.io'],
    description:
      'A real-time music platform where users join rooms and keep playback synchronized across clients with low drift.',
    coverImage: '/projects/playsync.png',
    github: 'https://github.com/abhishekraut01',
    live: null,
    architecture:
      'Turborepo with Next.js, Node.js, Socket.io, Redis pub/sub, PostgreSQL, Prisma, and NextAuth.',
    proof:
      'Served 1,000+ registered users and reduced sync drift from 120ms to around 10ms at 5K+ messages/sec.',
    role:
      'Designed the real-time architecture, data model, authentication, and Redis-backed synchronization path.',
  },
  {
    id: 2,
    type: 'personal',
    codename: 'NIRMAAN',
    title: 'Nirmaan — AI App Builder',
    category: 'AI App Builder',
    year: '2025',
    tags: ['TypeScript', 'Node.js', 'React.js', 'PostgreSQL', 'Kubernetes'],
    description:
      'A Lovable-style AI app builder that generates full-stack React applications from natural language prompts, with streaming code generation and isolated per-user workspaces.',
    coverImage: '/projects/nirmaan.png',
    github: 'https://github.com/abhishekraut01',
    live: null,
    architecture:
      'LLM-driven code generation pipeline on Node.js + TypeScript, streaming file diffs to the browser, PostgreSQL for persistent project state, and per-project sandboxed containers on Kubernetes.',
    proof:
      'Generates deployable full-stack React apps from a single prompt while keeping each user workspace fully isolated in its own Kubernetes container.',
    role:
      'Architected the code generation pipeline, streaming layer, session persistence, and Kubernetes workspace isolation from scratch.',
  },
  {
    id: 3,
    type: 'personal',
    codename: 'INCIDENT-AI',
    title: 'AI Incident Investigator',
    category: 'DevOps Automation Agent',
    year: '2025',
    tags: ['TypeScript', 'Node.js', 'LangGraph.js', 'ChromaDB', 'Next.js', 'AWS'],
    description:
      'An autonomous investigation agent that reads application errors, retrieves historical context, reasons through likely causes, and proposes code-level fixes.',
    coverImage: '/projects/ai-incident-investigator.png',
    github: 'https://github.com/abhishekraut01',
    live: null,
    architecture:
      'Next.js dashboard, Node.js agent service, LangGraph.js workflow, ChromaDB retrieval layer, and AWS deployment path.',
    proof:
      'Reached 80% correct root-cause identification on 10 seeded production bugs with visible reasoning traces.',
    role:
      'Built the agent pipeline, retrieval layer, dashboard, seeded bug evaluations, and deployment surface.',
  },
  {
    id: 4,
    type: 'personal',
    codename: 'PRIVATE-CHAT',
    title: 'Koshitsu',
    category: 'Privacy-First Chat',
    year: '2025',
    tags: ['React', 'PostgreSQL', 'Redis', 'Docker'],
    description:
      'A privacy-first real-time chat platform with encrypted messaging, persistent group chats, and ephemeral private rooms.',
    coverImage: '/projects/koshitsu.png',
    github: 'https://github.com/abhishekraut01',
    live: null,
    architecture:
      'React interface, persistent storage, Redis-backed real-time state, Dockerized runtime, and room-level messaging flows.',
    proof:
      'Combines persistent group chats with ephemeral private rooms while keeping the product model focused on privacy.',
    role:
      'Built the product flow, real-time messaging model, and containerized application runtime.',
  },
]
