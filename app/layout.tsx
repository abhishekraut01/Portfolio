import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhishek Raut — Full-Stack Engineer',
  description: 'Full-Stack Developer building scalable backend systems, real-time web applications, and production-grade infrastructure. Based in Nagpur, India.',
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
