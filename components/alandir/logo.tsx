import { cn } from '@/lib/utils'

export function Logo({
  className,
  markSize = 46,
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
      <span
        className="relative inline-flex shrink-0 items-center justify-center"
        style={{ width: markSize, height: markSize }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 180 110" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="goldFillMain" x1="40" y1="20" x2="95" y2="95">
              <stop offset="0%" stopColor="#FFF7C8" />
              <stop offset="42%" stopColor="#E6C24A" />
              <stop offset="100%" stopColor="#8A6416" />
            </linearGradient>

            <linearGradient id="goldFillSide" x1="95" y1="35" x2="150" y2="95">
              <stop offset="0%" stopColor="#F5D96E" />
              <stop offset="55%" stopColor="#C99B28" />
              <stop offset="100%" stopColor="#76520F" />
            </linearGradient>

            <filter id="mountainSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Montagna principale piena */}
          <path
            d="M18 88 L48 58 L62 69 L82 30 L112 88 Z"
            fill="url(#goldFillMain)"
            filter="url(#mountainSoftGlow)"
          />

          {/* Faccia scura della montagna principale */}
          <path
            d="M82 30 L95 88 L112 88 Z"
            fill="#7A5612"
            opacity="0.55"
          />

          {/* Montagna secondaria piena */}
          <path
            d="M72 88 L100 58 L116 70 L138 42 L164 88 Z"
            fill="url(#goldFillSide)"
            opacity="0.95"
          />

          {/* Faccia scura della montagna secondaria */}
          <path
            d="M138 42 L150 88 L164 88 Z"
            fill="#6F4D0E"
            opacity="0.55"
          />

          {/* Picco luminoso principale */}
          <path
            d="M48 58 L62 69 L82 30 L70 73 Z"
            fill="#FFF4B8"
            opacity="0.72"
          />

          {/* Picco luminoso secondario */}
          <path
            d="M100 58 L116 70 L138 42 L126 75 Z"
            fill="#FFE896"
            opacity="0.5"
          />

          {/* Base sottile per dare stabilità */}
          <path
            d="M16 89 H166"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </span>

      {showWordmark && (
        <span
          className={cn(
            'font-serif text-[30px] font-medium uppercase leading-none tracking-[0.32em]',
            'bg-gradient-to-b from-[#FFF6C7] via-[#D4AF37] to-[#8A6A18] bg-clip-text text-transparent',
            'drop-shadow-[0_0_12px_rgba(212,175,55,0.30)]',
            wordmarkClassName,
          )}
        >
          ALANDIR
        </span>
      )}
    </span>
  )
}