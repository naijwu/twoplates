import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'

const defaultFont = IBM_Plex_Mono({ weight: ['400', '600', '700'], style: ['normal', 'italic'], subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'twoplates',
  description: 'stats tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>{children}</body>
    </html>
  )
}
