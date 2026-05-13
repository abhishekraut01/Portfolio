'use client'

const techCategories = [
  {
    title: 'Frontend',
    prefix: '>_ ui',
    items: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Zustand'],
  },
  {
    title: 'Backend',
    prefix: '>_ server',
    items: ['Python', 'Node.js', 'Express.js', 'FastAPI', 'RESTful APIs', 'GraphQL', 'gRPC', 'WebSockets', 'Microservices', 'Nginx'],
  },
  {
    title: 'Databases & Caching',
    prefix: '>_ data',
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Pinecone', 'ChromaDB', 'Qdrant', 'Prisma', 'Mongoose'],
  },
  {
    title: 'DevOps & Tools',
    prefix: '>_ infra',
    items: ['Docker', 'Kubernetes', 'AWS (EC2, ECS, ECR, ASG)', 'Argo CD', 'Prometheus', 'Grafana', 'Turborepo', 'Git', 'GitHub Actions'],
  },
  {
    title: 'AI & Automation',
    prefix: '>_ ai',
    items: ['LLMs', 'RAG Pipelines', 'MCP', 'LangChain', 'Prompt Engineering', 'Semantic Search', 'Fine-Tuning', 'Multi-Model Routing'],
  },
]

export default function TechStack() {
  return (
    <section className="section-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <span className="tag-pill-dark mb-4 inline-block">Tech Stack</span>
          <h2 className="text-[clamp(28px,4vw,52px)] font-display font-bold leading-tight tracking-tighter text-cream">
            Tools & Technologies<br />
            <span className="italic font-normal text-cream/30">I Work With.</span>
          </h2>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((cat) => (
            <div
              key={cat.title}
              className="tech-card rounded-2xl bg-cream/[0.03] border border-cream/[0.06] p-6 group"
            >
              {/* Terminal-style header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-semibold text-cream/70 tracking-tight group-hover:text-cream transition-colors">
                  {cat.title}
                </h3>
                <span className="code-accent font-mono text-[10px]">{cat.prefix}</span>
              </div>

              {/* Tech items */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] tracking-wider font-medium text-cream/35 bg-cream/[0.04] border border-cream/[0.08] rounded-full px-3 py-1.5 hover:text-cream/60 hover:border-cream/15 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
