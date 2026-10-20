import RoleBand from './RoleBand'

const rise = (delay) => ({ animation: 'var(--animate-rise)', animationDelay: `${delay}ms` })

/**
 * Tres capas alineadas: el título lleno, la foto recortada y el mismo título
 * sólo con contorno por encima. Así Emi queda "dentro" de las letras.
 */
export default function Hero() {
  return (
    <section id="inicio" className="hero pt-11">
      <RoleBand />

      <div className="hero-stage">
        <h1 className="hero-title hero-title--fill" style={rise(120)}>
          Creative
          <br />
          Portfolio
        </h1>

        <img
          className="hero-photo"
          src="/img/emi-hero.webp"
          alt="Emiberth García apoyando el dedo en la mejilla, pensativa"
          width="1500"
          height="1229"
          fetchPriority="high"
          style={rise(260)}
        />

        <p className="hero-title hero-title--line" aria-hidden="true" style={rise(120)}>
          Creative
          <br />
          Portfolio
        </p>
      </div>
    </section>
  )
}
