import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../components/ui/Seo'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import CtaBand from '../components/ui/CtaBand'
import { posts, postBySlug, loadPostHtml, formatDate } from '../content/posts'
import { author, site } from '../data/site'
import { services } from '../data/services'
import authorPhoto from '../assets/author-allison-cosgrove.webp'
import { fadeUp } from '../lib/motion'
import NotFoundPage from './NotFoundPage'

function useReadingProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('article-body')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const done = Math.min(Math.max(-rect.top, 0), Math.max(total, 1))
      setP(total > 0 ? done / total : 1)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return p
}

function ProgressBar() {
  const p = useReadingProgress()
  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-1 bg-transparent" aria-hidden="true">
      <div className="h-full origin-left bg-gradient-to-r from-brand-deep via-brand-primary to-brand-deep transition-transform duration-150" style={{ transform: `scaleX(${p})` }} />
    </div>
  )
}

export default function PostPage() {
  const { slug } = useParams()
  const post = postBySlug(slug)
  const [html, setHtml] = useState('')
  const [toc, setToc] = useState([])

  useEffect(() => {
    if (!post) return
    let alive = true
    setHtml('')
    loadPostHtml(post).then((raw) => {
      if (!alive) return
      // Add ids to h2s for the table of contents.
      const doc = new DOMParser().parseFromString(`<div>${raw}</div>`, 'text/html')
      const heads = [...doc.querySelectorAll('h2')]
      const items = heads.map((h, i) => {
        const id = `s-${i}-${h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50)}`
        h.id = id
        return { id, text: h.textContent.trim() }
      })
      setToc(items)
      setHtml(doc.body.firstChild.innerHTML)
    })
    return () => {
      alive = false
    }
  }, [post])

  if (!post) return <NotFoundPage />

  const related = posts.filter((p) => p.slug !== post.slug && p.category.split(',').some((c) => post.category.includes(c.trim()))).slice(0, 3)
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const more = related.length >= 3 ? related : [...related, ...fallback.filter((p) => !related.includes(p))].slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: author.name },
    publisher: { '@type': 'Organization', name: site.name },
    image: post.image ? `https://aayd.vercel.app${post.image}` : undefined,
  }

  return (
    <>
      <Seo title={post.seoTitle || post.title} description={post.description || post.excerpt} image={post.image} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ProgressBar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f3f6fc] px-4 pb-10 pt-4 sm:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1400px]">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl shadow-brand-deep/5 ring-1 ring-black/5 sm:p-12">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 font-body text-xs text-ink/50">
              <Link to="/" className="hover:text-brand-primary">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog" className="hover:text-brand-primary">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-ink/80">{post.category.split(',')[0].trim()}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 font-body text-xs text-ink/55">
              <span className="rounded-full bg-brand-tint px-3 py-1.5 font-label text-[0.7rem] tracking-[0.2em] text-brand-deep">{post.category.toUpperCase()}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Icon name="clock" size={12} /> {post.readMinutes} min read
              </span>
            </div>
            <h1 className="font-display mt-6 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">{post.title}</h1>
            <div className="mt-8 flex items-center gap-4">
              <img src={authorPhoto} alt={author.name} width="56" height="56" className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow-md" />
              <div>
                <p className="font-display text-sm font-bold text-ink">{author.name}</p>
                <p className="font-body text-xs text-ink/55">{author.role}</p>
              </div>
            </div>
          </motion.div>

          {post.image && (
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.15} className="relative mt-4 overflow-hidden rounded-[2rem] shadow-xl shadow-brand-deep/10">
              <img src={post.image} alt="" fetchPriority="high" decoding="async" className="aspect-[21/9] w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Body */}
      <main className="bg-white px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_minmax(0,46rem)_1fr]">
          {/* TOC */}
          <aside className="hidden lg:block">
            {toc.length > 1 && (
              <nav aria-label="On this page" className="sticky top-28 rounded-[1.5rem] bg-[#f3f6fc] p-6 ring-1 ring-black/5">
                <p className="font-label text-[0.7rem] tracking-[0.25em] text-brand-deep/60">ON THIS PAGE</p>
                <ol className="mt-4 space-y-2.5">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`} className="block font-body text-xs leading-snug text-ink/65 transition-colors hover:text-brand-primary">
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </aside>

          <article id="article-body" className="min-w-0">
            {html ? (
              <div className="prose-aayds" dangerouslySetInnerHTML={{ __html: html }} />
            ) : (
              <div className="space-y-4" aria-busy="true" aria-label="Loading article">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-4 animate-pulse rounded-full bg-[#eaf1fc]" style={{ width: `${90 - (i % 4) * 12}%` }} />
                ))}
              </div>
            )}

            {/* Author box */}
            <Reveal className="mt-14 flex flex-col gap-6 rounded-[2rem] bg-[#f3f6fc] p-8 ring-1 ring-black/5 sm:flex-row">
              <img src={authorPhoto} alt={author.name} width="96" height="96" className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-white shadow-md" />
              <div>
                <span className="font-label text-[0.7rem] tracking-[0.25em] text-brand-deep/60">ABOUT THE AUTHOR</span>
                <p className="font-display mt-1 text-xl font-bold text-ink">{author.name}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink/65">{author.bio}</p>
              </div>
            </Reveal>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <Button to="/blog" variant="outline" size="sm">
                <Icon name="arrow" size={14} strokeWidth={2} className="rotate-180" /> Back to blog
              </Button>
              <div className="flex items-center gap-2 font-body text-xs text-ink/50">
                Share
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://aayd.vercel.app/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f6fc] text-brand-deep ring-1 ring-black/5 transition-all hover:bg-brand-deep hover:text-white"
                >
                  <Icon name="facebook" size={16} />
                </a>
              </div>
            </div>
          </article>

          {/* Side CTA */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep p-6 text-white">
                <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <p className="font-display text-lg font-bold leading-tight">Talk to a local NDIS provider</p>
                <p className="mt-2 font-body text-xs leading-relaxed text-white/70">Our Moreton Bay team can help you understand your plan and arrange support.</p>
                <a href={site.phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 font-body text-xs font-semibold text-brand-deep hover:bg-brand-light">
                  <Icon name="phone" size={14} /> {site.phoneDisplay}
                </a>
              </div>
              <div className="rounded-[1.5rem] bg-[#f3f6fc] p-6 ring-1 ring-black/5">
                <p className="font-label text-[0.7rem] tracking-[0.25em] text-brand-deep/60">OUR SERVICES</p>
                <ul className="mt-3 space-y-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/${s.slug}`} className="flex items-center gap-2 rounded-xl px-2 py-1.5 font-body text-xs text-ink/70 transition-colors hover:bg-white hover:text-brand-primary">
                        <Icon name={s.icon} size={13} /> {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* More articles */}
      <section className="bg-[#f3f6fc] px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-label inline-block rounded-full bg-white px-4 py-1.5 text-[0.7rem] tracking-[0.25em] text-brand-deep ring-1 ring-black/5">KEEP READING</span>
              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">More from the blog</h2>
            </div>
            <Button to="/blog" variant="outline" size="sm" arrow>
              All articles
            </Button>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={0.06 * i}>
                <Link to={`/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-deep/10">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {p.image && <img src={p.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <time dateTime={p.date} className="font-body text-xs text-ink/50">{formatDate(p.date)}</time>
                    <h3 className="font-display mt-2 text-lg font-bold leading-snug text-ink group-hover:text-brand-primary">{p.title}</h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink/60">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Ready to Put Your Plan to Work?" text="Speak with our team about the supports discussed in this article and how they fit your NDIS plan." />
    </>
  )
}
