import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { site } from '../data/site'

const sections = [
  {
    title: 'Collection of your personal information',
    text: [
      'There are many aspects of the site which can be viewed without providing personal information, however, for access to future All About You Disability Support Pty Ltd customer support features you are required to submit personally identifiable information. This may include but not limited to a unique username and password, or provide sensitive information in the recovery of your lost password.',
    ],
  },
  {
    title: 'Sharing of your personal information',
    text: [
      'We may occasionally work with other related companies to provide services on our behalf. Those companies will be permitted to obtain only the personal information they need to deliver the service. All About You Disability Support Pty Ltd takes reasonable steps to ensure that these organisations are bound by confidentiality and privacy obligations in relation to the protection of your personal information.',
    ],
  },
  {
    title: 'Use of your personal information',
    text: [
      'For each visitor to reach the site, we expressively collect the following non-personally identifiable information, including but not limited to browser type, version and language, operating system, pages viewed while browsing the Site, page access times and referring website address. This collected information is used solely internally for the purpose of gauging visitor traffic, trends and delivering personalised content to you while you are at this Site.',
      'From time to time, we may use customer information for new, unanticipated uses not previously disclosed in our privacy notice. If our information practices change at some time in the future we will use for these new purposes only, data collected from the time of the policy change forward will adhere to our updated practices.',
    ],
  },
  {
    title: 'Changes to this Privacy Policy',
    text: [
      'All About You Disability Support Pty Ltd reserves the right to make amendments to this Privacy Policy at any time. If you have objections to the Privacy Policy, you should not access or use the Site.',
    ],
  },
  {
    title: 'Accessing Your Personal Information',
    text: [
      'You have a right to access your personal information, subject to exceptions allowed by law. If you would like to do so, please let us know. You may be required to put your request in writing for security reasons. All About You Disability Support Pty Ltd reserves the right to charge a fee for searching for, and providing access to, your information on a per request basis.',
    ],
  },
  {
    title: 'Contacting us',
    text: [
      'All About You Disability Support Pty Ltd welcomes your comments regarding this Privacy Policy. If you have any questions about this Privacy Policy and would like further information, please contact us by any of the following means during business hours Monday to Friday.',
    ],
    email: site.emailAdmin,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" description="The Privacy Policy for the All About You Disability Support Pty Ltd website, aayds.care." />
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        accent="Policy"
        intro={[
          'This following document sets forth the Privacy Policy for the All About You Disability Support Pty Ltd website, aayds.care.',
          'All About You Disability Support Pty Ltd is committed to providing you with the best possible customer service experience. All About You Disability Support Pty Ltd is bound by the Privacy Act 1988 (Cth), which sets out a number of principles concerning the privacy of individuals.',
        ]}
        crumbs={[{ label: 'Privacy Policy' }]}
        actions={null}
        compact
      />
      <main className="bg-white px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * i} className="rounded-[1.75rem] bg-[#f3f6fc] p-8 ring-1 ring-black/5">
              <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{s.title}</h2>
              <div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-ink/65 sm:text-base">
                {s.text.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
                {s.email && (
                  <p>
                    E-mail:{' '}
                    <a href={`mailto:${s.email}`} className="font-semibold text-brand-deep underline decoration-brand-primary/30 underline-offset-2 hover:decoration-brand-primary">
                      {s.email}
                    </a>
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </main>
    </>
  )
}
