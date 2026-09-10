import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useMedia'

export default function CountUp({ to, duration = 1.4, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduceMotion = usePrefersReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    let start = null
    let frame
    const step = (ts) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, to, duration, reduceMotion])

  // Reduced motion: render the final figure rather than animating to it.
  const shown = reduceMotion ? to : value

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  )
}
