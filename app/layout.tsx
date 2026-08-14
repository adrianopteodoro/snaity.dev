import type { Metadata } from 'next'
import { JetBrains_Mono, Orbitron } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-orbitron',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: '@snaity',
  description: 'Desenvolvedor, criador e streamer. Tecnologia, jogos e música fazem parte do meu código.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${orbitron.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
