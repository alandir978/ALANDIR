import { ArrowRight, ShieldCheck } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-6">
      <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/footer-mountains.png')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/40"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-gold/40 bg-gold/10">
              <ShieldCheck className="size-6 text-gold" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold leading-snug text-balance md:text-2xl">
                <span className="text-gold">ALANDIR</span> trasforma i dati in
                giudizi semplici e operativi.
              </h2>
              <p className="mt-1 text-sm text-foreground/70">
                Capisci i titoli. Valuta i rischi. Prendi decisioni migliori.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-gold-soft hover:shadow-[0_0_26px_-4px_var(--gold)]"
          >
            Inizia subito
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
