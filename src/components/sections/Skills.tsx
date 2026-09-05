import heroBackground from '../../assets/hero/hero-background.png'
import CapabilityCard, { type Capability } from '../skills/CapabilityCard'
import Foundations from '../skills/Foundations'
import AiAutomationVisual from '../skills/visuals/AiAutomationVisual'
import DataMlVisual from '../skills/visuals/DataMlVisual'
import DevOpsVisual from '../skills/visuals/DevOpsVisual'
import FullStackVisual from '../skills/visuals/FullStackVisual'

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

const visuals = [FullStackVisual, AiAutomationVisual, DataMlVisual, DevOpsVisual]

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section relative isolate overflow-hidden bg-canvas pb-24 pt-14 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20"
      aria-labelledby="skills-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-canvas/35" aria-hidden="true" />

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
        className="mx-auto mt-10 grid max-w-[1540px] grid-cols-1 gap-5 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-6 lg:px-10 xl:px-12"
        aria-labelledby="capabilities-heading"
      >
        {capabilities.map((capability, index) => {
          const Visual = visuals[index]

          return (
            <CapabilityCard
              key={capability.number}
              capability={capability}
              index={index}
              visual={(isVisible) => <Visual isVisible={isVisible} />}
            />
          )
        })}
      </div>

      <Foundations />
    </section>
  )
}
