import { Cloud, GitBranch, PackageCheck } from 'lucide-react'
import type { CSSProperties } from 'react'

type VisualProps = {
  isVisible: boolean
}

const stages = [
  { label: 'Code', Icon: GitBranch, left: 'left-0', delay: 180 },
  { label: 'Build & Test', Icon: PackageCheck, left: 'left-1/2 -translate-x-1/2', delay: 320 },
  { label: 'Deploy', Icon: Cloud, left: 'right-0', delay: 460 },
]

export default function DevOpsVisual({ isVisible }: VisualProps) {
  return (
    <div className={`skill-visual ${isVisible ? 'skill-visual--active' : ''} relative h-[235px] w-full max-w-[350px]`} aria-hidden="true">
      <svg className="absolute inset-0 size-full" viewBox="0 0 350 235" fill="none">
        <path className="skill-delivery-line" pathLength="1" d="M72 86 L151 86" />
        <path className="skill-delivery-line" pathLength="1" d="M199 86 L278 86" />
        <path className="skill-delivery-return" pathLength="1" d="M310 120 L310 178 Q310 197 291 197 L59 197 Q40 197 40 178 L40 120" />
      </svg>

      <div className="absolute inset-x-1 top-[48px]">
        {stages.map(({ label, Icon, left, delay }) => (
          <div
            key={label}
            className={`skill-delivery-node absolute top-0 w-[86px] text-center ${left}`}
            style={{ '--skill-node-delay': `${delay}ms` } as CSSProperties}
          >
            <span className="mx-auto grid size-[74px] place-items-center rounded-full border border-[#edc89f]/65 bg-[#684632]/75 shadow-[0_9px_22px_rgba(35,24,17,0.18)]">
              <Icon className="text-[#fff0de]" size={27} strokeWidth={1.7} />
            </span>
            <span className="mt-2 block text-[10px] font-medium leading-tight text-[#fffaf3]">{label}</span>
          </div>
        ))}
      </div>

      <div className="skill-delivery-caption absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#71503b] px-3 text-[8px] font-semibold uppercase tracking-[0.24em] text-[#fff0de]">
        Continuous Delivery
      </div>
    </div>
  )
}
