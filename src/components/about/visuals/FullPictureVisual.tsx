import { BrainCircuit, Code2, Database, Monitor, Plug, type LucideIcon } from 'lucide-react'
import type { CSSProperties } from 'react'

type VisualProps = { isVisible: boolean }
type NodeProps = { className: string; delay: number; Icon: LucideIcon }

function SystemNode({ className, delay, Icon }: NodeProps) {
  return (
    <div className={`network-node absolute z-10 w-[34px] text-center ${className}`} style={{ '--node-delay': `${delay}ms` } as CSSProperties}>
      <span className="mx-auto grid size-[21px] place-items-center rounded-full border border-[#b98151]/55 bg-[#9a6338] text-[#fffaf3] shadow-[0_3px_8px_rgba(117,71,41,0.2)]"><Icon size={9} strokeWidth={1.8} /></span>
    </div>
  )
}

export default function FullPictureVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual network-visual ${isVisible ? 'about-visual--active' : ''} relative shrink-0`} style={{ width: 144, height: 108 }} aria-hidden="true">
      <svg className="absolute inset-0 size-full" viewBox="0 0 144 108" fill="none">
        <path className="network-line" pathLength="1" d="M72 54 L72 18 M72 54 L19 48 M72 54 L125 48 M72 54 L40 93 M72 54 L104 93" />
        <circle cx="72" cy="54" r="40" stroke="#c2986d" strokeOpacity=".55" strokeDasharray="3 5" />
      </svg>
      <div className="network-center absolute left-1/2 top-1/2 z-20 grid size-[40px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#c2986d]/65 bg-[#eee7de]/95 text-center shadow-[0_5px_12px_rgba(117,71,41,0.14)]"><span className="size-2 rounded-full bg-[#9a6338]" /></div>
      <SystemNode className="left-1/2 top-0 -translate-x-1/2" delay={430} Icon={Monitor} />
      <SystemNode className="left-0 top-[38px]" delay={510} Icon={Database} />
      <SystemNode className="right-0 top-[38px]" delay={590} Icon={Code2} />
      <SystemNode className="bottom-0 left-[13%]" delay={670} Icon={Plug} />
      <SystemNode className="bottom-0 right-[13%]" delay={750} Icon={BrainCircuit} />
    </div>
  )
}
