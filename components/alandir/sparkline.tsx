import { cn } from '@/lib/utils'

export function Sparkline({
  data,
  color = 'var(--positive)',
  width = 120,
  height = 36,
  className,
  strokeWidth = 1.5,
  fill = true,
}: {
  data: number[]
  color?: string
  width?: number
  height?: number
  className?: string
  strokeWidth?: number
  fill?: boolean
}) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const stepX = width / (data.length - 1)
  const pad = 2

  const points = data.map((value, index) => {
    const x = index * stepX
    const y =
      height - pad - ((value - min) / range) * (height - pad * 2)
    return [x, y] as const
  })

  const line = points
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`)
    .join(' ')

  const area = `${line} L${width},${height} L0,${height} Z`
  const gradientId = `spark-${Math.random().toString(36).slice(2, 9)}`

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={cn('overflow-visible', className)}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {fill && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.28" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
      {fill && <path d={area} fill={`url(#${gradientId})`} stroke="none" />}
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
