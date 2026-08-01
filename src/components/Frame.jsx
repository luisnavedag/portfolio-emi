/** Fotograma real o generado por código cuando no hay imagen. */
export default function Frame({ hue = 30, index = 0, src, alt = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />
    )
  }

  const shift = index * 18
  const light = 28 + (index % 3) * 6

  return (
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at ${40 + shift}% ${35 + shift / 2}%, hsl(${hue} 55% ${light + 18}%) 0%, transparent 70%),
          radial-gradient(ellipse 60% 50% at ${70 - shift}% ${60 - shift / 3}%, hsl(${(hue + 40) % 360} 45% ${light + 8}%) 0%, transparent 65%),
          linear-gradient(${145 + shift}deg, hsl(${hue} 35% ${light - 6}%) 0%, hsl(${(hue + 20) % 360} 40% ${light - 12}%) 100%)
        `,
      }}
      aria-hidden={!alt}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
    />
  )
}
