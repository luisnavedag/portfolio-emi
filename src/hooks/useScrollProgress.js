import { useEffect, useState } from 'react'

export function useScrollProgress(sections) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const y = window.scrollY
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0)

      const scrollY = y + window.innerHeight * 0.35
      let current = 0
      for (let i = sections.length - 1; i >= 0; i--) {
        const node = document.getElementById(sections[i].id)
        if (node && scrollY >= node.offsetTop) {
          current = i
          break
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sections])

  return { progress, active }
}
