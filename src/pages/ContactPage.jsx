import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import FormShell from '../components/forms/FormShell'
import { Field, TextArea, ChoiceGroup } from '../components/forms/fields'
import { useFormSubmit } from '../components/forms/useFormSubmit'
import { site, values } from '../data/site'
import { services } from '../data/services'

const contactCards = [
  { icon: 'phone', label: 'Call us', value: site.phoneDisplay, href: site.phoneHref, text: '24/7 on call for participants and families' },
  { icon: 'mail', label: 'Email us', value: site.emailAdmin, href: `mailto:${site.emailAdmin}`, text: 'General enquiries, Monday to Friday' },
  { icon: 'pin', label: 'Where we work', value: 'Moreton Bay, QLD', to: '/services#all-services', text: 'In-home support across the region' },
]

export default function ContactPage() {
  const { onSubmit, status } = useFormSubmit({ formName: 'Contact Us' })
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact us for compassionate disability support services. Our team is here to assist you with care and expertise. Get in touch today!"
      />
      <PageHero
        eyebrow="We're Here to Help · Moreton Bay"
        title="Contact"
        accent="AAYDS® Today"
        subtitle="Contact us to discuss your needs. We're here to help you."
        intro={[
          "Welcome to AAYDS®, your dedicated partner in providing compassionate and specialised disability support services. With a deep-rooted commitment to enhancing quality of life, we empower individuals to thrive with dignity and independence. Our experienced team is here to offer personalised care and support tailored to your unique needs and goals.",
          "Whether it's navigating the NDIS, accessing community resources, or fostering inclusive environments, we are dedicated to making a positive difference in every life we touch. Contact us today to learn more about how we can support you on your journey towards a brighter and more fulfilling future.",
        ]}
        crumbs={[{ label: 'Contact Us' }]}
        actions={null}
        compact
      >
        <ul className="relative mt-8 grid gap-3 sm:grid-cols-3">
          {contactCards.map((c) => {
            const inner = (
              <>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white">
                  <Icon name={c.icon} size={16} />
                </span>
                <span className="mt-3 block font-body text-[0.7rem] uppercase tracking-wider text-ink/50">{c.label}</span>
                <span className="block font-display text-base font-bold text-brand-deep">{c.value}</span>
                <span className="mt-1 block font-body text-xs text-ink/55">{c.text}</span>
              </>
            )
            return (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href} className="block h-full rounded-2xl bg-[#f3f6fc] p-5 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-brand-deep/10">
                    {inner}
                  </a>
                ) : (
                  <div className="block h-full rounded-2xl bg-[#f3f6fc] p-5 ring-1 ring-black/5">{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
      </PageHero>

      <main>
        {/* Form */}
        <section id="enquire" className="bg-white px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionHeading eyebrow="Send an Enquiry" title="Tell us how we can" accent="help" align="left" lead="Fill in the form and a member of our Moreton Bay team will get back to you. Prefer to talk? Call us any time." />
              <Reveal delay={0.1} className="mt-8 space-y-4">
                <Button href={site.phoneHref} size="lg">
                  Call {site.phoneDisplay}
                </Button>
                <div className="rounded-[1.75rem] bg-[#f3f6fc] p-6 ring-1 ring-black/5">
                  <p className="font-display text-base font-bold text-ink">Follow us</p>
                  <div className="mt-3 flex gap-3">
                    <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="AAYDS on Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-deep shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:text-white">
                      <Icon name="facebook" size={18} />
                    </a>
                    <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="AAYDS on Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-deep shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:text-white">
                      <Icon name="instagram" size={18} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <FormShell onSubmit={onSubmit} status={status} submitLabel="Send Enquiry">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="Name" required placeholder="Your name" autoComplete="name" />
                  <Field label="Email" name="Email" type="email" required placeholder="you@example.com" autoComplete="email" />
                  <Field label="Phone" name="Phone" type="tel" required placeholder="Contact number" autoComplete="tel" inputMode="tel" />
                  <Field label="Post Code" name="Post_Code" required placeholder="Postcode" autoComplete="postal-code" inputMode="numeric" />
                  <ChoiceGroup legend="Who are you enquiring for?" name="Enquiring_for" required options={['Enquiring for myself', 'Enquiring for someone else']} className="sm:col-span-2" />
                  <TextArea label="Comments" name="Comments" required placeholder="How may we be of assistance?" className="sm:col-span-2" />
                </div>
              </FormShell>
            </Reveal>
          </div>
        </section>

        {/* Complaints + Code of Conduct */}
        <section className="bg-[#f3f6fc] px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-[1400px] gap-5 lg:grid-cols-2">
            <Reveal className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25">
                <Icon name="chat" size={22} />
              </span>
              <h2 className="font-display mt-5 text-2xl font-extrabold text-ink">Complaints</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/65 sm:text-base">
                Here at AAYDS®, we comply with the NDIS guidelines. Should you have any complaints, please contact us directly on{' '}
                <a href={`mailto:${site.emailCoordinator}`} className="font-semibold text-brand-deep underline decoration-brand-primary/30 underline-offset-2 hover:decoration-brand-primary">
                  {site.emailCoordinator}
                </a>
                . If you are not satisfied with the response, the next step is to direct your complaint to the NDIS Commission via{' '}
                <a href={site.ndisComplaints} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-deep underline decoration-brand-primary/30 underline-offset-2 hover:decoration-brand-primary">
                  this link
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25">
                <Icon name="shield" size={22} />
              </span>
              <h2 className="font-display mt-5 text-2xl font-extrabold text-ink">NDIS Code of Conduct</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/65 sm:text-base">
                AAYDS® abides by the NDIS Code of Conduct. To read the NDIS Code of Conduct please visit{' '}
                <a href={site.ndisCodeOfConduct} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-deep underline decoration-brand-primary/30 underline-offset-2 hover:decoration-brand-primary">
                  this link
                </a>
                .
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/65 sm:text-base">
                Please{' '}
                <a href={site.ndisCodeOfConductEasyRead} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-deep underline decoration-brand-primary/30 underline-offset-2 hover:decoration-brand-primary">
                  click here
                </a>{' '}
                to view the 'Easy Read' version of the NDIS Code of Conduct.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading eyebrow="Our Values" title="How we" accent="show up" />
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal as="li" key={v.title} delay={0.08 * i} className="group rounded-[1.75rem] bg-[#f3f6fc] p-7 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-brand-deep/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">{v.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Service mosaic */}
        <section className="bg-[#f3f6fc] px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading eyebrow="What We Do" title="Support in" accent="every part of life" />
            <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {services.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={0.05 * i}>
                  <a href={`/${s.slug}`} className="group relative block aspect-square overflow-hidden rounded-[1.5rem] shadow-sm ring-1 ring-black/5">
                    <img src={s.square} alt={s.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 right-4 font-display text-sm font-bold text-white sm:text-base">{s.title}</span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
