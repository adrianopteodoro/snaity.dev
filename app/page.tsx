import Image from 'next/image'

const basePath = '/snaity.dev'

type LinkItem = {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

const links: LinkItem[] = [
  {
    title: 'Snaity Community',
    description: 'Jogos & Dev',
    href: 'https://discord.gg/WrrxDGT7uV',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.197.373.291a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.04.106c.36.699.772 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    title: 'Snaity Blog',
    description: 'Notícias de jogos & tech',
    href: 'https://www.snaityblog.net/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.25A2.25 2.25 0 0 1 6.25 3h9.5A2.25 2.25 0 0 1 18 5.25v14.5L14 17l-2.5 2.5L9 17l-5 2.75z" />
      </svg>
    ),
  },
  {
    title: 'YouTube',
    description: 'Gameplays & destaques de jogos',
    href: 'https://www.youtube.com/@SnaityDev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    title: 'X / Twitter',
    description: 'Notícias & updates de jogos',
    href: 'https://twitter.com/snaity_dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    title: 'Instagram',
    description: 'Fotos & clipes de jogos',
    href: 'https://www.instagram.com/snaity.dev/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Twitch',
    description: 'Lives & streams',
    href: 'https://twitch.tv/snaity',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M4.5 2 3 5.5v14h5V22l3.5-2.5H15L21 14V2H4.5zm14.75 11-3 3h-3.5l-2.5 2.5V16H6.75V4h12.5v9zM15.5 7h1.75v5H15.5V7zm-4.75 0h1.75v5h-1.75V7z" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp Channel',
    description: 'Fica por dentro das novidades',
    href: 'https://www.whatsapp.com/channel/0029VbAQrzC3gvWUs2WxUh3A',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2.05 22l5.36-1.36a9.9 9.9 0 0 0 4.63 1.15h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.68 2 12.04 2zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .9 2.14.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.71 1.18 1.53 1.91 1.05.94 1.94 1.24 2.21 1.38.27.14.43.12.59-.05.16-.16.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.6.75 1.87.89.27.14.45.2.51.32.07.12.07.68-.16 1.36z" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-16">
      <div className="flex w-full max-w-md flex-col items-center">
        <Image
          src={`${basePath}/avatar.jpg`}
          alt="snaity"
          width={112}
          height={112}
          priority
          className="h-28 w-28 rounded-full object-cover ring-2 ring-white/10"
        />
        <h1 className="mt-5 text-xl font-semibold tracking-tight">@snaity</h1>
        <p className="mt-2 max-w-xs text-center text-sm leading-relaxed text-zinc-400">
          Desenvolvedor, criador e streamer. Tecnologia, jogos e música fazem
          parte do meu código.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-300 group-hover:text-white">
                {link.icon}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-medium text-zinc-100">
                  {link.title}
                </span>
                <span className="text-xs text-zinc-500">
                  {link.description}
                </span>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-zinc-600">snaity.dev</p>
      </div>
    </main>
  )
}
