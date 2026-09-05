import { Database, Monitor, Settings } from 'lucide-react'

type VisualProps = {
  isVisible: boolean
}

const layers = [
  { label: 'Frontend', Icon: Monitor },
  { label: 'Backend', Icon: Settings },
  { label: 'Database', Icon: Database },
]

export default function FullStackVisual({ isVisible }: VisualProps) {
  return (
    <div className={`skill-visual ${isVisible ? 'skill-visual--active' : ''} relative h-[270px] w-full max-w-[330px]`} aria-hidden="true">
      <div className="absolute inset-x-3 top-8 flex flex-col items-center gap-[12px]">
        {layers.map(({ label, Icon }, index) => (
          <div key={label} className="skill-architecture-step relative w-full max-w-[245px]">
            <div className="skill-architecture-block flex h-[64px] items-center gap-5 rounded-xl border border-[#edc89f]/40 bg-gradient-to-br from-[#ad835a]/55 to-[#4f3021]/35 px-5 shadow-[0_10px_22px_rgba(35,24,17,0.18)]">
              <Icon className="shrink-0 text-[#fff0de]" size={27} strokeWidth={1.7} />
              <span className="h-px flex-1 bg-[#edc89f]/35" />
              <span className="text-[12px] font-medium text-[#fffaf3]">{label}</span>
            </div>

            {index < layers.length - 1 && (
              <span className="skill-vertical-connector absolute left-1/2 top-[64px] h-[12px] w-px -translate-x-1/2 bg-[#fff0de]/85">
                <span className="absolute -bottom-0.5 -left-[2px] size-[5px] rotate-45 border-b border-r border-[#fff0de]" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
