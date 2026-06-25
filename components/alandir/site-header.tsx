import { User } from 'lucide-react'
import { Logo } from './logo'

const navItems = [
  { label: 'Home', active: true },
  { label: 'Analisi Titoli', active: false },
  { label: 'Motore Trimestrali', active: false },
  { label: 'Mercati Live', active: false },
  { label: 'Portafoglio', active: false },
  { label: 'Watchlist', active: false },
]

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`relative text-sm font-medium transition-colors hover:text-gold ${
                item.active ? 'text-gold' : 'text-foreground/80'
              }`}
            >
              {item.label}
              {item.active && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-gold" />
              )}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/5 px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-gold/70 hover:bg-gold/15 hover:shadow-[0_0_20px_-6px_var(--gold)]"
        >
          <User className="size-4 text-gold" />
          Login
        </button>
      </div>
    </header>
  )
}
