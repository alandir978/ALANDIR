import { ArrowRight, Plus, Search } from 'lucide-react'
import { tickerShortcuts } from '@/lib/alandir-data'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mountain background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage: "url('/hero-mountains-new.png')",
        }}
        aria-hidden="true"
      />

      {/* Stella dorata fissa sulla vetta */}
      <div
        className="absolute z-10"
        style={{
          left: '78.8%',
          top: '17.4%',
        }}
        aria-hidden="true"
      >
        <div className="alandir-star" />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-14 pt-32 md:pt-36">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            ALANDIR
            <span className="block text-gold">
              ti aiuta ad investire.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
            Analisi chiare, trimestrali e valutazioni trasformate in giudizi operativi.
          </p>

          <div className="mt-10 flex max-w-2xl items-center rounded-2xl border border-white/10 bg-[#0b0f1a]/85 px-5 py-3 shadow-2xl shadow-black/40 backdrop-blur">
            <Search className="mr-3 h-5 w-5 text-white/45" />
            <input
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/45"
              placeholder="Cerca un titolo, es. STM, UniCredit, NVIDIA, Apple..."
            />
            <button className="ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-black transition hover:scale-105">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {tickerShortcuts.map((ticker) => (
              <button
                key={ticker}
                className="rounded-full border border-white/10 bg-[#0b0f1a]/80 px-5 py-2 text-sm font-medium text-white/85 transition hover:border-gold/50 hover:text-gold"
              >
                {ticker}
              </button>
            ))}

            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0b0f1a]/80 text-white/80 transition hover:border-gold/50 hover:text-gold">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}