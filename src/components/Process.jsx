import { process, processClosing } from '../data/site'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Process() {
  return (
    <section
      id="proceso"
      className="scroll-mt-11 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgb(110_20_48/0.55),transparent_70%)] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1500px]">
        <SectionHeader
          title="Mi proceso de trabajo."
          lead="Cinco pasos fijos. Sabés qué viene en cada etapa y cuándo entra tu feedback."
        />

        {/* Seis celdas (cinco pasos y el cierre) del mismo alto: desde sm todas las
            filas miden lo que mide la card más alta. Al pasar el mouse se agrandan. */}
        <ol className="grid gap-4 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {process.map((step, i) => (
            <li key={step.n}>
              <Reveal delay={Math.min(i, 4) * 70} className="h-full">
                <div className="h-full rounded-[2rem] bg-wine px-7 py-8 transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_26px_50px_-24px_rgb(0_0_0/0.8)] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:px-9 sm:py-10">
                  <span className="font-display text-[2.6rem] leading-none text-bone/90">{step.n}</span>
                  <h3 className="mt-5 text-[clamp(1.1rem,1.6vw,1.35rem)] leading-snug font-bold text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-bone/80">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={350} className="h-full">
              <p className="flex h-full items-center rounded-[2rem] bg-bone/85 px-7 py-8 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-snug font-bold text-claret transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_26px_50px_-24px_rgb(0_0_0/0.8)] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:px-9 sm:py-10">
                {processClosing}
              </p>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  )
}
