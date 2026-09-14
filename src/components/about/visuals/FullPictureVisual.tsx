import { BrainCircuit, Code2, Database, Monitor, Plug, type LucideIcon } from 'lucide-react'
import type { CSSProperties } from 'react'

type VisualProps = { isVisible: boolean }
type NodeProps = { className: string; delay: number; Icon: LucideIcon }

function SystemNode({ className, delay, Icon }: NodeProps) {
  return (
    <div className={`network-node network-node--enhanced ${className}`} style={{ '--node-delay': `${delay}ms` } as CSSProperties}>
      <span><Icon size={14} strokeWidth={1.8} /></span>
    </div>
  )
}

export default function FullPictureVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual network-visual network-visual--enhanced ${isVisible ? 'about-visual--active' : ''}`} aria-hidden="true">
      <svg className="network-visual__canvas" viewBox="0 0 190 150" fill="none">
        <path className="network-line" pathLength="1" d="M95 75L95 25M95 75L26 66M95 75L164 66M95 75L51 130M95 75L139 130" />
        <circle className="network-orbit" cx="95" cy="75" r="56" />
        <circle className="network-orbit network-orbit--inner" cx="95" cy="75" r="37" />
      </svg>
      <div className="network-center network-center--enhanced"><span /><i /></div>
      <SystemNode className="network-node--north" delay={430} Icon={Monitor} />
      <SystemNode className="network-node--west" delay={510} Icon={Database} />
      <SystemNode className="network-node--east" delay={590} Icon={Code2} />
      <SystemNode className="network-node--south-west" delay={670} Icon={Plug} />
      <SystemNode className="network-node--south-east" delay={750} Icon={BrainCircuit} />
    </div>
  )
}
