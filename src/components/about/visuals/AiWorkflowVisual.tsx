import {
  BrainCircuit,
  Mail,
  Plug,
  Search,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import type { CSSProperties } from 'react'

type VisualProps = {
  isVisible: boolean
}

type AgentNodeProps = {
  className: string
  delay: number
  detail: string
  Icon: LucideIcon
  label: string
}

function AgentNode({ className, delay, detail, Icon, label }: AgentNodeProps) {
  return (
    <div
      className={`agent-node absolute z-10 w-[100px] rounded-xl border border-[#c2986d]/55 bg-[#684632]/50 px-2 py-2 text-center shadow-[0_8px_18px_rgba(0,0,0,0.2)] ${className}`}
      style={{ '--node-delay': `${delay}ms` } as CSSProperties}
    >
      <Icon className="mx-auto text-[#edc89f]" size={18} strokeWidth={1.8} />
      <span className="mt-1 block text-[9px] font-bold leading-none text-[#fffaf3]">{label}</span>
      <span className="mt-1 block text-[8px] leading-[1.1] text-[#efd0ad]">{detail}</span>
    </div>
  )
}

export default function AiWorkflowVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual agent-visual ${isVisible ? 'about-visual--active' : ''} relative h-[250px] w-full max-w-[370px]`} aria-hidden="true">
      <svg className="absolute inset-0 size-full" viewBox="0 0 370 250" fill="none">
        <path className="agent-line" pathLength="1" d="M185 125 C150 90 132 65 82 44" />
        <path className="agent-line" pathLength="1" d="M185 125 C220 90 238 65 288 44" />
        <path className="agent-line" pathLength="1" d="M185 125 C150 160 132 185 82 206" />
        <path className="agent-line" pathLength="1" d="M185 125 C220 160 238 185 288 206" />
      </svg>

      <AgentNode className="left-0 top-0" delay={500} detail="Web insights" Icon={Search} label="RESEARCH" />
      <AgentNode className="right-0 top-0" delay={590} detail="Tools & services" Icon={Plug} label="API" />
      <AgentNode className="bottom-0 left-0" delay={680} detail="Automated outreach" Icon={Mail} label="EMAIL" />
      <AgentNode className="bottom-0 right-0" delay={770} detail="Workflows & agents" Icon={Workflow} label="AUTOMATION" />

      <div className="agent-center absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="grid size-[78px] place-items-center rounded-full border-2 border-[#c2986d] bg-[#473225] shadow-[0_0_0_7px_rgba(194,152,109,0.12),0_12px_28px_rgba(0,0,0,0.28)]">
          <BrainCircuit className="text-[#efd0ad]" size={31} strokeWidth={1.7} />
        </div>
        <span className="mt-2 text-[10px] font-bold tracking-[0.08em] text-[#fffaf3]">AI</span>
        <span className="mt-0.5 text-[8px] font-semibold tracking-[0.1em] text-[#e3bb8c]">ORCHESTRATOR</span>
      </div>
    </div>
  )
}
