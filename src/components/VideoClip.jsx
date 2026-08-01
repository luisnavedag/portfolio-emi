import { useEffect, useRef } from 'react'
import Frame from './Frame'

/**
 * Reproduce un clip. Mientras está quieto no baja un solo byte de video:
 * se ve el poster y el archivo se pide recién cuando hay que reproducir.
 * Si no hay `src`, cae al fotograma generado (misma API que Frame).
 */
export default function VideoClip({
  src,
  hue = 30,
  index = 0,
  alt = '',
  playing = false,
  muted = true,
  poster,
  fit = 'cover',
  preload = 'none',
  onTimeUpdate,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video || !src) return

    video.muted = muted

    if (playing) {
      // play() dispara la descarga por sí solo, incluso con preload="none".
      // Si el navegador bloquea el audio, al menos que se vea el video.
      video.play().catch(() => {
        video.muted = true
        video.play().catch(() => {})
      })
    } else {
      video.pause()
    }
  }, [src, playing, muted])

  useEffect(() => {
    const video = ref.current
    if (!video || !src || !onTimeUpdate) return

    const report = () => onTimeUpdate(video.currentTime, video.duration)
    video.addEventListener('timeupdate', report)
    return () => video.removeEventListener('timeupdate', report)
  }, [src, onTimeUpdate])

  if (!src) {
    return <Frame hue={hue} index={index} alt={alt} />
  }

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted={muted}
      loop
      playsInline
      preload={preload}
      className={`absolute inset-0 h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      aria-label={alt || undefined}
    />
  )
}
