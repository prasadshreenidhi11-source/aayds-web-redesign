import { useEffect, useRef, useState } from 'react'

// Mounts heavy media only once the section is close to the viewport, so videos
// are never fetched on initial page load.
export function useNearViewport(rootMargin = '400px') {
  const ref = useRef(null)
  // No IntersectionObserver (very old browsers, some crawlers): mount media
  // immediately rather than never showing it.
  const [near, setNear] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || near) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true)
          io.disconnect()
        }
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [near, rootMargin])

  return [ref, near]
}
