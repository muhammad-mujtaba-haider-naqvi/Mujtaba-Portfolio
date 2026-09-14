import { BrainCircuit, Mail, Plug, Search, Workflow, type LucideIcon } from 'lucide-react'
import type { CSSProperties } from 'react'

type VisualProps = { isVisible: boolean }
type AgentNodeProps = { className: string; delay: number; Icon: LucideIcon }

function AgentNode({ className, delay, Icon }: AgentNodeProps) {
  return (
    <div className={`agent-node agent-node--enhanced ${className}`} style={{ '--node-delay': `${delay}ms` } as CSSProperties}>
      <Icon size={15} strokeWidth={1.8} />
    </div>
  )
}

export default function AiWorkflowVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual agent-visual agent-visual--enhanced ${isVisible ? 'about-visual--active' : ''}`} aria-hidden="true">
      <svg className="agent-visual__canvas" viewBox="0 0 210 160" fill="none">
        <path className="agent-line" pathLength="1" d="M105 80C80 54 66 43 25 24M105 80C130 54 144 43 185 24M105 80C80 106 66 117 25 136M105 80C130 106 144 117 185 136" />
        <circle className="agent-orbit" cx="105" cy="80" r="50" />
      </svg>
      <span className="agent-packet agent-packet--one" />
      <span className="agent-packet agent-packet--two" />
      <AgentNode className="agent-node--north-west" delay={500} Icon={Search} />
      <AgentNode className="agent-node--north-east" delay={590} Icon={Plug} />
      <AgentNode className="agent-node--south-west" delay={680} Icon={Mail} />
      <AgentNode className="agent-node--south-east" delay={770} Icon={Workflow} />
      <div className="agent-center agent-center--enhanced">
        <div><BrainCircuit size={20} strokeWidth={1.7} /></div>
        <span>AI</span>
      </div>
    </div>
  )
}
