import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
