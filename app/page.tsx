import Image from 'next/image'

type Accent = 'cyan' | 'indigo' | 'fuchsia' | 'pink' | 'red'

const accent: Record<Accent, { border: string; text: string; iconBg: string }> = {
  cyan: {
    border: 'border-cyan-400/70',
    text: 'text-cyan-400',
    iconBg: 'bg-cyan-400/10',
  },
  indigo: {
    border: 'border-indigo-400/70',
    text: 'text-indigo-400',
    iconBg: 'bg-indigo-400/10',
  },
  fuchsia: {
    border: 'border-fuchsia-400/70',
    text: 'text-fuchsia-400',
    iconBg: 'bg-fuchsia-400/10',
  },
  pink: {
    border: 'border-pink-400/70',
    text: 'text-pink-400',
    iconBg: 'bg-pink-400/10',
  },
  red: {
    border: 'border-red-400/70',
    text: 'text-red-400',
    iconBg: 'bg-red-400/10',
  },
}

const tags: { label: string; accent: Accent }[] = [
  { label: 'DEV', accent: 'cyan' },
  { label: 'GAMES', accent: 'indigo' },
  { label: 'TECH', accent: 'fuchsia' },
  { label: 'MUSIC', accent: 'pink' },
]

type LinkItem = {
  title: string
  description: string
  href: string
  accent: Accent
  icon: React.ReactNode
}

const links: LinkItem[] = [
  {
    title: 'Snaity Community',
    description: 'Discord • Jogos & Dev',
    href: 'https://discord.gg/WrrxDGT7uV',
    accent: 'cyan',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.197.373.291a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.04.106c.36.699.772 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    title: 'Snaity Blog',
    description: 'Notícias de jogos & tecnologia',
    href: 'https://www.snaityblog.net/',
    accent: 'indigo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75h8.25L19 8.5V20a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V4.5A.75.75 0 0 1 6 3.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 4v4.5h5M8.5 12.5h7M8.5 15.5h7M8.5 18h4" />
      </svg>
    ),
  },
  {
    title: 'Twitch',
    description: 'Lives & gameplays',
    href: 'https://twitch.tv/snaity',
    accent: 'indigo',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M4.5 2 3 5.5v14h5V22l3.5-2.5H15L21 14V2H4.5zm14.75 11-3 3h-3.5l-2.5 2.5V16H6.75V4h12.5v9zM15.5 7h1.75v5H15.5V7zm-4.75 0h1.75v5h-1.75V7z" />
      </svg>
    ),
  },
  {
    title: 'YouTube',
    description: 'Gameplays & highlights',
    href: 'https://www.youtube.com/@SnaityDev',
    accent: 'red',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    title: 'Shorts',
    description: 'Vídeos rápidos, clipes e dicas',
    href: 'https://www.youtube.com/@SnaityDev/shorts',
    accent: 'red',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.2 2 4.8 13.2h5.4L10.8 22l8.4-11.2h-5.4L13.2 2Z" />
      </svg>
    ),
  },
  {
    title: 'Projetos & Código',
    description: 'Meus projetos, engines e experimentos',
    href: 'https://github.com/adrianopteodoro',
    accent: 'cyan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13" />
      </svg>
    ),
  },
  {
    title: 'Música',
    description: 'Playlists e sons que me inspiram',
    href: 'https://open.spotify.com/user/snaity',
    accent: 'pink',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M9 3v10.55A4 4 0 1 0 11 17V7h5V3H9Z" />
      </svg>
    ),
  },
]

type SocialItem = {
  label: string
  href: string
  icon: React.ReactNode
}

const socials: SocialItem[] = [
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/snaity_dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/snaity.dev/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@SnaityDev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@snaity.dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16.6 5.82c-.9-.78-1.47-1.9-1.6-3.14V2h-3.24v13.4a2.59 2.59 0 1 1-2.15-2.55v-3.3a5.83 5.83 0 1 0 5.39 5.81V9.01a7.3 7.3 0 0 0 4.16 1.3V7.08a4.3 4.3 0 0 1-2.56-1.26Z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp Channel',
    href: 'https://www.whatsapp.com/channel/0029VbAQrzC3gvWUs2WxUh3A',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2.05 22l5.36-1.36a9.9 9.9 0 0 0 4.63 1.15h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.68 2 12.04 2zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .9 2.14.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.71 1.18 1.53 1.91 1.05.94 1.94 1.24 2.21 1.38.27.14.43.12.59-.05.16-.16.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.6.75 1.87.89.27.14.45.2.51.32.07.12.07.68-.16 1.36z" />
      </svg>
    ),
  },
  {
    label: 'Twitch',
    href: 'https://twitch.tv/snaity',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.5 2 3 5.5v14h5V22l3.5-2.5H15L21 14V2H4.5zm14.75 11-3 3h-3.5l-2.5 2.5V16H6.75V4h12.5v9zM15.5 7h1.75v5H15.5V7zm-4.75 0h1.75v5h-1.75V7z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:contato@snaity.dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
]

function ChevronIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
    </svg>
  )
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Snaity',
  alternateName: '@snaity',
  url: 'https://snaity.dev',
  image: 'https://snaity.dev/avatar.jpg',
  jobTitle: 'Desenvolvedor & Streamer',
  description:
    'Desenvolvedor, criador e streamer. Tecnologia, jogos e música fazem parte do meu código.',
  sameAs: [
    'https://discord.gg/WrrxDGT7uV',
    'https://www.snaityblog.net/',
    'https://twitch.tv/snaity',
    'https://www.youtube.com/@SnaityDev',
    'https://github.com/adrianopteodoro',
    'https://open.spotify.com/user/snaity',
    'https://twitter.com/snaity_dev',
    'https://www.instagram.com/snaity.dev/',
    'https://www.tiktok.com/@snaity.dev',
  ],
}

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="flex w-full max-w-md flex-col items-center">
        <div className="rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-400 p-[3px]">
          <Image
            src="/avatar.jpg"
            alt="snaity"
            width={112}
            height={112}
            priority
            className="h-28 w-28 rounded-full object-cover"
          />
        </div>

        <h1 className="mt-5 font-display text-3xl font-black uppercase tracking-widest text-white">
          Snaity
        </h1>
        <p className="mt-1 text-sm text-zinc-500">@snaity</p>
        <p className="mt-4 max-w-xs text-center text-sm leading-relaxed text-zinc-400">
          Desenvolvedor, criador e streamer. Tecnologia, jogos e música fazem
          parte do meu código.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide ${accent[tag.accent].border} ${accent[tag.accent].text}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex w-full flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 rounded-xl border-l-4 border-y border-r border-y-white/10 border-r-white/10 bg-white/[0.03] py-3.5 pl-4 pr-4 transition-colors hover:bg-white/[0.06] ${accent[link.accent].border}`}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${accent[link.accent].iconBg} ${accent[link.accent].text}`}>
                {link.icon}
              </span>
              <span className="flex flex-1 flex-col">
                <span className="text-sm font-bold uppercase tracking-wide text-zinc-100">
                  {link.title}
                </span>
                <span className="text-xs text-zinc-500">{link.description}</span>
              </span>
              <ChevronIcon className={`h-4 w-4 shrink-0 ${accent[link.accent].text}`} />
            </a>
          ))}
        </div>

        <div className="mt-10 flex w-full items-center gap-3 text-zinc-600">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-[11px] tracking-widest">VAMOS NOS CONECTAR</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 font-display text-xs font-bold text-zinc-400">
            S
          </span>
          <p className="text-[11px] tracking-widest text-zinc-600">
            SNAITY • IDEIAS EM CÓDIGO
          </p>
          <p className="text-[11px] text-zinc-700">
            © {year} Snaity. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </main>
  )
}
