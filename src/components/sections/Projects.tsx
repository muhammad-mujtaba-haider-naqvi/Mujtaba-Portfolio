import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react'
import heroBackground from '../../assets/hero/hero-background.png'
import projectPlaceholder from '../../assets/projects/project-placeholder.svg'

type Project = {
  number: string
  category: string
  title: string
  description: string
  technologies: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    number: '01',
    category: 'Web App',
    title: 'Campus Noticeboard Automation',
    description: 'Automating campus notices with a modern web pipeline.',
    technologies: 'React, Node.js, Express, MongoDB',
    image: projectPlaceholder,
    link: '#projects',
  },
  {
    number: '02',
    category: 'Machine Learning',
    title: 'Image Classification Model',
    description: 'A deep learning model for real-world image classification.',
    technologies: 'Python, TensorFlow, OpenCV',
    image: projectPlaceholder,
    link: '#projects',
  },
  {
    number: '03',
    category: 'Design',
    title: 'Restaurant Website',
    description: 'A modern and responsive website for a restaurant.',
    technologies: 'HTML, CSS, JavaScript, GSAP, Figma',
    image: projectPlaceholder,
    link: '#projects',
  },
  {
    number: '04',
    category: 'Full Stack',
    title: 'Personal Finance Tracker',
    description: 'A web application for managing finances effectively.',
    technologies: 'React, Node.js, Express, PostgreSQL',
    image: projectPlaceholder,
    link: '#projects',
  },
  {
    number: '05',
    category: 'Automation',
    title: 'Workflow Automation Suite',
    description: 'Streamlining repetitive tasks through practical automation.',
    technologies: 'Python, APIs, Process Automation',
    image: projectPlaceholder,
    link: '#projects',
  },
  {
    number: '06',
    category: 'AI / ML',
    title: 'Travel Companion',
    description: 'A smart travel planner with AI-powered recommendations.',
    technologies: 'React, Python, Machine Learning',
    image: projectPlaceholder,
    link: '#projects',
  },
]

type DragState = {
  pointerId: number
  startX: number
  startScrollLeft: number
}

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<DragState | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const scrollToProject = (index: number, behavior: ScrollBehavior = 'smooth') => {
    const track = trackRef.current
    const card = track?.querySelector<HTMLElement>(`[data-project-index="${index}"]`)

    if (!track || !card) return

    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior:
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : behavior,
    })
  }

  const selectProject = (index: number) => {
    const nextIndex = Math.min(projects.length - 1, Math.max(0, index))
    setActiveIndex(nextIndex)
    scrollToProject(nextIndex)
  }

  useEffect(() => {
    const initialIndex = window.innerWidth >= 768 ? 2 : 0
    setActiveIndex(initialIndex)

    const frame = window.requestAnimationFrame(() => {
      scrollToProject(initialIndex, 'auto')
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  const updateActiveProject = () => {
    const track = trackRef.current
    if (!track) return

    const viewportCenter = track.scrollLeft + track.clientWidth / 2
    const cards = Array.from(
      track.querySelectorAll<HTMLElement>('[data-project-index]'),
    )

    const closestIndex = cards.reduce((closest, card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const closestCard = cards[closest]
      const closestCenter = closestCard.offsetLeft + closestCard.offsetWidth / 2

      return Math.abs(cardCenter - viewportCenter) <
        Math.abs(closestCenter - viewportCenter)
        ? index
        : closest
    }, 0)

    setActiveIndex(closestIndex)
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return
    if ((event.target as HTMLElement).closest('a, button')) return

    const track = trackRef.current
    if (!track) return

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
    }
    track.setPointerCapture(event.pointerId)
    setIsDragging(true)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    const drag = dragRef.current
    if (!track || !drag || drag.pointerId !== event.pointerId) return

    track.scrollLeft = drag.startScrollLeft - (event.clientX - drag.startX)
  }

  const finishDragging = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    const drag = dragRef.current
    if (!track || !drag || drag.pointerId !== event.pointerId) return

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId)
    }

    dragRef.current = null
    setIsDragging(false)
    updateActiveProject()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return

    event.preventDefault()
    selectProject(activeIndex + (event.key === 'ArrowRight' ? 1 : -1))
  }

  return (
    <section id="projects" className="projects-section relative min-h-[100svh] overflow-hidden bg-canvas pb-10 pt-12 md:pb-12 md:pt-14">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-canvas/35" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1260px] px-6">
        <div className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#855b38] lg:flex" aria-hidden="true">
          <span className="h-px w-14 bg-accent/70" />
          My Work
        </div>

        <header className="mx-auto mt-4 max-w-[760px] text-center lg:mt-[-8px]">
          <h2 className="font-sans text-[38px] font-bold leading-none tracking-[-0.045em] text-ink sm:text-[54px] lg:text-[64px]">
            Featured <span className="text-[#9a6338]">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-relaxed text-charcoal sm:text-[17px] lg:text-[18px]">
            A collection of projects I&apos;ve built, exploring real-world problems
            <span className="hidden sm:inline"><br /></span> and modern technologies.
          </p>
        </header>

        <div className="absolute right-6 top-1 hidden items-center gap-5 lg:flex" aria-hidden="true">
          <span className="h-px w-14 bg-accent/70" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#855b38]">Ideas to Impact</span>
        </div>

        <div className="absolute right-6 top-[86px] hidden gap-3 lg:flex">
          <button
            type="button"
            aria-label="Show previous project"
            disabled={activeIndex === 0}
            className="grid size-[52px] place-items-center rounded-full border border-[#9a6338]/70 text-[#855b38] outline-none transition duration-200 hover:bg-[#9a6338] hover:text-canvas focus-visible:ring-2 focus-visible:ring-[#9a6338] disabled:cursor-not-allowed disabled:opacity-35"
            onClick={() => selectProject(activeIndex - 1)}
          >
            <ChevronLeft size={23} />
          </button>
          <button
            type="button"
            aria-label="Show next project"
            disabled={activeIndex === projects.length - 1}
            className="grid size-[52px] place-items-center rounded-full bg-[#9a6338] text-canvas shadow-[0_9px_24px_rgba(107,73,50,0.2)] outline-none transition duration-200 hover:bg-[#774a2c] focus-visible:ring-2 focus-visible:ring-[#9a6338] disabled:cursor-not-allowed disabled:opacity-35"
            onClick={() => selectProject(activeIndex + 1)}
          >
            <ChevronRight size={23} />
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute left-8 top-[132px] z-10 hidden items-start gap-4 text-[10px] font-semibold uppercase leading-[1.9] tracking-[0.38em] text-[#9a704f] xl:flex" aria-hidden="true">
        <span className="mt-1 h-14 w-px bg-[#9a6338]/65" />
        <span>Build<br />Learn<br />Improve</span>
      </div>

      <div
        ref={trackRef}
        className={`projects-track relative z-10 mt-9 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured projects"
        tabIndex={0}
        onScroll={updateActiveProject}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDragging}
        onPointerCancel={finishDragging}
      >
        {projects.map((project, index) => (
          <article
            key={project.number}
            data-project-index={index}
            className="project-card group flex h-[510px] flex-none snap-center flex-col overflow-hidden rounded-[32px] border border-white/20 bg-[#845b42] shadow-[0_20px_52px_rgba(72,48,30,0.18)] transition duration-300 hover:-translate-y-[3px] hover:border-white/40 hover:bg-[#91664b] hover:shadow-[0_24px_58px_rgba(72,48,30,0.24)] sm:h-[520px] lg:h-[clamp(500px,56svh,530px)] lg:rounded-[36px]"
          >
            <div className="px-7 pt-7 sm:px-8 sm:pt-8 lg:px-9">
              <div className="flex items-start justify-between gap-5">
                <span className="font-sans text-[48px] font-bold leading-none tracking-[-0.045em] text-[#fffaf3] lg:text-[56px]">
                  {project.number}
                </span>
                <span className="max-w-[48%] pt-2 text-right text-[14px] font-medium text-[#f5dfca] lg:text-[16px]">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-4 max-w-[92%] font-sans text-[24px] font-bold leading-[1.08] text-[#fffaf3] sm:text-[26px] lg:text-[28px]">
                {project.title}
              </h3>
              <p className="mt-2 max-w-[94%] text-[14px] leading-[1.45] text-[#fffaf3]/85 lg:text-[15px]">
                {project.description}
              </p>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f5dfca] lg:text-[11px]">
                Technologies used
              </p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[#fffaf3] lg:text-[15px]">
                {project.technologies}
              </p>
            </div>

            <div className="relative mx-4 mb-4 mt-auto h-[42%] min-h-[205px] overflow-hidden rounded-[24px] bg-[#5d3b2a] sm:rounded-[26px] lg:min-h-[225px] lg:rounded-[28px]">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                loading="lazy"
                draggable={false}
              />
              <a
                href={project.link}
                aria-label={`Open ${project.title}`}
                className="group/link absolute right-3 top-3 grid size-12 place-items-center rounded-full border border-[#f5dfca] bg-[#4f3021]/95 text-[#fffaf3] outline-none transition-colors duration-200 hover:bg-[#3d2519] focus-visible:ring-2 focus-visible:ring-[#fffaf3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#845b42]"
                {...(project.link.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <ArrowUpRight className="transition-transform duration-200 group-hover/link:translate-x-px group-hover/link:-translate-y-px" size={21} strokeWidth={2} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="relative z-10 mx-auto mt-9 grid max-w-[1530px] grid-cols-1 items-center gap-7 px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <div className="hidden items-center gap-7 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#9a704f] lg:flex" aria-hidden="true">
          <span className="h-px w-16 bg-[#9a6338]/65" />
          Crafting a Brighter Tomorrow
        </div>

        <div className="flex items-center justify-center gap-3" aria-label="Project carousel pagination">
          {projects.map((project, index) => (
            <button
              key={project.number}
              type="button"
              className={`size-2.5 rounded-full outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#9a6338] focus-visible:ring-offset-4 focus-visible:ring-offset-canvas ${
                activeIndex === index ? 'scale-110 bg-[#9a6338]' : 'bg-[#cdbda9] hover:bg-[#aa8d70]'
              }`}
              aria-label={`Show project ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => selectProject(index)}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 lg:justify-end">
          <a
            href="#projects"
            className="group/view inline-flex h-11 items-center gap-4 rounded-full border border-[#9a6338] px-7 text-[11px] font-semibold uppercase tracking-[0.04em] text-[#754729] outline-none transition-colors duration-200 hover:bg-[#9a6338] hover:text-canvas focus-visible:ring-2 focus-visible:ring-[#9a6338]"
          >
            View All Projects
            <ArrowRight className="transition-transform duration-200 group-hover/view:translate-x-1" size={16} />
          </a>
          <div className="hidden border-l border-[#9a6338]/65 pl-5 text-[9px] font-semibold uppercase leading-[1.8] tracking-[0.35em] text-[#9a704f] xl:block" aria-hidden="true">
            Better<br />Ideas<br />Brighter<br />Tomorrow
          </div>
        </div>
      </div>
    </section>
  )
}
