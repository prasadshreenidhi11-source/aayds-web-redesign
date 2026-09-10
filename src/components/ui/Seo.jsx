import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'AAYDS'
const ORIGIN = 'https://aayd.vercel.app'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [k, v] = selector.replace(/^meta\[/, '').replace(/\]$/, '').split('=')
    el.setAttribute(k, v.replace(/"/g, ''))
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

// Per-page <title>, description, canonical and Open Graph tags. Kept as a
// tiny effect instead of a helmet dependency.
export default function Seo({ title, description, image }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const full = title ? (title.includes(SITE) ? title : `${title} | ${SITE}`) : 'AAYDS - Personalised NDIS Disability Support in Moreton Bay'
    document.title = full
    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
    }
    setMeta('meta[property="og:title"]', 'content', full)
    const url = ORIGIN + (pathname === '/' ? '/' : pathname)
    setMeta('meta[property="og:url"]', 'content', url)
    if (image) setMeta('meta[property="og:image"]', 'content', image.startsWith('http') ? image : ORIGIN + image)
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [title, description, image, pathname])
  return null
}
