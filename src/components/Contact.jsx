import { contact } from '../data/site'
import Reveal from './Reveal'
import RoleBand from './RoleBand'
import { socialGlyphs } from './Icons'

/**
 * Redes decorativas de la escena, medidas sobre el PDF:
 * [clave, x, y, ancho, rotación, duración del vaivén, desfase].
 * Cada una flota a su propio ritmo; el desfase negativo las arranca en fases distintas.
 */
const GLYPHS = [
  ['instagram', '7.5cqw', '12.8cqw', '13cqw', '-12deg', '7.5s', '-1s'],
  ['facebook', '82cqw', '16.8cqw', '10.3cqw', '0deg', '6.5s', '-4s'],
  ['x', '71.5cqw', '29cqw', '7.3cqw', '8deg', '8s', '-2.5s'],
  ['tiktok', '10cqw', '31.5cqw', '13.2cqw', '-14deg', '7s', '-5.5s'],
  ['youtube', '31.5cqw', '33cqw', '12.2cqw', '8deg', '9s', '-3s'],
  ['linkedin', '79.5cqw', '35.8cqw', '12.5cqw', '14deg', '6s', '-0.5s'],
]

export default function Contact() {
  return (
    <section id="contacto" className="close scroll-mt-11">
      <div className="close-stage">
        {GLYPHS.map(([key, x, y, w, r, dur, delay]) => (
          <span
            key={key}
            className="close-glyph"
            style={{ '--x': x, '--y': y, '--w': w, '--r': r, '--dur': dur, '--delay': delay }}
          >
            {socialGlyphs[key]}
          </span>
        ))}

        <h2 className="close-title">
          <span className="close-title__lead">Trabajemos</span>
          <span className="close-title__main">Juntos</span>
        </h2>

        <img
          className="close-photo"
          src="/img/emi-juntos.webp"
          alt="Emiberth García señalando a cámara"
          width="484"
          height="1500"
          loading="lazy"
        />

        <p className="close-tag">{contact.tagline}</p>
      </div>

      <Reveal>
        <div className="flex flex-col items-center justify-center gap-4 px-5 pt-10 pb-14 sm:flex-row sm:gap-6 sm:pt-12 sm:pb-20">
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Hablemos por WhatsApp"
            className="w-full rounded-full bg-bone px-9 py-4 text-center text-[15px] font-bold text-claret transition-colors duration-300 hover:bg-sand sm:w-auto"
          >
            Hablemos
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="w-full rounded-full border-2 border-bone px-9 py-3.5 text-center text-[15px] font-bold text-bone transition-colors duration-300 hover:bg-bone hover:text-claret sm:w-auto"
          >
            {contact.email}
          </a>
        </div>
      </Reveal>

      <RoleBand footer />
    </section>
  )
}
