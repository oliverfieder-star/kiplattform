import { useEffect, useRef, useState } from 'react'

// Scroll-triggered reveal wrapper. Adds `in-view` once the element enters the
// viewport so the CSS `.reveal` transition can fire.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true)
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  const delayClass = delay ? ` reveal-delay-${delay}` : ''
  return (
    <Tag
      ref={ref}
      className={`reveal${delayClass} ${seen ? 'in-view' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
