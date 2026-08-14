import type { Metadata, Viewport } from 'next'
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

const siteUrl = 'https://snaity.dev'
const title = 'Snaity — Dev, criador e streamer'
const description =
  'Desenvolvedor, criador e streamer. Tecnologia, jogos e música fazem parte do meu código.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s · Snaity',
  },
  description,
  keywords: [
    'Snaity',
    'snaity.dev',
    'desenvolvedor',
    'programador',
    'streamer',
    'criador de conteúdo',
    'jogos',
    'tecnologia',
    'música',
  ],
  authors: [{ name: 'Snaity', url: siteUrl }],
  creator: 'Snaity',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName: 'Snaity',
    title,
    description,
    locale: 'pt_BR',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Snaity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@snaity_dev',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  colorScheme: 'dark',
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
