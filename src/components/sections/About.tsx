import ValueCard, { type ValueCardData } from '../about/ValueCard'
import AiWorkflowVisual from '../about/visuals/AiWorkflowVisual'
import BuildVisual from '../about/visuals/BuildVisual'
import FullPictureVisual from '../about/visuals/FullPictureVisual'
import ResultsVisual from '../about/visuals/ResultsVisual'

const valueCards: ValueCardData[] = [
  { number: '01', title: 'I TURN IDEAS INTO\nWORKING PRODUCTS', description: 'From concept to a practical solution people can actually use.', footer: 'PRODUCT DEVELOPMENT · FULL-STACK', variant: 'brown' },
  { number: '02', title: 'I BUILD BEYOND\nA SINGLE LAYER', description: 'I connect frontend, backend, APIs and data into one working system.', footer: 'FULL-STACK · APIs · SYSTEMS', variant: 'light' },
  { number: '03', title: 'I AUTOMATE WHAT\nSLOWS YOU DOWN', description: 'I use automation and AI to simplify repetitive work and create smarter workflows.', footer: 'AUTOMATION · AI · WORKFLOWS', variant: 'dark' },
  { number: '04', title: 'I BUILD FOR OUTCOMES,\nNOT JUST OUTPUT', description: 'I focus on usability, performance and reliability so the software creates lasting value.', footer: 'PERFORMANCE · USABILITY · IMPACT', variant: 'bronze' },
]

const visuals = [BuildVisual, FullPictureVisual, AiWorkflowVisual, ResultsVisual]

export default function About() {
  return (
    <section id="about" className="portfolio-section portfolio-section--after-hero about-section relative isolate overflow-hidden bg-transparent" aria-labelledby="about-heading">
      <div className="mx-auto flex max-w-[1760px] items-center gap-5 px-6 text-[8px] font-semibold uppercase tracking-[0.34em] text-[#855b38] sm:gap-7 sm:px-8 sm:text-[10px] lg:px-10" aria-hidden="true">
        <div className="flex shrink-0 items-center gap-4 sm:gap-5">
          <span>Why Partner</span>
          <span className="h-px w-8 bg-[#9a6338]/55 sm:w-14" />
        </div>
        <span className="hidden h-px flex-1 bg-[#9a6338]/20 sm:block" />
        <div className="ml-auto flex shrink-0 items-center gap-4 sm:gap-5">
          <span className="h-px w-8 bg-[#9a6338]/55 sm:w-14" />
          <span>Value · Impact · Growth</span>
        </div>
      </div>

      <header className="mx-auto mt-4 max-w-[1320px] px-6 text-center sm:px-8">
        <h2 id="about-heading" className="font-sans text-[clamp(2.5rem,4.4vw,4.65rem)] font-bold leading-[0.9] tracking-[-0.06em] text-ink">
          <span className="block">Why You Should Partner With Me</span>
          <span className="mt-1 block text-[#a87349]">Today and Beyond</span>
        </h2>
      </header>

      <div className="showcase-card-grid">
        {valueCards.map((card, index) => {
          const Visual = visuals[index]
          return <ValueCard key={card.number} card={card} index={index} visual={(isVisible) => <Visual isVisible={isVisible} />} />
        })}
      </div>
    </section>
  )
}
