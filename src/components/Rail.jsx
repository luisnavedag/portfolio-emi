import { useEffect, useState } from 'react'

const TOTAL_SECONDS = 192 // 03:12 de "duración" del portafolio

function timecode(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

/**
 * Elemento firma: el scroll de la página es la cabeza de reproducción.
 * Las marcas se ubican en la posición real de cada sección, así que el
 * playhead cae exactamente sobre la marca cuando llegás a esa sección.
 */
export default function Rail({ sections, progress, active }) {
  const [marks, setMarks] = useState([])

  useEffect(() => {
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max <= 0) return
      setMarks(
        sections.map((section) => {
          const node = document.getElementById(section.id)
          const top = node ? node.offsetTop : 0
          return Math.min(1, Math.max(0, top / max))
        }),
      )
    }

    measure()
    window.addEventListener('resize', measure)
    const timer = setTimeout(measure, 600) // después de que carguen las fuentes
    return () => {
      window.removeEventListener('resize', measure)
      clearTimeout(timer)
    }
  }, [sections])

  return (
    <>
    <nav
      aria-label="Secciones"
      className="pointer-events-none fixed top-0 left-6 z-50 hidden h-screen w-24 flex-col justify-center lg:flex xl:left-10"
    >
      <div className="relative h-[62vh]">
        <div className="absolute top-0 bottom-0 left-[7px] w-px bg-bone/15" />

        {/* Recorrido ya leído */}
        <div
          className="absolute left-[7px] top-0 w-px bg-amber/70"
          style={{ height: `${progress * 100}%` }}
        />

        {/* Marcas de sección */}
        {sections.map((section, i) => {
          const isActive = i === active
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="pointer-events-auto absolute flex -translate-y-1/2 items-center gap-3 py-1"
              style={{ top: `${(marks[i] ?? i / (sections.length - 1)) * 100}%` }}
            >
              <span
                className={`h-[7px] w-[7px] shrink-0 rounded-full border transition-colors duration-300 ${
                  isActive
                    ? 'border-amber bg-amber'
                    : 'border-bone/35 bg-ink hover:border-bone/70'
                }`}
              />
              <span
                className={`font-mono text-[10px] tracking-[0.14em] whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-bone' : 'text-muted/60'
                }`}
              >
                {section.tc}
              </span>
            </a>
          )
        })}

        {/* Cabeza de reproducción */}
        <div
          className="absolute -left-[3px] flex -translate-y-1/2 items-center"
          style={{ top: `${progress * 100}%` }}
        >
          <span className="block h-[2px] w-5 bg-amber" />
        </div>
      </div>

      <div className="mt-8 pl-[2px] font-mono text-[10px] leading-relaxed tracking-[0.14em] text-muted/70">
        <div className="text-bone/85">{timecode(progress * TOTAL_SECONDS)}</div>
        <div>{timecode(TOTAL_SECONDS)}</div>
      </div>
    </nav>

    {/* En pantallas chicas el mismo mecanismo baja al pie. */}
    <nav
      aria-label="Secciones"
      className="fixed bottom-0 left-0 z-50 w-full border-t border-bone/10 bg-ink/85 backdrop-blur-md lg:hidden"
    >
      <div className="h-[2px] w-full bg-bone/10">
        <div className="h-full bg-amber" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="flex items-center justify-between px-4 py-2.5">
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`font-mono text-[10px] tracking-[0.12em] transition-colors ${
              i === active ? 'text-amber' : 'text-muted/70'
            }`}
          >
            {section.tc}
          </a>
        ))}
      </div>
    </nav>
    </>
  )
}
