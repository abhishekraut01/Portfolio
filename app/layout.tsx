import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhishek Raut — Full-Stack Engineer',
  description: 'Software Engineer building production full-stack applications and agentic AI systems. TypeScript, React, Python, FastAPI, Node.js, and LangGraph. Based in Nagpur, India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="grain">
        {children}
      </body>
    </html>
  )
}
