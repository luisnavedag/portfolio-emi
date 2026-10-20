import { persona, sections } from '../data/site'

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-11 border-b border-bone/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="font-display text-[17px] leading-none text-bone">
          {persona.shortName}
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-9" aria-label="Navegación principal">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-[11px] font-semibold tracking-[0.14em] text-bone/70 uppercase transition-colors hover:text-bone"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="rounded-full bg-bone px-4 py-1.5 text-[10px] font-bold tracking-[0.14em] text-claret uppercase md:hidden"
        >
          Hablemos
        </a>
      </div>
    </header>
  )
}
