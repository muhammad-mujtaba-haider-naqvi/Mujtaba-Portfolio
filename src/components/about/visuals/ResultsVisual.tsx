type VisualProps = { isVisible: boolean }

export default function ResultsVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual impact-dashboard ${isVisible ? 'about-visual--active' : ''}`} aria-hidden="true">
      <div className="impact-dashboard__metric">
        <span>SPEED</span><i className="impact-bar impact-bar--speed" />
      </div>
      <div className="impact-dashboard__metric">
        <span>TIME</span><i className="impact-bar impact-bar--time" />
      </div>
      <div className="impact-dashboard__growth">
        <span>VALUE</span>
        <svg viewBox="0 0 100 38" fill="none">
          <path className="impact-growth-line" pathLength="1" d="M3 32C16 31 23 26 32 27C44 28 47 17 58 19C72 21 76 8 96 5" />
          <circle className="impact-growth-dot" cx="96" cy="5" r="3" />
        </svg>
      </div>
    </div>
  )
}
