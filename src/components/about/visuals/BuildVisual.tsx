type VisualProps = { isVisible: boolean }

export default function BuildVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual build-visual ${isVisible ? 'about-visual--active' : ''}`} style={{ width: 190, height: 170 }} aria-hidden="true">
      <div className="idea-flow">
        <div className="flow-track" />
        <span className="flow-particle" />

        <div className="flow-stage stage-idea">
          <div className="idea-bulb">
            <span className="idea-glow" />
          </div>
        </div>

        <div className="flow-stage stage-code">
          <div className="code-shell">
            <span className="code-fragment code-fragment--a">{'{}'}</span>
            <span className="code-fragment code-fragment--b">{'</>'}</span>
          </div>
        </div>

        <div className="flow-stage stage-build">
          <div className="gear-system">
            <span className="gear-node gear-node--a" />
            <span className="gear-node gear-node--b" />
            <span className="gear-core" />
          </div>
        </div>

        <div className="flow-stage stage-product">
          <div className="product-window">
            <span className="product-check" />
          </div>
        </div>
      </div>
    </div>
  )
}
