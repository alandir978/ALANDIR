import { ArrowRight, LineChart } from 'lucide-react'
import { latestEarnings } from '@/lib/alandir-data'

function ScorePill({ score }: { score: number }) {
  const strong = score >= 9
  return (
    <span
      className={`inline-flex min-w-9 items-center justify-center rounded-md px-2 py-0.5 font-display text-xs font-bold tabular-nums ${
        strong
          ? 'border border-positive/40 bg-positive/15 text-positive'
          : 'border border-gold/40 bg-gold/15 text-gold'
      }`}
    >
      {score.toLocaleString('it-IT', { minimumFractionDigits: 1 })}
    </span>
  )
}

export function LatestEarnings() {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LineChart className="size-5 text-gold" />
          <h2 className="font-display text-base font-bold tracking-wide text-gold">
            ULTIME TRIMESTRALI ANALIZZATE
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-gold"
        >
          Vedi tutte <ArrowRight className="size-3.5" />
        </a>
      </div>

      <div className="mt-4 grid grid-cols-[1fr_0.9fr_0.7fr_1.8fr] gap-2 border-b border-border pb-2 text-[10px] font-bold tracking-wide text-muted-foreground">
        <span>AZIENDA</span>
        <span>DATA</span>
        <span>PUNTEGGIO</span>
        <span>SINTESI</span>
      </div>

      <ul className="flex-1 divide-y divide-border/60">
        {latestEarnings.map((row) => (
          <li
            key={row.ticker}
            className="grid grid-cols-[1fr_0.9fr_0.7fr_1.8fr] items-center gap-2 py-2.5 text-sm transition-colors hover:bg-panel/40"
          >
            <span className="flex items-center gap-2 font-medium">
              <span className="grid size-6 shrink-0 place-items-center rounded-md border border-border bg-panel text-[9px] font-bold text-muted-foreground">
                {row.ticker.slice(0, 2)}
              </span>
              <span className="truncate">{row.name}</span>
            </span>
            <span className="text-xs text-muted-foreground">{row.date}</span>
            <span>
              <ScorePill score={row.score} />
            </span>
            <span className="truncate text-xs text-foreground/70">
              {row.summary}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-gold/5 py-2.5 text-sm font-medium text-gold transition-all duration-200 hover:bg-gold/15 hover:shadow-[0_0_20px_-6px_var(--gold)]"
      >
        Vai al Motore Trimestrali
        <ArrowRight className="size-4" />
      </button>
    </article>
  )
}
