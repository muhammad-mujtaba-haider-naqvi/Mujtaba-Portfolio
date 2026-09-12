type VisualProps = { isVisible: boolean }

const steps = ['IDEA', 'BUILD', 'PRODUCT']

export default function BuildVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual flow-visual ${isVisible ? 'about-visual--active' : ''} build-visual`} aria-hidden="true">
      {steps.map((step, index) => (
        <div className="flow-step" key={step}>
          <span>{step}</span>
          {index < steps.length - 1 && <i className="flow-arrow">↓</i>}
        </div>
      ))}
    </div>
  )
}
