import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { works, posterFor, tcOf } from '../data/site'
import VideoClip from './VideoClip'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

/** Se filtra por formato porque el formato es la decisión real de cada pieza. */
const filters = [
  { id: 'todo', label: 'Todo' },
  { id: '9:16', label: 'Vertical 9:16' },
  { id: '4:5', label: 'Cuadrado 4:5' },
  { id: '16:9', label: 'Horizontal 16:9' },
]

function clipsOf(work) {
  return work.videos?.length ? work.videos : work.video ? [work.video] : []
}

function timecode(seconds) {
  if (!Number.isFinite(seconds)) return '00:00'
  const total = Math.floor(seconds)
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M7 3 4 5.5H2v5h2L7 13V3Z" strokeLinejoin="round" />
      <path d="M9.8 5.6a3.2 3.2 0 0 1 0 4.8M11.8 3.6a6 6 0 0 1 0 8.8" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Un clip, una card. El sonido sólo suena en el clip activo: la sección
 * mantiene un único activo, así nunca se pisan dos audios.
 */
function ClipCard({ work, src, clipIndex, total, clipKey, active, previewable, onToggle, onStop }) {
  const [hovering, setHovering] = useState(false)
  const [elapsed, setElapsed] = useState({ time: 0, duration: 0 })
  // Si pausás con el cursor encima, no queremos que arranque de nuevo como previsualización.
  const [justPaused, setJustPaused] = useState(false)
  const cardRef = useRef(null)

  const previewing = previewable && hovering && !active && !justPaused
  const playing = active || previewing
  const label = total > 1 ? `pieza ${clipIndex + 1} de ${total}` : 'pieza única'

  const onTimeUpdate = useCallback((time, duration) => setElapsed({ time, duration }), [])

  // Que no siga sonando algo que ya no se ve en pantalla.
  useEffect(() => {
    const node = cardRef.current
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
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-[3px] border bg-plum transition-colors duration-300 ${
        active ? 'border-amber/60' : 'border-bone/10'
      }`}
      style={{ aspectRatio: work.ratio.replace(':', ' / ') }}
    >
      <VideoClip
        src={src}
        poster={posterFor(src)}
        hue={work.hue}
        index={clipIndex}
        alt={`${work.title} para ${work.client}, ${label}`}
        fit="contain"
        playing={playing}
        muted={!active}
        onTimeUpdate={active ? onTimeUpdate : undefined}
      />

      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20 transition-opacity duration-300 ${
          active ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-2.5 py-2 font-mono text-[9px] tracking-[0.1em] text-bone/75">
        <span>{total > 1 ? `${clipIndex + 1}/${total}` : work.ratio}</span>
        <span className={active ? 'text-amber' : undefined}>
          {active ? timecode(elapsed.time) : work.runtime}
        </span>
      </div>

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
        aria-label={`${active ? 'Pausar' : 'Reproducir con sonido'}: ${work.title}, ${work.client}, ${label}`}
        className="group/play absolute inset-0 flex cursor-pointer items-end justify-center pb-3 focus:outline-none"
      >
        <span
          className={`flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1 font-mono text-[9px] tracking-[0.12em] text-bone/90 uppercase backdrop-blur-sm transition-opacity duration-300 ${
            active
              ? 'opacity-100'
              : 'opacity-0 group-hover/play:opacity-100 group-focus-visible/play:opacity-100'
          }`}
        >
          {active && <SoundIcon />}
          {active ? 'Pausar' : 'Reproducir'}
        </span>
      </button>

      {active && (
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-bone/20">
          <span
            className="block h-full bg-amber transition-[width] duration-200 ease-linear"
            style={{
              width: elapsed.duration ? `${(elapsed.time / elapsed.duration) * 100}%` : '0%',
            }}
          />
        </span>
      )}
    </div>
  )
}

function WorkGroup({ work, activeKey, onToggle, onStop }) {
  const clips = clipsOf(work)
  const vertical = work.ratio === '9:16'

  return (
    <article className="border-t border-bone/10 pt-8">
      <div className="grid gap-7 lg:grid-cols-[minmax(0,265px)_minmax(0,1fr)] lg:gap-12">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-mono text-[10px] tracking-[0.14em] text-amber uppercase">
              {work.client}
            </p>
            <p className="font-mono text-[10px] tracking-[0.1em] text-muted">{work.year}</p>
          </div>
          <h3 className="mt-1.5 font-display text-[22px] leading-tight font-semibold tracking-[-0.015em] text-bone">
            {work.title}
          </h3>
          <p className="mt-2.5 text-[14px] leading-relaxed text-bone/60">{work.note}</p>
          <div className="mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-bone/10 pt-3 font-mono text-[10px] tracking-[0.1em] text-muted">
            <span>{work.role}</span>
            <span className="text-bone/20">·</span>
            <span className="text-bone/70">{work.metric}</span>
          </div>
        </div>

        <div
          className={`grid gap-3 sm:gap-4 ${
            vertical ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'
          }`}
        >
          {clips.map((src, i) => {
            const key = `${work.id}-${i}`
            return (
              <ClipCard
                key={key}
                work={work}
                src={src}
                clipIndex={i}
                total={clips.length}
                clipKey={key}
                active={activeKey === key}
                previewable={activeKey === null}
                onToggle={onToggle}
                onStop={onStop}
              />
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  const [filter, setFilter] = useState('todo')
  const [activeKey, setActiveKey] = useState(null)

  const visible = useMemo(
    () => (filter === 'todo' ? works : works.filter((w) => w.ratio === filter)),
    [filter],
  )

  const count = (id) => (id === 'todo' ? works.length : works.filter((w) => w.ratio === id).length)

  const onToggle = useCallback((key) => {
    setActiveKey((prev) => (prev === key ? null : key))
  }, [])

  const onStop = useCallback(() => setActiveKey(null), [])

  return (
    <section id="trabajos" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          tc={tcOf('trabajos')}
          label="Trabajos"
          title="Lo que salió al aire."
          lead="Están todas las piezas, una por una. Hacé clic o tocá cualquiera para verla con sonido: suena una sola a la vez."
        >
          <div className="mt-9 flex flex-wrap gap-2">
            {filters.map((item) => {
              const isActive = filter === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setFilter(item.id)
                    setActiveKey(null)
                  }}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-300 ${
                    isActive
                      ? 'border-amber bg-amber text-ink'
                      : 'border-bone/20 text-bone/70 hover:border-bone/50 hover:text-bone'
                  }`}
                >
                  {item.label}
                  <span className={isActive ? 'ml-2 text-ink/55' : 'ml-2 text-muted'}>
                    {count(item.id)}
                  </span>
                </button>
              )
            })}
          </div>
        </SectionHeader>

        <div className="space-y-14 sm:space-y-16">
          {visible.map((work, i) => (
            <Reveal key={work.id} delay={Math.min(i, 4) * 70}>
              <WorkGroup
                work={work}
                activeKey={activeKey}
                onToggle={onToggle}
                onStop={onStop}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
