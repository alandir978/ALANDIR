import { ArrowRight, Flame, ChevronUp, ChevronDown } from 'lucide-react'
import { topGainers, topLosers, type Mover } from '@/lib/alandir-data'

function MoverList({
  title,
  movers,
  positive,
}: {
  title: string
  movers: Mover[]
  positive: boolean
}) {
  const Chevron = positive ? ChevronUp : ChevronDown
  const tone = positive ? 'text-positive' : 'text-negative'
  return (
    <div className="rounded-xl border border-border bg-panel/40 p-3">
      <div className="flex items-center gap-1.5 border-b border-border pb-2">
        <Chevron className={`size-3.5 ${tone}`} />
        <span className={`text-[11px] font-bold tracking-wide ${tone}`}>
          {title}
        </span>
      </div>
      <ul className="mt-1 divide-y divide-border/60">
        {movers.map((mover) => (
          <li
            key={mover.name}
            className="flex items-center justify-between gap-2 py-2 text-sm"
          >
            <span className="flex items-center gap-1.5 truncate text-foreground/85">
              <Chevron className={`size-3.5 shrink-0 ${tone}`} />
              <span className="truncate">{mover.name}</span>
            </span>
            <span className={`shrink-0 tabular-nums font-medium ${tone}`}>
              {mover.change}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TopMovers() {
  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="size-5 text-gold" />
          <h2 className="font-display text-base font-bold tracking-wide text-gold">
            TOP MOVERS OGGI
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-gold"
        >
          Vedi tutti <ArrowRight className="size-3.5" />
        </a>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <MoverList title="MIGLIORI" movers={topGainers} positive />
        <MoverList title="PEGGIORI" movers={topLosers} positive={false} />
      </div>
    </article>
  )
}
