import { useEffect, useState } from 'react'

export function ReadingProgress({ targetSelector = '.pj-blog__article' }) {
  const [p, setP] = useState(0)

  useEffect(() => {
    const el = document.querySelector(targetSelector)
    if (!el) return undefined

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const total = el.scrollHeight - window.innerHeight
      if (total <= 0) {
        setP(1)
        return
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      setP(scrolled / total)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [targetSelector])

  return (
    <div className="pj-readbar" aria-hidden>
      <div className="pj-readbar__fill" style={{ transform: `scaleX(${p})` }} />
    </div>
  )
}
