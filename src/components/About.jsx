import { about, tcOf } from '../data/site'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 border-t border-bone/10 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          tc={tcOf('sobre-mi')}
          label="Sobre mí"
          title={about.title}
          lead={about.lead}
        />

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-full border border-bone/12 bg-plum sm:max-w-[300px] lg:mx-0">
              <img
                src={about.photo}
                alt="Emiberth Garcia"
                className="block w-full object-cover"
                style={{ aspectRatio: '1 / 1' }}
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="max-w-2xl">
              {about.paragraphs.map((paragraph, i) => (
                <p
                  key={paragraph}
                  className={`text-[16px] leading-relaxed text-bone/70 ${i > 0 ? 'mt-6' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
