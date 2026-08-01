import { useCallback, useEffect, useRef, useState } from 'react'
import { persona, contact, getReelItems, posterFor } from '../data/site'
import VideoClip from './VideoClip'
import Frame from './Frame'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const reel = getReelItems()

function timecode(index) {
  const totalFrames = index * 11
  const s = Math.floor(totalFrames / 24)
  const f = totalFrames % 24
  return `00:${String(s).padStart(2, '0')}:${String(f).padStart(2, '0')}`
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [touched, setTouched] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [inView, setInView] = useState(true)
  const stripRef = useRef(null)
  const monitorRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()
  const current = reel[index]

  // Fuera de pantalla el monitor no rota ni descarga: si no, mientras mirás
  // los trabajos el hero sigue bajando un clip nuevo cada dos segundos.
  useEffect(() => {
    const node = monitorRef.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const autoplaying = !touched && !reducedMotion && inView

  // Se reproduce solo hasta que la persona toma el control.
  useEffect(() => {
    if (!autoplaying) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % reel.length), 2800)
    return () => clearInterval(timer)
  }, [autoplaying])

  const setFromClientX = useCallback((clientX) => {
    const strip = stripRef.current
    if (!strip) return
    const { left, width } = strip.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (clientX - left) / width))
    setIndex(Math.min(reel.length - 1, Math.floor(ratio * reel.length)))
  }, [])

  const onPointerMove = (event) => {
    if (event.pointerType === 'mouse' && !dragging && event.buttons === 0) {
      setTouched(true)
      setFromClientX(event.clientX)
      return
    }
    if (dragging) {
      setTouched(true)
      setFromClientX(event.clientX)
    }
  }

  const onKeyDown = (event) => {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    event.preventDefault()
    setTouched(true)
    setIndex((i) => Math.min(reel.length - 1, Math.max(0, i + step)))
  }

  return (
    <section id="inicio" className="relative px-5 pt-28 pb-16 sm:px-8 sm:pt-36 lg:pt-40">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.62fr)] lg:gap-16">
          <div>
            <p
              className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-[0.16em] text-muted uppercase"
              style={{ animation: 'var(--animate-rise)', animationDelay: '80ms' }}
            >
              {persona.roles.map((role, i) => (
                <span key={role} className="flex items-center gap-3">
                  {i > 0 && <span className="text-bone/25">/</span>}
                  {role}
                </span>
              ))}
              <span className="text-bone/25">/</span>
              <span className="text-bone/50">{persona.location}</span>
            </p>

            <h1 className="font-display text-[clamp(2.7rem,8.6vw,5.9rem)] leading-[0.9] font-extrabold tracking-[-0.038em] text-balance">
              <span
                className="block"
                style={{ animation: 'var(--animate-rise)', animationDelay: '180ms' }}
              >
                {persona.headline[0]}
              </span>
              <span
                className="block"
                style={{ animation: 'var(--animate-rise)', animationDelay: '300ms' }}
              >
                hasta el <span className="text-amber">final.</span>
              </span>
            </h1>

            <p
              className="mt-8 max-w-xl text-[17px] leading-relaxed text-bone/70"
              style={{ animation: 'var(--animate-rise)', animationDelay: '420ms' }}
            >
              {persona.intro}
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-4"
              style={{ animation: 'var(--animate-rise)', animationDelay: '520ms' }}
            >
              <a
                href="#trabajos"
                className="rounded-full bg-bone px-6 py-3 font-mono text-[11px] tracking-[0.12em] text-ink uppercase transition-colors duration-300 hover:bg-amber"
              >
                Ver trabajos
              </a>
              <a
                href={contact.whatsappUrl}
                className="border-b border-bone/30 pb-1 font-mono text-[11px] tracking-[0.12em] text-bone/80 uppercase transition-colors duration-300 hover:border-amber hover:text-amber"
              >
                Pedir presupuesto
              </a>
            </div>
          </div>

          {/* Monitor de previsualización */}
          <div
            ref={monitorRef}
            className="relative mx-auto w-full max-w-[300px] lg:mx-0"
            style={{ animation: 'var(--animate-wipe)', animationDelay: '360ms' }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] border border-bone/12 bg-plum sm:aspect-[9/16]">
              <VideoClip
                key={current.src ?? `${current.work.id}-${index}`}
                src={current.src}
                poster={posterFor(current.src)}
                hue={current.work.hue}
                index={current.clipIndex}
                alt={`${current.work.title}, ${current.work.client}`}
                playing={autoplaying}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/25" />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2.5 font-mono text-[10px] tracking-[0.1em] text-bone/70">
                <span>{current.work.ratio}</span>
                <span>{timecode(index)}</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3.5">
                <p className="font-mono text-[10px] tracking-[0.14em] text-amber uppercase">
                  {current.work.client}
                </p>
                <p className="font-display text-lg leading-tight font-semibold text-bone">
                  {current.work.title}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrubber: recorre todas las piezas del portafolio */}
        <div className="mt-14 lg:mt-16">
          <div
            ref={stripRef}
            role="slider"
            tabIndex={0}
            aria-label="Recorrer el reel de trabajos"
            aria-valuemin={1}
            aria-valuemax={reel.length}
            aria-valuenow={index + 1}
            aria-valuetext={`${current.work.title}, ${current.work.client}`}
            onPointerMove={onPointerMove}
            onPointerDown={(e) => {
              setDragging(true)
              setTouched(true)
              setFromClientX(e.clientX)
            }}
            onPointerUp={() => setDragging(false)}
            onPointerLeave={() => setDragging(false)}
            onKeyDown={onKeyDown}
            className="group flex h-16 cursor-ew-resize touch-none gap-[3px] select-none sm:h-20"
          >
            {reel.map((item, i) => (
              <div
                key={`${item.work.id}-${item.clipIndex}-${i}`}
                className="relative flex-1 overflow-hidden rounded-[2px]"
                style={{
                  opacity: i === index ? 1 : 0.42,
                  transform: i === index ? 'scaleY(1)' : 'scaleY(0.78)',
                  transition: 'opacity .25s ease, transform .25s ease',
                }}
              >
                {/* Fotogramas, no videos: la tira son 12 miniaturas y no 12 descargas. */}
                <Frame
                  src={posterFor(item.src)}
                  hue={item.work.hue}
                  index={item.clipIndex}
                />
                {i === index && (
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-amber" />
                )}
              </div>
            ))}
          </div>

          <p
            className={`mt-3 font-mono text-[10px] tracking-[0.14em] text-muted transition-opacity duration-500 ${
              touched ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Arrastrá para recorrer el reel
          </p>
        </div>
      </div>
    </section>
  )
}
