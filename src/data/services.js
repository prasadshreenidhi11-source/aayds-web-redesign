// All eight NDIS services. Copy is taken from the matching page on aayds.care
// (typos fixed, em dashes replaced with hyphens). Each service is rendered by
// pages/ServicePage.jsx from the `sections` list, so adding a section is a
// data change, not a layout change.

import cardPalliative from '../assets/services/palliative-care.webp'
import cardPersonal from '../assets/services/personal-care.webp'
import cardCommunity from '../assets/services/community-participation.webp'
import cardDomestic from '../assets/services/domestic-assistance.webp'
import cardMeal from '../assets/services/meal-preparation.webp'
import cardTransport from '../assets/services/transportation.webp'
import cardGardening from '../assets/services/gardening.webp'
import cardSil from '../assets/services/supported-independent-living.webp'

import heroPalliative from '../assets/services/hero/palliative-care.webp'
import heroPalliative2 from '../assets/services/hero/palliative-care-2.webp'
import heroPersonal from '../assets/services/hero/personal-care.webp'
import heroCommunity from '../assets/services/hero/community-participation.webp'
import heroDomestic from '../assets/services/hero/domestic-assistance.webp'
import heroMeal from '../assets/services/hero/meal-prep.webp'
import heroTransport from '../assets/services/hero/transportation.webp'
import heroGardening from '../assets/services/hero/gardening.webp'
import heroSil from '../assets/services/hero/sil.webp'

import transport1 from '../assets/services/transport/transport-1.webp'
import transport2 from '../assets/services/transport/transport-2.webp'
import transport3 from '../assets/services/transport/transport-3.webp'
import transport4 from '../assets/services/transport/transport-4.webp'

import sqPalliative from '../assets/squares/palliative.webp'
import sqPersonal from '../assets/squares/personal-care.webp'
import sqCommunity from '../assets/squares/community.webp'
import sqDomestic from '../assets/squares/domestic.webp'
import sqMeal from '../assets/squares/meal-prep.webp'
import sqTransport from '../assets/squares/wheelchair.webp'
import sqGardening from '../assets/squares/gardening.webp'
import sqSil from '../assets/squares/sil.webp'

const FAMILY_OWNED =
  'AAYDS® is a family owned and operated company based in Moreton Bay QLD, offering all aspects of disability support to Moreton Bay and surrounding areas.'

export const services = [
  {
    slug: 'palliative-care',
    title: 'Palliative Care',
    menuTitle: 'Palliative Care',
    seoTitle: 'NDIS Palliative Care Moreton Bay | AAYDS®',
    description:
      'Compassionate NDIS palliative care support in Moreton Bay. Personalised in-home assistance focused on dignity, comfort, and family reassurance.',
    blurb:
      'Compassionate in-home disability support for participants living with life-limiting conditions. We focus on comfort, dignity, and reducing stress for the whole family during a difficult time.',
    short: 'Comfort and dignity at home for participants with life-limiting conditions.',
    card: cardPalliative,
    square: sqPalliative,
    icon: 'heart',
    hero: {
      eyebrow: 'NDIS Registered Provider · Moreton Bay',
      title: 'Palliative Care Support That Comes to Your Home',
      intro: [
        'Compassionate, structured disability support for participants with life-limiting conditions delivered in Moreton Bay by a consistent, caring local team.',
      ],
      badges: ['NDIS Registered', 'Local Moreton Bay Team', 'Expert Support', 'In-Home Delivery'],
      image: heroPalliative,
      imageAlt: 'A support worker holding the hand of a participant at home',
      caption: 'Calm, consistent support in familiar surroundings.',
    },
    sections: [
      {
        type: 'intro',
        eyebrow: 'Understanding Your Support',
        title: 'What Is NDIS Palliative Care Support?',
        lead: "NDIS palliative care support funds disability-related daily assistance when a participant's needs increase due to complex or declining health conditions. It sits alongside medical treatment and is not a replacement for it.",
        items: [
          { title: 'Personal Care', text: 'Hygiene, grooming & daily routines' },
          { title: 'Daily Living', text: 'Structured in-home support routines' },
          { title: 'Meal Preparation', text: 'Nutritious meals & household help' },
          { title: 'Family Relief', text: 'Reducing pressure on informal carers' },
          { title: 'Mobility Assistance', text: 'Safe transfers & comfort support' },
          { title: 'Household Help', text: 'When appropriate & comfortable' },
        ],
      },
      {
        type: 'steps',
        eyebrow: 'How We Work',
        title: 'Our Approach to Palliative Support',
        lead: 'Calm, consistent, and respectful, so participants stay comfortable in familiar surroundings and families can focus on being together.',
        items: [
          { title: 'Carefully Matched Workers', text: 'We match participants with support workers who suit their personality, preferences, and care needs.' },
          { title: 'Consistent Carers', text: 'Where possible, the same support workers visit, reducing stress and building genuine familiarity.' },
          { title: 'Adaptive Support', text: 'As needs evolve, we adjust schedules and services without disruption to the participant or family.' },
          { title: 'Respectful Personal Care', text: 'Every routine is delivered with dignity, privacy, and patience, at the pace that suits the participant.' },
          { title: 'Clear Communication', text: 'Families and coordinators are kept informed at every stage - no surprises, no gaps.' },
          { title: 'Coordinator Collaboration', text: 'We work alongside support coordinators and allied health teams to deliver seamless, joined-up care.' },
        ],
      },
      {
        type: 'checklist',
        eyebrow: 'Eligibility',
        title: 'Who May Be Eligible for Support?',
        lead: 'Participants may be eligible for increased NDIS supports during palliative stages when disability-related needs increase.',
        items: [
          'You are under 65 and have an active NDIS plan',
          'Your need for personal care or in-home support has increased',
          'A plan review has identified a change in circumstances',
          'You have a permanent, life-limiting, or terminal condition causing significant functional impairment',
          'You require mobility, transfer, or comfort assistance',
          'Your family or informal carer needs additional support or relief',
        ],
        callout: {
          title: "Not sure what's covered in your plan?",
          text: 'Our team can work alongside your support coordinator to identify available options and assist with plan review requests.',
        },
        image: heroPalliative2,
        imageAlt: 'A support worker assisting a participant at home',
      },
      {
        type: 'checklist',
        eyebrow: 'For Families & Carers',
        title: 'Supporting Families During Difficult Times',
        lead: "When every moment matters, daily care tasks shouldn't fall entirely on your shoulders. We step in so you can focus on what's important.",
        items: [
          'Daily personal care and hygiene routines',
          'Household tasks and nutritious meal preparation',
          'Reliable, consistent in-home scheduling',
          'Reducing carer stress and burnout',
          'Clear, ongoing communication',
          'Respite periods so you can rest',
        ],
        tone: 'dark',
      },
      { type: 'team' },
      {
        type: 'features',
        eyebrow: 'Why AAYDS®',
        title: 'What Makes Us Different',
        lead: 'Families across Moreton Bay trust us for one reason: we put the person first, every time.',
        items: [
          { title: 'Truly Local', text: 'We are based in Moreton Bay, not a distant call centre. Our team understands your community and is close by when you need support.' },
          { title: 'Person Centred', text: 'Every plan, every shift, and every interaction is tailored to the individual, never a one-size-fits-all approach.' },
          { title: 'NDIS Registered', text: 'As a fully registered provider, we deliver compliant, high-quality services so you can use your funding with confidence.' },
          { title: 'Stable & Reliable', text: 'You can count on consistent support workers, dependable scheduling, and a team that shows up and follows through.' },
          { title: 'Compassion Led Care', text: 'Care is at the heart of everything we do. It guides how we hire, train, and support every participant.' },
          { title: 'Responsive Communication', text: 'Families and coordinators receive direct, timely updates, with clear communication at every step.' },
        ],
        note: 'Serving participants across Moreton Bay including Caboolture · Narangba · Morayfield · North Lakes · Redcliffe · Burpengary · Deception Bay and surrounding suburbs.',
      },
      {
        type: 'faq',
        eyebrow: 'Common Questions',
        title: 'Frequently Asked Questions',
        lead: 'Answers to the questions families most often ask us.',
        items: [
          { q: 'Can NDIS fund palliative care support?', a: "NDIS may fund disability-related daily supports where they relate to the participant's disability needs during palliative stages. Clinical and medical treatment is generally funded separately through Queensland Health or private health services. Our team can help you understand what may be covered in your current plan." },
          { q: 'How quickly can support be arranged?', a: 'We understand that time matters. We work as quickly as possible with families and support coordinators to organise services, and can often begin support within days once the plan and matching are confirmed.' },
          { q: 'Do I need to change my NDIS plan to access this support?', a: 'Not always. If you already have Core Supports funding in your plan, you may be able to access daily living supports immediately. Where needs have changed significantly, we can help you request a plan review.' },
          { q: 'Can NDIS support provide relief for family carers?', a: 'Yes. One of the most important roles our support workers play is providing relief to informal family carers. This allows families to rest, attend to their own wellbeing, or simply spend time together without the pressure of physical care tasks.' },
          { q: 'What is the difference between palliative care and disability support?', a: 'Palliative care is medical and clinical support focused on comfort and quality of life near the end of life. NDIS disability support covers the practical day-to-day assistance - personal care, mobility, meals, and household tasks - that helps a participant remain in their home with dignity. These two systems work alongside each other.' },
          { q: "Do you provide support in the participant's home?", a: "Yes. All support is delivered in the participant's home across the Moreton Bay region. Familiar surroundings matter, especially at this stage of life - we come to you." },
          { q: 'Which suburbs do you service?', a: 'We provide support across Moreton Bay including Caboolture, Narangba, Morayfield, North Lakes, Redcliffe, Burpengary, Deception Bay, and surrounding areas. Unsure if we service your suburb? Call us to confirm.' },
          { q: 'How do I get started with AAYDS®?', a: "Simply call us or send an enquiry. We'll have a no-pressure conversation about the participant's needs, review what may be available within the current NDIS plan, and map out next steps together. There is no obligation and no complicated process - just a conversation." },
        ],
      },
    ],
    cta: {
      title: 'Ready to Talk About In-Home Support?',
      text: 'Our Moreton Bay team is available to answer your questions, review your plan options, and arrange support at a pace that works for your family.',
    },
  },

  {
    slug: 'personal-care',
    title: 'Personal Care',
    menuTitle: 'Personal Care',
    seoTitle: 'NDIS Personal Care Services Moreton Bay | AAYDS®',
    description:
      'Compassionate NDIS personal care services in Moreton Bay. Tailored in-home support promoting dignity, independence & wellbeing with AAYDS®.',
    blurb:
      'Respectful daily assistance with hygiene, grooming, dressing, showering, and personal routines - delivered with sensitivity and consistency by a carefully matched support worker.',
    short: 'Respectful help with daily routines from a matched support worker.',
    card: cardPersonal,
    square: sqPersonal,
    icon: 'hand',
    hero: {
      eyebrow: 'NDIS Registered Provider · Moreton Bay',
      title: 'NDIS Personal Care Services in Moreton Bay',
      intro: [
        "At AAYDS®, our NDIS personal care services in Moreton Bay are designed to support participants with dignity, comfort, and daily independence. We understand that personal care is deeply personal - which is why our trained support workers focus on respectful, tailored assistance that aligns with each individual's preferences, routines, and NDIS goals.",
        'From morning routines to evening wind-down, our team delivers consistent, trustworthy care that helps participants feel confident and supported in their own home or community environment.',
      ],
      badges: ['NDIS Registered', 'Matched Support Workers', 'Dignity First', 'In-Home Delivery'],
      image: heroPersonal,
      imageAlt: 'An AAYDS support worker assisting a participant with personal care',
      caption: 'Personal care delivered with respect, never rushed.',
    },
    sections: [
      {
        type: 'list',
        eyebrow: 'Understanding Your Support',
        title: 'What Are NDIS Personal Care Services?',
        lead: 'Personal care under the NDIS refers to disability-related support that helps with daily self-care tasks. These supports enable participants to live safely and comfortably while preserving dignity and autonomy.',
        listTitle: 'Typical NDIS personal care may include:',
        items: [
          'Assistance with showering, bathing and toileting',
          'Grooming, dressing, and personal hygiene',
          'Mobility support and safe transfers',
          'Meal assistance during personal routines',
          'Continence and medication prompting',
        ],
        after: 'Our Moreton Bay-based team is trained to sensitively deliver these supports with respect and reliability.',
      },
      {
        type: 'list',
        eyebrow: 'Who It Helps',
        title: 'Who Can Benefit from Personal Care Support?',
        listTitle: 'Personal care support is suitable for NDIS participants who:',
        items: [
          'Require help with daily self-care tasks',
          'Have mobility challenges or chronic conditions',
          'Need supervised support to maintain personal routines',
          'Want to sustain independence at home',
          'Benefit from consistent, familiar support workers',
        ],
        after: "At AAYDS®, we tailor care plans to each participant's abilities, preferences, and lifestyle. Whether it's full assistance or prompts to build skills, our focus is on positive outcomes.",
        tone: 'tint',
      },
      {
        type: 'features',
        eyebrow: 'Why AAYDS®',
        title: 'Why Choose AAYDS® for Personal Care in Moreton Bay?',
        lead: 'Families and support coordinators trust AAYDS® because we combine local insight with professional care delivery:',
        items: [
          { title: 'Local, Person-Centred Support', text: 'We provide support that truly understands Moreton Bay families, routines, and lifestyle needs.' },
          { title: 'Matched Support Workers', text: 'We carefully match participants with support staff who fit personality, communication styles, and goals.' },
          { title: 'Dignity & Respect First', text: 'We prioritise respect in all interactions - no rushed care, no task-only mindset.' },
          { title: 'NDIS Competency', text: 'We understand NDIS requirements, documentation, and care alignment - making coordination smoother.' },
          { title: 'Reliable & Consistent Care', text: 'We minimise turnover, so participants build strong, familiar support relationships.' },
        ],
      },
      {
        type: 'steps',
        eyebrow: 'How It Works',
        title: 'How Personal Care Support Works',
        items: [
          { title: 'Understand Your Needs', text: 'We start with a care conversation, listening to your priorities.' },
          { title: 'Develop a Personalised Plan', text: 'Your NDIS goals shape the care plan, supported with clear documentation.' },
          { title: 'Match the Right Support Worker', text: 'We look at personality, skills, and routine needs - not just availability.' },
          { title: 'Deliver Care with Dignity', text: 'Our team visits regularly, with regular reviews and transparent communication.' },
        ],
        note: "If you're exploring NDIS personal care services in Moreton Bay and want personalised, respectful support that builds confidence and independence, we're here to help.",
      },
      {
        type: 'faq',
        eyebrow: 'Common Questions',
        title: 'Frequently Asked Questions',
        items: [
          { q: 'How does NDIS fund personal care?', a: 'NDIS may fund personal care supports under Core Supports when related to disability needs.' },
          { q: 'Do you provide in-home personal care in Moreton Bay?', a: 'Yes - our support team delivers in-home care and community support aligned with your plan.' },
          { q: 'How quickly can personal care start?', a: 'We aim to respond promptly based on your NDIS plan and availability of matched support workers.' },
          { q: 'Who is AAYDS®?', a: FAMILY_OWNED },
        ],
      },
    ],
    cta: {
      title: 'Ready to Arrange Personal Care Support?',
      text: 'Talk to our Moreton Bay team about your routines, preferences, and NDIS plan - no pressure, no obligation.',
    },
  },

  {
    slug: 'community-participation',
    title: 'Community Participation',
    menuTitle: 'Community Participation',
    seoTitle: 'NDIS Community Participation Moreton Bay | AAYDS®',
    description:
      'Empowering NDIS community participation in Moreton Bay. Inclusive social support, skill development & confidence building with AAYDS® tailored plans.',
    blurb:
      'Supported access to social activities, community events, interest groups, and everyday life beyond the home, helping participants build confidence and connections.',
    short: 'Supported access to social life, groups and skill-building activities.',
    card: cardCommunity,
    square: sqCommunity,
    icon: 'people',
    hero: {
      eyebrow: 'NDIS Registered Provider · Moreton Bay',
      title: 'NDIS Community Participation in Moreton Bay',
      intro: [
        "At AAYDS®, our NDIS community participation services in Moreton Bay are designed to support independence, social connection and meaningful engagement. We understand that participating in community life can unlock confidence, build social skills and create opportunities for growth - and that everyone's journey is unique.",
        'Through personalised planning and support, our experienced team helps NDIS participants access community activities, social groups, skill-building events and local opportunities that align with individual goals. Whether you want to develop friendships, learn new skills or simply engage more with your community, we are here to help.',
      ],
      badges: ['NDIS Registered', 'Local Knowledge', 'Confidence Building', 'Tailored Activities'],
      image: heroCommunity,
      imageAlt: 'An AAYDS participant enjoying a community outing',
      caption: 'Meaningful engagement, built around your interests.',
    },
    sections: [
      {
        type: 'list',
        eyebrow: 'Understanding Your Support',
        title: 'What Is NDIS Community Participation?',
        lead: 'NDIS community participation supports individuals to engage with local life and social opportunities. These supports are designed to help participants:',
        items: [
          'Build confidence and social skills',
          'Access community groups & events',
          'Participate in recreation, hobbies, and activities',
          'Develop real-world living skills',
          'Increase independence and wellbeing',
        ],
        after: "At AAYDS®, we understand that community participation is more than attending events - it's about meaningful engagement that aligns with each participant's personal goals and interests.",
      },
      {
        type: 'steps',
        eyebrow: 'How It Works',
        title: 'How Our Community Participation Support Works',
        items: [
          { title: 'Personalised Goal Setting', text: 'We begin with you - understanding your interests, preferences and what participation means to you.' },
          { title: 'Planning & Activity Matching', text: 'We help build plans that connect you to suitable groups, classes or community environments.' },
          { title: 'Support Delivery', text: 'Our skilled support staff accompany you, provide coaching where needed, and foster confidence.' },
          { title: 'Progress & Feedback', text: 'We regularly check in to make sure the activities remain meaningful and enjoyable.' },
        ],
      },
      {
        type: 'list',
        eyebrow: 'Who It Helps',
        title: 'Who Can Benefit from Community Participation Support?',
        listTitle: 'NDIS community participation in Moreton Bay is ideal for participants who:',
        items: [
          'Want to build social connections',
          'Feel isolated and want more engagement',
          'Wish to develop new skills or hobbies',
          'Are working toward independence goals',
          'Need structured support to access community spaces',
        ],
        after: 'Our flexible approach means we can support you in local groups, recreation centres, volunteer programs, classes, clubs and events throughout Moreton Bay and surrounding areas.',
        tone: 'tint',
      },
      {
        type: 'features',
        eyebrow: 'Why AAYDS®',
        title: 'Why Choose AAYDS® for Community Participation in Moreton Bay',
        items: [
          { title: 'Tailored Activities Based on You', text: "We don't believe in one-size-fits-all. We build participation plans around your interests." },
          { title: 'Trusted Support Staff', text: 'Our team is trained to offer supportive, respectful accompaniment to community activities.' },
          { title: 'Local Moreton Bay Knowledge', text: 'We know local activities, groups and opportunities that match individual preferences.' },
          { title: 'Confidence & Skill Building', text: 'We focus on real-world skills - communication, decision-making, self-advocacy and more.' },
          { title: 'Safety + Comfort First', text: 'We ensure safe, comfortable engagement tailored to your pace and comfort level.' },
        ],
      },
      {
        type: 'callout',
        eyebrow: 'Funding',
        title: 'How Funding Works',
        paragraphs: [
          'NDIS community participation is funded under Core Supports - Assistance with Social & Community Participation when included in your plan.',
          "If you're unsure whether your plan includes this support, our team can assist with plan navigation and discussions with your support coordinator.",
        ],
      },
      {
        type: 'areas',
        eyebrow: 'Service Area',
        title: 'Supporting Moreton Bay Participants & Families',
        lead: 'We are proud to provide community participation support across Moreton Bay and neighbouring suburbs including:',
        items: ['Morayfield', 'Narangba', 'Caboolture', 'North Lakes'],
        after: 'Our emphasis is on local opportunities that enrich lives - not generic activities that provide little value.',
      },
      {
        type: 'faq',
        eyebrow: 'Common Questions',
        title: 'Frequently Asked Questions',
        items: [
          { q: 'What activities can community participation include?', a: 'Community participation activities include clubs, classes, volunteer programs, social groups, recreation centres, workshops and local events - tailored to individual interests.' },
          { q: 'Do you provide support staff to accompany participants?', a: 'Yes. Our trained staff are available to support participants during community engagement activities based on support needs.' },
          { q: 'Can community participation help build skills?', a: 'Absolutely. Activities are chosen to support skill development, confidence and social connection as part of your NDIS goals.' },
          { q: 'Is this support available across Moreton Bay?', a: 'Yes. We support participants in Moreton Bay and nearby areas with flexible, tailored engagement options.' },
          { q: 'Who is AAYDS®?', a: FAMILY_OWNED },
        ],
      },
    ],
    cta: {
      title: 'Ready to Get More Involved in Your Community?',
      text: "Tell us what participation means to you and we'll build a plan around it - local, tailored, and at your pace.",
    },
  },

  {
    slug: 'domestic-assistance',
    title: 'Domestic Assistance',
    menuTitle: 'Domestic Assistance',
    seoTitle: 'NDIS Domestic Assistance Moreton Bay | AAYDS®',
    description:
      'Reliable NDIS domestic assistance in Moreton Bay. Tailored household support, cleaning, laundry & home help that boosts independence & wellbeing with AAYDS®.',
    blurb:
      'Help with cleaning, vacuuming, laundry, and household tasks so your home stays safe, clean, and comfortable - freeing you to focus on what matters most.',
    short: 'Cleaning, laundry and household help that keeps home safe and comfortable.',
    card: cardDomestic,
    square: sqDomestic,
    icon: 'home',
    hero: {
      eyebrow: 'NDIS Registered Provider · Moreton Bay',
      title: 'NDIS Domestic Assistance in Moreton Bay',
      intro: [
        'At AAYDS®, our NDIS domestic assistance in Moreton Bay is designed to help participants maintain a clean, safe and comfortable home environment - while preserving dignity, independence and quality of life. We understand that household tasks can be challenging for many NDIS participants, and our support is tailored to meet individual needs, routines, and goals with respect and reliability.',
        'Whether you need help with cleaning, laundry, meal prep support, or general household management, our team delivers structured assistance that reduces stress for both participants and families - so you can focus on what truly matters.',
      ],
      badges: ['NDIS Registered', 'Reliable Staff', 'Tailored Plans', 'In-Home Delivery'],
      image: heroDomestic,
      imageAlt: 'An AAYDS support worker helping with household tasks',
      caption: 'A clean, safe home without the stress.',
    },
    sections: [
      {
        type: 'list',
        eyebrow: 'Understanding Your Support',
        title: 'What Is NDIS Domestic Assistance?',
        lead: 'Domestic assistance under the NDIS refers to disability-related household support that helps participants complete everyday tasks at home. These supports enable participants to live safely, comfortably and with greater independence, supplementing personal care and other support services as needed.',
        listTitle: 'Typical domestic assistance may include:',
        items: [
          'Vacuuming, sweeping, mopping and surface cleaning',
          'Dishwashing and kitchen tidying',
          'Laundry, folding and linen changes',
          'General home organisation',
          'Household maintenance assistance',
          'Supporting a safe, comfortable environment',
        ],
        after: 'Our Moreton Bay-based team delivers these supports with care, respect and clear communication.',
      },
      {
        type: 'list',
        eyebrow: 'Who It Helps',
        title: 'Who Can Benefit from Domestic Assistance?',
        listTitle: 'NDIS domestic assistance is ideal for participants who:',
        items: [
          'Struggle with household tasks due to disability-related limitations',
          'Want to live independently in their own home',
          'Require help with daily household routines',
          'Need reliable, consistent in-home support',
        ],
        after: 'We tailor assistance to individual routines and preferences, creating personalised plans that support wellbeing and comfort.',
        tone: 'tint',
      },
      {
        type: 'steps',
        eyebrow: 'How It Works',
        title: 'How Our Domestic Assistance Works in Moreton Bay',
        items: [
          { title: 'Individualised Care Plans', text: 'We begin with a conversation to understand your living situation, preferences, and home support needs.' },
          { title: 'Clear Task Planning', text: 'From cleaning routines to laundry schedules, we help map out what needs to be done and when.' },
          { title: 'Matched Support Workers', text: 'We pair participants with support staff who fit personality, communication style, and household needs.' },
          { title: 'Ongoing Support & Review', text: 'Regular check-ins ensure your support is consistent, helpful, and aligned with your goals.' },
        ],
      },
      {
        type: 'features',
        eyebrow: 'Why AAYDS®',
        title: 'Why Choose AAYDS® for Domestic Assistance in Moreton Bay',
        items: [
          { title: 'Personalised Household Support', text: 'Your care plan is built around your home environment and lifestyle, not a one-size-fits-all template.' },
          { title: 'Respectful, Reliable Staff', text: 'Our trained support workers deliver assistance with professionalism, empathy, and reliability.' },
          { title: 'Local Insight', text: 'Being based around Moreton Bay means we understand local home support needs and community rhythms.' },
          { title: 'NDIS Aligned', text: 'We know how domestic assistance fits within NDIS Core Supports and work with your coordinator to align support.' },
          { title: 'Consistent Communication', text: 'We keep families informed with transparent reporting and dedicated care coordination.' },
        ],
      },
      {
        type: 'callout',
        eyebrow: 'Funding',
        title: 'How NDIS Funds Domestic Assistance',
        paragraphs: [
          'Domestic assistance is usually funded under NDIS Core Supports - Assistance with Daily Life when disability affects your ability to complete household tasks independently.',
          "If you're unsure whether your plan includes this support, our team can help you understand funding categories and discuss options with your support coordinator.",
          "If you're looking for NDIS domestic assistance in Moreton Bay that helps you maintain a safe and comfortable home, let's talk. Our team is here to support you with dignity and personalised care.",
        ],
      },
      {
        type: 'faq',
        eyebrow: 'Common Questions',
        title: 'Frequently Asked Questions',
        items: [
          { q: 'What tasks are included in domestic assistance?', a: 'Domestic assistance covers cleaning, laundry, dishes, general household tidying and other disability-related household help tailored to your plan.' },
          { q: 'Can domestic assistance be combined with personal care?', a: 'Yes. Domestic assistance often works alongside personal care supports to offer holistic daily living support.' },
          { q: 'How quickly can support begin?', a: 'Support commencement depends on availability and your NDIS plan details. Our team assists with fast coordination where possible.' },
          { q: 'Is this service available across Moreton Bay?', a: 'Yes. We provide domestic assistance across Moreton Bay and surrounding areas.' },
          { q: 'Who is AAYDS®?', a: FAMILY_OWNED },
        ],
      },
    ],
    cta: {
      title: 'Ready for Reliable Help at Home?',
      text: 'Tell us about your home and routines and we will map out the support that fits - aligned with your NDIS plan.',
    },
  },

  {
    slug: 'meal-prep',
    title: 'Meal Preparation',
    menuTitle: 'Meal Preparation',
    seoTitle: 'NDIS Meal Preparation Moreton Bay | Cooking Support Services',
    description:
      'NDIS meal preparation in Moreton Bay tailored to your dietary needs. Safe, structured cooking and food support under Core Supports. Contact AAYDS® today.',
    blurb:
      'Nutritious, preference-based meal planning and preparation at home - supporting daily health, dietary needs, and the simple comfort of a good meal.',
    short: 'Planning, cooking and food support tailored to your dietary needs.',
    card: cardMeal,
    square: sqMeal,
    icon: 'meal',
    hero: {
      eyebrow: 'NDIS Registered Provider · Moreton Bay',
      title: 'NDIS Meal Preparation in Moreton Bay',
      intro: [
        'At AAYDS®, our NDIS meal preparation in Moreton Bay is designed to help participants plan, prepare and enjoy nutritious meals safely at home. We understand that cooking and food preparation can be challenging due to disability-related limitations, and our support is tailored to individual abilities, preferences and dietary requirements.',
        'Our goal is simple: to promote independence, wellbeing and confidence in the kitchen while ensuring meals are safe, balanced and aligned with your needs.',
      ],
      badges: ['NDIS Registered', 'Safe Food Handling', 'Dietary Needs Met', 'Skill Building'],
      image: heroMeal,
      imageAlt: 'An AAYDS support worker preparing a meal with a participant',
      caption: 'Good food, safely prepared, at your own pace.',
    },
    sections: [
      {
        type: 'list',
        eyebrow: 'Understanding Your Support',
        title: 'What Is NDIS Meal Preparation Support?',
        lead: 'NDIS meal preparation support assists participants who require help with planning, preparing and cooking meals due to functional limitations.',
        listTitle: 'This support may include:',
        items: [
          'Assistance with meal planning',
          'Support with grocery list preparation',
          'Help with food preparation and cooking',
          'Portioning and safe food storage',
          'Support with adaptive cooking techniques',
          'Encouragement to build independent cooking skills',
        ],
        after: 'Meal preparation is typically funded under Core Supports - Assistance with Daily Life when it relates to disability-related needs.',
      },
      {
        type: 'features',
        eyebrow: "What's Included",
        title: 'What Does NDIS Meal Preparation Include?',
        lead: 'Our NDIS meal preparation services in Moreton Bay focus specifically on food-related support within the home environment.',
        items: [
          { title: 'Meal Planning', text: 'We assist with creating structured weekly meal plans that reflect dietary needs, preferences and health considerations.' },
          { title: 'Cooking Assistance', text: 'Participants receive hands-on or guided support during food preparation to ensure safe handling, correct techniques and kitchen confidence.' },
          { title: 'Nutritional Considerations', text: 'We accommodate special diets, allergies or sensitivities, cultural food preferences, and medical-related dietary requirements (as outlined in support plans).' },
          { title: 'Skill Development', text: 'Where appropriate, we encourage participants to build confidence and independence in the kitchen at their own pace.' },
        ],
      },
      {
        type: 'list',
        eyebrow: 'Eligibility',
        title: 'Who Can Access Meal Preparation Support?',
        listTitle: 'You may be eligible for meal preparation support if:',
        items: [
          'Your disability impacts your ability to cook safely',
          'You require assistance to plan or prepare meals',
          'You need structured support to maintain proper nutrition',
          'Your NDIS plan includes Core Supports funding',
        ],
        after: "If you're unsure whether your plan covers this support, our team can help you understand your funding and next steps.",
        tone: 'tint',
      },
      {
        type: 'callout',
        eyebrow: 'Funding',
        title: 'How Meal Preparation Is Funded Under the NDIS',
        paragraphs: [
          'Meal preparation is generally funded under Core Supports - Assistance with Daily Life.',
          "Funding may cover the support worker's time to assist with cooking and food preparation. Grocery costs are typically not included under NDIS funding.",
          'We work with participants, families and support coordinators to ensure services align with approved plan budgets.',
        ],
      },
      {
        type: 'features',
        eyebrow: 'Why AAYDS®',
        title: 'Why Choose AAYDS® for NDIS Meal Preparation in Moreton Bay?',
        items: [
          { title: 'Personalised Support', text: 'Every participant has unique dietary needs and preferences. We tailor support to suit your routine and comfort level.' },
          { title: 'Safe Food Handling Practices', text: 'Our team follows structured food safety guidelines to ensure meals are prepared hygienically and responsibly.' },
          { title: 'Focus on Independence', text: 'Where possible, we promote confidence-building and skill development within the kitchen environment.' },
          { title: 'Local & Reliable', text: 'As a trusted provider in Moreton Bay, we deliver consistent and dependable in-home support.' },
        ],
      },
      {
        type: 'faq',
        eyebrow: 'Common Questions',
        title: 'Frequently Asked Questions',
        items: [
          { q: 'Does the NDIS pay for groceries?', a: 'No. NDIS funding typically covers support worker assistance, not the cost of food itself.' },
          { q: 'Can meal preparation support include help with grocery planning?', a: 'Yes. We can assist with meal planning and preparing grocery lists as part of structured food support.' },
          { q: 'Is this service available throughout Moreton Bay?', a: 'Yes. We provide NDIS meal preparation services across Moreton Bay and surrounding areas.' },
          { q: 'Can I combine meal preparation with other supports?', a: 'Yes. Meal preparation can complement other Core Supports depending on your plan.' },
          { q: 'Who is AAYDS®?', a: FAMILY_OWNED },
        ],
      },
    ],
    cta: {
      title: 'Start NDIS Meal Preparation Support in Moreton Bay',
      text: "If you're looking for reliable, personalised NDIS meal preparation in Moreton Bay, our team is here to help you maintain healthy routines and greater independence at home. Contact AAYDS® today to discuss your support needs and funding options.",
    },
  },

  {
    slug: 'transportation',
    title: 'Transportation',
    menuTitle: 'Transportation',
    seoTitle: 'NDIS Transport Services Moreton Bay | Disability Transport',
    description:
      'Reliable NDIS transport services in Moreton Bay. Safe and structured disability transportation to appointments, community access and essential travel.',
    blurb:
      'Safe, reliable transport assistance for medical appointments, shopping, community activities, and everyday errands across the Moreton Bay region.',
    short: 'Safe, punctual transport to appointments, shopping and outings.',
    card: cardTransport,
    square: sqTransport,
    icon: 'car',
    hero: {
      eyebrow: 'NDIS Registered Provider · Moreton Bay',
      title: 'Driving Independence With Reliable Transportation Solutions',
      intro: [
        "Discover our reliable and accessible Transportation services tailored for individuals supported by the NDIS at AAYDS®. We understand the importance of mobility and independence, which is why our dedicated team offers safe and comfortable transportation solutions, accommodating wheelchair participants with ease.",
        "Whether it's medical appointments, social outings, or community activities, we ensure punctual and supportive transport that meets your needs. Our vehicles are equipped to handle diverse mobility requirements, providing peace of mind and convenience for our clients and their families.",
      ],
      badges: ['Wheelchair Accessible', 'Medical Appointments', 'Community Outings', 'Punctual & Safe'],
      image: heroTransport,
      imageAlt: 'An AAYDS wheelchair-accessible transport vehicle',
      caption: 'Accessible vehicles, dependable drivers.',
    },
    sections: [
      {
        type: 'gallery',
        eyebrow: 'Our Vehicles',
        title: 'Built for Every Mobility Need',
        lead: 'Choose AAYDS® for dependable transportation services that prioritise safety, accessibility, and personalised care, allowing you to navigate daily life with confidence and ease.',
        images: [
          { src: transport1, alt: 'AAYDS accessible transport vehicle' },
          { src: transport2, alt: 'AAYDS accessible transport vehicle, side view' },
          { src: transport3, alt: 'Wheelchair ramp on an AAYDS transport vehicle' },
          { src: transport4, alt: 'Interior of an AAYDS accessible transport vehicle' },
        ],
      },
      {
        type: 'features',
        eyebrow: 'What We Cover',
        title: 'Where We Can Take You',
        items: [
          { title: 'Medical Appointments', text: 'Punctual transport to GPs, specialists, allied health and hospital appointments.' },
          { title: 'Shopping & Errands', text: 'Groceries, banking, and the everyday errands that keep life running.' },
          { title: 'Social Outings', text: 'Visits to family and friends, cafes, clubs and community events.' },
          { title: 'Community Activities', text: 'Classes, programs and recreation across the Moreton Bay region.' },
        ],
      },
      {
        type: 'faq',
        eyebrow: 'Common Questions',
        title: 'Frequently Asked Questions',
        items: [
          { q: 'Are your vehicles wheelchair accessible?', a: 'Yes. Our vehicles are equipped to handle diverse mobility requirements and accommodate wheelchair participants with ease.' },
          { q: 'Which areas do you cover?', a: 'We provide transport across Moreton Bay and surrounding areas. Call us to confirm your suburb.' },
          { q: 'Who is AAYDS®?', a: FAMILY_OWNED },
        ],
      },
    ],
    cta: {
      title: 'Need Reliable Transport?',
      text: 'Talk to our team about regular or one-off trips and how transport fits within your NDIS plan.',
    },
  },

  {
    slug: 'gardening',
    title: 'Gardening',
    menuTitle: 'Gardening',
    seoTitle: 'NDIS Gardening Services Moreton Bay | Outdoor Yard Support',
    description:
      'Professional NDIS gardening services in Moreton Bay. Lawn mowing, yard maintenance and outdoor support tailored to your needs. Contact AAYDS® today.',
    blurb:
      'Regular garden maintenance including mowing, weeding, and tidying to keep outdoor spaces safe, accessible, and well-maintained for participants living at home.',
    short: 'Mowing, weeding and yard upkeep that keeps outdoor spaces safe.',
    card: cardGardening,
    square: sqGardening,
    icon: 'leaf',
    hero: {
      eyebrow: 'NDIS Registered Provider · Moreton Bay',
      title: 'NDIS Gardening Services in Moreton Bay',
      subtitle: 'Reliable Outdoor Support for a Safe & Well-Maintained Property',
      intro: [
        'Maintaining a safe and accessible outdoor space is essential for independent living. At AAYDS®, our NDIS gardening services in Moreton Bay provide structured, disability-related yard and garden maintenance that keeps your outdoor areas safe, functional and manageable.',
        'We focus strictly on outdoor gardening and yard maintenance support to reduce physical strain and improve accessibility.',
      ],
      badges: ['Safety First', 'Scheduled Upkeep', 'Accessibility Focused', 'NDIS Compliant'],
      image: heroGardening,
      imageAlt: 'An AAYDS worker maintaining a participant garden',
      caption: 'Safe, accessible outdoor spaces all year round.',
    },
    sections: [
      {
        type: 'features',
        eyebrow: "What's Included",
        title: 'What Is Included in Our Gardening Services?',
        items: [
          { title: 'Lawn Mowing & Grass Control', text: 'Prevents overgrowth, reduces pest risks and eliminates uneven surfaces that create trip hazards.' },
          { title: 'Weed Removal', text: 'Clearing invasive weeds from garden beds, pathways and entry points.' },
          { title: 'Hedge & Shrub Trimming', text: 'Maintaining clear access around ramps, driveways and walkways.' },
          { title: 'Outdoor Clean-Ups', text: 'Removal of leaves, debris and seasonal overgrowth to improve safety.' },
        ],
      },
      {
        type: 'callout',
        eyebrow: 'Funding',
        title: 'How NDIS Gardening Support Is Funded',
        paragraphs: [
          'Funding applies when the need is disability-related, the participant cannot reasonably perform the task independently, and the support is considered reasonable and necessary.',
        ],
      },
      {
        type: 'checklist',
        eyebrow: 'Safety',
        title: 'Why Gardening Support Matters for Safety & Accessibility',
        items: ['Prevents slips and falls', 'Improves wheelchair access', 'Reduces pest infestations', 'Protects property condition'],
        tone: 'dark',
      },
      {
        type: 'features',
        eyebrow: 'Why AAYDS®',
        title: 'Why Choose AAYDS® in Moreton Bay?',
        items: [
          { title: 'Local Experience', text: "We understand Moreton Bay's seasonal growth patterns and property needs." },
          { title: 'Safety-First Approach', text: 'Our focus is hazard reduction and accessibility - not cosmetic landscaping.' },
          { title: 'Structured Maintenance', text: 'Scheduled upkeep to prevent overgrowth before it becomes unsafe.' },
          { title: 'NDIS-Compliant Service', text: 'Delivered within an approved framework aligned with participant goals.' },
        ],
      },
      {
        type: 'faq',
        eyebrow: 'Common Questions',
        title: 'Frequently Asked Questions',
        items: [
          { q: 'Does the NDIS cover lawn mowing in Moreton Bay?', a: 'Yes. Lawn mowing is typically covered under Core Supports - Assistance with Daily Life when it is disability-related and considered reasonable and necessary within your approved NDIS plan.' },
          { q: 'Can gardening services be scheduled regularly?', a: 'Yes. Many participants choose ongoing scheduled maintenance to prevent overgrowth and ensure outdoor areas remain safe and accessible year-round.' },
          { q: 'Is this service cosmetic landscaping?', a: 'No. Our focus is strictly on safety, accessibility and necessary yard maintenance - not decorative landscaping or aesthetic redesign projects.' },
          { q: 'Do you provide NDIS gardening services near me in Moreton Bay?', a: 'Yes. We provide structured NDIS gardening services throughout Burpengary and surrounding suburbs.' },
          { q: 'Who is AAYDS®?', a: FAMILY_OWNED },
        ],
      },
    ],
    cta: {
      title: 'Book NDIS Gardening Services in Moreton Bay',
      text: 'Reliable, structured and safety-focused outdoor maintenance tailored to your needs.',
    },
  },

  {
    slug: 'sil',
    title: 'Supported Independent Living',
    menuTitle: 'Supported Independent Living',
    seoTitle: 'Supported Independent Living Moreton Bay | AAYDS®',
    description:
      'NDIS Supported Independent Living in Moreton Bay. Personalised SIL accommodation, trusted support teams, and compassionate disability care with AAYDS®.',
    blurb:
      'Structured disability support that helps participants live more independently with assistance for daily routines, personal care, household tasks, and community participation.',
    short: 'Structured daily support that builds independence in a stable home.',
    card: cardSil,
    square: sqSil,
    icon: 'key',
    hero: {
      eyebrow: 'NDIS Registered Provider · Moreton Bay',
      title: 'Supported Independent Living in Moreton Bay',
      intro: [
        'At AAYDS®, we provide personalised Supported Independent Living in Moreton Bay for NDIS participants who need structured daily support while maintaining autonomy and dignity. Our SIL accommodation model is built around carefully matched support teams, ensuring every resident feels safe, understood, and empowered.',
        "We don't believe in generic staffing rotations. We build consistent support environments where individuals can develop life skills, build confidence, and move toward greater independence - all within a supportive, community-focused setting in Moreton Bay and surrounding areas.",
      ],
      badges: ['NDIS Registered', 'Matched Support Teams', 'Consistent Staffing', 'Dignity First'],
      image: heroSil,
      imageAlt: 'An AAYDS participant in a supported independent living home',
      caption: 'A stable home, a consistent team.',
    },
    sections: [
      {
        type: 'list',
        eyebrow: 'Understanding Your Support',
        title: 'What Is Supported Independent Living (SIL)?',
        lead: 'Supported Independent Living (SIL) is an NDIS-funded support designed for individuals who require daily assistance while living in a shared or individual home environment.',
        listTitle: 'SIL typically includes:',
        items: [
          'Assistance with personal care and daily routines',
          'Support with household tasks and meal preparation',
          'Medication prompting and wellbeing monitoring',
          'Skill development for greater independence',
          'Community access and social participation',
        ],
        after: "At AAYDS®, our SIL services in Moreton Bay are structured to align with each participant's NDIS goals and funding category under Core Supports.",
      },
      {
        type: 'list',
        eyebrow: 'Our Difference',
        title: 'Personalised SIL Accommodation in Moreton Bay',
        lead: 'Choosing a supported independent living provider in Moreton Bay is a major decision for families and support coordinators.',
        listTitle: 'What makes AAYDS® different:',
        items: [
          'Carefully matched support teams for stability and trust',
          'Consistent staffing to reduce disruption',
          'Individualised support planning',
          'Respectful, dignity-first care approach',
          'Strong communication with families and coordinators',
        ],
        after: 'We prioritise long-term relationship building, not shift-filling. Our SIL accommodation approach ensures every resident receives the right level of support while maintaining control over their daily life.',
        tone: 'tint',
      },
      {
        type: 'list',
        eyebrow: 'Eligibility',
        title: 'Who Is Eligible for SIL Under the NDIS?',
        listTitle: 'SIL funding is generally suitable for participants who:',
        items: [
          'Require daily or overnight support',
          'Need assistance with personal care or behavioural support',
          'Benefit from structured living environments',
          'Have SIL funding included in their NDIS plan',
        ],
        after: 'If you are unsure whether SIL funding applies, our team can guide you through the eligibility process and help coordinate with your support coordinator.',
      },
      {
        type: 'steps',
        eyebrow: 'How We Work',
        title: 'Our Approach to Supported Independent Living',
        lead: 'As a local NDIS SIL provider in Moreton Bay, AAYDS® focuses on:',
        items: [
          { title: 'Understand', text: "Understanding the participant's goals and support needs." },
          { title: 'Match', text: 'Matching the right support workers.' },
          { title: 'Create', text: 'Creating a safe and structured home environment.' },
          { title: 'Encourage', text: 'Encouraging skill development and independence.' },
          { title: 'Communicate', text: 'Maintaining transparent communication with families.' },
        ],
        note: 'We serve participants across Moreton Bay and nearby areas including Morayfield, Narangba, and Caboolture.',
      },
      {
        type: 'checklist',
        eyebrow: 'Why AAYDS®',
        title: 'Why Families in Moreton Bay Choose AAYDS®',
        lead: 'Families trust AAYDS® because we combine compassion with structure.',
        items: [
          'Local, community-based provider',
          'Deep understanding of NDIS compliance',
          'Personalised support plans',
          'Focus on wellbeing, safety, and long-term growth',
          'Dedicated support teams, not rotating staff pools',
        ],
        after: 'Our goal is simple: provide Supported Independent Living in Moreton Bay that promotes independence without compromising safety or dignity.',
        tone: 'dark',
      },
      {
        type: 'faq',
        eyebrow: 'Common Questions',
        title: 'Frequently Asked Questions',
        items: [
          { q: 'What does SIL include in Moreton Bay?', a: 'SIL includes daily personal care support, assistance with household tasks, skill development, and structured supervision based on NDIS-approved funding.' },
          { q: 'Is SIL accommodation available in Moreton Bay?', a: 'Yes. AAYDS® provides supported independent living arrangements in Moreton Bay and surrounding suburbs, depending on availability and participant compatibility.' },
          { q: 'How do I apply for Supported Independent Living?', a: "SIL funding must be included in the participant's NDIS plan. We can assist families and support coordinators with documentation and transition planning." },
          { q: 'Who is AAYDS®?', a: FAMILY_OWNED },
        ],
      },
    ],
    cta: {
      title: 'Exploring Supported Independent Living?',
      text: 'Talk to our team about availability, compatibility, and how SIL funding in your plan can be put to work.',
    },
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
