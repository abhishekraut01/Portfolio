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
  // ── Professional Projects ──────────────────────────────────────
  {
    id: 1,
    type: 'professional',
    title: 'Dhruvs Atelier Platform',
    category: 'Business Operations Platform',
    year: '2025',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
    color: '#1a1a2e',
    accent: '#B88AE0',
    description:
      'Designed and built a digital operations platform for a custom fashion studio to manage garment orders, fabric tracking, delivery timelines, and customer workflows.',
    metrics: ['Digitized workflow', 'Centralized tracking'],
    coverImage: '/projects/dhruvs-atelier.png',
    github: null,
    live: null,
    client: 'Dhruvs (Fashion Designer, Nagpur)',
    duration: 'Dec 2024 — Mar 2025',
    impact: [
      'Digitized tailoring workflow',
      'Centralized order tracking',
      'Reduced manual management',
    ],
  },
  {
    id: 2,
    type: 'professional',
    title: 'Rishtey Fabric Operations Suite',
    category: 'Retail Operations Platform',
    year: '2025',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    color: '#1c2826',
    accent: '#5CE0B8',
    description:
      'Built a backend-driven operations system for managing fabric orders, tailoring workflow, inventory tracking, and delivery scheduling.',
    metrics: ['Automated lifecycle', 'Improved efficiency'],
    coverImage: '/projects/rishtey-fabrics.png',
    github: null,
    live: null,
    client: 'Rishtey Fabrics (Fabric Dealer, Nagpur)',
    duration: 'Mar 2025 — Present',
    impact: [
      'Automated order lifecycle tracking',
      'Improved operational efficiency',
      'Reduced manual paperwork',
    ],
  },
  {
    id: 3,
    type: 'professional',
    title: 'IgnixSocial Platform Infrastructure',
    category: 'Enterprise Web Platform',
    year: '2025',
    tags: ['Node.js', 'React', 'PostgreSQL', 'REST APIs'],
    color: '#1a1a1a',
    accent: '#FF6B6B',
    description:
      'Architected and developed the backend infrastructure, company website, and internal CRM system for IgnixSocial. Led backend development during the initial engineering phase and designed scalable APIs for business operations.',
    metrics: ['Production APIs', 'Internal CRM'],
    coverImage: '/projects/ignixsocial.png',
    github: null,
    live: null,
    client: 'IgnixSocial',
    duration: 'Feb 2025 — Present',
    impact: [
      'Built internal CRM system',
      'Developed production backend APIs',
      'Led backend development during early product stage',
    ],
  },

  // ── Personal Projects ──────────────────────────────────────────
  {
    id: 4,
    type: 'personal',
    title: 'PlaySync',
    category: 'Real-Time Platform',
    year: '2025',
    tags: ['Next.js', 'Redis', 'Socket.io', 'PostgreSQL'],
    color: '#1a1a1a',
    accent: '#C8FF00',
    description:
      'Real-time collaborative music streaming platform — users create rooms and listen together with synchronized playback.',
    metrics: ['1000+ active users', '~10ms sync latency'],
    coverImage: '/projects/playsync.png',
    github: 'https://github.com/abhishekraut01',
    live: null,
  },
  {
    id: 5,
    type: 'personal',
    title: 'FitsYouAI',
    category: 'AI Platform',
    year: '2025',
    tags: ['Next.js', 'MongoDB', 'Gemini API', 'Node.js'],
    color: '#2d2922',
    accent: '#F4A261',
    description:
      'AI-powered virtual try-on platform that generates realistic outfit previews from user photos and clothing images.',
    metrics: ['<3s generation', '25% cost reduction'],
    coverImage: '/projects/fitsyouai.png',
    github: 'https://github.com/abhishekraut01',
    live: null,
  },
  {
    id: 6,
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
