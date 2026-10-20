import { useCallback, useEffect, useRef, useState } from 'react'
import { posterFor } from '../data/site'
import VideoClip from './VideoClip'
import { PlayIcon, SoundIcon } from './Icons'

function timecode(seconds) {
  if (!Number.isFinite(seconds)) return '00:00'
  const total = Math.floor(seconds)
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`
}

/**
 * Un reel dentro de un teléfono (o de una pantalla, si `wide`). El sonido sólo
 * suena en el reel activo: la sección mantiene uno solo, así nunca se pisan
 * dos audios. Con el cursor encima y nada activo, se previsualiza sin sonido.
 */
export default function PhoneReel({
  src,
  label,
  clipKey,
  active,
  previewable,
  onToggle,
  onStop,
  wide = false,
}) {
  const [hovering, setHovering] = useState(false)
  const [elapsed, setElapsed] = useState({ time: 0, duration: 0 })
  // Si pausás con el cursor encima, no queremos que arranque de nuevo como previsualización.
  const [justPaused, setJustPaused] = useState(false)
  const ref = useRef(null)

  const previewing = previewable && hovering && !active && !justPaused
  const playing = active || previewing

  const onTimeUpdate = useCallback((time, duration) => setElapsed({ time, duration }), [])

  // Que no siga sonando algo que ya no se ve en pantalla.
  useEffect(() => {
    const node = ref.current
    if (!active || !node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) onStop()
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [active, onStop])

  return (
    <div ref={ref} className={wide ? 'device device--wide' : 'device'}>
      <div className="device__screen">
        <VideoClip
          src={src}
          poster={posterFor(src)}
          alt={label}
          fit={wide ? 'contain' : 'cover'}
          playing={playing}
          muted={!active}
          onTimeUpdate={active ? onTimeUpdate : undefined}
        />

        <button
          type="button"
          onClick={() => {
            setJustPaused(active)
            onToggle(clipKey)
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => {
            setHovering(false)
            setJustPaused(false)
          }}
          aria-pressed={active}
          aria-label={`${active ? 'Pausar' : 'Reproducir con sonido'}: ${label}`}
          className="group absolute inset-0 flex cursor-pointer items-center justify-center focus:outline-none"
        >
          {!active && (
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full bg-bone/90 text-claret shadow-lg transition-all duration-300 group-hover:scale-110 group-focus-visible:scale-110 sm:h-16 sm:w-16 ${
                previewing ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <PlayIcon className="ml-0.5 h-6 w-6 sm:h-7 sm:w-7" />
            </span>
          )}
          {active && (
            <span className="absolute bottom-[9%] flex items-center gap-1.5 rounded-full bg-ink/75 px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-bone uppercase opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <SoundIcon className="h-3 w-3" />
              Pausar
            </span>
          )}
        </button>

        {active && (
          <>
            <span className="pointer-events-none absolute top-[7%] right-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-semibold text-bone tabular-nums">
              <SoundIcon className="h-3 w-3" />
              {timecode(elapsed.time)}
            </span>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-bone/25">
              <span
                className="block h-full bg-bone transition-[width] duration-200 ease-linear"
                style={{
                  width: elapsed.duration ? `${(elapsed.time / elapsed.duration) * 100}%` : '0%',
                }}
              />
            </span>
          </>
        )}
      </div>

      {!wide && <span className="device__notch" aria-hidden="true" />}
    </div>
  )
}
