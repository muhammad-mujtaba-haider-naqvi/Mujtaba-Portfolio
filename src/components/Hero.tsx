import { ArrowRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import heroBackground from '../assets/hero/hero-background.png'
import mujtabaCutout from '../assets/hero/mujtaba-cutout.png'

// Replace these placeholders with your real details.
const portfolio = {
  emailUrl: '',
  githubUrl: 'https://github.com/muhammad-mujtaba-haider-naqvi',
  linkedinUrl: 'https://www.linkedin.com/in/syed-mujtaba72',
  whatsappUrl: 'https://wa.me/923214796270',
  resumeUrl: '/resume.pdf',
}

const stats = [
  { value: '03+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
]

const socials = [
  { label: 'GitHub', href: portfolio.githubUrl, Icon: FaGithub },
  { label: 'LinkedIn', href: portfolio.linkedinUrl, Icon: FaLinkedinIn },
  { label: 'Email', href: portfolio.emailUrl, Icon: Mail },
  { label: 'WhatsApp', href: portfolio.whatsappUrl, Icon: FaWhatsapp },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="hero relative min-h-[1400px] overflow-hidden bg-canvas md:h-[calc(100svh-78px)] md:min-h-0"
      aria-labelledby="hero-heading"
    >
      {/* Layer 1: the texture may crop, but is never distorted. */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />

      {/* Layer 2: height controls scale; auto width preserves natural proportions. */}
      <img
        src={mujtabaCutout}
        alt="Mujtaba"
        className="hero-person pointer-events-none absolute bottom-0 left-1/2 z-10 h-[40%] w-auto max-w-none -translate-x-1/2 object-contain md:left-auto md:right-[-5%] md:h-[72%] md:translate-x-0 lg:right-[8%] lg:h-full"
        decoding="async"
        fetchPriority="high"
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-[#eee9e1]/95 via-[#eee9e1]/55 to-transparent md:hidden" />

      {/* Layers 3–5: all interactive UI remains above the person. */}
      <div className="hero-stage relative z-30 mx-auto min-h-[1400px] max-w-[1250px] px-6 pb-10 pt-14 md:h-full md:min-h-0 md:px-8 md:py-0 xl:px-0">
        <div className="hero-copy relative z-10 max-w-[610px] md:absolute md:left-8 md:top-[18%] xl:left-0">
          <p className="hero-label mb-7 font-display text-[30px] font-semibold leading-none tracking-[0.01em] md:text-[34px]">
            <span className="text-ink">I&apos;m </span>
            <span className="text-[34px] font-bold text-[#5d3f2b] md:text-[38px]">Syed Mujtaba</span>
          </p>
          <h1
            id="hero-heading"
            className="hero-title font-serif text-[clamp(3rem,4.25vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.025em] text-accent"
          >
            <span className="block md:whitespace-nowrap">Computer Science &amp;</span>
            <span className="block md:whitespace-nowrap">Software Developer</span>
          </h1>
          <p className="hero-description mt-10 max-w-[440px] text-[17px] leading-[1.6] text-ink md:text-[18px]">
            Building practical software and exploring
            <br className="hidden sm:block" /> AI &amp; machine learning.
          </p>

          <div className="hero-actions mt-9 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <a
              href="#projects"
              className="hero-button inline-flex h-[62px] w-full items-center justify-center gap-3 bg-accent px-7 text-[14px] font-semibold text-white outline-none transition-colors duration-200 hover:bg-[#ad835a] focus-visible:ring-2 focus-visible:ring-ink sm:w-[195px] md:h-[66px]"
            >
              <ArrowRight size={17} strokeWidth={2.4} />
              View Projects
            </a>
            <a
              href={portfolio.resumeUrl}
              download
              className="hero-button inline-flex h-[62px] w-full items-center justify-center border border-accent bg-transparent px-7 text-[14px] font-semibold text-accent outline-none transition-colors duration-200 hover:bg-accent hover:text-ink focus-visible:ring-2 focus-visible:ring-ink sm:w-[195px] md:h-[66px]"
            >
              Download Resume
            </a>
          </div>
        </div>

        <aside className="hero-stats relative z-10 mt-14 flex max-w-[390px] items-start justify-between md:absolute md:right-8 md:top-[19%] md:mt-0 md:w-[150px] md:flex-col md:items-center xl:right-0" aria-label="Portfolio statistics">
          <img
            src="/syed-mujtaba-logo.png"
            alt="Syed Mujtaba logo"
            className="hidden size-[68px] rounded-full bg-black object-contain md:block"
            width="1254"
            height="1254"
            decoding="async"
          />
          {stats.map((stat, index) => (
            <div key={stat.label} className={`text-center ${index === 0 ? 'md:mt-7' : 'md:mt-11'}`}>
              <p className="font-serif text-[38px] font-medium leading-none text-ink">{stat.value}</p>
              <p className="mt-3 text-[13px] text-charcoal md:mt-5">{stat.label}</p>
            </div>
          ))}
        </aside>

        <div className="hero-socials relative z-40 mt-[400px] flex items-center justify-start gap-9 text-ink [&>a:first-child]:-ml-px md:absolute md:bottom-[60px] md:left-8 md:mt-0 md:gap-10 xl:left-0">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="outline-none transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent"
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon size={29} strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
