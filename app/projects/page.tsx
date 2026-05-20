import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Systems Archive - Abhishek Raut',
  description:
    'Engineering systems built by Abhishek Raut across backend systems, real-time products, deployments, and AI agents.',
}

export default function ProjectsPage() {
  return (
    <main className="runtime-shell min-h-screen bg-[#0b0d0b] text-[#f4efe4]">
      <div className="runtime-grid-bg" />

      <header className="runtime-nav sticky top-0 z-50 border-b border-[#f4efe4]/10 bg-[#0b0d0b]/88 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-mono text-xs uppercase tracking-[0.2em] text-[#baff39]">
            &lt;- runtime home
          </Link>
          <a
            href="https://github.com/abhishekraut01"
            target="_blank"
            rel="noopener noreferrer"
            className="runtime-button"
          >
            github
          </a>
        </div>
      </header>

      <section className="relative mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="section-heading">
          <p>// systems archive</p>
          <h1 className="text-5xl font-semibold leading-tight text-[#f4efe4] md:text-7xl">
            A build log of systems, agents, and real-time products.
          </h1>
          <span>
            Each entry is framed around the engineering problem: architecture, proof, and ownership.
          </span>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="runtime-panel overflow-hidden">
              <div className="relative min-h-[280px] border-b border-[#f4efe4]/10 bg-[#050705]">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0b] via-[#0b0d0b]/35 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#baff39]">
                      {project.codename} / {project.year}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#f4efe4]">{project.title}</h2>
                  </div>
                  <span className="runtime-badge">{project.type}</span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-sm leading-7 text-[#f4efe4]/62">{project.description}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="inspector-block">
                    <span>architecture</span>
                    <p>{project.architecture}</p>
                  </div>
                  <div className="inspector-block">
                    <span>proof</span>
                    <p>{project.proof}</p>
                  </div>
                  <div className="inspector-block">
                    <span>role</span>
                    <p>{project.role}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="runtime-chip">{tag}</span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github ?? project.live ?? 'https://github.com/abhishekraut01'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="runtime-button"
                  >
                    source
                  </a>
                  <Link href="/#contact" className="runtime-button">
                    discuss system
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
