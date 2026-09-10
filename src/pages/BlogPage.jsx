import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import CtaBand from '../components/ui/CtaBand'
import { posts, formatDate } from '../content/posts'
import { EASE } from '../lib/motion'

const PER_PAGE = 9

function PostCard({ p, i, featured = false }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.04 * i, duration: 0.45, ease: EASE } }}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
      className={featured ? 'sm:col-span-2 lg:col-span-3' : ''}
    >
      <Link
        to={`/${p.slug}`}
        className={`group flex h-full overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-deep/10 ${
          featured ? 'flex-col lg:flex-row' : 'flex-col'
        }`}
      >
        <div className={`relative overflow-hidden ${featured ? 'aspect-[3/2] lg:aspect-auto lg:w-1/2' : 'aspect-[3/2]'}`}>
          {p.image && (
            <img src={p.image} alt="" loading={featured ? 'eager' : 'lazy'} decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          )}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-label text-[0.7rem] tracking-[0.2em] text-brand-deep shadow-sm backdrop-blur-sm">
            {p.category.split(',')[0].trim().toUpperCase()}
          </span>
        </div>
        <div className={`flex flex-1 flex-col p-6 ${featured ? 'lg:p-10' : ''}`}>
          <div className="flex items-center gap-3 font-body text-xs text-ink/50">
            <time dateTime={p.date}>{formatDate(p.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Icon name="clock" size={12} /> {p.readMinutes} min read
            </span>
          </div>
          <h2 className={`font-display mt-3 font-bold leading-snug text-ink group-hover:text-brand-primary ${featured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>{p.title}</h2>
          <p className={`mt-3 flex-1 font-body leading-relaxed text-ink/60 ${featured ? 'text-base' : 'text-sm'}`}>{p.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-deep">
            Read article
            <Icon name="arrow" size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.li>
  )
}

export default function BlogPage() {
  const [params, setParams] = useSearchParams()
  const page = Math.max(1, parseInt(params.get('page') || '1', 10))
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('All')

  const categories = useMemo(() => {
    const set = new Set()
    posts.forEach((p) => p.category.split(',').forEach((c) => set.add(c.trim())))
    return ['All', ...[...set].filter((c) => c !== 'Uncategorized').sort()]
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((p) => (cat === 'All' || p.category.includes(cat)) && (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)))
  }, [query, cat])

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const current = Math.min(page, pages)
  const slice = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE)
  const filtering = query || cat !== 'All'

  const go = (n) => {
    setParams(n === 1 ? {} : { page: String(n) })
    document.getElementById('posts')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Seo title="Blog - NDIS Guides & News" description="Guides, explainers and updates from the AAYDS team on NDIS funding, personal care, palliative support, SIL and community participation in Moreton Bay." />
      <PageHero
        eyebrow="Insights · Guides · Updates"
        title="The AAYDS"
        accent="Blog"
        intro={['Plain-English guides to NDIS funding, supports and everyday life for participants, families and carers in Moreton Bay - written by the people who deliver the support.']}
        crumbs={[{ label: 'Blog' }]}
        actions={null}
        compact
      >
        <div className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setParams({})
              }}
              placeholder="Search articles…"
              className="w-full rounded-full border border-black/10 bg-[#f3f6fc] px-5 py-3.5 pl-11 font-body text-sm text-ink outline-none transition-all focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/10"
            />
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </span>
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCat(c)
                  setParams({})
                }}
                aria-pressed={cat === c}
                className={`rounded-full px-4 py-2.5 font-body text-xs font-semibold transition-all duration-200 ${
                  cat === c ? 'bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-md shadow-brand-primary/25' : 'bg-[#f3f6fc] text-brand-deep ring-1 ring-black/5 hover:bg-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </PageHero>

      <main id="posts" className="scroll-mt-24 bg-[#f3f6fc] px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1400px]">
          {slice.length === 0 ? (
            <Reveal className="rounded-[2rem] bg-white p-12 text-center ring-1 ring-black/5">
              <p className="font-display text-xl font-bold text-ink">No articles match that search.</p>
              <button type="button" onClick={() => (setQuery(''), setCat('All'))} className="mt-4 font-body text-sm font-semibold text-brand-primary underline underline-offset-2">
                Clear filters
              </button>
            </Reveal>
          ) : (
            <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {slice.map((p, i) => (
                  <PostCard key={p.slug} p={p} i={i} featured={current === 1 && i === 0 && !filtering} />
                ))}
              </AnimatePresence>
            </motion.ul>
          )}

          {pages > 1 && (
            <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
              <button type="button" onClick={() => go(current - 1)} disabled={current === 1} className="flex h-11 items-center gap-1 rounded-full bg-white px-4 font-body text-sm font-semibold text-brand-deep ring-1 ring-black/5 transition-all disabled:opacity-40 hover:not-disabled:-translate-y-0.5">
                <Icon name="arrow" size={14} strokeWidth={2} className="rotate-180" /> Prev
              </button>
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => go(n)}
                  aria-current={n === current ? 'page' : undefined}
                  className={`h-11 w-11 rounded-full font-body text-sm font-semibold transition-all ${
                    n === current ? 'bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-md shadow-brand-primary/25' : 'bg-white text-brand-deep ring-1 ring-black/5 hover:-translate-y-0.5'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button type="button" onClick={() => go(current + 1)} disabled={current === pages} className="flex h-11 items-center gap-1 rounded-full bg-white px-4 font-body text-sm font-semibold text-brand-deep ring-1 ring-black/5 transition-all disabled:opacity-40 hover:not-disabled:-translate-y-0.5">
                Next <Icon name="arrow" size={14} strokeWidth={2} />
              </button>
            </nav>
          )}
        </div>
      </main>

      <CtaBand title="Have a Question About Your NDIS Plan?" text="Our Moreton Bay team is happy to talk through your plan, your funding and the supports that fit - no obligation." />
    </>
  )
}
