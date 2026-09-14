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
      <div className="mx-auto flex max-w-[1760px] items-center px-6 sm:px-8 lg:px-10" aria-hidden="true">
        <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#855b38] sm:text-[11px]">
          <span className="h-px w-10 bg-[#9a6338]/65 sm:w-14" />
          What I Bring
        </div>
      </div>

      <header className="mx-auto mt-3 max-w-[880px] px-6 text-center sm:px-8">
        <h2 id="about-heading" className="font-sans text-[clamp(2.55rem,4vw,4rem)] font-bold leading-[0.96] tracking-[-0.055em] text-ink">
          Why Work With Me
        </h2>
        <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-relaxed text-charcoal sm:text-[17px]">
          I don&rsquo;t just write code. I build practical software designed to solve real problems.
        </p>
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
