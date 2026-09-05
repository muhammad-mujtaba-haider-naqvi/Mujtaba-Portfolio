import heroBackground from '../../assets/hero/hero-background.png'
import ValueCard, { type ValueCardData } from '../about/ValueCard'
import AiWorkflowVisual from '../about/visuals/AiWorkflowVisual'
import BuildVisual from '../about/visuals/BuildVisual'
import FullPictureVisual from '../about/visuals/FullPictureVisual'
import ResultsVisual from '../about/visuals/ResultsVisual'

const valueCards: ValueCardData[] = [
  {
    number: '01',
    title: 'I BUILD, NOT JUST LEARN',
    tagline: 'From knowledge to working software.',
    description:
      'I turn ideas into functional applications, systems and automation — not just coursework.',
    footer: 'IDEAS · CODE · REAL IMPACT',
    variant: 'brown',
  },
  {
    number: '02',
    title: 'I UNDERSTAND\nTHE FULL PICTURE',
    tagline: 'More than one layer of the stack.',
    description:
      'I work across frontend, backend, APIs, databases and AI — understanding how complete systems connect.',
    footer: 'DIFFERENT PIECES · A BIGGER PICTURE',
    variant: 'light',
  },
  {
    number: '03',
    title: 'I’M BUILDING\nFOR WHAT’S NEXT',
    tagline: 'Software engineering meets applied AI.',
    description:
      'I build AI agents and automation workflows that connect LLMs with APIs, tools and real-world applications.',
    footer: 'AUTOMATE · AUGMENT · CREATE OPPORTUNITIES',
    variant: 'dark',
  },
  {
    number: '04',
    title: 'I CARE ABOUT\nRESULTS',
    tagline: 'Build. Measure. Improve.',
    description:
      'I focus on improving accuracy, automation performance, usability and the overall quality of what I build.',
    footer: 'REAL WORK · MEASURABLE IMPACT',
    variant: 'bronze',
  },
]

const visuals = [BuildVisual, FullPictureVisual, AiWorkflowVisual, ResultsVisual]

export default function About() {
  return (
    <section
      id="about"
      className="about-section relative isolate overflow-hidden bg-canvas pb-20 pt-9 sm:pb-24 sm:pt-11 lg:pb-16 lg:pt-5"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-canvas/35" aria-hidden="true" />

      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-12" aria-hidden="true">
        <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#855b38] sm:text-[11px]">
          <span className="h-px w-10 bg-[#9a6338]/65 sm:w-14" />
          Why Partner
        </div>
        <div className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#855b38] md:flex">
          <span className="h-px w-14 bg-[#9a6338]/65" />
          Value · Impact · Growth
        </div>
      </div>

      <header className="mx-auto mt-2 max-w-[1100px] px-6 text-center sm:px-8">
        <h2
          id="about-heading"
          className="font-sans text-[clamp(2.55rem,4vw,4rem)] font-bold leading-[0.92] tracking-[-0.055em] text-ink"
        >
          <span className="block">Why You Should Partner With Me</span>
          <span className="mt-1 block text-[#9a6338]">Today and Beyond</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[900px] text-[15px] leading-relaxed text-charcoal sm:text-[17px] lg:text-[18px]">
          I bring more than a list of technologies — I build, connect, automate and improve.
        </p>
      </header>

      <div className="mx-auto mt-6 grid max-w-[1600px] grid-cols-1 gap-4 px-4 sm:px-6 md:mt-7 md:px-8 lg:mt-4 lg:grid-cols-2 lg:px-10 xl:px-12">
        {valueCards.map((card, index) => {
          const Visual = visuals[index]

          return (
            <ValueCard
              key={card.number}
              card={card}
              index={index}
              visual={(isVisible) => <Visual isVisible={isVisible} />}
            />
          )
        })}
      </div>
    </section>
  )
}
