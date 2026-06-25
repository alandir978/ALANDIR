import Image from 'next/image'
import { cn } from '@/lib/utils'

export function ExplainButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={cn(
        'group inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-3 py-1.5 text-left transition-all duration-200 hover:border-gold/70 hover:bg-gold/20 hover:shadow-[0_0_18px_-4px_var(--gold)]',
        className,
      )}
    >
      <Image
        src="/images/alandir-mark.png"
        alt=""
        aria-hidden="true"
        width={18}
        height={18}
        className="object-contain"
      />
      <span className="leading-tight">
        <span className="block text-[11px] font-bold tracking-[0.14em] text-gold">
          ALANDIR
        </span>
        <span className="block text-[10px] font-medium text-gold/70">
          te lo spiega
        </span>
      </span>
    </button>
  )
}
