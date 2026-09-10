// Single source of truth for contact details, links and service areas.
// Every value here is taken from the live site at aayds.care.
export const site = {
  name: 'All About You Disability Support',
  shortName: 'AAYDS',
  phoneDisplay: '1300 593 206',
  phoneHref: 'tel:+611300593206',
  emailAdmin: 'admin@aayds.care',
  emailCoordinator: 'coordinator@aayds.care',
  facebook: 'https://www.facebook.com/p/All-About-You-Disability-support-Pty-Ltd-100083386594609/',
  instagram: 'https://www.instagram.com/all_about_you_disability/',
  ndisComplaints: 'https://www.ndis.gov.au/contact/feedback-and-complaints',
  ndisCodeOfConduct:
    'https://www.ndiscommission.gov.au/sites/default/files/2023-05/NDIS%20Commission%20-%20NDIS%20Code%20of%20Conduct%20-%20Easy%20Read-%20Accessible.pdf',
  ndisCodeOfConductEasyRead: 'https://ndiscommission.easyread.com.au/ndis-code-of-conduct/',
  ndisHome: 'https://www.ndis.gov.au/',
  // Optional form backend. When set, forms POST here as JSON; otherwise they
  // fall back to a pre-filled email so nothing is ever lost.
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
}

export const serviceAreas = [
  'Beachmere',
  'Bellmere',
  'Burpengary',
  'Caboolture',
  'Dakabin',
  'Deception Bay',
  'Griffin',
  'Kallangur',
  'Kippa-Ring',
  'Kurwongbah',
  'Mango Hill',
  'Morayfield',
  'Murrumba Downs',
  'Narangba',
  'North Lakes',
  'Petrie',
  'Redcliffe',
  'Rothwell',
]

export const values = [
  {
    title: 'Acceptance',
    short: 'We support people exactly as they are.',
    text: 'We embrace and respect people for who they are, no matter your differences. We create a supportive environment where everyone feels valued and accepted.',
    icon: 'hands',
  },
  {
    title: 'Compassion',
    short: 'Care starts with empathy and humanity.',
    text: 'We show empathy and kindness to others. We understand and support you through challenging times.',
    icon: 'heart',
  },
  {
    title: 'Respect',
    short: 'We treat others kindly, listening and valuing your feelings.',
    text: 'We treat others kindly, listening and valuing your feelings.',
    icon: 'shield',
  },
  {
    title: 'Understanding',
    short: 'We listen first and act with purpose.',
    text: 'We understand and empathise with your thoughts, feelings, and experiences. Through understanding we can foster compassion, build bridges of communication, and cultivate meaningful relationships.',
    icon: 'chat',
  },
]

export const author = {
  name: 'Allison Cosgrove',
  role: 'Founder and Director, AAYDS',
  bio: "Hi, I'm Allison Cosgrove, Founder and Director of AAYDS (All About You Disability Support). I have over 15 years of experience in disability support and hold a Diploma in Individual Support. I'm passionate about helping NDIS participants, families, and carers access personalised, high-quality support that promotes independence and wellbeing.",
}
