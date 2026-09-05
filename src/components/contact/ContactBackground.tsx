export default function ContactBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(132,91,66,0.22),transparent_31%),radial-gradient(circle_at_87%_68%,rgba(117,71,41,0.17),transparent_35%),linear-gradient(135deg,#171310_0%,#100e0c_58%,#17120f_100%)]" />
      <div className="contact-arc absolute -left-[180px] -top-[210px] size-[430px] rounded-full border border-[#ad835a]/40 sm:-left-[140px]" />
      <div className="contact-arc absolute -right-[230px] -top-[280px] hidden size-[630px] rounded-full border border-[#ad835a]/30 md:block" />
      <div className="contact-arc absolute -bottom-[250px] -left-[260px] hidden size-[420px] rounded-full border border-[#c2986d]/35 sm:block" />

      <div className="absolute right-12 top-14 hidden text-[9px] font-medium uppercase leading-[1.9] tracking-[0.24em] text-[#ad835a]/65 xl:block">
        New Opportunities<br />Great Conversations<br />Bigger Ideas
      </div>
    </div>
  )
}
