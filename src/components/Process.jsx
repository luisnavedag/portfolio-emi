import { process, processClosing, tcOf } from '../data/site'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Process() {
  return (
    <section id="proceso" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          tc={tcOf('proceso')}
          label="Proceso"
          title="Mi proceso de trabajo."
          lead="Cinco pasos fijos. Sabés qué viene en cada etapa y cuándo entra tu feedback."
        />

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={Math.min(i, 4) * 70}>
              <li className="border-t border-bone/10 pt-6">
                <span className="font-mono text-[11px] tracking-[0.14em] text-amber">{step.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.015em] text-bone">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-bone/60">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={140}>
          <p className="mt-14 max-w-2xl border-t border-bone/10 pt-8 font-display text-[19px] leading-relaxed font-semibold tracking-[-0.015em] text-bone/85 sm:mt-16 sm:text-[22px]">
            {processClosing}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
