import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import logo from '../assets/logo-900.webp'
import awardBadge from '../assets/award-badge.webp'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Participant Referral', href: '/participant-referral' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

const socialLinks = [
  { label: 'Facebook', href: site.facebook, path: 'M13.5 9H15V6.5h-1.5C11.6 6.5 10.5 7.6 10.5 9.5V11H9v2.5h1.5V19h2.5v-5.5H15L15.5 11h-2v-1c0-.6.2-1 1-1z' },
  { label: 'Instagram', href: site.instagram, path: 'M12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4zm0 6.1a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zm4.7-6.3a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0zM20 8.3c-.06-1.2-.33-2.27-1.2-3.14-.87-.87-1.94-1.14-3.14-1.2C14.5 3.9 9.5 3.9 8.34 3.96c-1.2.06-2.26.33-3.14 1.2-.87.87-1.13 1.94-1.2 3.14C3.9 9.5 3.9 14.5 3.96 15.66c.06 1.2.33 2.26 1.2 3.14.87.87 1.94 1.13 3.14 1.2 1.16.06 6.16.06 7.32 0 1.2-.06 2.27-.33 3.14-1.2.87-.87 1.14-1.94 1.2-3.14.06-1.16.06-6.16 0-7.36zm-1.85 8.94c-.26.66-.77 1.17-1.43 1.44-.99.39-3.34.3-4.42.3s-3.44.08-4.42-.3a2.55 2.55 0 0 1-1.43-1.44c-.39-.99-.3-3.34-.3-4.42s-.08-3.44.3-4.42c.26-.66.77-1.17 1.43-1.44.99-.39 3.34-.3 4.42-.3s3.44-.08 4.42.3c.66.26 1.17.77 1.44 1.43.39.99.3 3.34.3 4.42s.08 3.44-.3 4.43z' },
]

const serviceAreas = [
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

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } }),
}

function SocialIcon({ path }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-transparent hover:bg-white hover:text-brand-deep">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </span>
  )
}

function FooterLink({ href, children }) {
  const cls = 'group relative -my-3 inline-block py-3 font-body text-sm text-white/65 transition-colors duration-300 hover:text-white'
  const underline = <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={cls}>
        {children}
        {underline}
      </Link>
    )
  }
  return (
    <a href={href} className={cls}>
      {children}
      {underline}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="animate-gradient relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep px-4 pt-20 pb-10 sm:px-6 lg:px-10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-1/2 w-full -translate-x-1/2 select-none whitespace-nowrap text-center font-display text-[7rem] font-extrabold leading-none text-white/[0.04] sm:text-[11rem] lg:text-[13rem]"
      >
        AAYDS
      </span>
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-primary/20 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-12 text-center sm:flex-row sm:text-left"
        >
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={logo}
              alt="All About You Disability Support"
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-[300px] brightness-0 invert sm:max-w-[420px]"
            />
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-white/55">
              A family owned and operated NDIS provider, delivering personalised
              disability support across Moreton Bay with genuine care.
            </p>
          </div>
          <img
            src={awardBadge}
            alt="APAC Insider Australian CEO Excellence Awards 2026 - Disability Support Leader of the Year, South East QLD"
            loading="lazy"
            decoding="async"
            width="176"
            height="176"
            className="h-36 w-36 shrink-0 sm:h-44 sm:w-44"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-[0.8fr_1.6fr_1fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.05}>
            <h3 className="font-label text-xs tracking-[0.25em] text-white/40">QUICK LINKS</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1}>
            <h3 className="font-label text-xs tracking-[0.25em] text-white/40">SERVICE AREAS</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 font-body text-xs font-medium text-white/65 transition-colors duration-300 hover:border-white/30 hover:text-white"
                >
                  {a}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.15}>
            <h3 className="font-label text-xs tracking-[0.25em] text-white/40">GET IN TOUCH</h3>
            <a href="tel:+611300593206" className="mt-5 inline-block py-2 font-display text-2xl font-bold text-white">
              1300 593 206
            </a>
            <a href={`mailto:${site.emailAdmin}`} className="mt-1 inline-block py-2 font-body text-sm text-white/65 transition-colors hover:text-white">
              {site.emailAdmin}
            </a>
            <a
              href="tel:+611300593206"
              className="mt-5 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 font-body text-sm font-semibold text-brand-deep transition-colors duration-300 hover:bg-brand-light"
            >
              Call Now
            </a>
            {socialLinks.some((s) => s.href) && (
              <div className="mt-6 flex gap-3">
                {socialLinks
                  .filter((s) => s.href)
                  .map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`AAYDS on ${s.label}`}>
                      <SocialIcon path={s.path} />
                    </a>
                  ))}
              </div>
            )}
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-body text-xs text-white/40">Copyright &copy; 2026 All About You Disability&reg; Support.</p>
          <p className="font-body text-xs text-white/40">Designed by &copy; Shopamarketing</p>
        </div>
      </div>
    </footer>
  )
}
