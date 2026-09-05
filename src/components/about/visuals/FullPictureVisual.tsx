import {
  BrainCircuit,
  Code2,
  Database,
  Monitor,
  Plug,
  type LucideIcon,
} from 'lucide-react'
import type { CSSProperties } from 'react'

type VisualProps = {
  isVisible: boolean
}

type NodeProps = {
  className: string
  delay: number
  detail: string
  Icon: LucideIcon
  label: string
}

function SystemNode({ className, delay, detail, Icon, label }: NodeProps) {
  return (
    <div
      className={`network-node absolute z-10 w-[76px] text-center ${className}`}
      style={{ '--node-delay': `${delay}ms` } as CSSProperties}
    >
      <span className="mx-auto grid size-11 place-items-center rounded-full border border-[#b98151]/55 bg-[#9a6338] text-[#fffaf3] shadow-[0_7px_18px_rgba(117,71,41,0.2)]">
        <Icon size={19} strokeWidth={1.8} />
      </span>
      <span className="mt-1.5 block text-[9px] font-bold leading-none text-ink">{label}</span>
      <span className="mt-1 block text-[8px] leading-none text-charcoal">{detail}</span>
    </div>
  )
}

export default function FullPictureVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual network-visual ${isVisible ? 'about-visual--active' : ''} relative h-[250px] w-full max-w-[360px]`} aria-hidden="true">
      <svg className="absolute inset-0 size-full" viewBox="0 0 360 250" fill="none">
        <path className="network-line" pathLength="1" d="M180 125 L180 42" />
        <path className="network-line" pathLength="1" d="M180 125 L55 115" />
        <path className="network-line" pathLength="1" d="M180 125 L305 115" />
        <path className="network-line" pathLength="1" d="M180 125 L100 211" />
        <path className="network-line" pathLength="1" d="M180 125 L260 211" />
        <circle cx="180" cy="125" r="92" stroke="#c2986d" strokeOpacity=".55" strokeDasharray="3 5" />
      </svg>

      <div className="network-center absolute left-1/2 top-1/2 z-20 grid size-[86px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#c2986d]/65 bg-[#eee7de]/95 text-center shadow-[0_10px_28px_rgba(117,71,41,0.14)]">
        <span className="text-[10px] font-bold leading-[1.05] text-ink">CONNECTED<br />SOLUTIONS</span>
      </div>

      <SystemNode className="left-1/2 top-0 -translate-x-1/2" delay={430} detail="React" Icon={Monitor} label="FRONTEND" />
      <SystemNode className="left-0 top-[88px]" delay={510} detail="MongoDB" Icon={Database} label="DATABASE" />
      <SystemNode className="right-0 top-[88px]" delay={590} detail="Node.js" Icon={Code2} label="BACKEND" />
      <SystemNode className="bottom-0 left-[16%]" delay={670} detail="REST" Icon={Plug} label="API" />
      <SystemNode className="bottom-0 right-[16%]" delay={750} detail="LLMs" Icon={BrainCircuit} label="AI" />
    </div>
  )
}
