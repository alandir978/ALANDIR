import { ArrowRight, Plus, Search } from 'lucide-react'
import { tickerShortcuts } from '@/lib/alandir-data'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mountain background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-mountains.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-14 pt-32 md:pt-36">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
            Tutto il mondo in borsa.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/70 text-pretty">
            Analisi chiare, trimestrali e valutazioni trasformate in giudizi
            operativi.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex items-center gap-2 rounded-2xl border border-border bg-panel/80 p-2 pl-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-sm">
            <Search className="size-5 shrink-0 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cerca un titolo, es. STM, UniCredit, NVIDIA, Apple..."
              className="w-full bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="button"
              aria-label="Cerca"
              className="grid size-10 shrink-0 place-items-center rounded-xl bg-gold text-primary-foreground transition-all duration-200 hover:bg-gold-soft hover:shadow-[0_0_22px_-4px_var(--gold)]"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>

          {/* Ticker shortcuts */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {tickerShortcuts.map((ticker) => (
              <button
                key={ticker}
                type="button"
                className="rounded-full border border-border bg-panel/70 px-4 py-1.5 text-sm font-medium text-foreground/80 transition-all duration-200 hover:border-gold/60 hover:text-gold"
              >
                {ticker}
              </button>
            ))}
            <button
              type="button"
              aria-label="Aggiungi titolo"
              className="grid size-9 place-items-center rounded-full border border-border bg-panel/70 text-foreground/80 transition-all duration-200 hover:border-gold/60 hover:text-gold"
            >
              <Plus className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
