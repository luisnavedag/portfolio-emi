import { about } from '../data/site'
import Reveal from './Reveal'
import { Flower } from './Icons'

export default function About() {
  return (
    <section id="sobre-mi" className="hola scroll-mt-11">
      <div className="mx-auto grid max-w-[1500px] items-end gap-6 px-5 pt-20 sm:px-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-10 lg:pt-28">
        <div className="pb-4 lg:pb-24">
          <Reveal>
            <h2>
              <span className="block font-display text-[clamp(4.2rem,12.5vw,10rem)] leading-[0.9] text-bone">
                {about.greeting}
              </span>
              <span className="mt-1 block text-[clamp(2rem,5.6vw,4.6rem)] leading-[1.05] font-normal text-bone">
                {about.name}
              </span>
            </h2>
          </Reveal>

          <ul className="mt-10 space-y-4 sm:mt-14">
            {about.bullets.map((segments, i) => (
              <li key={i}>
                <Reveal delay={i * 90}>
                  <div className="flex items-center gap-5 rounded-[2.2rem] bg-wine px-6 py-5 sm:gap-8 sm:rounded-[3rem] sm:px-10 sm:py-7">
                    <Flower className="h-9 w-9 shrink-0 text-bone sm:h-12 sm:w-12" />
                    <p className="text-[clamp(0.95rem,1.7vw,1.45rem)] leading-snug text-bone">
                      {segments.map((seg, j) =>
                        seg.b ? <strong key={j} className="font-bold">{seg.t}</strong> : seg.t,
                      )}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={120}>
          <img
            src="/img/emi-hola.webp"
            alt="Emiberth García sonriendo, sentada en una silla"
            width="683"
            height="1500"
            loading="lazy"
            className="mx-auto block h-auto w-[min(74%,380px)] lg:ml-auto lg:w-full lg:max-w-[460px]"
          />
        </Reveal>
      </div>
    </section>
  )
}
