import { Star, Target, TrendingUp, AlertTriangle, Bot } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ExplainButton } from './explain-button'

type InfoCard = {
  icon: LucideIcon
  title: string
  description: string
  highlight?: boolean
}

const cards: InfoCard[] = [
  { icon: Star, title: 'PUNTEGGIO', description: 'Valutazione da 1 a 10' },
  { icon: Target, title: 'VALORE EQUO', description: 'Il nostro fair value' },
  { icon: TrendingUp, title: 'POTENZIALE', description: 'Spazio di crescita stimato' },
  { icon: AlertTriangle, title: 'RISCHI', description: 'I principali fattori di rischio' },
  {
    icon: Bot,
    title: 'MOTORE TRIMESTRALI',
    description: 'Analisi automatica e istantanea',
    highlight: true,
  },
]

export function InfoCards() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {cards.map(({ icon: Icon, title, description, highlight }) => (
          <article
            key={title}
            className={`group rounded-2xl border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.9)] ${
              highlight
                ? 'border-gold/50 bg-gold/[0.06]'
                : 'border-border hover:border-gold/40'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Icon className="size-6 text-gold" strokeWidth={1.6} />
              <h3 className="font-display text-sm font-bold tracking-wide text-gold">
                {title}
              </h3>
            </div>
            <div className="mt-4">
              <ExplainButton />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
