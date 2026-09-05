import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

export type Capability = {
  number: string
  title: string
  description: string
  footer: string
  tone: 'coat' | 'brown' | 'earth' | 'mocha'
}

type CapabilityCardProps = {
  capability: Capability
  index: number
  visual: (isVisible: boolean) => ReactNode
}

const surfaces = {
  coat: 'from-[#765039] to-[#684632]',
  brown: 'from-[#704a32] to-[#5d3f2b]',
  earth: 'from-[#7d563b] to-[#6b4933]',
  mocha: 'from-[#845b42] to-[#71503b]',
}

export default function CapabilityCard({ capability, index, visual }: CapabilityCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
      { threshold: 0.18, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={cardRef}
      className={`skill-card ${isVisible ? 'skill-card--visible' : ''} relative min-h-[590px] overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br p-7 pb-14 text-[#fffaf3] shadow-[0_18px_48px_rgba(72,48,30,0.15)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_22px_54px_rgba(72,48,30,0.21)] sm:min-h-[355px] sm:rounded-[32px] sm:p-8 sm:pb-14 lg:h-[350px] lg:min-h-0 lg:p-8 lg:pb-14 xl:h-[360px] xl:p-9 xl:pb-14 ${surfaces[capability.tone]}`}
      style={{ '--skill-card-delay': `${index * 100}ms` } as CSSProperties}
    >
      <div className="grid h-full grid-cols-1 gap-7 sm:grid-cols-[0.82fr_1.18fr] sm:gap-5 lg:grid-cols-[0.88fr_1.12fr] xl:grid-cols-[0.82fr_1.18fr]">
        <div className="relative z-10 min-w-0">
          <p className="font-sans text-[58px] font-bold leading-[0.85] tracking-[-0.06em] text-[#fffaf3] sm:text-[64px] lg:text-[60px] xl:text-[68px]">
            {capability.number}
          </p>
          <h3 className="mt-6 whitespace-pre-line font-sans text-[23px] font-bold leading-[1.04] tracking-[-0.035em] sm:mt-5 sm:text-[24px] lg:text-[20px] xl:text-[25px]">
            {capability.title}
          </h3>
          <p className="mt-7 max-w-[285px] text-[15px] leading-[1.55] text-[#fffaf3]/90 sm:mt-6 lg:mt-5 lg:text-[14px] xl:mt-6 xl:text-[16px]">
            {capability.description}
          </p>
        </div>

        <div className="relative z-10 flex min-h-[270px] items-center justify-center sm:min-h-0">
          {visual(isVisible)}
        </div>
      </div>

      <div className="absolute bottom-6 left-7 right-7 text-[9px] font-semibold uppercase tracking-[0.34em] text-[#fff0de] sm:left-8 sm:right-8 lg:left-8 xl:left-9" aria-hidden="true">
        {capability.footer}
      </div>
    </article>
  )
}
