'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { projects } from '@/data/projects'

export default function SystemsSection() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? 1)

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) ?? projects[0],
    [activeProjectId],
  )

  return (
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
  )
}
