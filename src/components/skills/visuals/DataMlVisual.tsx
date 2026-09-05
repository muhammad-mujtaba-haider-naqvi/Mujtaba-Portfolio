import { BarChart3, BrainCircuit, Database, Settings } from 'lucide-react'

type VisualProps = {
  isVisible: boolean
}

const pipeline = [
  { label: 'Raw Data', Icon: Database },
  { label: 'Preprocessing', Icon: Settings },
  { label: 'Model Training', Icon: BrainCircuit },
  { label: 'Insights', Icon: BarChart3 },
]

export default function DataMlVisual({ isVisible }: VisualProps) {
  return (
    <div className={`skill-visual ${isVisible ? 'skill-visual--active' : ''} relative h-[270px] w-full max-w-[325px]`} aria-hidden="true">
      <div className="absolute inset-x-4 top-6 flex flex-col items-center gap-3">
        {pipeline.map(({ label, Icon }, index) => (
          <div key={label} className="skill-pipeline-step relative w-full max-w-[245px]">
            <div className="flex h-[48px] items-center gap-5 rounded-lg border border-[#edc89f]/55 bg-[#4f3021]/22 px-5 shadow-[0_8px_20px_rgba(35,24,17,0.12)]">
              <Icon className="shrink-0 text-[#fff0de]" size={25} strokeWidth={1.7} />
              <span className="text-[12px] font-medium text-[#fffaf3]">{label}</span>
            </div>

            {index < pipeline.length - 1 && (
              <span className="skill-pipeline-connector absolute left-1/2 top-[48px] h-3 w-px -translate-x-1/2 bg-[#fff0de]/85">
                <span className="absolute -bottom-0.5 -left-[2px] size-[5px] rotate-45 border-b border-r border-[#fff0de]" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
