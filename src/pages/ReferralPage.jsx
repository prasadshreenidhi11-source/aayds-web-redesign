import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import FormShell from '../components/forms/FormShell'
import { Field, Select, ChoiceGroup, FormSection } from '../components/forms/fields'
import { useFormSubmit } from '../components/forms/useFormSubmit'
import CtaBand from '../components/ui/CtaBand'
import { site } from '../data/site'

const TITLES = ['Mr.', 'Mrs.', 'Ms.', 'Doc.', 'Prof.']
const SERVICES = ['Personal Care', 'Community Participation', 'Transport', 'Domestic Assistance', 'Nursing Services', 'Gardening', 'Palliative']

const steps = [
  { icon: 'doc', title: 'Complete the form', text: 'Tell us about the participant, their plan and the supports they need.' },
  { icon: 'phone', title: 'We call you', text: 'A coordinator reviews the referral and calls at your preferred time.' },
  { icon: 'people', title: 'Match and begin', text: 'We match a support worker and agree a schedule that fits.' },
]

export default function ReferralPage() {
  const { onSubmit, status } = useFormSubmit({ formName: 'Participant Referral', to: site.emailCoordinator })
  return (
    <>
      <Seo
        title="Participant Referral"
        description="Refer yourself or someone you support to AAYDS. Our Moreton Bay team will review the referral and call you back to plan personalised NDIS support."
      />
      <PageHero
        eyebrow="Disability Support Specialists"
        title="Participant"
        accent="Referral"
        subtitle="We are the personal touch that links Disability Support services with the people that need it most"
        intro={[
          "Welcome to our Participant Referral page, where you can take the first step towards accessing tailored disability support services. Whether you're a potential participant exploring options for yourself or a caring coordinator seeking the best care for someone you support, our referral process is designed with your needs in mind.",
          'Our dedicated team is here to assist you every step of the way, ensuring a smooth and supportive experience. Together, we can empower individuals to achieve their goals and enhance their quality of life. Fill out the form below to begin the journey towards personalised care and a brighter future.',
        ]}
        crumbs={[{ label: 'Participant Referral' }]}
        actions={null}
        compact
      >
        <ol className="relative mt-8 grid gap-3 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-[#f3f6fc] p-5 ring-1 ring-black/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white">
                <Icon name={s.icon} size={16} />
              </span>
              <span className="mt-3 block font-label text-[0.7rem] tracking-[0.25em] text-brand-deep/60">STEP {i + 1}</span>
              <span className="block font-display text-base font-bold text-ink">{s.title}</span>
              <span className="mt-1 block font-body text-xs leading-snug text-ink/55">{s.text}</span>
            </li>
          ))}
        </ol>
      </PageHero>

      <main>
        <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <FormShell onSubmit={onSubmit} status={status} submitLabel="Submit Referral">
                <ChoiceGroup
                  legend="Are you submitting this referral for yourself?"
                  name="Referral_for"
                  required
                  options={['No, the referral is for someone else', 'Yes, the referral is for me']}
                />

                <FormSection title="Guardian/Carer Details" text="Leave blank if you are referring yourself.">
                  <Select label="Title" name="Carer_Title" options={TITLES} />
                  <div className="hidden sm:block" />
                  <Field label="First Name" name="Carer_First_Name" placeholder="First" autoComplete="given-name" />
                  <Field label="Last Name" name="Carer_Last_Name" placeholder="Last" autoComplete="family-name" />
                  <Field label="Phone Number" name="Carer_Phone" type="tel" inputMode="tel" autoComplete="tel" />
                  <Field label="Email" name="Carer_Email" type="email" autoComplete="email" />
                </FormSection>

                <FormSection title="Participant Details">
                  <Select label="Title" name="Participant_Title" options={TITLES} />
                  <Field label="Date of Birth" name="Participant_DOB" type="date" required />
                  <Field label="First Name" name="Participant_First_Name" required placeholder="First" />
                  <Field label="Last Name" name="Participant_Last_Name" required placeholder="Last" />
                  <Field label="Phone Number" name="Participant_Phone" type="tel" required inputMode="tel" />
                  <Field label="Email" name="Participant_Email" type="email" required />
                  <Field label="Street Address" name="Address_Street" required className="sm:col-span-2" autoComplete="street-address" />
                  <Field label="City / Suburb" name="Address_City" required autoComplete="address-level2" />
                  <Field label="State" name="Address_State" required placeholder="QLD" autoComplete="address-level1" />
                  <Field label="Postal Code" name="Address_Postcode" required inputMode="numeric" autoComplete="postal-code" />
                  <Field label="Country" name="Address_Country" required placeholder="Australia" autoComplete="country-name" />
                  <ChoiceGroup legend="NDIS Funding Type" name="NDIS_Funding_Type" required options={['Plan Managed', 'Self Managed', 'Agency Managed']} className="sm:col-span-2" />
                  <ChoiceGroup legend="Services Required" name="Services_Required" type="checkbox" options={SERVICES} className="sm:col-span-2" hint="Select every service that applies." />
                  <ChoiceGroup legend="Level of Care" name="Level_of_Care" required options={['Low Care', 'High Care', 'Mental Health']} className="sm:col-span-2" />
                  <Field label="Plan Start Date" name="Plan_Start_Date" type="date" />
                  <Field label="Plan End Date" name="Plan_End_Date" type="date" />
                </FormSection>

                <FormSection title="Communication">
                  <ChoiceGroup legend="Preferred method of contact" name="Preferred_Contact" required options={['Phone', 'Email']} />
                  <ChoiceGroup legend="Preferred time of call" name="Preferred_Call_Time" options={['Early Morning', 'During Office Hours', 'Evening']} />
                  <Field label="Best email for follow-up" name="Followup_Email" type="email" className="sm:col-span-2" />
                </FormSection>
              </FormShell>
            </Reveal>
          </div>
        </section>

        <CtaBand
          eyebrow="PREFER TO TALK?"
          title="Speak to a Coordinator Directly"
          text="If you would rather talk it through, call our Moreton Bay team. We will take the details over the phone and start the process for you."
        />
      </main>
    </>
  )
}
