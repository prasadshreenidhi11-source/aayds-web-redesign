import { motion } from 'framer-motion'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import CtaBand from '../components/ui/CtaBand'
import Button from '../components/ui/Button'
import CountUp from '../components/CountUp'
import aboutPhoto from '../assets/about-sandee-james.webp'
import teamBanner from '../assets/team-banner.webp'
import awardBadge from '../assets/award-badge.webp'
import weHeartNdis from '../assets/squares/we-heart-ndis.webp'
import { values } from '../data/site'

const timeline = [
  { when: 'Before 2020', title: 'The Gaps', text: 'Years of real experience in the disability sector exposed major gaps in care quality, communication, and participant wellbeing.' },
  { when: 'The Turning Point', title: 'May', text: 'One participant named May changed everything. Her experience highlighted how badly the system can fail vulnerable people.' },
  { when: 'Founded in 2020', title: 'AAYDS Launches', text: 'AAYDS launched with one mission: provide truly personalised support where every participant feels respected, safe, and understood.' },
  { when: 'Today', title: 'Across Moreton Bay', text: 'We proudly support individuals and families across Moreton Bay through in-home support, community access, SIL, and transport services.' },
]

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="AAYDS is a trusted NDIS registered provider in Moreton Bay delivering personalised disability support with compassion, respect, and genuine care."
        image={aboutPhoto}
      />
      <PageHero
        eyebrow="NDIS Registered Provider · Moreton Bay"
        title="About"
        accent="AAYDS"
        intro={[
          'AAYDS is a trusted NDIS registered provider in Moreton Bay delivering personalised disability support with compassion, respect, and genuine care.',
          'We believe support should never feel generic. It should feel personal, empowering, and built around the individual.',
        ]}
        badges={['Family Owned & Operated', 'Founded 2020', 'NDIS Registered', 'Moreton Bay Local']}
        image={aboutPhoto}
        imageAlt="Sandee and James at the AAYDS Christmas celebration"
        caption="Sandee and James, Christmas 2024."
        crumbs={[{ label: 'About Us' }]}
      >
        <div className="relative mt-10 grid grid-cols-2 gap-3 border-t border-black/5 pt-8 sm:grid-cols-4">
          {[
            { value: <CountUp to={2020} duration={1.6} />, label: 'Founded' },
            { value: <CountUp to={100} suffix="%" />, label: 'NDIS Registered' },
            { value: <CountUp to={8} suffix="+" />, label: 'Services' },
            { value: 'Moreton Bay', label: 'Local Team', small: true },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-[#f3f6fc] p-4 text-center transition-transform duration-300 hover:-translate-y-1">
              <p className={`font-display font-extrabold leading-none text-brand-deep ${s.small ? 'text-sm xl:text-base' : 'text-xl xl:text-2xl'}`}>{s.value}</p>
              <p className="mt-2 font-body text-[0.7rem] text-ink/55">{s.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <main>
        {/* Our story */}
        <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading eyebrow="Our Story" title="Created to raise the standard of" accent="disability support in Queensland" />
            <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
              <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-black/8 lg:block" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px origin-left bg-gradient-to-r from-brand-deep via-brand-primary to-brand-deep lg:block"
              />
              {timeline.map((t, i) => (
                <Reveal as="li" key={t.when} delay={0.12 * i} className="group relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep font-display text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <div className="mt-6 w-full rounded-[1.75rem] bg-[#f3f6fc] p-6 ring-1 ring-black/5 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-brand-deep/10">
                    <span className="font-label text-[0.7rem] tracking-[0.25em] text-brand-deep/60">{t.when.toUpperCase()}</span>
                    <h3 className="font-display mt-2 text-lg font-bold text-ink">{t.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* In memory of May */}
        <section className="animate-gradient relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep px-4 py-16 sm:px-8 sm:py-24">
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[9rem] font-extrabold leading-none text-white/[0.05] sm:text-[14rem]">
            May
          </span>
          <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
          <Reveal className="relative mx-auto max-w-3xl text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20">
              <Icon name="heart" size={24} />
            </span>
            <span className="font-label mt-6 inline-block text-[0.7rem] tracking-[0.25em] text-white/60">IN MEMORY OF MAY</span>
            <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">May remains the heart behind AAYDS.</h2>
            <p className="mt-6 font-body text-base leading-relaxed text-white/75 sm:text-lg">
              Her story continues to inspire every participant we support and every family we help. Her legacy reminds us that people deserve dignity, opportunity, and genuine human care.
            </p>
          </Reveal>
        </section>

        {/* Values */}
        <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading eyebrow="Our Values" title="What guides" accent="every interaction" lead="Four values shape how we hire, how we train, and how we show up for every participant." />
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal as="li" key={v.title} delay={0.08 * i} className="group relative overflow-hidden rounded-[1.75rem] bg-[#f3f6fc] p-7 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-brand-deep/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-ink">{v.title}</h3>
                  {v.short !== v.text && <p className="mt-1 font-body text-sm font-semibold text-brand-deep">{v.short}</p>}
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">{v.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Team + recognition */}
        <section className="bg-[#f3f6fc] px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading eyebrow="Our People" title="Meet the" accent="AAYDS® Team" lead="Local, experienced, and compassionate, our Moreton Bay support workers are carefully selected and trained to deliver consistent, respectful care." />
            <Reveal delay={0.15} className="relative mt-12 overflow-hidden rounded-[2rem] shadow-xl shadow-brand-deep/10 ring-1 ring-black/5">
              <img src={teamBanner} alt="The AAYDS support team standing together in Moreton Bay" width="1400" height="377" loading="lazy" decoding="async" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/40 via-transparent to-transparent" />
            </Reveal>
            <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
              <Reveal delay={0.1} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
                <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <img src={awardBadge} alt="APAC Insider Australian CEO Excellence Awards 2026 - Disability Support Leader of the Year, South East QLD" width="96" height="96" loading="lazy" className="h-24 w-24 shrink-0" />
                  <div>
                    <span className="font-label text-[0.7rem] tracking-[0.25em] text-brand-deep/60">RECOGNITION</span>
                    <p className="font-display mt-1 text-lg font-bold text-ink">Disability Support Leader of the Year, South East QLD</p>
                    <p className="mt-1 font-body text-sm text-ink/60">APAC Insider Australian CEO Excellence Awards 2026</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15} className="flex flex-col items-start gap-5 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center sm:p-8">
                <img src={weHeartNdis} alt="We love NDIS" width="96" height="96" loading="lazy" className="h-24 w-24 shrink-0 rounded-2xl object-cover" />
                <div>
                  <span className="font-label text-[0.7rem] tracking-[0.25em] text-brand-deep/60">REGISTERED PROVIDER</span>
                  <p className="font-display mt-1 text-lg font-bold text-ink">We love the NDIS</p>
                  <p className="mt-1 font-body text-sm text-ink/60">Fully registered and compliant, so you can use your funding with confidence.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* More than a service */}
        <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="font-label inline-block rounded-full bg-brand-tint px-4 py-1.5 text-[0.7rem] tracking-[0.25em] text-brand-deep ring-1 ring-brand-deep/10">
              MORE THAN A SERVICE
            </span>
            <h2 className="font-display mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              This is AAYDS. <span className="bg-gradient-to-r from-brand-deep via-brand-primary to-brand-primary bg-clip-text text-transparent">This is All About You.</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button to="/services" arrow>
                Explore our services
              </Button>
              <Button to="/careers" variant="outline">
                Join the team
              </Button>
            </div>
          </Reveal>
        </section>

        <CtaBand title="Start Your NDIS Support Journey Today" text="Speak with our team and get the right support in place - personalised, local, and aligned with your NDIS goals." />
      </main>
    </>
  )
}
