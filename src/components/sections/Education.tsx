import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react'
import heroBackground from '../../assets/hero/hero-background.png'

type JourneyTab = 'experience' | 'education'

type JourneyItem = {
  title: string
  organization: string
  date: string
  description: string
}

const experienceData: JourneyItem[] = [
  {
    title: 'AI Automation Intern',
    organization: 'DaFi Labs',
    date: 'Jul 2026 – Sep 2026',
    description:
      'Built agentic AI automation workflows connecting LLMs with real-world applications and APIs using n8n. Integrated Gmail, Airtable, OpenRouter, Tavily and ElevenLabs, and developed a JARVIS-inspired multi-agent system with orchestrated research, automation and voice-enabled workflows.',
  },
  {
    title: 'Full Stack Developer',
    organization: 'Meta Onesoft IT Solutions',
    date: 'Jul 2025 – Sep 2025',
    description:
      'Developed Python-based data processing and automation solutions, built and evaluated machine learning models, and improved model accuracy by 25% through feature engineering. Worked with OpenCV, NumPy, Git/GitHub and Agile development practices while developing automation features reaching 85%+ accuracy.',
  },
  {
    title: 'Frontend Developer [UI/UX]',
    organization: 'CodeAlpha',
    date: 'Mar 2025 – Apr 2025',
    description:
      'Built responsive interfaces using HTML5, CSS3 and JavaScript, designed UX/UI prototypes and wireframes, integrated REST APIs and improved cross-browser performance, contributing to a 15% improvement in user engagement.',
  },
]

const educationData: JourneyItem[] = [
  {
    title: 'Bachelor of Science in Computer Science',
    organization: 'COMSATS University Islamabad, Lahore Campus',
    date: '2023 – 2027',
    description:
      'Pursuing a Bachelor of Science in Computer Science at COMSATS University Islamabad, Lahore Campus, with a current CGPA of 3.65.',
  },
  {
    title: 'A-levels',
    organization: 'Beaconhouse Newlands',
    date: '2021 – 2023',
    description:
      'Completed A-levels in Mathematics, Computer Science, Physics and Chemistry, achieving 1 A* and 3 As.',
  },
]

const tabOptions = [
  { id: 'experience' as const, label: 'Experience', Icon: BriefcaseBusiness },
  { id: 'education' as const, label: 'Education', Icon: GraduationCap },
]

type JourneyTimelineProps = {
  items: JourneyItem[]
  isVisible: boolean
  labelledBy: string
}

function JourneyTimeline({ items, isVisible, labelledBy }: JourneyTimelineProps) {
  return (
    <div
      id="journey-panel"
      role="tabpanel"
      aria-labelledby={labelledBy}
      className={`journey-panel mx-auto mt-10 max-w-[1370px] px-6 sm:px-8 lg:mt-11 lg:px-10 xl:px-12 ${
        isVisible ? 'journey-panel--visible' : ''
      }`}
    >
      <ol>
        {items.map((item, index) => (
          <li
            key={`${item.title}-${item.date}`}
            className="journey-item grid min-h-[190px] grid-cols-[42px_minmax(0,1fr)] grid-rows-[auto_auto_1fr] pb-12 last:min-h-0 last:pb-0 lg:min-h-[180px] lg:grid-cols-[minmax(0,1.3fr)_220px_72px_minmax(0,1.8fr)] lg:grid-rows-1 lg:pb-0 xl:min-h-[190px]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="col-start-2 row-start-1 self-start pr-2 lg:col-start-1 lg:row-start-1 lg:self-center lg:pr-8">
              <h3 className="font-sans text-[clamp(1.45rem,2.1vw,2rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[clamp(1rem,1.35vw,1.3rem)] font-medium leading-snug text-[#855b38]">
                {item.organization}
              </p>
            </div>

            <p className="col-start-2 row-start-2 mt-3 self-start text-[17px] font-semibold leading-snug text-[#754729] lg:col-start-2 lg:row-start-1 lg:mt-0 lg:self-center lg:whitespace-nowrap lg:pr-5 lg:text-[clamp(1.05rem,1.3vw,1.2rem)]">
              {item.date}
            </p>

            <div className="relative col-start-1 row-span-3 row-start-1 flex justify-center lg:col-start-3 lg:row-span-1 lg:row-start-1" aria-hidden="true">
              <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#c2986d]/55" />
              <span className="relative mt-1.5 grid size-8 place-items-center rounded-full bg-[#eee7de]/85 shadow-[0_4px_14px_rgba(117,71,41,0.12)] lg:mt-0 lg:self-center">
                <span className="size-3.5 rounded-full bg-[#9a6338]" />
              </span>
            </div>

            <p className="col-start-2 row-start-3 mt-5 self-start text-[15px] leading-[1.65] text-charcoal sm:text-[16px] lg:col-start-4 lg:row-start-1 lg:mt-0 lg:self-center lg:pl-7 lg:text-[clamp(1rem,1.22vw,1.18rem)] lg:leading-[1.55]">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Education() {
  const [activeTab, setActiveTab] = useState<JourneyTab>('experience')
  const [displayedTab, setDisplayedTab] = useState<JourneyTab>('experience')
  const [isTimelineVisible, setIsTimelineVisible] = useState(true)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const switchTimerRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (switchTimerRef.current !== null) window.clearTimeout(switchTimerRef.current)
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const selectTab = (nextTab: JourneyTab) => {
    if (nextTab === activeTab) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setActiveTab(nextTab)

    if (switchTimerRef.current !== null) window.clearTimeout(switchTimerRef.current)
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current)

    if (reduceMotion) {
      setDisplayedTab(nextTab)
      setIsTimelineVisible(true)
      return
    }

    setIsTimelineVisible(false)
    switchTimerRef.current = window.setTimeout(() => {
      setDisplayedTab(nextTab)
      frameRef.current = window.requestAnimationFrame(() => {
        setIsTimelineVisible(true)
      })
    }, 170)
  }

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex: number | null = null

    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabOptions.length
    if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabOptions.length) % tabOptions.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = tabOptions.length - 1
    if (nextIndex === null) return

    event.preventDefault()
    const nextTab = tabOptions[nextIndex].id
    selectTab(nextTab)
    tabRefs.current[nextIndex]?.focus()
  }

  const activeItems = displayedTab === 'experience' ? experienceData : educationData

  return (
    <section
      id="education"
      className="experience-section relative isolate overflow-hidden bg-canvas pb-20 pt-12 sm:pb-24 sm:pt-14 lg:pb-28"
      aria-labelledby="experience-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-canvas/35" aria-hidden="true" />

      <div className="mx-auto flex max-w-[1530px] items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-12" aria-hidden="true">
        <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#855b38] sm:text-[11px]">
          <span className="h-px w-10 bg-[#9a6338]/65 sm:w-14" />
          My Journey
        </div>
        <div className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#855b38] md:flex">
          <span className="h-px w-14 bg-[#9a6338]/65" />
          Learning · Building · Growing
        </div>
      </div>

      <header className="mx-auto mt-4 max-w-[850px] px-6 text-center sm:px-8 lg:mt-2">
        <h2
          id="experience-heading"
          className="font-sans text-[clamp(3rem,5.4vw,5rem)] font-bold leading-none tracking-[-0.055em] text-ink"
        >
          Experi<span className="text-[#9a6338]">ence</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[790px] text-[15px] leading-relaxed text-charcoal sm:text-[17px] lg:text-[19px]">
          A timeline of my academic and professional journey, highlighting
          <span className="hidden sm:inline"><br /></span> the experiences that have shaped my growth.
        </p>
      </header>

      <div
        className="relative mx-auto mt-7 flex h-[58px] w-[calc(100%_-_3rem)] max-w-[480px] rounded-full border border-[#c2986d]/25 bg-[#e3d4c5]/80 p-1.5 shadow-[0_9px_30px_rgba(117,71,41,0.06)] sm:h-[70px] sm:w-[480px] sm:p-2"
        role="tablist"
        aria-label="Journey timeline"
      >
        <span
          className={`pointer-events-none absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] rounded-full bg-[#9a6338] shadow-[0_8px_20px_rgba(117,71,41,0.2)] transition-transform duration-300 ease-out sm:inset-y-2 sm:left-2 sm:w-[calc(50%-8px)] ${
            activeTab === 'education' ? 'translate-x-full' : 'translate-x-0'
          }`}
          aria-hidden="true"
        />

        {tabOptions.map(({ id, label, Icon }, index) => {
          const isActive = activeTab === id

          return (
            <button
              key={id}
              ref={(element) => { tabRefs.current[index] = element }}
              id={`${id}-tab`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="journey-panel"
              tabIndex={isActive ? 0 : -1}
              className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full text-[13px] font-semibold outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#5d3f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e3d4c5] sm:gap-3 sm:text-[16px] ${
                isActive ? 'text-[#fffaf3]' : 'text-[#754729] hover:text-ink'
              }`}
              onClick={() => selectTab(id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              <span>{label}</span>
              <Icon size={19} strokeWidth={2} aria-hidden="true" />
            </button>
          )
        })}
      </div>

      <JourneyTimeline
        key={displayedTab}
        items={activeItems}
        isVisible={isTimelineVisible}
        labelledBy={`${displayedTab}-tab`}
      />
    </section>
  )
}
