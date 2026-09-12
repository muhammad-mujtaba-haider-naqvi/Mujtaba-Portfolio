type VisualProps = { isVisible: boolean }

const nodes = [
  { label: 'FRONTEND', className: 'network-node--top' },
  { label: 'DATA', className: 'network-node--left' },
  { label: 'BACKEND', className: 'network-node--right' },
  { label: 'API', className: 'network-node--bottom' },
]

export default function FullPictureVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual compact-network ${isVisible ? 'about-visual--active' : ''}`} aria-hidden="true">
      <svg className="compact-network__lines" viewBox="0 0 180 154" fill="none">
        <path className="network-line" pathLength="1" d="M90 76 L90 22 M90 76 L25 76 M90 76 L155 76 M90 76 L90 132" />
      </svg>
      <span className="compact-network__center">SYSTEM</span>
      {nodes.map(({ label, className }) => <span className={`compact-network__node ${className}`} key={label}>{label}</span>)}
    </div>
  )
}
