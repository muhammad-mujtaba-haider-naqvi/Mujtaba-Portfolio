import { FileText, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import portrait from '../../assets/contact/mujtaba-portrait-square.png'

const profileLinks = {
  github: 'https://github.com/muhammad-mujtaba-haider-naqvi',
  linkedin: 'https://www.linkedin.com/in/syed-mujtaba72',
  resume: '/resume.pdf',
}

const socialClassName =
  'grid size-12 place-items-center rounded-full border border-[#9a6338]/15 bg-[#e4d8ca] text-[#211b16] outline-none transition duration-200 hover:-translate-y-px hover:border-[#9a6338]/45 hover:bg-[#c2986d] focus-visible:ring-2 focus-visible:ring-[#9a6338] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eee7de]'

export default function ProfileCard() {
  return (
    <aside className="contact-profile order-2 rounded-[26px] bg-[#eee7de] p-5 text-ink shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:min-h-[790px] xl:min-h-[815px]">
      <div className="relative aspect-[1/1.03] overflow-hidden rounded-[20px] bg-[#d8cdc1]">
        <img
          src={portrait}
          alt=""
          className="absolute inset-0 size-full scale-110 object-cover blur-2xl"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[#171310]/20" aria-hidden="true" />
        <img
          src={portrait}
          alt="Mujtaba"
          className="relative z-10 size-full object-contain"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <div className="absolute left-6 top-6 z-20 text-[10px] font-semibold uppercase leading-[1.9] tracking-[0.34em] text-[#765039]" aria-hidden="true">
          Code<br />Ideas<br />Impact
          <span className="mt-2 block h-px w-5 bg-[#9a6338]/60" />
        </div>
      </div>

      <div className="px-1 pb-1 pt-7 sm:px-2">
        <h3 className="font-serif text-[48px] font-semibold leading-none tracking-[-0.03em] text-[#211b16] sm:text-[54px]">
          Mujtaba
        </h3>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#9a6338] sm:text-[12px]">
          Software Developer
        </p>
        <p className="mt-6 max-w-[340px] text-[15px] leading-[1.55] text-charcoal sm:text-[16px]">
          I build modern, scalable software solutions<br className="hidden xl:block" /> that turn ideas into real impact.
        </p>
        <span className="mt-6 block h-px w-20 bg-[#c2986d]/70" aria-hidden="true" />

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a href={profileLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" className={socialClassName}>
            <FaGithub size={20} />
          </a>
          <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" className={socialClassName}>
            <FaLinkedinIn size={19} />
          </a>
          <a href="mailto:smujtabahaider6@gmail.com" aria-label="Email me" className={socialClassName}>
            <Mail size={20} strokeWidth={2} />
          </a>
          <a href={profileLinks.resume} download aria-label="Download my resume" className={socialClassName}>
            <FileText size={20} strokeWidth={2} />
          </a>
        </div>

        <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.32em] text-[#765039]">
          Let&apos;s Stay in Touch
        </p>
      </div>
    </aside>
  )
}
