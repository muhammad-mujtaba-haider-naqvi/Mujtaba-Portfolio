import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

export type ValueCardData = {
  number: string
  title: string
  tagline: string
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
  brown: {
    surface: 'border-white/10 bg-[#684632] text-[#fffaf3]',
    number: 'text-[#fff8ef]',
    tagline: 'text-[#efd0ad]',
    description: 'text-[#fffaf3]/88',
    footer: 'text-[#edc89f]',
    line: 'bg-[#d5a671]',
  },
  light: {
    surface: 'border-[#c2986d]/25 bg-[#f1ebe3]/95 text-ink',
    number: 'text-[#9a6338]',
    tagline: 'text-[#855b38]',
    description: 'text-charcoal',
    footer: 'text-[#765039]',
    line: 'bg-[#9a6338]',
  },
  dark: {
    surface: 'border-white/10 bg-[#26221d] text-[#fffaf3]',
    number: 'text-[#fff8ef]',
    tagline: 'text-[#e3bb8c]',
    description: 'text-[#fffaf3]/88',
    footer: 'text-[#e3bb8c]',
    line: 'bg-[#c2986d]',
  },
  bronze: {
    surface: 'border-white/15 bg-[#ad835a] text-[#fffaf3]',
    number: 'text-[#fff8ef]',
    tagline: 'text-[#fff0de]',
    description: 'text-[#fffaf3]/90',
    footer: 'text-[#fff0de]',
    line: 'bg-[#fff0de]',
  },
}

export default function ValueCard({ card, index, visual }: ValueCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const palette = palettes[card.variant]

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.22, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={cardRef}
      className={`value-card ${isVisible ? 'value-card--visible' : ''} relative min-h-[590px] overflow-hidden rounded-[28px] border p-7 pb-14 shadow-[0_18px_45px_rgba(72,48,30,0.12)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_22px_52px_rgba(72,48,30,0.18)] sm:min-h-[345px] sm:rounded-[32px] sm:p-8 sm:pb-14 lg:h-[340px] lg:min-h-0 lg:p-7 lg:pb-12 xl:p-8 xl:pb-14 ${palette.surface}`}
      style={{ '--card-delay': `${index * 100}ms` } as CSSProperties}
    >
      <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-[0.88fr_1.12fr] sm:gap-5 lg:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[0.94fr_1.06fr]">
        <div className="relative z-10 min-w-0">
          <p className={`font-sans text-[56px] font-bold leading-[0.82] tracking-[-0.06em] sm:text-[62px] lg:text-[58px] xl:text-[66px] ${palette.number}`}>
            {card.number}
          </p>
          <h3 className="mt-5 whitespace-pre-line font-sans text-[22px] font-bold leading-[1.02] tracking-[-0.035em] sm:mt-4 sm:text-[23px] lg:text-[21px] xl:text-[24px]">
            {card.title}
          </h3>
          <p className={`mt-2.5 text-[15px] font-medium leading-snug lg:text-[14px] xl:text-[16px] ${palette.tagline}`}>
            {card.tagline}
          </p>
          <p className={`mt-4 max-w-[315px] text-[15px] leading-[1.5] lg:mt-3 lg:text-[14px] xl:mt-4 xl:text-[15px] ${palette.description}`}>
            {card.description}
          </p>
        </div>

        <div className="relative z-10 flex min-h-[250px] items-center justify-center sm:min-h-0">
          {visual(isVisible)}
        </div>
      </div>

      <div className={`absolute bottom-5 left-7 right-7 flex items-center gap-4 text-[8px] font-semibold uppercase tracking-[0.3em] sm:left-8 sm:right-8 lg:bottom-4 lg:left-7 lg:right-7 xl:bottom-5 xl:left-8 xl:right-8 xl:text-[9px] ${palette.footer}`} aria-hidden="true">
        <span className={`h-px w-9 shrink-0 ${palette.line}`} />
        <span>{card.footer}</span>
      </div>
    </article>
  )
}
