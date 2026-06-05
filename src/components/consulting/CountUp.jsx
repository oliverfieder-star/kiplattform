import { useEffect, useRef, useState } from 'react'

// Animated number counter that starts when scrolled into view.
export default function CountUp({ to, suffix = '', prefix = '', duration = 1600, className = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true
            if (prefersReduced) {
              setValue(to)
              io.disconnect()
              return
            }
            const start = performance.now()
            const tick = (now) => {
              const t = Math.min(1, (now - start) / duration)
              // ease-out cubic
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(Math.round(eased * to))
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            io.disconnect()
          }
        }
      },
      { threshold: 0.4 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString('de-DE')}
      {suffix}
    </span>
  )
}
