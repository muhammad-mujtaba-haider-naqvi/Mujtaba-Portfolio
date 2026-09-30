import CapabilityCard, { type Capability } from '../skills/CapabilityCard'
import Foundations from '../skills/Foundations'
import fullStackImage from '../../assets/skills/card-1.png'
import aiAutomationImage from '../../assets/skills/card-2.png'
import dataMachineLearningImage from '../../assets/skills/card-3.png'
import devOpsDeliveryImage from '../../assets/skills/card-4.png'

const capabilities: Capability[] = [
  {
    number: '01',
    title: 'FULL-STACK\nAPPLICATIONS',
    description: 'Responsive frontend, backend, APIs and database-driven applications.',
    footer: 'WEB · APIs · DATABASES',
    tone: 'coat',
    image: {
      src: fullStackImage,
      alt: 'Full-stack application dashboard shown on laptop and mobile screens with API, database, and cloud deployment elements',
      width: 1609,
      height: 978,
    },
  },
  {
    number: '02',
    title: 'AI & AUTOMATION\nSYSTEMS',
    description: 'AI agents, LLM workflows, APIs, webhooks and intelligent automation.',
    footer: 'LLMs · APIs · AUTOMATION',
    tone: 'brown',
    image: {
      src: aiAutomationImage,
      alt: 'AI automation workspace with an AI robot, connected data inputs, and workflow integrations',
      width: 1610,
      height: 977,
    },
  },
  {
    number: '03',
    title: 'DATA &\nMACHINE LEARNING',
    description: 'Data analysis, preprocessing, machine learning and computer vision solutions.',
    footer: 'DATA · ML · COMPUTER VISION',
    tone: 'earth',
    image: {
      src: dataMachineLearningImage,
      alt: 'Machine learning system transforming source data into a visual prediction with a confidence score',
      width: 1535,
      height: 1024,
    },
  },
  {
    number: '04',
    title: 'DEVOPS &\nDELIVERY',
    description: 'Version control, containers, CI/CD workflows and reliable software delivery.',
    footer: 'GIT · CI/CD · DEPLOYMENT',
    tone: 'mocha',
    image: {
      src: devOpsDeliveryImage,
      alt: 'DevOps continuous integration and delivery workflow connecting development tools to cloud deployment and monitoring',
      width: 1609,
      height: 977,
    },
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
