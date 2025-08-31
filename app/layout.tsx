import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'RG News — Actualités de la Guinée et de la diaspora',
  description: 'Médias: Informations, Sports, Musique, Événements, Interviews.',
  other: { 'og:locale': 'fr_FR' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        <main className="container py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
