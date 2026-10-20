import { services, tools } from '../data/site'
import Reveal from './Reveal'

/**
 * Posición de cada pastilla dentro de la escena (en cqw, medidas sobre el PDF).
 * Van en el mismo orden que `services`. Debajo de 900px la escena pasa a
 * una columna y estas posiciones se ignoran.
 */
const PILL_POSITIONS = [
  ['5.7cqw', '26.6cqw'],
  ['7cqw', '33.1cqw'],
  ['12cqw', '40.8cqw'],
  ['62cqw', '23.9cqw'],
  ['63.8cqw', '30.5cqw'],
  ['59.7cqw', '37.3cqw'],
  ['50cqw', '46cqw'],
]

export default function Services() {
  return (
    <section id="servicios" className="svc scroll-mt-11">
      <div className="svc-stage">
        <h2 className="svc-title">
          <span className="svc-title__lead">¿Cómo puedo</span>
          <span className="svc-title__main">ayudarte?</span>
        </h2>

        <img
          className="svc-photo"
          src="/img/emi-servicios.webp"
          alt="Emiberth García sentada en un taburete, usando el celular"
          width="803"
          height="1500"
          loading="lazy"
        />

        <ul className="svc-pills">
          {services.map((service, i) => {
            const [x, y] = PILL_POSITIONS[i] ?? ['0', '0']
            return (
              <li key={service} className="svc-pill" style={{ '--x': x, '--y': y }}>
                {service}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mx-auto max-w-[1500px] px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <h3 className="text-[11px] font-bold tracking-[0.16em] text-bone/60 uppercase">
            Herramientas
          </h3>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <div key={tool.group} className="rounded-[2rem] bg-wine px-7 py-6">
                <dt className="text-[11px] leading-relaxed font-semibold tracking-[0.1em] text-bone/60 uppercase">
                  {tool.group}
                </dt>
                <dd className="mt-2 text-[17px] leading-snug font-bold text-bone">
                  {tool.items.join(' · ')}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
