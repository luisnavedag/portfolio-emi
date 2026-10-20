import { useEffect, useRef } from 'react'

/**
 * Reproduce un clip. Mientras está quieto no baja un solo byte de video:
 * se ve el poster y el archivo se pide recién cuando hay que reproducir.
 */
export default function VideoClip({
  src,
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
      // Un AbortError es un pause() que llegó antes: no hay que reintentar.
      video.play().catch((error) => {
        if (error.name !== 'NotAllowedError') return
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

  if (!src) return null

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
