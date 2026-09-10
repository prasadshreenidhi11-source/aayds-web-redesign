import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp } from '../../lib/motion'
import Button from './Button'
import Icon from './Icon'
import { site } from '../../data/site'

function Crumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="relative mb-6">
      <ol className="flex flex-wrap items-center gap-2 font-body text-xs text-ink/50">
        <li>
          <Link to="/" className="hover:text-brand-primary">
            Home
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="hover:text-brand-primary">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink/80">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Inner-page hero. Mirrors the home hero's card layout: a white headline card
// on the left and (optionally) a photo card on the right, on the mesh ground.
export default function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  intro = [],
  badges = [],
  image,
  imageAlt,
  caption,
  crumbs = [],
  actions,
  children,
  compact = false,
  // 'lg' hides the photo card on phones and tablets (used where the image is a
  // wide banner that would crop badly in a tall card).
  imageFrom,
}) {
  const hasImage = Boolean(image)
  return (
    <section className="relative overflow-hidden bg-[#f3f6fc] px-4 pb-12 pt-4 sm:px-8 sm:pb-16">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-brand-light blur-3xl" />

      <div className={`relative mx-auto grid max-w-[1400px] gap-4 ${hasImage ? 'lg:grid-cols-[1.45fr_1fr]' : ''}`}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className={`relative overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-brand-deep/5 ring-1 ring-black/5 ${compact ? 'p-8 sm:p-10' : 'p-8 sm:p-12'}`}
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-tint blur-3xl motion-safe:animate-[pulse_6s_ease-in-out_infinite]" />
          {crumbs.length > 0 && <Crumbs items={crumbs} />}
          {eyebrow && (
            <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-label text-[0.7rem] uppercase tracking-[0.2em] text-brand-deep shadow-sm ring-1 ring-black/5">
              <Icon name="pin" size={12} strokeWidth={2} />
              {eyebrow}
            </span>
          )}
          <h1 className={`font-display relative mt-6 font-extrabold leading-[1.05] tracking-tight text-ink ${compact ? 'text-[clamp(1.8rem,8vw,2.2rem)] sm:text-5xl' : 'text-[clamp(1.9rem,8.5vw,2.4rem)] sm:text-6xl'}`}>
            {title}
            {accent && (
              <>
                {' '}
                <span className="bg-gradient-to-r from-brand-deep via-brand-primary to-brand-primary bg-clip-text text-transparent">{accent}</span>
              </>
            )}
          </h1>
          {subtitle && <p className="font-display relative mt-4 text-lg font-bold text-brand-deep sm:text-xl">{subtitle}</p>}
          {intro.length > 0 && (
            <div className="relative mt-5 max-w-2xl space-y-4 font-body text-sm leading-relaxed text-ink/65 sm:text-base">
              {intro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          )}
          {badges.length > 0 && (
            <ul className="relative mt-6 flex flex-wrap gap-2">
              {badges.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.06, duration: 0.4 } }}
                  className="flex items-center gap-1.5 rounded-full bg-brand-tint px-3 py-1.5 font-body text-xs font-semibold text-brand-deep"
                >
                  <Icon name="check" size={12} strokeWidth={2.2} />
                  {b}
                </motion.li>
              ))}
            </ul>
          )}
          {actions !== null && (
            <div className="relative mt-8 flex flex-wrap items-center gap-4">
              {actions || (
                <>
                  <Button href={site.phoneHref} size="lg">
                    Call {site.phoneDisplay}
                  </Button>
                  <Button to="/contact-us" variant="outline" size="lg" arrow>
                    Request a Callback
                  </Button>
                </>
              )}
            </div>
          )}
          {children}
        </motion.div>

        {hasImage && (
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.15} className={`relative ${imageFrom === 'lg' ? 'hidden lg:block' : ''}`}>
            <div className="group relative h-72 w-full overflow-hidden rounded-[2rem] shadow-xl shadow-brand-deep/10 sm:h-80 lg:h-full lg:min-h-[28rem]">
              <img
                src={image}
                alt={imageAlt || ''}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full scale-105 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/10 to-transparent" />
              <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 font-body text-[0.7rem] font-semibold text-brand-deep shadow-sm backdrop-blur-sm">
                <Icon name="shield" size={12} strokeWidth={2} />
                NDIS Registered Provider
              </span>
              {caption && <p className="absolute bottom-4 left-4 right-4 font-body text-sm font-medium text-white">{caption}</p>}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
