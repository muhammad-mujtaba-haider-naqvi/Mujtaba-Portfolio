import { ArrowRight, ArrowUp, Mail } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#education' },
]

const resourceLinks = [
  { label: 'Resume', href: '/resume.pdf', download: true },
  {
    label: 'GitHub',
    href: 'https://github.com/muhammad-mujtaba-haider-naqvi',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/syed-mujtaba72',
    external: true,
  },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/syed-mujtaba72',
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/muhammad-mujtaba-haider-naqvi',
    Icon: FaGithub,
    external: true,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/923214796270',
    Icon: FaWhatsapp,
    external: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mujtabahaider.72/',
    Icon: FaInstagram,
    external: true,
  },
]

const columnLinkClassName =
  'w-fit text-[15px] tracking-[0.03em] text-[#c8c4bf] outline-none transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent'

function FooterHeading({ children }: { children: string }) {
  return (
    <div>
      <h3 className="font-serif text-[23px] font-medium tracking-[0.08em] text-[#f4f1ec]">
        {children}
      </h3>
      <span className="mt-4 block h-px w-12 bg-accent" aria-hidden="true" />
    </div>
  )
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="relative isolate overflow-hidden bg-night text-[#f4f1ec]">
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-80"
        style={{
          background:
            'radial-gradient(circle at 15% 28%, rgba(255,255,255,0.025), transparent 30%), radial-gradient(circle at 78% 68%, rgba(194,152,109,0.025), transparent 36%)',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-[205px] -top-[235px] -z-10 size-[520px] rounded-full border border-accent/70" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-185px] top-[355px] -z-10 size-[760px] rounded-full border border-accent/15" aria-hidden="true" />
      <span className="pointer-events-none absolute right-[2%] top-[95px] -z-10 hidden font-serif text-[270px] font-medium leading-none tracking-[-0.13em] text-white/[0.035] lg:block" aria-hidden="true">
        SM
      </span>

      <div className="pt-20 sm:pt-24 lg:pt-[120px]">
        <div className="h-px bg-white/25" aria-hidden="true" />

        <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1360px] gap-14 py-16 sm:w-[calc(100%-64px)] sm:py-20 md:grid-cols-2 md:gap-x-16 md:gap-y-20 xl:grid-cols-[1.45fr_0.70fr_0.70fr_1.40fr] xl:gap-[45px] xl:py-[84px]">
          <section aria-label="Syed Mujtaba">
            <div className="grid size-32 place-items-center overflow-hidden rounded-full bg-black">
              <img
                src="/syed-mujtaba-logo.png"
                alt="Syed Mujtaba logo"
                className="size-full rounded-full object-contain"
                width="1254"
                height="1254"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h2 className="mt-4 font-serif text-[24px] font-semibold uppercase tracking-[0.22em] text-[#f4f1ec]">
              Syed Mujtaba
            </h2>
            <p className="mt-3 max-w-[355px] text-[16px] leading-[1.75] tracking-[0.06em] text-[#bdb8b2]">
              Building ideas into meaningful
              <br className="hidden 2xl:block" /> digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-14 place-items-center rounded-full border border-white/45 text-[#f4f1ec] outline-none transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>

          <nav className="xl:pt-5" aria-label="Quick links">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-7 space-y-4">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={columnLinkClassName}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="xl:pt-5" aria-label="Resources">
            <FooterHeading>Resources</FooterHeading>
            <ul className="mt-7 space-y-4">
              {resourceLinks.map(({ label, href, external, download }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={columnLinkClassName}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...(download ? { download: true } : {})}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="xl:pt-5" aria-labelledby="footer-contact-heading">
            <div>
              <h3 id="footer-contact-heading" className="font-serif text-[23px] font-medium tracking-[0.08em] text-[#f4f1ec]">
                Get in Touch
              </h3>
              <span className="mt-4 block h-px w-12 bg-accent" aria-hidden="true" />
            </div>
            <p className="mt-8 max-w-[360px] text-[16px] leading-[1.8] tracking-[0.045em] text-[#c8c4bf]">
              Open to opportunities, collaborations,
              <br className="hidden 2xl:block" /> and interesting conversations.
            </p>
            <a
              href="#contact"
              className="group mt-8 flex h-[76px] w-full max-w-[300px] items-center justify-center gap-5 rounded-xl border border-accent text-[#f4f1ec] outline-none transition-colors duration-200 hover:bg-accent hover:text-night focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-night"
            >
              <Mail size={28} strokeWidth={1.7} aria-hidden="true" />
              <span className="font-serif text-[20px] font-medium tracking-[0.06em]">Let&apos;s Connect</span>
              <ArrowRight className="footer-link-arrow transition-transform duration-200 group-hover:translate-x-1" size={23} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </section>
        </div>

        <div className="h-px bg-white/25" aria-hidden="true" />

        <div className="mx-auto flex w-[calc(100%-48px)] max-w-[1360px] flex-col gap-8 py-12 sm:w-[calc(100%-64px)] md:flex-row md:items-center md:justify-between md:gap-6 lg:pb-[114px] lg:pt-8">
          <p className="text-[13px] tracking-[0.08em] text-[#bdb8b2]">
            © 2026 Syed Mujtaba. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group grid size-12 shrink-0 place-items-center rounded-full border border-white/50 text-[#f4f1ec] outline-none transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Back to top"
          >
            <ArrowUp className="footer-top-arrow transition-transform duration-200 group-hover:-translate-y-0.5" size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
