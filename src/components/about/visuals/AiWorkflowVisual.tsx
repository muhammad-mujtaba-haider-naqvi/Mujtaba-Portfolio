import { BrainCircuit, Mail, Plug, Search, Workflow, type LucideIcon } from 'lucide-react'
import type { CSSProperties } from 'react'

type VisualProps = { isVisible: boolean }
type AgentNodeProps = { className: string; delay: number; Icon: LucideIcon }

function AgentNode({ className, delay, Icon }: AgentNodeProps) {
  return (
    <div className={`agent-node absolute z-10 grid size-[32px] place-items-center rounded-md border border-[#c2986d]/55 bg-[#684632]/50 text-center shadow-[0_3px_8px_rgba(0,0,0,0.2)] ${className}`} style={{ '--node-delay': `${delay}ms` } as CSSProperties}>
      <Icon className="text-[#edc89f]" size={11} strokeWidth={1.8} />
    </div>
  )
}

export default function AiWorkflowVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual agent-visual ${isVisible ? 'about-visual--active' : ''} relative shrink-0`} style={{ width: 144, height: 108 }} aria-hidden="true">
      <svg className="absolute inset-0 size-full" viewBox="0 0 144 108" fill="none">
        <path className="agent-line" pathLength="1" d="M72 54 C58 39 51 29 16 18 M72 54 C86 39 93 29 128 18 M72 54 C58 69 51 79 16 90 M72 54 C86 69 93 79 128 90" />
      </svg>
      <AgentNode className="left-0 top-0" delay={500} Icon={Search} />
      <AgentNode className="right-0 top-0" delay={590} Icon={Plug} />
      <AgentNode className="bottom-0 left-0" delay={680} Icon={Mail} />
      <AgentNode className="bottom-0 right-0" delay={770} Icon={Workflow} />
      <div className="agent-center absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"><div className="grid size-[36px] place-items-center rounded-full border-2 border-[#c2986d] bg-[#473225] shadow-[0_0_0_3px_rgba(194,152,109,0.12),0_5px_12px_rgba(0,0,0,0.28)]"><BrainCircuit className="text-[#efd0ad]" size={15} strokeWidth={1.7} /></div><span className="mt-1 text-[5px] font-bold tracking-[0.08em] text-[#fffaf3]">AI</span></div>
    </div>
  )
}
