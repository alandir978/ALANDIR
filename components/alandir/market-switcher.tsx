'use client'

import { markets } from '@/lib/alandir-data'
import { useMarket } from './market-context'

export function MarketSwitcher() {
  const { marketId, setMarketId } = useMarket()

  return (
    <div className="border-b border-border/70 bg-panel/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-6 py-3">
        <span className="text-xs font-bold tracking-[0.15em] text-muted-foreground">
          SCEGLI IL MERCATO
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {markets.map((m) => {
            const active = m.id === marketId
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMarketId(m.id)}
                aria-pressed={active}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'border-gold bg-gold/10 text-gold shadow-[0_0_18px_-6px_var(--gold)]'
                    : 'border-border bg-panel/60 text-foreground/75 hover:border-gold/50 hover:text-gold'
                }`}
              >
                <span aria-hidden="true">{m.flag}</span>
                {m.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
