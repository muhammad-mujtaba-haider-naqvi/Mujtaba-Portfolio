import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'

export type Capability = {
  number: string
  title: string
  description: string
  footer: string
  tone: 'coat' | 'brown' | 'earth' | 'mocha'
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}

type CapabilityCardProps = {
  capability: Capability
  index: number
}

const surfaces = {
  coat: 'from-[#765039] to-[#684632]',
  brown: 'from-[#704a32] to-[#5d3f2b]',
  earth: 'from-[#7d563b] to-[#6b4933]',
  mocha: 'from-[#845b42] to-[#71503b]',
}

export default function CapabilityCard({ capability, index }: CapabilityCardProps) {
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
      className={`skill-card ${isVisible ? 'skill-card--visible' : ''} relative min-h-[540px] overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br p-6 pb-14 text-[#fffaf3] shadow-[0_18px_48px_rgba(72,48,30,0.15)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_22px_54px_rgba(72,48,30,0.21)] sm:min-h-[355px] sm:rounded-[32px] sm:p-8 sm:pb-14 lg:h-[430px] lg:min-h-0 lg:pb-14 xl:h-[390px] ${surfaces[capability.tone]}`}
      style={{ '--skill-card-delay': `${index * 100}ms` } as CSSProperties}
    >
      <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-[0.72fr_1.28fr] sm:gap-4">
        <div className="relative z-10 min-w-0">
          <p className="font-sans text-[58px] font-bold leading-[0.85] tracking-[-0.06em] text-[#fffaf3] sm:text-[64px] lg:text-[60px] xl:text-[68px]">
            {capability.number}
          </p>
          <h3 className="mt-6 whitespace-pre-line font-sans text-[23px] font-bold leading-[1.04] tracking-[-0.035em] sm:mt-5 sm:text-[24px] xl:text-[22px]">
            {capability.title}
          </h3>
          <p className="mt-7 max-w-[285px] text-[15px] leading-[1.55] text-[#fffaf3]/90 sm:mt-6 lg:mt-5 xl:mt-6">
            {capability.description}
          </p>
        </div>

        <div className="relative z-10 flex min-h-[205px] items-center justify-center sm:min-h-0">
          <div className="aspect-[31/20] w-full max-w-[560px] overflow-hidden rounded-[22px] border border-white/20 bg-[#211d19] shadow-[0_14px_32px_rgba(25,20,16,0.22)]">
            <img
              src={capability.image.src}
              alt={capability.image.alt}
              width={capability.image.width}
              height={capability.image.height}
              className="block size-full object-contain"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 text-[9px] font-semibold uppercase tracking-[0.34em] text-[#fff0de] sm:left-8 sm:right-8" aria-hidden="true">
        {capability.footer}
      </div>
    </article>
  )
}
