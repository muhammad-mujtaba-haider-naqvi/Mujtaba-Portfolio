import { TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type VisualProps = { isVisible: boolean }
type Metric = { value: number; suffix: string }

const metrics: Metric[] = [
  { value: 25, suffix: '%' },
  { value: 85, suffix: '%+' },
  { value: 15, suffix: '%' },
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
      setValue(Math.round(target * (1 - (1 - progress) ** 3)))
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
    <div className="impact-metric">
      <div className="impact-gauge">
        <svg className="impact-svg" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="none" stroke="#d8c6b3" strokeWidth="6" />
          <circle className="result-ring" cx="32" cy="32" r="28" fill="none" stroke="#845b42" strokeLinecap="round" strokeWidth="6" strokeDasharray={circumference} strokeDashoffset={isVisible ? dashOffset : circumference} />
        </svg>
        <span className="impact-value">{value}{metric.suffix}</span>
      </div>
    </div>
  )
}

export default function ResultsVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual results-visual shrink-0 overflow-hidden rounded-lg border border-[#fff8ef]/35 bg-[#ead8c4]/90 p-1.5 shadow-[0_6px_14px_rgba(94,57,34,0.14)] ${isVisible ? 'about-visual--active' : ''}`} style={{ width: 144 }} aria-hidden="true">
      <div className="flex justify-center text-[#684632]"><TrendingUp size={8} /></div>
      <div className="impact-stack">{metrics.map((metric) => <ResultMetric key={metric.value} metric={metric} isVisible={isVisible} />)}</div>
    </div>
  )
}
