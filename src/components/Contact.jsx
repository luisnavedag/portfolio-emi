import { contact, tcOf } from '../data/site'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 px-5 py-20 pb-28 sm:px-8 sm:py-28 sm:pb-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          tc={tcOf('contacto')}
          label="Contacto"
          title="Hablemos de tu próximo reel."
          lead={contact.closing}
        />

        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-10">
            <a
              href={`mailto:${contact.email}`}
              className="group font-display text-2xl font-semibold tracking-[-0.02em] text-bone transition-colors hover:text-amber"
            >
              {contact.email}
            </a>
            <a
              href={contact.whatsappUrl}
              className="font-mono text-[12px] tracking-[0.12em] text-bone/70 uppercase transition-colors hover:text-amber"
            >
              WhatsApp {contact.whatsapp}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
