import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import FormShell from '../components/forms/FormShell'
import { Field, ChoiceGroup, FormSection } from '../components/forms/fields'
import { useFormSubmit } from '../components/forms/useFormSubmit'
import teamBanner from '../assets/team-banner.webp'
import careersImage from '../assets/careers.webp'
import { site } from '../data/site'

const duties = [
  'Support clients to participate in age-appropriate activities and tasks including in home support and community access.',
  'Support clients to access activities and outings in the community.',
  'Provide direct care assistance to each client in accordance with their service plan and as directed by the Director.',
  "Work in accordance with the medication administration policy, work health and safety procedures and client right's policies including privacy and confidentiality.",
  'Assisting with daily activities and promoting independence.',
  'Providing personal support where required, this may include toileting, feeding, showering.',
  'Completing daily progress notes, admin tasks and incident reports.',
  'Collaborating with a supportive team to enhance the quality of life to our participants.',
]

const requirements = [
  'A genuine desire to support people with disabilities and believe in empowering people to live the life they love.',
  'Certificate 3 or studying.',
  'Current First Aid/CPR Certificate.',
  'Blue Card with Yellow Card exemption or a current NDIS Worker Screening Check or willing to obtain.',
  "Current drivers' license & own vehicle (with full comprehensive insurance) for transporting participants.",
  'Access to the internet and smart phone for rosters, timesheets and participant reporting.',
  'Reliable, responsible attitude towards work, be able to follow direction, take initiative and able to commit to regular ongoing hours.',
]

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const SHIFTS = ['AM', 'PM', 'Overnight Sleepover', 'Weekend']

export default function CareersPage() {
  const { onSubmit, status } = useFormSubmit({ formName: 'Job Application' })
  return (
    <>
      <Seo
        title="Careers - Join the Team"
        description="Join our disability support team and explore rewarding careers making a meaningful impact in compassionate care."
        image={careersImage}
      />
      <PageHero
        eyebrow="Careers · Moreton Bay"
        title="Apply Online to Join the"
        accent="AAYDS® Team"
        intro={[
          'Are you passionate about helping others and making a positive impact in your community? We are looking for caring and dedicated individuals to join our team as a Disability Support Worker.',
          'As part of the casual workforce, you will be a vital member of the team, working both regular shifts and cover shifts with opportunities for AM, PM, Overnight Sleepover shifts and Weekend availability.',
        ]}
        badges={['Casual Roles', 'AM / PM / Overnight', 'Weekend Availability', 'Extensive Training']}
        image={teamBanner}
        imageAlt="The AAYDS support team standing together"
        imageFrom="lg"
        caption="Join a team that shows up for each other."
        crumbs={[{ label: 'Careers' }]}
        actions={
          <>
            <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep px-7 py-4 font-body text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 transition-all hover:-translate-y-0.5">
              Apply now
              <Icon name="arrow" size={14} strokeWidth={2} />
            </a>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-brand-deep/15 px-7 py-4 font-body text-sm font-semibold text-brand-deep transition-all hover:bg-brand-tint/60">
              Call {site.phoneDisplay}
            </a>
          </>
        }
      />

      <main>
        <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2">
            <Reveal className="rounded-[2rem] bg-[#f3f6fc] p-8 ring-1 ring-black/5 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25">
                <Icon name="briefcase" size={22} />
              </span>
              <h2 className="font-display mt-5 text-2xl font-extrabold text-ink sm:text-3xl">Job Description</h2>
              <ul className="mt-6 space-y-3">
                {duties.map((d) => (
                  <li key={d} className="flex items-start gap-3 font-body text-sm leading-relaxed text-ink/70">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-brand-deep shadow-sm ring-1 ring-black/5">
                      <Icon name="check" size={12} strokeWidth={2.5} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[2rem] bg-[#f3f6fc] p-8 ring-1 ring-black/5 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/25">
                <Icon name="star" size={22} />
              </span>
              <h2 className="font-display mt-5 text-2xl font-extrabold text-ink sm:text-3xl">You Will Require</h2>
              <ul className="mt-6 space-y-3">
                {requirements.map((d) => (
                  <li key={d} className="flex items-start gap-3 font-body text-sm leading-relaxed text-ink/70">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white">
                      <Icon name="check" size={12} strokeWidth={2.5} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-black/5 pt-5 font-body text-sm leading-relaxed text-ink/60">
                Applicants will be committed to providing quality and professional supports in the participants home and in the community. Extensive training will be available to the right applicant.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="apply" className="bg-[#f3f6fc] px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <SectionHeading eyebrow="Apply Online" title="Your" accent="Application" lead="Please upload your Resume and Cover Letter through the application form below." />
            <Reveal delay={0.1} className="mt-12">
              <FormShell
                onSubmit={onSubmit}
                status={status}
                submitLabel="Submit Application"
                note={`Attachments are not sent through this form. Please email your resume and cover letter to ${site.emailAdmin} after submitting.`}
              >
                <FormSection title="Your Personal Information">
                  <Field label="First Name" name="First_Name" required autoComplete="given-name" />
                  <Field label="Last Name" name="Last_Name" required autoComplete="family-name" />
                  <Field label="Email Address" name="Email" type="email" required autoComplete="email" />
                  <Field label="Confirm Email" name="Confirm_Email" type="email" required />
                  <Field label="Post Code" name="Post_Code" required inputMode="numeric" autoComplete="postal-code" />
                  <Field label="Phone" name="Phone" type="tel" required inputMode="tel" autoComplete="tel" />
                </FormSection>

                <FormSection title="Position You're Applying For">
                  <ChoiceGroup legend="Position" name="Position" required options={['Disability Support Worker']} className="sm:col-span-2" />
                  <ChoiceGroup legend="Days you are available for work" name="Days_Available" type="checkbox" options={DAYS} className="sm:col-span-2" />
                  <ChoiceGroup legend="Shifts you are available for" name="Shifts_Available" type="checkbox" options={SHIFTS} className="sm:col-span-2" />
                  <ChoiceGroup legend="Do you have, or are you enrolled in a Certificate III in Community Support, Individual Support or similar?" name="Certificate_III" required options={['Yes', 'No']} className="sm:col-span-2" />
                  <ChoiceGroup legend="Do you have a drivers licence?" name="Drivers_Licence" required options={['Yes', 'No']} />
                  <ChoiceGroup legend="Do you have comprehensive vehicle insurance?" name="Vehicle_Insurance" required options={['Yes', 'No']} />
                  <ChoiceGroup legend="Do you have an NDIS Screening Card?" name="NDIS_Screening_Card" required options={['Yes', 'No']} />
                  <ChoiceGroup legend="Do you have a Blue Card?" name="Blue_Card" required options={['Yes', 'No']} />
                  <Field label="Link to your resume (optional)" name="Resume_Link" type="url" placeholder="https://" hint="Google Drive, Dropbox or LinkedIn link" className="sm:col-span-2" />
                </FormSection>
              </FormShell>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  )
}
