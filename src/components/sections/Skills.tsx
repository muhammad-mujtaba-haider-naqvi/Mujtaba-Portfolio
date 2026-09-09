import CapabilityCard, { type Capability } from '../skills/CapabilityCard'
import Foundations from '../skills/Foundations'

const capabilities: Capability[] = [
  {
    number: '01',
    title: 'FULL-STACK\nAPPLICATIONS',
    description: 'Responsive frontend, backend, APIs and database-driven applications.',
    footer: 'WEB · APIs · DATABASES',
    tone: 'coat',
  },
  {
    number: '02',
    title: 'AI & AUTOMATION\nSYSTEMS',
    description: 'AI agents, LLM workflows, APIs, webhooks and intelligent automation.',
    footer: 'LLMs · APIs · AUTOMATION',
    tone: 'brown',
  },
  {
    number: '03',
    title: 'DATA &\nMACHINE LEARNING',
    description: 'Data analysis, preprocessing, machine learning and computer vision solutions.',
    footer: 'DATA · ML · COMPUTER VISION',
    tone: 'earth',
  },
  {
    number: '04',
    title: 'DEVOPS &\nDELIVERY',
    description: 'Version control, containers, CI/CD workflows and reliable software delivery.',
    footer: 'GIT · CI/CD · DEPLOYMENT',
    tone: 'mocha',
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="portfolio-section skills-section relative isolate overflow-hidden bg-transparent"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto flex max-w-[1540px] items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-12" aria-hidden="true">
        <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#855b38] sm:text-[11px]">
          <span className="h-px w-10 bg-[#9a6338]/65 sm:w-14" />
          My Capabilities
        </div>
        <div className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#855b38] sm:flex">
          Core Foundations
          <span className="h-px w-14 bg-[#9a6338]/65" />
        </div>
      </div>

      <header className="mx-auto mt-8 max-w-[900px] px-6 text-center sm:px-8 lg:mt-9">
        <h2
          id="skills-heading"
          className="font-sans text-[clamp(2.8rem,5vw,4.7rem)] font-bold leading-none tracking-[-0.055em] text-ink"
        >
          Skills &amp; <span className="text-[#9a6338]">Expertise</span>
        </h2>
        <p
          id="capabilities-heading"
          className="mt-5 text-[12px] font-semibold uppercase tracking-[0.5em] text-[#765039] sm:text-[14px] lg:text-[16px]"
        >
          What I Can Build
        </p>
      </header>

      <div
        className="showcase-card-grid"
        aria-labelledby="capabilities-heading"
      >
        {capabilities.map((capability, index) => (
          <CapabilityCard
            key={capability.number}
            capability={capability}
            index={index}
          />
        ))}
      </div>

      <Foundations />
    </section>
  )
}
