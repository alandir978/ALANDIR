import { ShieldCheck, Users, Scale, Zap, Play } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Logo } from './logo'

type Value = { icon: LucideIcon; title: string; description: string }

const values: Value[] = [
  { icon: ShieldCheck, title: 'TRASPARENZA', description: 'Niente gergo. Solo chiarezza.' },
  { icon: Users, title: 'ACCESSIBILITÀ', description: 'Per tutti, non solo per esperti.' },
  { icon: Scale, title: 'INDIPENDENZA', description: 'Nessun conflitto di interessi.' },
  { icon: Zap, title: 'VELOCITÀ', description: 'Analisi rapide, decisioni migliori.' },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-2 border-t border-border">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-cover bg-bottom opacity-20"
        style={{ backgroundImage: "url('/images/footer-mountains.png')" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-10">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="size-6 shrink-0 text-gold" strokeWidth={1.6} />
              <div>
                <h3 className="font-display text-sm font-bold tracking-wide text-gold">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2025 ALANDIR – Tutti i diritti riservati.
          </p>

          <Logo markSize={32} wordmarkClassName="text-xl" />

          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Seguici</span>
            <a
              href="#"
              aria-label="YouTube"
              className="grid size-8 place-items-center rounded-lg border border-border bg-panel text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Play className="size-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="grid size-8 place-items-center rounded-lg border border-border bg-panel text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <span className="text-sm font-bold lowercase">in</span>
            </a>
            <a
              href="#"
              aria-label="X"
              className="grid size-8 place-items-center rounded-lg border border-border bg-panel text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <span className="text-sm font-bold">X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
