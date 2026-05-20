import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhishek Raut - Backend Systems and AI Agents',
  description:
    'Software engineer building backend systems, deployment pipelines, full-stack products, and agentic AI systems with TypeScript, React, Python, FastAPI, Node.js, LangGraph, Docker, Kubernetes, and AWS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
