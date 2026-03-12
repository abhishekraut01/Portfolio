import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Patrick Hansen — Senior Product Designer',
  description: 'Crafting intuitive and visually compelling products. Senior Product Designer based in Los Angeles.',
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
