type VisualProps = { isVisible: boolean }

const steps = ['REPETITIVE\nTASK', 'AUTOMATION', 'MORE\nTIME']

export default function AiWorkflowVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual flow-visual flow-visual--dark ${isVisible ? 'about-visual--active' : ''}`} aria-hidden="true">
      {steps.map((step, index) => (
        <div className="flow-step" key={step}>
          <span className="whitespace-pre-line">{step}</span>
          {index < steps.length - 1 && <i className="flow-arrow">↓</i>}
        </div>
      ))}
    </div>
  )
}
