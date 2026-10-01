import { useEffect, useId, useRef, useState, type ComponentType, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import {
  ArrowUpRight, CalendarDays, Check, ChevronLeft, ChevronRight,
  CircleAlert, CodeXml, ExternalLink, Globe, Image as ImageIcon,
  Layers, Lightbulb, ListChecks, Play, UserRound, UsersRound, X,
} from 'lucide-react'
import {
  SiExpress, SiFigma, SiGsap, SiHtml5, SiJavascript, SiMongodb,
  SiNodedotjs, SiOpencv, SiPostgresql, SiPython, SiReact, SiTensorflow,
} from 'react-icons/si'
import { FaCss3Alt, FaGithub as Github, FaLinkedin as Linkedin, FaYoutube as Youtube } from 'react-icons/fa'
import { projectPlaceholder, type Project, type ProjectImage } from '../../data/projects'
import { externalUrl, youtubeId } from './projectMedia'
import './project-details.css'

type Icon = ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>

const technologyIcons: Record<string, { icon: Icon; color: string }> = {
  React: { icon: SiReact, color: '#087fa3' },
  'Node.js': { icon: SiNodedotjs, color: '#388345' },
  Express: { icon: SiExpress, color: '#4b4946' },
  MongoDB: { icon: SiMongodb, color: '#079558' },
  Python: { icon: SiPython, color: '#3976a4' },
  TensorFlow: { icon: SiTensorflow, color: '#e87812' },
  OpenCV: { icon: SiOpencv, color: '#476ac6' },
  HTML: { icon: SiHtml5, color: '#df4924' },
  CSS: { icon: FaCss3Alt, color: '#2359dc' },
  JavaScript: { icon: SiJavascript, color: '#a97b00' },
  GSAP: { icon: SiGsap, color: '#397921' },
  Figma: { icon: SiFigma, color: '#9755cd' },
  PostgreSQL: { icon: SiPostgresql, color: '#376589' },
}

function InfoCard({ title, icon: Icon, children, className = '' }: {
  title: string; icon?: Icon; children: ReactNode; className?: string
}) {
  return (
    <section className={`project-detail-card ${className}`}>
      <h3>{Icon && <span className="project-detail-card__icon"><Icon size={22} aria-hidden /></span>}{title}</h3>
      {children}
    </section>
  )
}

function ProjectHero({ project }: { project: Project }) {
  const [index, setIndex] = useState(0)
  const [failedSrc, setFailedSrc] = useState<string>()
  const primary = project.heroImage ?? (
    project.image && project.image !== projectPlaceholder ? { src: project.image } : undefined
  )
  const images = [primary, ...(project.galleryImages ?? [])]
    .filter((item): item is ProjectImage => Boolean(item?.src?.trim()))
    .filter((item, i, list) => list.findIndex((other) => other.src === item.src) === i)
  const current = images[index]

  const advance = (direction: number) => {
    setFailedSrc(undefined)
    setIndex((value) => (value + direction + images.length) % images.length)
  }

  return (
    <div className="project-hero" role="region" aria-label={`${project.title} gallery`}
      onKeyDown={(event) => {
        if (images.length < 2 || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return
        event.preventDefault()
        event.stopPropagation()
        advance(event.key === 'ArrowRight' ? 1 : -1)
      }}>
      {current && current.src !== failedSrc ? (
        <img className="project-hero__image" src={current.src}
          alt={current.alt || `${project.title} — image ${index + 1}`}
          style={{ objectFit: current.fit ?? 'contain', objectPosition: current.position ?? 'center' }}
          onError={() => setFailedSrc(current.src)} draggable={false} />
      ) : (
        <div className="project-hero__placeholder">
          <div className="project-hero__preview-window" aria-hidden="true">
            <div className="project-hero__window-bar"><i /><i /><i /><span /></div>
            <div className="project-hero__window-content"><ImageIcon size={38} strokeWidth={1.2} /><span>Project preview coming soon</span></div>
          </div>
          <span className="project-hero__caption">{project.category} <span aria-hidden="true">/</span> {project.title}</span>
        </div>
      )}
      <span className="project-hero__number">{project.number}</span>
      {images.length > 1 && <>
        <button className="project-hero__arrow project-hero__arrow--previous" type="button" aria-label="Previous project image" onClick={() => advance(-1)}><ChevronLeft size={24} /></button>
        <button className="project-hero__arrow project-hero__arrow--next" type="button" aria-label="Next project image" onClick={() => advance(1)}><ChevronRight size={24} /></button>
        <span className="project-hero__counter" role="status">{index + 1} / {images.length}</span>
      </>}
    </div>
  )
}

function ProjectMetadata({ project }: { project: Project }) {
  const fields = [
    { label: 'Duration', value: project.duration, icon: CalendarDays },
    { label: 'Team Size', value: project.teamSize, icon: UsersRound },
    { label: 'My Role', value: project.role, icon: UserRound },
    { label: 'Category', value: project.category, icon: Layers },
  ]
  return <dl className="project-metadata">{fields.map(({ label, value, icon: Icon }) => (
    <div className="project-metadata__item" key={label}>
      <Icon size={24} aria-hidden />
      <div><dt>{label}</dt><dd className={!value?.trim() ? 'project-pending' : undefined}>{value?.trim() || 'To be added'}</dd></div>
    </div>
  ))}</dl>
}

function ProjectTechnologies({ technologies }: { technologies: string }) {
  const entries = [...new Set(technologies.split(',').map((name) => name.trim()).filter(Boolean))]
  return <ul className="project-technologies">{entries.map((name) => {
    const entry = technologyIcons[name]
    return <li key={name}>
      {entry ? <span className="project-technologies__logo" style={{ color: entry.color }}><entry.icon size={29} aria-hidden /></span>
        : <span className="project-technologies__text" aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>}
      <span>{name}</span>
    </li>
  })}</ul>
}

function ProjectVideo({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false)
  const [thumbnailFailed, setThumbnailFailed] = useState(false)
  const id = youtubeId(project.youtubeUrl)
  const title = project.videoTitle || `${project.title} walkthrough`

  return <div className="project-video">
    {id ? playing ? (
      <iframe title={title} src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin" />
    ) : (
      <button type="button" className="project-video__preview" aria-label={`Play ${title}`} onClick={() => setPlaying(true)}>
        {!thumbnailFailed && <img src={project.videoThumbnail || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" onError={() => setThumbnailFailed(true)} />}
        <span className="project-video__play"><Play size={26} fill="currentColor" aria-hidden /></span>
        <span className="project-video__title">{title}</span>
        {project.videoDuration && <span className="project-video__duration">{project.videoDuration}</span>}
      </button>
    ) : (
      <div className="project-video__placeholder"><span><Play size={24} aria-hidden /></span><p>Project walkthrough<br />coming soon</p></div>
    )}
  </div>
}

function ProjectLinks({ project }: { project: Project }) {
  const links = [
    { label: 'Live Demo', detail: 'Visit the deployed project', href: externalUrl(project.demoUrl), icon: Globe, color: '#946540' },
    { label: 'GitHub Repository', detail: 'View source code', href: externalUrl(project.githubUrl), icon: Github, color: '#29231f' },
    { label: 'LinkedIn Post', detail: 'View project post', href: externalUrl(project.linkedinUrl), icon: Linkedin, color: '#0966c2' },
    { label: 'YouTube Video', detail: 'Watch the walkthrough', href: youtubeId(project.youtubeUrl) ? externalUrl(project.youtubeUrl) : undefined, icon: Youtube, color: '#df2424' },
  ]
  return <ul className="project-links">{links.map(({ label, detail, href, icon: Icon, color }) => {
    const content = <><span className="project-links__icon" style={{ color }}><Icon size={22} aria-hidden /></span><span className="project-links__copy"><strong>{label}</strong><small>{href ? detail : 'Coming soon'}</small></span>{href && <ExternalLink size={14} aria-hidden />}</>
    return <li key={label}>{href
      ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
      : <div className="project-links__pending">{content}</div>}</li>
  })}</ul>
}

export default function ProjectDetailsModal({ project, onClose, returnFocusTo }: {
  project: Project; onClose: () => void; returnFocusTo: HTMLElement | null
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const backdropPointerDown = useRef(false)
  const titleId = useId()
  const descriptionId = useId()
  const demoUrl = externalUrl(project.demoUrl)
  const githubUrl = externalUrl(project.githubUrl)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const body = document.body
    const root = document.documentElement
    const scrollX = window.scrollX
    const scrollY = window.scrollY
    const savedBody = { position: body.style.position, top: body.style.top, left: body.style.left, width: body.style.width, overflow: body.style.overflow, paddingRight: body.style.paddingRight }
    const savedRootOverflow = root.style.overflow
    const scrollbarWidth = window.innerWidth - root.clientWidth
    const paddingRight = parseFloat(getComputedStyle(body).paddingRight) || 0

    Object.assign(body.style, { position: 'fixed', top: `-${scrollY}px`, left: `-${scrollX}px`, width: '100%', overflow: 'hidden', paddingRight: `${paddingRight + scrollbarWidth}px` })
    root.style.overflow = 'hidden'
    dialog.showModal()
    closeRef.current?.focus({ preventScroll: true })
    if (scrollRef.current) scrollRef.current.scrollTop = 0

    return () => {
      dialog.close()
      Object.assign(body.style, savedBody)
      root.style.overflow = savedRootOverflow
      window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' })
      if (returnFocusTo?.isConnected) returnFocusTo.focus({ preventScroll: true })
    }
  }, [returnFocusTo])

  // The keyed content also resets gallery position and unmounts any playing video.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [project])

  const isOutside = (x: number, y: number) => {
    const rect = dialogRef.current?.getBoundingClientRect()
    return Boolean(rect && (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom))
  }

  return createPortal(
    <dialog ref={dialogRef} className="project-modal" aria-labelledby={titleId} aria-describedby={descriptionId}
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button, a[href], iframe, [tabindex]'))
          .filter((element) => element.tabIndex >= 0 && !element.hasAttribute('disabled'))
        const first = controls[0]
        const last = controls[controls.length - 1]
        if ((event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last)) {
          event.preventDefault()
          const target = event.shiftKey ? last : first
          target?.focus()
        }
      }}
      onPointerDown={(event) => { backdropPointerDown.current = event.target === event.currentTarget && isOutside(event.clientX, event.clientY) }}
      onClick={(event) => {
        event.stopPropagation()
        if (backdropPointerDown.current && event.target === event.currentTarget && isOutside(event.clientX, event.clientY)) onClose()
        backdropPointerDown.current = false
      }}>
      <button ref={closeRef} type="button" className="project-modal__close" aria-label="Close project details" onClick={onClose}><X size={23} aria-hidden /></button>
      <div className="project-modal__scroll" ref={scrollRef}>
        <ProjectHero key={`hero-${project.number}`} project={project} />
        <div className="project-modal__content">
          <header className="project-introduction">
            <div><h2 id={titleId}>{project.title}</h2><p id={descriptionId}>{project.description}</p></div>
            <div className="project-actions">
              {demoUrl ? <a className="project-action project-action--demo" href={demoUrl} target="_blank" rel="noopener noreferrer">Live Demo <ArrowUpRight size={17} aria-hidden /></a>
                : <span className="project-action project-action--pending"><span>Live Demo<small>Coming soon</small></span><ArrowUpRight size={17} aria-hidden /></span>}
              {githubUrl ? <a className="project-action project-action--github" href={githubUrl} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden /> GitHub <ExternalLink size={13} aria-hidden /></a>
                : <span className="project-action project-action--pending"><Github size={17} aria-hidden /><span>GitHub<small>Coming soon</small></span></span>}
            </div>
          </header>
          <ProjectMetadata project={project} />
          <div className="project-info-grid">
            <InfoCard title="The Problem" icon={CircleAlert}><p className={project.problem ? undefined : 'project-pending'}>{project.problem || 'The project challenge will be added soon.'}</p></InfoCard>
            <InfoCard title="The Solution" icon={Lightbulb}><p>{project.solution || project.description}</p></InfoCard>
            <InfoCard title="Technologies Used" icon={CodeXml}><ProjectTechnologies technologies={project.technologies} /></InfoCard>
            <InfoCard title="Key Features" icon={ListChecks}>
              {project.features?.some((feature) => feature.trim())
                ? <ul className="project-features">{project.features.filter((feature) => feature.trim()).map((feature, index) => <li key={`${index}-${feature}`}><Check size={14} aria-hidden /><span>{feature}</span></li>)}</ul>
                : <p className="project-pending">A closer look at the project’s features is coming soon.</p>}
            </InfoCard>
            <InfoCard title="Project Demo"><ProjectVideo key={`video-${project.number}-${project.youtubeUrl}`} project={project} /></InfoCard>
            <InfoCard title="Additional Links"><ProjectLinks project={project} /></InfoCard>
          </div>
        </div>
      </div>
    </dialog>, document.body,
  )
}
