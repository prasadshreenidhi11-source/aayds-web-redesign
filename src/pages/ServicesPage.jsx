import { motion } from 'framer-motion'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import ServiceGrid from '../components/ui/ServiceGrid'
import CtaBand from '../components/ui/CtaBand'
import CountUp from '../components/CountUp'
import heroImage from '../assets/services/hero/palliative-care-2.webp'
import { serviceAreas } from '../data/site'

const stats = [
  { value: <CountUp to={8} />, label: 'Support Services Available' },
  { value: <CountUp to={100} suffix="%" />, label: 'NDIS Registered & Compliant' },
  { value: 'Local', label: 'Moreton Bay Based Team' },
  { value: 'Flexible', label: 'Scheduling That Suits You' },
  { value: '1:1', label: 'Matched Support Workers' },
  { value: 'All', label: 'Services Delivered In-Home' },
]

const steps = [
  { title: 'Get in Touch', text: 'Call us or send an enquiry. No complicated process - just a conversation about you and your needs.' },
  { title: 'Review Your Plan', text: 'We look at your current NDIS plan together and identify which supports you can access right away.' },
  { title: 'Match Your Worker', text: 'We carefully match you with a local support worker based on your preferences, goals, and personality.' },
  { title: 'Support Begins', text: 'Your consistent support worker visits at agreed times, and we stay in touch to make sure everything runs well.' },
]

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Disability Support Services in Moreton Bay"
        description="Explore personalised NDIS disability support services at All About You Disability Support. In-home support across Moreton Bay from a consistent local team."
      />
      <PageHero
        eyebrow="NDIS Registered Provider · Moreton Bay"
        title="Disability"
        accent="Support Services"
        intro={[
          'We provide NDIS-funded in-home support for participants across Moreton Bay - practical, flexible, and delivered by a consistent local team that genuinely cares.',
        ]}
        badges={['Local Moreton Bay Team', 'In-Home Support Delivered', 'Consistent Support Workers', 'Flexible Scheduling']}
        image={heroImage}
        imageAlt="An AAYDS support worker assisting a participant at home"
        caption="Truly local, truly consistent, truly person-centred."
        crumbs={[{ label: 'Services' }]}
      />

      <main>
        {/* Understanding your support */}
        <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Understanding Your Support"
              title="Supportive. Local."
              accent="NDIS Aligned."
              align="left"
              lead="At AAYDS®, we work with NDIS participants and their families to deliver practical, reliable support that fits around real life. Our team is based in Moreton Bay - not a call centre - and we take the time to understand each participant's goals, preferences, and daily needs before matching them with a consistent support worker."
            />
            <Reveal delay={0.1} className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep p-8 text-white shadow-xl shadow-brand-deep/20">
              <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl motion-safe:animate-[pulse_5s_ease-in-out_infinite]" />
              <ul className="relative grid grid-cols-2 gap-4 sm:grid-cols-3">
                {stats.map((s, i) => (
                  <motion.li
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 * i, duration: 0.45 }}
                    className="rounded-2xl bg-white/10 p-4 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <p className="font-display text-xl font-extrabold leading-none xl:text-2xl">{s.value}</p>
                    <p className="mt-2 font-body text-xs leading-snug text-white/65">{s.label}</p>
                  </motion.li>
                ))}
              </ul>
              <p className="relative mt-6 border-t border-white/10 pt-5 font-body text-sm leading-relaxed text-white/75">
                Every service we provide is funded through your NDIS plan and delivered with respect, flexibility, and genuine care. We believe great support starts with being truly local, truly consistent, and truly person-centred.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services grid */}
        <section id="all-services" className="bg-[#f3f6fc] px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading
              eyebrow="What We Offer"
              title="Our NDIS"
              accent="Support Services"
              lead="Every service is available in your home, at a schedule that works for you and your family. Select a service below to learn more."
            />
            <div className="mt-14">
              <ServiceGrid />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading eyebrow="Getting Started" title="How Support Works" accent="With AAYDS®" lead="Simple, clear steps from first contact to consistent in-home support." />
            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={0.08 * i} className="group relative rounded-[1.75rem] bg-[#f3f6fc] p-7 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-brand-deep/10">
                  <span className="font-display text-5xl font-extrabold leading-none text-brand-primary/15 transition-colors duration-300 group-hover:text-brand-primary/30">{i + 1}</span>
                  <h3 className="font-display mt-4 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section className="bg-[#f3f6fc] px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading eyebrow="Service Area" title="Supporting Participants Across" accent="Moreton Bay" lead="AAYDS® proudly provides in-home disability support services throughout Moreton Bay and surrounding areas." />
            <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((a) => (
                <span key={a} className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-body text-sm font-semibold text-brand-deep shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <Icon name="pin" size={14} strokeWidth={2} />
                  {a}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        <CtaBand
          eyebrow="NOT SURE WHERE TO START?"
          title="Not Sure Which Service You Need?"
          text="Our team will take the time to understand your situation, walk you through your NDIS plan options, and help you find the right support - no pressure, no obligation."
        />
      </main>
    </>
  )
}
