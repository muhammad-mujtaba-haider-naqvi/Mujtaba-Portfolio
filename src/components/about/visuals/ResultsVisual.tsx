type VisualProps = { isVisible: boolean }

const outcomes = ['PERFORMANCE', 'USABILITY', 'IMPACT']

export default function ResultsVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual outcomes-visual ${isVisible ? 'about-visual--active' : ''}`} aria-hidden="true">
      {outcomes.map((outcome) => <span className="outcome-pill" key={outcome}>{outcome}</span>)}
    </div>
  )
}
