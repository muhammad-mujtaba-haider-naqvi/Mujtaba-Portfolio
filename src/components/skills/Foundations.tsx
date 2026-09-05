import { BrainCircuit, Laptop, Settings } from 'lucide-react'

const foundationGroups = [
  {
    title: 'Core Computer Science',
    Icon: Laptop,
    items: [
      'Programming Fundamentals',
      'OOP',
      'DSA',
      'DBMS',
      'Algorithm Analysis',
      'Information Security',
    ],
  },
  {
    title: 'AI, Data & Intelligence',
    Icon: BrainCircuit,
    items: [
      'Artificial Intelligence',
      'Data Science',
      'Deep Learning',
      'Pattern Recognition',
      'Digital Image Processing',
    ],
  },
  {
    title: 'Engineering & Emerging Practices',
    Icon: Settings,
    items: ['DevOps', 'Prompt Engineering'],
  },
]

export default function Foundations() {
  return (
    <div className="mx-auto mt-24 max-w-[1540px] px-6 sm:px-8 lg:mt-28 lg:px-10 xl:px-12">
      <div className="h-px bg-[#9a6338]/35" aria-hidden="true" />

      <div className="mt-8 flex items-center justify-center gap-5 sm:gap-8">
        <span className="hidden h-px w-20 bg-[#9a6338]/55 sm:block" aria-hidden="true" />
        <h3
          id="foundations-heading"
          className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#765039] sm:text-[13px] lg:text-[15px]"
        >
          Computer Science Foundations
        </h3>
        <span className="hidden h-px w-20 bg-[#9a6338]/55 sm:block" aria-hidden="true" />
      </div>

      <div
        className="mt-10 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-0 md:gap-y-16 lg:grid-cols-[1.15fr_1.15fr_0.9fr] lg:gap-0"
        aria-labelledby="foundations-heading"
      >
        {foundationGroups.map(({ title, Icon, items }, index) => (
          <section
            key={title}
            className={`px-2 text-center sm:px-5 lg:min-h-[225px] lg:px-8 xl:px-10 ${
              index === 1 ? 'md:border-l md:border-[#9a6338]/30' : ''
            } ${
              index === 2
                ? 'md:col-span-2 lg:col-span-1 lg:border-l lg:border-[#9a6338]/30'
                : ''
            }`}
            aria-labelledby={`foundation-group-${index}`}
          >
            <div className="mx-auto grid size-14 place-items-center rounded-full border border-[#9a6338]/55 text-[#855b38] shadow-[0_6px_18px_rgba(117,71,41,0.06)]">
              <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
            </div>
            <h4
              id={`foundation-group-${index}`}
              className="mt-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#765039] sm:text-[11px]"
            >
              {title}
            </h4>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {items.map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-[#9a6338]/50 bg-[#eee7de]/40 px-5 py-2.5 text-[12px] leading-none text-charcoal transition duration-200 hover:-translate-y-px hover:border-[#9a6338]/80 hover:bg-[#e3d4c5]/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
