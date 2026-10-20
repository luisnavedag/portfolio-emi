/** Flor de ocho puntas de las viñetas de "Hola". */
export function Flower({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden="true">
      {[0, 45, 90, 135].map((deg) => (
        <rect
          key={deg}
          x="20"
          y="2"
          width="8"
          height="44"
          rx="4"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
    </svg>
  )
}

/** Marca de Instagram, sólo contorno. Es una textura de fondo, no un link. */
export function IgMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="9"
      aria-hidden="true"
    >
      <rect x="6" y="6" width="88" height="88" rx="27" />
      <circle cx="50" cy="50" r="20" />
      <circle cx="75" cy="25" r="4.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function PlayIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 5.6v12.8a1 1 0 0 0 1.5.86l10.4-6.4a1 1 0 0 0 0-1.72L9.5 4.74A1 1 0 0 0 8 5.6Z" />
    </svg>
  )
}

export function SoundIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M7 3 4 5.5H2v5h2L7 13V3Z" strokeLinejoin="round" />
      <path d="M9.8 5.6a3.2 3.2 0 0 1 0 4.8M11.8 3.6a6 6 0 0 1 0 8.8" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Redes del cierre. Son siluetas decorativas simplificadas (opacidad baja,
 * sin links): no pretenden ser el logo oficial.
 */
export const socialGlyphs = {
  instagram: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9" aria-hidden="true">
      <rect x="6" y="6" width="88" height="88" rx="27" />
      <circle cx="50" cy="50" r="20" />
      <circle cx="75" cy="25" r="4.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <circle cx="50" cy="50" r="50" />
      <path
        d="M55 92V56h12l2-14H55v-9c0-4 1.5-7 7-7h8V13c-1.5-.2-6-.6-11.3-.6C48 12.4 41 19 41 30v12H29v14h12v36h14Z"
        fill="#0b0907"
      />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" aria-hidden="true">
      <path d="M12 10 88 90M88 10 12 90" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <rect x="4" y="4" width="92" height="92" rx="22" fill="currentColor" />
      <path
        d="M54 22v34a10 10 0 1 1-10-10m10-24c1 8 6 13 14 14"
        fill="none"
        stroke="#0b0907"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 100 70" fill="currentColor" aria-hidden="true">
      <rect x="2" y="4" width="96" height="62" rx="20" />
      <path d="M40 22v26l22-13Z" fill="#0b0907" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <rect x="4" y="4" width="92" height="92" rx="14" fill="currentColor" />
      <g fill="#0b0907">
        <rect x="20" y="38" width="12" height="42" />
        <circle cx="26" cy="24" r="7.5" />
        <path d="M42 38h11v6c3-5 8-7 14-7 12 0 15 8 15 19v24H70V58c0-6-1-10-7-10s-9 4-9 10v22H42Z" />
      </g>
    </svg>
  ),
}
