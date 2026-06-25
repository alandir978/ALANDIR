import { ArrowRight, Flame } from 'lucide-react'
import { mostFollowed } from '@/lib/alandir-data'

export function MostFollowed() {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="size-5 text-gold" />
          <h2 className="font-display text-base font-bold tracking-wide text-gold">
            TITOLI PIÙ SEGUITI
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-gold"
        >
          Vedi tutti <ArrowRight className="size-3.5" />
        </a>
      </div>

      <div className="mt-4 grid grid-cols-[1.4fr_1fr_0.9fr_0.7fr] gap-2 border-b border-border pb-2 text-[10px] font-bold tracking-wide text-muted-foreground">
        <span>TITOLO</span>
        <span className="text-right">PREZZO</span>
        <span className="text-right">OGGI</span>
        <span className="text-right">PUNTEGGIO</span>
      </div>

      <ul className="flex-1 divide-y divide-border/60">
        {mostFollowed.map((stock) => (
          <li
            key={stock.ticker}
            className="grid grid-cols-[1.4fr_1fr_0.9fr_0.7fr] items-center gap-2 py-2.5 text-sm transition-colors hover:bg-panel/40"
          >
            <span className="flex items-center gap-2 font-medium">
              <span className="grid size-6 shrink-0 place-items-center rounded-md border border-border bg-panel text-[9px] font-bold text-muted-foreground">
                {stock.ticker.slice(0, 2)}
              </span>
              <span className="truncate">{stock.name}</span>
            </span>
            <span className="text-right tabular-nums text-foreground/90">
              {stock.price}
            </span>
            <span
              className={`text-right tabular-nums font-medium ${
                stock.positive ? 'text-positive' : 'text-negative'
              }`}
            >
              {stock.change}
            </span>
            <span className="text-right font-display font-bold text-gold tabular-nums">
              {stock.score.toLocaleString('it-IT', { minimumFractionDigits: 1 })}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-gold/5 py-2.5 text-sm font-medium text-gold transition-all duration-200 hover:bg-gold/15 hover:shadow-[0_0_20px_-6px_var(--gold)]"
      >
        Vedi tutti i titoli
        <ArrowRight className="size-4" />
      </button>
    </article>
  )
}
