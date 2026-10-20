import { useCallback, useState } from 'react'
import { cases } from '../data/site'
import CaseStudy from './CaseStudy'

export default function Work() {
  const [activeKey, setActiveKey] = useState(null)

  const onToggle = useCallback((key) => {
    setActiveKey((prev) => (prev === key ? null : key))
  }, [])

  const onStop = useCallback(() => setActiveKey(null), [])

  return (
    <section id="trabajos" className="scroll-mt-11">
      <h2 className="sr-only">Trabajos</h2>

      {cases.map((work) => (
        <CaseStudy
          key={work.id}
          work={work}
          activeKey={activeKey}
          onToggle={onToggle}
          onStop={onStop}
        />
      ))}
    </section>
  )
}
