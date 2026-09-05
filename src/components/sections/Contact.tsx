import ContactBackground from '../contact/ContactBackground'
import ContactForm from '../contact/ContactForm'
import ProfileCard from '../contact/ProfileCard'

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section relative isolate min-h-[820px] overflow-hidden bg-[#14110f] px-5 py-14 text-[#f5efe7] sm:px-8 sm:py-16 lg:px-10 lg:py-14 xl:px-12"
      aria-labelledby="contact-heading"
    >
      <ContactBackground />

      <div className="relative z-10 mx-auto grid max-w-[1540px] grid-cols-1 gap-y-12 lg:grid-cols-[minmax(350px,0.335fr)_minmax(0,0.665fr)] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-0 xl:grid-cols-[440px_minmax(0,1fr)] xl:gap-x-16">
        <header className="contact-content order-1 lg:col-start-2 lg:row-start-1">
          <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c2986d] sm:text-[11px]" aria-hidden="true">
            <span className="h-px w-10 bg-[#c2986d]/65 sm:w-14" />
            Get in Touch
          </div>

          <h2
            id="contact-heading"
            className="mt-7 font-serif text-[clamp(2.75rem,11.5vw,3.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.035em] sm:text-[clamp(3.5rem,8.5vw,4.4rem)] lg:text-[clamp(3.6rem,4.5vw,4.6rem)] 2xl:text-[clamp(4.4rem,5.5vw,6.2rem)]"
          >
            <span className="block text-[#f5efe7]">Let&apos;s Connect</span>
            <span className="mt-3 block h-[0.9em]" aria-hidden="true" />
          </h2>

          <p className="mt-7 max-w-[790px] text-[16px] leading-[1.55] text-[#c8beb4] sm:text-[18px] lg:text-[17px] xl:text-[19px]">
            Have a project in mind, a question, or just want to say hi?
            <span className="hidden sm:inline"><br /></span> I&apos;d love to hear from you. Let&apos;s create something amazing together.
          </p>
        </header>

        <ProfileCard />

        <div className="contact-content order-3 lg:col-start-2 lg:row-start-2 lg:mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
