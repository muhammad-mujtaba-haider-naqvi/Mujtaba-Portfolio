import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#education' },
  { label: "Let's Connect", href: '#contact', cta: true },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-[54px] bg-night md:h-[64px]">
      <nav
        className="site-container mx-auto flex h-full max-w-[1250px] items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-12"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="block size-11 shrink-0 overflow-hidden rounded-full bg-black outline-none transition-opacity duration-200 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent md:size-14"
          aria-label="Mujtaba — home"
        >
          <img
            src="/syed-mujtaba-logo.png"
            alt=""
            className="pointer-events-none size-full rounded-full object-contain"
            width="1254"
            height="1254"
            decoding="async"
          />
        </a>

        <div className="hidden items-center gap-[24px] md:flex lg:gap-[31px]">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                'cta' in item
                  ? 'group inline-flex h-10 items-center gap-2 rounded-full border border-accent bg-accent px-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white outline-none transition-colors duration-200 hover:border-[#ad835a] hover:bg-[#ad835a] hover:text-black focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-night lg:h-11 lg:px-6 lg:text-[12px]'
                  : 'text-[12px] font-semibold uppercase tracking-[0.12em] text-[#f4f1ec] outline-none transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent'
              }
            >
              {item.label}
              {'cta' in item && (
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" size={16} strokeWidth={1.8} aria-hidden="true" />
              )}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center text-white outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="absolute inset-x-0 top-full border-t border-white/10 bg-night px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-[1250px] flex-col">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  'cta' in item
                    ? 'group mt-4 inline-flex h-12 w-fit items-center gap-2 rounded-full border border-accent bg-accent px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-white outline-none transition-colors duration-200 hover:border-[#ad835a] hover:bg-[#ad835a] hover:text-black focus-visible:ring-2 focus-visible:ring-accent'
                    : 'border-b border-white/10 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white outline-none transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent'
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                {'cta' in item && (
                  <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" size={16} strokeWidth={1.8} aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
