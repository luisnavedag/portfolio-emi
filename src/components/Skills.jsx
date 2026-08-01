import { skills, tools, tcOf } from '../data/site'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-bone/10 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          tc={tcOf('skills')}
          label="Skills"
          title="Lo que sé hacer."
          lead="Edición, contenido y community management: el paquete completo para que una marca publique seguido y con criterio."
        />

        <Reveal>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex gap-3 border-t border-bone/10 py-4 text-[15px] leading-snug text-bone/75"
              >
                <span aria-hidden="true" className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-amber" />
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 sm:mt-20">
            <h3 className="font-mono text-[10px] tracking-[0.16em] text-amber uppercase">
              Herramientas
            </h3>
            <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <div key={tool.group} className="border-t border-bone/10 pt-5">
                  <dt className="font-mono text-[10px] leading-relaxed tracking-[0.12em] text-muted uppercase">
                    {tool.group}
                  </dt>
                  <dd className="mt-3 font-display text-[17px] leading-snug font-semibold tracking-[-0.01em] text-bone/85">
                    {tool.items.join(' · ')}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
