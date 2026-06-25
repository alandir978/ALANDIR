'use client'

import { useState } from 'react'
import { ArrowRight, Activity } from 'lucide-react'
import { Sparkline } from './sparkline'
import { indices, marketTabs } from '@/lib/alandir-data'

export function MarketsLive() {
  const [active, setActive] = useState<string>('INDICI')

  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="size-5 text-gold" />
          <h2 className="font-display text-base font-bold tracking-wide text-gold">
            MERCATI LIVE
          </h2>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="size-2 animate-pulse rounded-full bg-positive" />
          Dati in tempo reale
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1 border-b border-border">
        {marketTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`-mb-px border-b-2 px-3 py-2 text-[11px] font-bold tracking-wide transition-colors ${
              active === tab
                ? 'border-gold text-gold'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {indices.map((market) => (
          <div
            key={market.name}
            className="rounded-xl border border-border bg-panel/50 p-3 transition-all duration-200 hover:border-gold/40"
          >
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true">{market.flag}</span>
              <span className="truncate text-[11px] font-semibold text-foreground/90">
                {market.name}
              </span>
            </div>
            <p className="mt-1 font-display text-base font-bold tabular-nums">
              {market.value}
            </p>
            <p
              className={`text-xs font-medium tabular-nums ${
                market.positive ? 'text-positive' : 'text-negative'
              }`}
            >
              {market.change}
            </p>
            <Sparkline
              data={market.series}
              color={market.positive ? 'var(--positive)' : 'var(--negative)'}
              width={120}
              height={28}
              className="mt-2 h-7 w-full"
            />
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/5 px-5 py-2.5 text-sm font-medium text-gold transition-all duration-200 hover:bg-gold/15 hover:shadow-[0_0_20px_-6px_var(--gold)]"
        >
          Vedi tutti i mercati
          <ArrowRight className="size-4" />
        </button>
      </div>
    </article>
  )
}
