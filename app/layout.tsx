import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Promarketing',
  description: 'Desafio técnico para promarketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-canvas text-fg antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
