import { Code2, Database, Monitor } from 'lucide-react'

type VisualProps = {
  isVisible: boolean
}

const layers = [
  { label: 'UI / FRONTEND', detail: 'React', Icon: Monitor },
  { label: 'API LAYER', detail: 'Node.js, Express', Icon: Code2 },
  { label: 'DATABASE', detail: 'MongoDB', Icon: Database },
]

export default function BuildVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual build-visual ${isVisible ? 'about-visual--active' : ''} relative h-[250px] w-full max-w-[360px]`} aria-hidden="true">
      {layers.map(({ label, detail, Icon }, index) => (
        <div
          key={label}
          className={`build-step absolute left-0 flex w-full items-center ${index === 0 ? 'top-0' : index === 1 ? 'top-[87px]' : 'top-[174px]'}`}
        >
          <div className="build-layer flex h-[66px] w-[54%] items-center gap-3 rounded-xl border border-[#d4aa7c]/55 bg-[#211b16]/42 px-4 shadow-[0_10px_24px_rgba(22,16,12,0.22)]">
            <Icon className="shrink-0 text-[#d8aa76]" size={25} strokeWidth={1.8} />
            <span className="h-px flex-1 bg-[#d8aa76]/45" />
          </div>

          <span className="h-px w-7 bg-[#d8aa76]/80" />
          <span className="size-1.5 shrink-0 rounded-full bg-[#d8aa76]" />

          <div className="ml-3 min-w-0">
            <p className="text-[10px] font-bold leading-tight text-[#fffaf3] xl:text-[11px]">{label}</p>
            <p className="mt-0.5 text-[9px] leading-tight text-[#efd0ad] xl:text-[10px]">{detail}</p>
          </div>

          {index < layers.length - 1 && (
            <span className="build-connector absolute left-[27%] top-[66px] h-[21px] w-px bg-[#efd0ad]/80">
              <span className="absolute -left-[2px] top-[8px] size-[5px] rounded-full bg-[#fff4e6]" />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
