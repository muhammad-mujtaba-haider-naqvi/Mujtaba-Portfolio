import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact Me', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-50 h-[64px] bg-night md:h-[78px]">
      <nav
        className="site-container mx-auto flex h-full max-w-[1250px] items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-12"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="font-serif text-[30px] font-semibold leading-none text-accent outline-none transition-colors duration-200 hover:text-white focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Mujtaba — home"
        >
          &lt;M /&gt;
        </a>

        <div className="hidden items-center gap-[31px] md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#f4f1ec] outline-none transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
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
                className="border-b border-white/10 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
