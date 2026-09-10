import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getService } from '../data/services'
import teamBanner from '../assets/team-banner.webp'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import Faq from '../components/ui/Faq'
import CtaBand from '../components/ui/CtaBand'
import ServiceGrid from '../components/ui/ServiceGrid'
import Button from '../components/ui/Button'
import NotFoundPage from './NotFoundPage'
import { site } from '../data/site'

const Section = ({ tone = 'white', children, className = '' }) => {
  const bg = tone === 'tint' ? 'bg-[#f3f6fc]' : tone === 'dark' ? 'bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep animate-gradient' : 'bg-white'
  return (
    <section className={`${bg} px-4 py-12 sm:px-8 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  )
}

function Intro({ s }) {
  return (
    <Section>
      <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {s.items.map((it, i) => (
          <Reveal as="li" key={it.title} delay={0.05 * i} className="group rounded-[1.5rem] bg-[#f3f6fc] p-5 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-brand-deep/10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-deep shadow-sm ring-1 ring-black/5 transition-colors group-hover:bg-gradient-to-br group-hover:from-brand-deep group-hover:via-brand-primary group-hover:to-brand-deep group-hover:text-white">
              <Icon name="check" size={16} strokeWidth={2.2} />
            </span>
            <p className="font-display mt-4 text-sm font-bold text-ink">{it.title}</p>
            <p className="mt-1 font-body text-xs leading-snug text-ink/55">{it.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

function List({ s }) {
  const tint = s.tone === 'tint'
  return (
    <Section tone={tint ? 'tint' : 'white'}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="left" />
        <Reveal delay={0.1} className={`rounded-[2rem] p-8 ring-1 ring-black/5 ${tint ? 'bg-white shadow-xl shadow-brand-deep/5' : 'bg-[#f3f6fc]'}`}>
          {s.listTitle && <p className="font-display text-base font-bold text-ink">{s.listTitle}</p>}
          <ul className="mt-4 space-y-3">
            {s.items.map((it, i) => (
              <motion.li
                key={it}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className="flex items-start gap-3 font-body text-sm leading-relaxed text-ink/75 sm:text-base"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white">
                  <Icon name="check" size={12} strokeWidth={2.5} />
                </span>
                {it}
              </motion.li>
            ))}
          </ul>
          {s.after && <p className="mt-6 border-t border-black/5 pt-5 font-body text-sm leading-relaxed text-ink/60">{s.after}</p>}
        </Reveal>
      </div>
    </Section>
  )
}

function Features({ s }) {
  const n = s.items.length
  const cols = n % 3 === 0 || n === 5 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
  return (
    <Section tone="tint">
      <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
      <ul className={`mt-12 grid gap-5 sm:grid-cols-2 ${cols}`}>
        {s.items.map((it, i) => (
          <Reveal as="li" key={it.title} delay={0.06 * (i % 4)} className="group relative overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-deep/10">
            <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-tint opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep font-display text-sm font-extrabold text-white shadow-lg shadow-brand-primary/25">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display relative mt-5 text-lg font-bold text-ink">{it.title}</h3>
            <p className="relative mt-2 font-body text-sm leading-relaxed text-ink/60">{it.text}</p>
          </Reveal>
        ))}
      </ul>
      {s.note && (
        <Reveal delay={0.1} className="mt-10 text-center font-body text-sm text-ink/55">
          {s.note}
        </Reveal>
      )}
    </Section>
  )
}

function Steps({ s }) {
  return (
    <Section>
      <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
      <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((it, i) => (
          <Reveal as="li" key={it.title} delay={0.08 * i} className="group relative flex gap-5 rounded-[1.75rem] bg-[#f3f6fc] p-6 ring-1 ring-black/5 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-deep/10">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-display text-base font-extrabold text-brand-deep shadow-sm ring-1 ring-black/5 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-deep group-hover:via-brand-primary group-hover:to-brand-deep group-hover:text-white">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">{it.title}</h3>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-ink/60">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
      {s.note && (
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl text-center font-body text-base text-ink/65">
          {s.note}
        </Reveal>
      )}
    </Section>
  )
}

function Checklist({ s }) {
  const dark = s.tone === 'dark'
  if (dark) {
    return (
      <Section tone="dark" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="left" tone="dark" />
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.items.map((it, i) => (
                <motion.li
                  key={it}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 font-body text-sm text-white/90 ring-1 ring-white/10 backdrop-blur-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-brand-deep">
                    <Icon name="check" size={12} strokeWidth={2.5} />
                  </span>
                  {it}
                </motion.li>
              ))}
            </ul>
            {s.after && <p className="mt-6 font-body text-sm leading-relaxed text-white/70">{s.after}</p>}
          </Reveal>
        </div>
      </Section>
    )
  }
  return (
    <Section tone="tint">
      <div className={`grid gap-10 ${s.image ? 'lg:grid-cols-[1.2fr_1fr]' : 'lg:grid-cols-2'} lg:items-center`}>
        <div>
          <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="left" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {s.items.map((it, i) => (
              <Reveal as="li" key={it} delay={0.05 * i} className="flex items-start gap-3 rounded-2xl bg-white p-4 font-body text-sm text-ink/75 shadow-sm ring-1 ring-black/5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white">
                  <Icon name="check" size={12} strokeWidth={2.5} />
                </span>
                {it}
              </Reveal>
            ))}
          </ul>
          {s.callout && (
            <Reveal delay={0.15} className="mt-6 flex flex-col gap-4 rounded-[1.5rem] bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep p-6 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-base font-bold">{s.callout.title}</p>
                <p className="mt-1 font-body text-sm text-white/70">{s.callout.text}</p>
              </div>
              <Button href={site.phoneHref} variant="white" size="sm" className="shrink-0">
                Call {site.phoneDisplay}
              </Button>
            </Reveal>
          )}
        </div>
        {s.image && (
          <Reveal delay={0.1} className="group relative h-80 overflow-hidden rounded-[2rem] shadow-xl shadow-brand-deep/10 lg:h-full lg:min-h-[26rem]">
            <img src={s.image} alt={s.imageAlt || ''} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/50 via-transparent to-transparent" />
          </Reveal>
        )}
      </div>
    </Section>
  )
}

function Callout({ s }) {
  return (
    <Section>
      <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-[#f3f6fc] p-8 ring-1 ring-black/5 sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(rgba(2,69,194,0.08) 1px, transparent 1px)', backgroundSize: '26px 26px' }}
        />
        <div className="relative flex flex-col gap-6 sm:flex-row">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25">
            <Icon name="info" size={24} />
          </span>
          <div>
            {s.eyebrow && <span className="font-label text-[0.7rem] tracking-[0.25em] text-brand-deep/60">{s.eyebrow.toUpperCase()}</span>}
            <h2 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{s.title}</h2>
            <div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-ink/65 sm:text-base">
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function Gallery({ s }) {
  return (
    <Section tone="tint">
      <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
      <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {s.images.map((im, i) => (
          <Reveal as="li" key={im.src} delay={0.06 * i} className={`group relative overflow-hidden rounded-[1.75rem] shadow-md ring-1 ring-black/5 ${i % 3 === 0 ? 'aspect-[4/3] lg:row-span-2 lg:aspect-auto' : 'aspect-[4/3]'}`}>
            <img src={im.src} alt={im.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

function Team() {
  return (
    <Section>
      <SectionHeading eyebrow="Our People" title="Meet the" accent="AAYDS® Team" lead="Local, experienced, and compassionate, our Moreton Bay support workers are carefully selected and trained to deliver consistent, respectful care." />
      <Reveal delay={0.15} className="relative mt-12 overflow-hidden rounded-[2rem] shadow-xl shadow-brand-deep/10 ring-1 ring-black/5">
        <img src={teamBanner} alt="The AAYDS support team standing together in Moreton Bay" width="1400" height="377" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/40 via-transparent to-transparent" />
      </Reveal>
      <Reveal delay={0.2} className="mx-auto mt-8 max-w-2xl text-center font-body text-base text-ink/65">
        All AAYDS® support workers are background-checked, trained, and matched to each participant's individual needs.
      </Reveal>
    </Section>
  )
}

function Areas({ s }) {
  return (
    <Section>
      <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
      <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
        {s.items.map((a) => (
          <span key={a} className="flex items-center gap-2 rounded-full bg-[#f3f6fc] px-5 py-3 font-body text-sm font-semibold text-brand-deep ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
            <Icon name="pin" size={14} strokeWidth={2} />
            {a}
          </span>
        ))}
      </Reveal>
      {s.after && (
        <Reveal delay={0.15} className="mx-auto mt-8 max-w-2xl text-center font-body text-base text-ink/60">
          {s.after}
        </Reveal>
      )}
    </Section>
  )
}

function FaqSection({ s, slug }) {
  return (
    <Section tone="tint">
      <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
      <Faq items={s.items} id={`faq-${slug}`} />
    </Section>
  )
}

const renderers = {
  intro: Intro,
  list: List,
  features: Features,
  steps: Steps,
  checklist: Checklist,
  callout: Callout,
  gallery: Gallery,
  team: Team,
  areas: Areas,
  faq: FaqSection,
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <NotFoundPage />

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: `NDIS ${service.title}`,
    description: service.description,
    areaServed: 'Moreton Bay, Queensland',
    provider: { '@type': 'LocalBusiness', name: site.name, telephone: '+611300593206' },
  }

  return (
    <>
      <Seo title={service.seoTitle} description={service.description} image={service.hero.image} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        {...service.hero}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />
      <main>
        {service.sections.map((s, i) => {
          const R = renderers[s.type]
          return R ? <R key={`${s.type}-${i}`} s={s} slug={service.slug} /> : null
        })}

        <Section>
          <SectionHeading eyebrow="More Support" title="Other Ways" accent="We Can Help" lead="Most participants combine two or more supports. Every service is delivered in your home and aligned with your NDIS plan." />
          <div className="mt-12">
            <ServiceGrid exclude={service.slug} limit={4} />
          </div>
          <Reveal delay={0.1} className="mt-10 text-center">
            <Button to="/services" variant="outline" arrow>
              View all services
            </Button>
          </Reveal>
        </Section>

        <CtaBand title={service.cta.title} text={service.cta.text} />
      </main>
    </>
  )
}
