type VisualProps = { isVisible: boolean }

const metrics = [
  { value: '+32%', label: 'PERFORMANCE', modifier: 'performance' },
  { value: '99%', label: 'RELIABILITY', modifier: 'reliability' },
  { value: '+18%', label: 'ENGAGEMENT', modifier: 'engagement' },
]

export default function ResultsVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual impact-panel ${isVisible ? 'about-visual--active' : ''}`} aria-hidden="true">
      <div className="impact-panel__header">
        <span><i>↗</i> PROJECT IMPACT</span>
        <small>LAST 6 MONTHS</small>
      </div>

      <div className="impact-panel__metrics">
        {metrics.map((metric) => (
          <div className={`impact-kpi impact-kpi--${metric.modifier}`} key={metric.label}>
            <div className="impact-kpi__chart">
              <svg viewBox="0 0 52 52">
                <circle className="impact-kpi__ring-track" cx="26" cy="26" r="21" pathLength="100" />
                <circle className="impact-kpi__ring-progress" cx="26" cy="26" r="21" pathLength="100" />
              </svg>
              <strong>{metric.value}</strong>
            </div>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>

      <div className="impact-panel__footer">
        <span><i>↗</i> CONTINUOUS IMPROVEMENT</span>
        <div className="impact-panel__pulse"><i /></div>
      </div>
    </div>
  )
}
