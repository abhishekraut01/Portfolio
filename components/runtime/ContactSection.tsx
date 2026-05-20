'use client'

import { FormEvent, useState } from 'react'

const socialLinks = [
  {
    label: 'email',
    href: 'mailto:Abhishekgajananraut@gmail.com',
    display: 'Abhishekgajananraut@gmail.com',
    external: false,
  },
  {
    label: 'github',
    href: 'https://github.com/abhishekraut01',
    display: 'abhishekraut01',
    external: true,
  },
  {
    label: 'linkedin',
    href: 'https://linkedin.com/in/sweabhishek',
    display: 'sweabhishek',
    external: true,
  },
]

type ContactFields = { name: string; email: string; message: string }

const emptyContact: ContactFields = { name: '', email: '', message: '' }

export default function ContactSection() {
  const [contact, setContact] = useState<ContactFields>(emptyContact)

  const handleChange = (field: keyof ContactFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setContact((prev) => ({ ...prev, [field]: e.target.value }))

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${contact.name || 'builder runtime'}`)
    const body = encodeURIComponent(
      [`Name: ${contact.name}`, `Email: ${contact.email}`, '', contact.message].join('\n'),
    )
    window.location.href = `mailto:Abhishekgajananraut@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="runtime-section-contact border-t border-[#f4efe4]/10">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#baff39]">// open channel</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#f4efe4] md:text-6xl">
            Bring me hard systems, early products, and useful AI problems.
          </h2>
          <div className="mt-8 space-y-3 font-mono text-sm text-[#f4efe4]/50">
            {socialLinks.map(({ label, href, display, external }) => (
              <p key={label}>
                {label}:{' '}
                <a
                  href={href}
                  className="text-[#f4efe4]/72 transition-colors hover:text-[#baff39]"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {display}
                </a>
              </p>
            ))}
          </div>
        </div>

        <form onSubmit={submitContact} className="contact-console">
          <label>
            <span>name</span>
            <input
              value={contact.name}
              onChange={handleChange('name')}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            <span>email</span>
            <input
              type="email"
              value={contact.email}
              onChange={handleChange('email')}
              placeholder="you@company.com"
              required
            />
          </label>
          <label>
            <span>message</span>
            <textarea
              value={contact.message}
              onChange={handleChange('message')}
              placeholder="What are we building?"
              rows={6}
              required
            />
          </label>
          <button type="submit">compose email -&gt;</button>
        </form>
      </div>
    </section>
  )
}
