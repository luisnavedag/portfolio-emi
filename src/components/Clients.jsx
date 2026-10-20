import { clients } from '../data/site'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Clients() {
  return (
    <section id="marcas" className="scroll-mt-11 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeader
          title="Con quién trabajé."
          lead="Marcas de distintos rubros que necesitaban publicar seguido sin perder calidad."
        />

        <Reveal>
          {/* Los logos están en un solo color, así que la grilla se lee como una
              sola pieza y no como ocho recuadros pegados. */}
          <ul className="grid grid-cols-2 gap-x-10 gap-y-12 rounded-[2.5rem] bg-wine px-8 py-12 sm:grid-cols-3 sm:gap-x-14 sm:px-14 sm:py-16 lg:grid-cols-4">
            {clients.map((client) => (
              <li key={client.name} className="flex h-12 items-center justify-center sm:h-14">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-lg font-bold text-bone/70 transition-colors hover:text-bone">
                    {client.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
