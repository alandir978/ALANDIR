import { Check, X } from 'lucide-react'
import { ExplainButton } from './explain-button'
import { Sparkline } from './sparkline'
import { stmChart } from '@/lib/alandir-data'

const timeframes = ['1G', '1M', '3M', '1Y', '5Y']

const bullishThesis = [
  'Esposizione alla crescita in AI, automotive e industriale',
  'Posizione strategica in Europa',
  'Bilancio solido e generazione di cassa positiva',
]

const risks = [
  'Ciclicità del settore semiconduttori',
  'Rallentamento della domanda globale',
  'Concorrenza in aumento',
]

function Metric({
  label,
  value,
  valueClass = 'text-foreground',
}: {
  label: string
  value: string
  valueClass?: string
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-panel/60 p-3">
      <span className="text-[10px] font-bold tracking-wide text-muted-foreground">
        {label}
      </span>
      <div className="mt-2">
        <ExplainButton />
      </div>
      <span className={`mt-2 font-display text-2xl font-bold ${valueClass}`}>
        {value}
      </span>
    </div>
  )
}

export function StockSpotlight() {
  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-xl border border-border bg-panel font-display text-xs font-bold tracking-tight text-foreground">
            ST
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-2xl font-bold">STM</h2>
            </div>
            <p className="text-xs text-muted-foreground">STMicroelectronics</p>
            <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-md border border-border bg-panel px-2 py-0.5 text-[10px] text-muted-foreground">
              Euronext Milano <span aria-hidden="true">🇮🇹</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Metric label="PUNTEGGIO" value="7,8 /10" valueClass="text-gold" />
          <Metric label="VALORE EQUO" value="72,00 €" valueClass="text-gold" />
          <Metric label="POTENZIALE" value="+12,3%" valueClass="text-positive" />
        </div>
      </div>

      {/* Chart + thesis */}
      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-panel/40 p-4">
          <div className="flex items-center gap-1.5">
            {timeframes.map((tf) => (
              <button
                key={tf}
                type="button"
                className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  tf === '1M'
                    ? 'bg-gold/15 text-gold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <div className="flex flex-col justify-between py-1 text-[10px] text-muted-foreground">
              <span>70</span>
              <span>64</span>
              <span>58</span>
              <span>52</span>
              <span>46</span>
            </div>
            <Sparkline
              data={stmChart}
              color="var(--gold)"
              width={420}
              height={150}
              strokeWidth={2}
              className="h-[150px] w-full"
            />
          </div>
          <div className="mt-2 flex justify-between pl-7 text-[10px] text-muted-foreground">
            <span>14 Apr</span>
            <span>21 Apr</span>
            <span>28 Apr</span>
            <span>5 Mag</span>
            <span>12 Mag</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-positive">
              TESI RIALZISTA
            </h3>
            <div className="mt-2">
              <ExplainButton />
            </div>
            <ul className="mt-3 space-y-2.5">
              {bullishThesis.map((item) => (
                <li key={item} className="flex gap-2 text-xs leading-snug text-foreground/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-positive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-negative">
              PRINCIPALI RISCHI
            </h3>
            <ul className="mt-3 space-y-2.5 sm:mt-[58px]">
              {risks.map((item) => (
                <li key={item} className="flex gap-2 text-xs leading-snug text-foreground/80">
                  <X className="mt-0.5 size-4 shrink-0 text-negative" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}
