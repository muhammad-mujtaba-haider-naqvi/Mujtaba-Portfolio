import { Code2, Database, Monitor } from 'lucide-react'

type VisualProps = { isVisible: boolean }

const layers = [
  { id: 'ui', Icon: Monitor },
  { id: 'api', Icon: Code2 },
  { id: 'data', Icon: Database },
]

export default function BuildVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual build-visual ${isVisible ? 'about-visual--active' : ''}`} style={{ width: 144, height: 108 }} aria-hidden="true">
      <div className="build-flow">
        {layers.map(({ id, Icon }, index) => (
          <div key={id} className={`build-node build-node--${index + 1}`}>
            <div className="build-panel">
              <Icon className="build-icon" size={11} strokeWidth={1.8} />
              <span className="build-track" />
            </div>
            <span className="build-link" />
            <span className="build-dot" />
            {index < layers.length - 1 && <span className="build-rail"><span className="build-rail-pulse" /></span>}
          </div>
        ))}
      </div>
    </div>
  )
}
