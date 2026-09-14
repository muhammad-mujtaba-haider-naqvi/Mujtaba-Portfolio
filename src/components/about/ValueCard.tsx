import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

export type ValueCardData = {
  number: string
  title: string
  description: string
  footer: string
  variant: 'brown' | 'light' | 'dark' | 'bronze'
}

type ValueCardProps = {
  card: ValueCardData
  index: number
  visual: (isVisible: boolean) => ReactNode
}

const palettes = {
  brown: { surface: 'border-white/10 bg-[#684632] text-[#fffaf3]', number: 'text-[#fff8ef]', description: 'text-[#fffaf3]/88', footer: 'text-[#edc89f]', line: 'bg-[#d5a671]' },
  light: { surface: 'border-[#c2986d]/25 bg-[#f1ebe3]/95 text-ink', number: 'text-[#9a6338]', description: 'text-charcoal', footer: 'text-[#765039]', line: 'bg-[#9a6338]' },
  dark: { surface: 'border-white/10 bg-[#26221d] text-[#fffaf3]', number: 'text-[#fff8ef]', description: 'text-[#fffaf3]/88', footer: 'text-[#e3bb8c]', line: 'bg-[#c2986d]' },
  bronze: { surface: 'border-white/15 bg-[#ad835a] text-[#fffaf3]', number: 'text-[#fff8ef]', description: 'text-[#fffaf3]/90', footer: 'text-[#fff0de]', line: 'bg-[#fff0de]' },
}

export default function ValueCard({ card, index, visual }: ValueCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const palette = palettes[card.variant]

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setIsVisible(true)
      observer.disconnect()
    }, { threshold: 0.22, rootMargin: '0px 0px -5% 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={cardRef}
      className={`value-card value-card--${card.variant} ${isVisible ? 'value-card--visible' : ''} relative min-h-[540px] overflow-hidden rounded-[28px] border p-7 pb-16 shadow-[0_18px_45px_rgba(72,48,30,0.12)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_24px_58px_rgba(72,48,30,0.2)] sm:min-h-[390px] sm:rounded-[32px] sm:p-8 sm:pb-14 lg:min-h-[378px] xl:p-10 xl:pb-14 ${palette.surface}`}
      style={{ '--card-delay': `${index * 100}ms` } as CSSProperties}
    >
      <div className="value-card__layout h-full">
        <div className="value-card__copy relative z-10 min-w-0">
          <p className={`font-sans text-[54px] font-bold leading-[0.82] tracking-[-0.06em] sm:text-[62px] xl:text-[68px] ${palette.number}`}>{card.number}</p>
          <h3 className="mt-5 whitespace-pre-line font-sans text-[23px] font-bold leading-[1.04] tracking-[-0.035em] sm:mt-5 sm:text-[25px] lg:text-[24px] xl:text-[28px]">
            {card.title}
          </h3>
          <p className={`mt-4 max-w-[390px] text-[15px] leading-[1.58] sm:text-[16px] xl:text-[17px] ${palette.description}`}>{card.description}</p>
        </div>

        <div className="value-card__stage relative z-10" aria-hidden="true">
          <span className="value-card__stage-label">{index === 0 ? 'FROM IDEA TO SHIP' : index === 1 ? 'ONE CONNECTED SYSTEM' : index === 2 ? 'SMARTER FLOW' : 'MEASURED IMPACT'}</span>
          {visual(isVisible)}
        </div>
      </div>

      <div className={`absolute bottom-5 left-7 right-7 flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.24em] sm:left-8 sm:right-8 lg:bottom-5 lg:left-8 lg:right-8 xl:text-[9px] ${palette.footer}`} aria-hidden="true">
        <span className={`h-px w-9 shrink-0 ${palette.line}`} />
        <span>{card.footer}</span>
      </div>
    </article>
  )
}
