import Reveal from './Reveal'

export default function SectionHeader({ tc, label, title, lead, children }) {
  return (
    <header className="mb-14 max-w-2xl sm:mb-20">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.16em] text-amber uppercase">{tc}</p>
        <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">{label}</p>
        <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-bone">
          {title}
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-bone/65">{lead}</p>
      </Reveal>
      {children}
    </header>
  )
}
