import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  markSize = 40,
  showWordmark = true,
  wordmarkClassName,
}: {
  className?: string
  markSize?: number
  showWordmark?: boolean
  wordmarkClassName?: string
}) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <Image
        src="/images/alandir-mark.png"
        alt="ALANDIR"
        width={markSize}
        height={markSize}
        className="object-contain"
        priority
      />
      {showWordmark && (
        <span
          className={cn(
            'font-display text-2xl font-bold tracking-[0.18em] text-gold',
            wordmarkClassName,
          )}
        >
          ALANDIR
        </span>
      )}
    </span>
  )
}
