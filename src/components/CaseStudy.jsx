import Reveal from './Reveal'
import PhoneReel from './PhoneReel'
import { IgMark } from './Icons'

/** Rótulo pastilla que se apoya sobre una esquina de las capturas. */
function Tag({ children, className = '' }) {
  return (
    <figcaption
      className={`absolute right-0 bottom-5 rounded-l-[1.4rem] bg-wine px-5 py-3 text-[clamp(0.85rem,1.2vw,1.1rem)] leading-tight text-bone italic ${className}`}
    >
      {children}
    </figcaption>
  )
}

function Phones({ work, activeKey, onToggle, onStop }) {
  const clips = work.videos ?? []
  if (clips.length === 0) return null
  const wide = work.ratio === '16:9'

  return (
    <div className="mt-14 sm:mt-20">
      <ul className="flex flex-wrap justify-center gap-x-5 gap-y-10 sm:gap-x-8 lg:gap-x-12">
        {clips.map((src, i) => {
          const key = `${work.id}-${i}`
          return (
            <li
              key={key}
              className={
                wide
                  ? 'w-full max-w-[860px]'
                  : 'w-[calc(50%-0.625rem)] max-w-[300px] sm:w-[calc(25%-1.5rem)] lg:w-[calc(25%-2.25rem)]'
              }
            >
              <Reveal delay={Math.min(i, 4) * 80}>
                <PhoneReel
                  src={src}
                  wide={wide}
                  label={`${work.name}, reel ${i + 1} de ${clips.length}`}
                  clipKey={key}
                  active={activeKey === key}
                  previewable={activeKey === null}
                  onToggle={onToggle}
                  onStop={onStop}
                />
              </Reveal>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function CaseStudy({ work, activeKey, onToggle, onStop }) {
  const stories = work.stories ?? []
  const hasShots = Boolean(work.feed) || stories.length > 0

  return (
    <article id={work.id} className="case relative isolate scroll-mt-11 overflow-hidden">
      <IgMark className="case__mark" />

      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <h3 className="font-display text-[clamp(2.4rem,6.2vw,5rem)] leading-[0.95] text-bone">
            {work.name}
          </h3>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-6">
          <Reveal>
            <div className="flex h-full flex-col gap-4 text-[clamp(1.05rem,1.9vw,1.6rem)] leading-snug">
              <p className="flex flex-1 items-center rounded-[2rem] bg-wine px-8 py-6">
                <span>
                  <strong className="font-bold">Rubro:</strong> {work.sector}
                </span>
              </p>
              <p className="flex flex-1 items-center rounded-[2rem] bg-wine px-8 py-6">
                <span>
                  <strong className="font-bold">Rol:</strong> {work.role}
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <dl className="h-full space-y-6 rounded-[2rem] bg-wine px-7 py-8 text-[clamp(0.95rem,1.45vw,1.25rem)] leading-relaxed sm:px-12 sm:py-12 lg:text-justify">
              {work.details.map((item) => (
                <div key={item.label}>
                  <dt className="inline font-bold">{item.label}: </dt>
                  <dd className="inline">{item.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {hasShots && (
          <div className="mt-12 flex flex-col items-stretch gap-8 sm:mt-16 lg:flex-row lg:items-end lg:gap-10">
            {work.feed && (
              <Reveal>
                <figure className="relative mx-auto w-full max-w-[300px] lg:mx-0 lg:w-[19%] lg:max-w-none lg:min-w-[220px]">
                  <img
                    src={work.feed}
                    alt={`Feed de Instagram de ${work.name}`}
                    className="block h-auto w-full rounded-[3px]"
                    loading="lazy"
                  />
                  <Tag>Feed de Instagram</Tag>
                </figure>
              </Reveal>
            )}

            {stories.length > 0 && (
              <Reveal delay={90}>
                <figure className="relative lg:flex-1">
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                    {stories.map((src, i) => (
                      <li key={src}>
                        <img
                          src={src}
                          alt={`Historia de Instagram ${i + 1} de ${work.name}`}
                          className="block aspect-[9/16] w-full rounded-[3px] object-cover"
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ul>
                  <Tag className="max-sm:right-0 max-sm:bottom-[-1.25rem]">Historias de Instagram</Tag>
                </figure>
              </Reveal>
            )}
          </div>
        )}

        <Phones work={work} activeKey={activeKey} onToggle={onToggle} onStop={onStop} />
      </div>
    </article>
  )
}
