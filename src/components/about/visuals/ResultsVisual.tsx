import { TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type VisualProps = {
  isVisible: boolean
}

type Metric = {
  value: number
  suffix: string
  label: string
}

const metrics: Metric[] = [
  { value: 25, suffix: '%', label: 'MODEL\nIMPROVEMENT' },
  { value: 85, suffix: '%+', label: 'FEATURE\nACCURACY' },
  { value: 15, suffix: '%', label: 'USER\nENGAGEMENT' },
]

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!start || hasRun.current) return
    hasRun.current = true

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }

    const duration = 1000
    const startedAt = performance.now()
    let frame = 0

    const update = (time: number) => {
      const progress = Math.min(1, (time - startedAt) / duration)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))

      if (progress < 1) frame = window.requestAnimationFrame(update)
    }

    frame = window.requestAnimationFrame(update)
    return () => window.cancelAnimationFrame(frame)
  }, [start, target])

  return value
}

function ResultMetric({ metric, isVisible }: { metric: Metric; isVisible: boolean }) {
  const value = useCountUp(metric.value, isVisible)
  const circumference = 176
  const dashOffset = circumference * (1 - metric.value / 100)

  return (
    <div className="rounded-xl bg-[#fff8ef]/72 px-2 py-3 text-center shadow-[0_5px_16px_rgba(117,71,41,0.08)]">
      <div className="relative mx-auto size-[66px]">
        <svg className="size-full -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="none" stroke="#d8c6b3" strokeWidth="6" />
          <circle
            className="result-ring"
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#845b42"
            strokeLinecap="round"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? dashOffset : circumference}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-[15px] font-bold text-[#3a2418]">
          {value}{metric.suffix}
        </span>
      </div>
      <p className="mt-2 whitespace-pre-line text-[8px] font-bold leading-[1.15] text-[#3a2418] xl:text-[9px]">
        {metric.label}
      </p>
    </div>
  )
}

export default function ResultsVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual results-visual ${isVisible ? 'about-visual--active' : ''} w-full max-w-[390px] overflow-hidden rounded-2xl border border-[#fff8ef]/35 bg-[#ead8c4]/90 p-3.5 shadow-[0_12px_28px_rgba(94,57,34,0.14)]`} aria-hidden="true">
      <div className="flex items-center justify-between text-[#684632]">
        <span className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.2em]">
          <TrendingUp size={14} /> Project Impact
        </span>
        <span className="text-[8px]">Last 6 months</span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {metrics.map((metric) => (
          <ResultMetric key={metric.label} metric={metric} isVisible={isVisible} />
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 border-t border-[#9a6338]/25 pt-2 text-[8px] font-bold uppercase tracking-[0.14em] text-[#684632]">
        <TrendingUp size={13} /> Continuous Improvement
      </div>
    </div>
  )
}
