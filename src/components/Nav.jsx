import { persona, sections } from '../data/site'

export default function Nav() {
  return (
    <header className="fixed top-0 right-0 left-0 z-40 border-b border-bone/8 bg-ink/80 backdrop-blur-md lg:left-24">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#inicio"
          className="font-display text-sm font-bold tracking-[-0.02em] text-bone"
        >
          {persona.name}
          <span className="ml-2 font-mono text-[10px] font-normal tracking-[0.12em] text-muted">
            {persona.initials}
          </span>
        </a>

        {/* Son seis secciones: abajo de md no entran y ya está el rail del pie. */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-6" aria-label="Navegación principal">
          {sections.slice(1).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="font-mono text-[10px] tracking-[0.12em] text-bone/65 uppercase transition-colors hover:text-amber"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
