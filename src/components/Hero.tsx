import { ArrowRight, Code2, FileText, Link, Mail } from 'lucide-react'
import heroBackground from '../assets/hero/hero-background.png'
import mujtabaCutout from '../assets/hero/mujtaba-cutout.png'

// Replace these placeholders with your real details.
const portfolio = {
  email: 'your.email@example.com',
  emailUrl: 'mailto:your.email@example.com',
  githubLabel: 'GitHub / your-username',
  githubUrl: 'https://github.com/your-username',
  linkedinLabel: 'LinkedIn / your-profile',
  linkedinUrl: 'https://www.linkedin.com/in/your-profile',
  resumeLabel: 'Resume / Download',
  resumeUrl: '/resume.pdf',
}

const stats = [
  { value: '03+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
]

const socials = [
  { label: 'GitHub', href: portfolio.githubUrl, Icon: Code2 },
  { label: 'LinkedIn', href: portfolio.linkedinUrl, Icon: Link },
  { label: 'Email', href: portfolio.emailUrl, Icon: Mail },
  { label: 'Resume', href: portfolio.resumeUrl, Icon: FileText },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="hero relative min-h-[1400px] overflow-hidden bg-canvas md:h-[calc(100svh-78px)] md:min-h-0"
      aria-labelledby="hero-heading"
    >
      {/* Layer 1: the texture may crop, but is never distorted. */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />

      {/* Layer 2: height controls scale; auto width preserves natural proportions. */}
      <img
        src={mujtabaCutout}
        alt="Mujtaba"
        className="hero-person pointer-events-none absolute bottom-0 left-1/2 z-10 h-[40%] w-auto max-w-none -translate-x-1/2 object-contain md:left-auto md:right-[-5%] md:h-[72%] md:translate-x-0 lg:right-[8%] lg:h-full"
        decoding="async"
        fetchPriority="high"
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-[#eee9e1]/95 via-[#eee9e1]/55 to-transparent md:hidden" />

      {/* Layers 3–5: all interactive UI remains above the person. */}
      <div className="hero-stage relative z-30 mx-auto min-h-[1400px] max-w-[1250px] px-6 pb-10 pt-14 md:h-full md:min-h-0 md:px-8 md:py-0 xl:px-0">
        <div className="hero-copy relative z-10 max-w-[610px] md:absolute md:left-8 md:top-[18%] xl:left-0">
          <p className="hero-label mb-7 text-[12px] font-bold uppercase tracking-[0.2em] text-ink">| Mujtaba |</p>
          <h1
            id="hero-heading"
            className="hero-title font-serif text-[clamp(3rem,4.25vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.025em] text-accent"
          >
            <span className="block md:whitespace-nowrap">Computer Science &amp;</span>
            <span className="block md:whitespace-nowrap">Software Developer</span>
          </h1>
          <p className="hero-description mt-10 max-w-[440px] text-[17px] leading-[1.6] text-ink md:text-[18px]">
            Building practical software and exploring
            <br className="hidden sm:block" /> AI &amp; machine learning.
          </p>

          <div className="hero-actions mt-9 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <a
              href="#projects"
              className="hero-button inline-flex h-[62px] w-full items-center justify-center gap-3 bg-accent px-7 text-[14px] font-semibold text-white outline-none transition-colors duration-200 hover:bg-[#ad835a] focus-visible:ring-2 focus-visible:ring-ink sm:w-[195px] md:h-[66px]"
            >
              <ArrowRight size={17} strokeWidth={2.4} />
              View Projects
            </a>
            <a
              id="resume"
              href={portfolio.resumeUrl}
              download
              className="hero-button inline-flex h-[62px] w-full items-center justify-center border border-accent bg-transparent px-7 text-[14px] font-semibold text-accent outline-none transition-colors duration-200 hover:bg-accent hover:text-ink focus-visible:ring-2 focus-visible:ring-ink sm:w-[195px] md:h-[66px]"
            >
              Download Resume
            </a>
          </div>
        </div>

        <aside className="hero-stats relative z-10 mt-14 flex max-w-[390px] items-start justify-between md:absolute md:right-8 md:top-[19%] md:mt-0 md:w-[150px] md:flex-col md:items-center xl:right-0" aria-label="Portfolio statistics">
          <div className="hidden size-[68px] place-items-center rounded-full bg-[#24211b] text-accent md:grid">
            <Code2 size={30} strokeWidth={1.8} />
          </div>
          {stats.map((stat, index) => (
            <div key={stat.label} className={`text-center ${index === 0 ? 'md:mt-7' : 'md:mt-11'}`}>
              <p className="font-serif text-[38px] font-medium leading-none text-ink">{stat.value}</p>
              <p className="mt-3 text-[13px] text-charcoal md:mt-5">{stat.label}</p>
            </div>
          ))}
        </aside>

        <div id="contact" className="hero-info relative z-10 mt-12 flex flex-col gap-7 md:absolute md:bottom-[75px] md:left-8 md:mt-0 md:flex-row md:gap-[62px] xl:left-0">
          <InfoGroup icon={Mail} title="Contact Information">
            <a href={portfolio.emailUrl}>{portfolio.email}</a>
            <a href={portfolio.linkedinUrl}>{portfolio.linkedinLabel}</a>
          </InfoGroup>
          <InfoGroup icon={Code2} title="Developer Profiles">
            <a href={portfolio.githubUrl}>{portfolio.githubLabel}</a>
            <a href={portfolio.resumeUrl}>{portfolio.resumeLabel}</a>
          </InfoGroup>
        </div>

        <div className="hero-socials relative z-40 mt-[400px] flex items-center justify-center gap-9 text-white md:absolute md:bottom-[89px] md:left-[72%] md:mt-0 md:-translate-x-1/2 md:justify-start md:gap-10">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="outline-none transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent"
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <Icon size={29} strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

type InfoGroupProps = {
  icon: typeof Mail
  title: string
  children: React.ReactNode
}

function InfoGroup({ icon: Icon, title, children }: InfoGroupProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="grid size-[60px] shrink-0 place-items-center rounded-full bg-[#24211b] text-accent md:size-[64px]">
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <div>
        <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.17em] text-ink">{title}</h2>
        <div className="flex flex-col gap-1 text-[14px] leading-tight text-charcoal [&_a]:w-fit [&_a]:border-b [&_a]:border-charcoal/70 [&_a]:outline-none [&_a]:transition-colors hover:[&_a]:text-accent focus-visible:[&_a]:ring-2 focus-visible:[&_a]:ring-accent md:text-[15px]">
          {children}
        </div>
      </div>
    </div>
  )
}
