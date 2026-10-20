import Reveal from './Reveal'

export default function SectionHeader({ title, lead }) {
  return (
    <header className="mb-12 max-w-3xl sm:mb-16">
      <Reveal>
        <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.98] text-bone">
          {title}
        </h2>
        {lead && (
          <p className="mt-6 text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-bone/75">{lead}</p>
        )}
      </Reveal>
    </header>
  )
}
