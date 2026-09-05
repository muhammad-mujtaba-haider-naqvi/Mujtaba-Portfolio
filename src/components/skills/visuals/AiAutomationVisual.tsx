import { Bot, BrainCircuit, Cloud, Settings, Workflow } from 'lucide-react'
import type { CSSProperties } from 'react'

type VisualProps = {
  isVisible: boolean
}

const nodes = [
  { label: 'Agents', Icon: Bot, position: 'left-1/2 top-0 -translate-x-1/2', delay: 500 },
  { label: 'APIs', Icon: Cloud, position: 'left-0 top-1/2 -translate-y-1/2', delay: 580 },
  { label: 'Workflows', Icon: Workflow, position: 'right-0 top-1/2 -translate-y-1/2', delay: 660 },
  { label: 'Automation', Icon: Settings, position: 'bottom-0 left-1/2 -translate-x-1/2', delay: 740 },
]

export default function AiAutomationVisual({ isVisible }: VisualProps) {
  return (
    <div className={`skill-visual ${isVisible ? 'skill-visual--active' : ''} relative h-[270px] w-full max-w-[330px]`} aria-hidden="true">
      <svg className="absolute inset-0 size-full" viewBox="0 0 330 270" fill="none">
        <path className="skill-network-line" pathLength="1" d="M165 135 L165 43" />
        <path className="skill-network-line" pathLength="1" d="M165 135 L47 135" />
        <path className="skill-network-line" pathLength="1" d="M165 135 L283 135" />
        <path className="skill-network-line" pathLength="1" d="M165 135 L165 227" />
      </svg>

      <div className="skill-network-center absolute left-1/2 top-1/2 z-10 grid size-[82px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-[#fff0de]/75 bg-[#5d3f2b] shadow-[0_10px_28px_rgba(35,24,17,0.25)]">
        <div className="text-center">
          <BrainCircuit className="mx-auto text-[#fff0de]" size={31} strokeWidth={1.7} />
          <span className="mt-1 block text-[11px] font-bold">AI</span>
        </div>
      </div>

      {nodes.map(({ label, Icon, position, delay }) => (
        <div
          key={label}
          className={`skill-network-node absolute z-10 flex size-[76px] flex-col items-center justify-center rounded-full border border-[#edc89f]/60 bg-[#6b4933]/90 text-center shadow-[0_8px_22px_rgba(35,24,17,0.18)] ${position}`}
          style={{ '--skill-node-delay': `${delay}ms` } as CSSProperties}
        >
          <Icon className="text-[#fff0de]" size={22} strokeWidth={1.7} />
          <span className="mt-1.5 text-[9px] font-medium leading-none text-[#fffaf3]">{label}</span>
        </div>
      ))}
    </div>
  )
}
