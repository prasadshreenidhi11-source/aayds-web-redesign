import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo-900.webp'
import { services } from '../data/services'
import { site } from '../data/site'
import { EASE } from '../lib/motion'
import Icon from './ui/Icon'
import Button from './ui/Button'

const primaryLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', mega: true },
  { label: 'About Us', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  {
    label: 'Contact',
    to: '/contact-us',
    menu: [
      { label: 'Contact Us', to: '/contact-us', text: 'Call, email or send an enquiry', icon: 'phone' },
      { label: 'Participant Referral', to: '/participant-referral', text: 'Refer yourself or someone you support', icon: 'doc' },
    ],
  },
]

const panelMotion = {
  initial: { opacity: 0, y: 10, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: EASE } },
  exit: { opacity: 0, y: 6, scale: 0.995, transition: { duration: 0.18, ease: EASE } },
}

const linkCls = ({ isActive }) =>
  `relative -my-3 flex items-center gap-1 whitespace-nowrap py-3 font-body text-sm font-medium transition-colors duration-200 ${
    isActive ? 'text-brand-primary' : 'text-ink/80 hover:text-brand-primary'
  }`

function MegaMenu({ onClose }) {
  return (
    <motion.div {...panelMotion} role="region" aria-label="Services menu" className="absolute left-0 right-0 top-full pt-3">
      <div className="mx-auto max-w-[1400px] px-2">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-brand-deep/15 ring-1 ring-black/5">
          <div className="grid xl:grid-cols-[1.1fr_3fr_1.1fr]">
            {/* Intro column */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep p-8 text-white">
              <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
              <span className="font-label text-[0.7rem] tracking-[0.25em] text-white/60">WHAT WE OFFER</span>
              <p className="font-display mt-4 text-2xl font-extrabold leading-tight">Eight NDIS services, all delivered in your home.</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/70">
                Every service is funded through your NDIS plan and delivered by a consistent, local Moreton Bay team.
              </p>
              <Link
                to="/services"
                onClick={onClose}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-body text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-light"
              >
                View all services
                <Icon name="arrow" size={14} strokeWidth={2} />
              </Link>
            </div>

            {/* Service grid */}
            <ul className="grid grid-cols-4 gap-1 p-4">
              {services.map((s, i) => (
                <motion.li key={s.slug} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.04 + i * 0.03, duration: 0.3, ease: EASE } }}>
                  <Link
                    to={`/${s.slug}`}
                    onClick={onClose}
                    className="group flex h-full flex-col gap-3 rounded-2xl p-3 transition-colors duration-200 hover:bg-[#f3f6fc] focus-visible:bg-[#f3f6fc]"
                  >
                    <span className="relative aspect-[5/3] w-full overflow-hidden rounded-xl">
                      <img src={s.square} alt="" width="640" height="640" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
                      <span className="absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-brand-deep shadow-sm">
                        <Icon name={s.icon} size={14} strokeWidth={1.8} />
                      </span>
                    </span>
                    <span>
                      <span className="flex items-center gap-1 font-display text-sm font-bold text-ink group-hover:text-brand-primary">
                        {s.menuTitle}
                        <Icon name="arrow" size={12} strokeWidth={2} className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      </span>
                      <span className="mt-1 block font-body text-xs leading-snug text-ink/55">{s.short}</span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Get started column */}
            <div className="flex flex-col justify-between gap-6 border-t border-black/5 bg-[#f3f6fc] p-8 xl:border-l xl:border-t-0">
              <div>
                <span className="font-label text-[0.7rem] tracking-[0.25em] text-brand-deep/60">GET STARTED</span>
                <p className="font-display mt-4 text-lg font-bold text-ink">Not sure which service fits?</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">Talk to our team about your plan and goals. No pressure, no obligation.</p>
              </div>
              <div className="space-y-3">
                <a href={site.phoneHref} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white">
                    <Icon name="phone" size={16} />
                  </span>
                  <span>
                    <span className="block font-body text-[0.7rem] uppercase tracking-wider text-ink/50">Call us</span>
                    <span className="block font-display text-base font-bold text-brand-deep">{site.phoneDisplay}</span>
                  </span>
                </a>
                <Link to="/participant-referral" onClick={onClose} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-tint text-brand-deep">
                    <Icon name="doc" size={16} />
                  </span>
                  <span>
                    <span className="block font-body text-[0.7rem] uppercase tracking-wider text-ink/50">Online</span>
                    <span className="block font-display text-base font-bold text-ink">Participant Referral</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Dropdown({ items, onClose }) {
  return (
    <motion.div {...panelMotion} className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
      <ul className="w-72 overflow-hidden rounded-[1.5rem] bg-white p-2 shadow-2xl shadow-brand-deep/15 ring-1 ring-black/5">
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to} onClick={onClose} className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-[#f3f6fc]">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand-deep transition-colors group-hover:bg-gradient-to-br group-hover:from-brand-deep group-hover:via-brand-primary group-hover:to-brand-deep group-hover:text-white">
                <Icon name={it.icon} size={16} />
              </span>
              <span>
                <span className="block font-display text-sm font-bold text-ink group-hover:text-brand-primary">{it.label}</span>
                <span className="block font-body text-xs text-ink/55">{it.text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ---------------- Mobile / tablet drawer ---------------- */

function DrawerSection({ label, expanded, onToggle, children }) {
  return (
    <li className="rounded-2xl bg-[#f3f6fc]/70">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
      >
        <span className="font-display text-lg font-bold text-ink">{label}</span>
        <span className={`flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-deep shadow-sm transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
          <Icon name="chevron" size={16} strokeWidth={2.2} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

function Drawer({ onClose }) {
  const [section, setSection] = useState('Services')
  const toggle = (l) => setSection((s) => (s === l ? null : l))
  const activeCls = ({ isActive }) =>
    `flex items-center justify-between rounded-2xl px-4 py-4 font-display text-lg font-bold transition-colors ${
      isActive ? 'bg-brand-tint text-brand-primary' : 'text-ink hover:bg-[#f3f6fc]'
    }`

  return (
    <>
      <motion.div
        key="scrim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-brand-deep/40 backdrop-blur-sm xl:hidden"
      />
      <motion.aside
        key="drawer"
        initial={{ x: '100%' }}
        animate={{ x: 0, transition: { duration: 0.4, ease: EASE } }}
        exit={{ x: '100%', transition: { duration: 0.28, ease: EASE } }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl xl:hidden"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
          <img src={logo} alt="All About You Disability Support" className="h-6 w-auto max-w-[65%] object-contain object-left" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3f6fc] text-brand-deep transition-colors hover:bg-brand-tint"
          >
            <Icon name="close" size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile">
          <ul className="space-y-2">
            <li>
              <NavLink to="/" end className={activeCls}>
                Home
                <Icon name="arrow" size={16} strokeWidth={2} className="text-ink/30" />
              </NavLink>
            </li>

            <DrawerSection label="Services" expanded={section === 'Services'} onToggle={() => toggle('Services')}>
              <ul className="grid grid-cols-2 gap-2">
                {services.map((s, i) => (
                  <motion.li key={s.slug} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.03 * i, duration: 0.3 } }}>
                    <Link to={`/${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-all active:scale-[0.98]">
                      <span className="relative aspect-[16/9] w-full overflow-hidden">
                        <img src={s.square} alt="" width="640" height="640" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/50 to-transparent" />
                        <span className="absolute bottom-1.5 left-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-brand-deep">
                          <Icon name={s.icon} size={12} strokeWidth={2} />
                        </span>
                      </span>
                      <span className="flex flex-1 items-center px-3 py-2.5 font-body text-[0.8rem] font-semibold leading-snug text-ink">{s.menuTitle}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link to="/services" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-body text-sm font-semibold text-brand-deep shadow-sm ring-1 ring-black/5">
                View all services
                <Icon name="arrow" size={14} strokeWidth={2} />
              </Link>
            </DrawerSection>

            <li>
              <NavLink to="/about" className={activeCls}>
                About Us
                <Icon name="arrow" size={16} strokeWidth={2} className="text-ink/30" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={activeCls}>
                Blog
                <Icon name="arrow" size={16} strokeWidth={2} className="text-ink/30" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={activeCls}>
                Careers
                <Icon name="arrow" size={16} strokeWidth={2} className="text-ink/30" />
              </NavLink>
            </li>

            <DrawerSection label="Contact" expanded={section === 'Contact'} onToggle={() => toggle('Contact')}>
              <ul className="space-y-2">
                {primaryLinks[5].menu.map((it) => (
                  <li key={it.to}>
                    <Link to={it.to} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand-deep">
                        <Icon name={it.icon} size={16} />
                      </span>
                      <span>
                        <span className="block font-display text-sm font-bold text-ink">{it.label}</span>
                        <span className="block font-body text-xs text-ink/55">{it.text}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </DrawerSection>

            <li>
              <NavLink to="/privacy-policy" className="block rounded-2xl px-4 py-3 font-body text-sm text-ink/60 hover:bg-[#f3f6fc]">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Bottom actions */}
        <div className="border-t border-black/5 p-4">
          <div className="grid grid-cols-2 gap-3">
            <Button href={site.phoneHref} className="w-full">
              <Icon name="phone" size={15} />
              Call us
            </Button>
            <Button to="/contact-us" variant="outline" className="w-full">
              Callback
              <Icon name="arrow" size={14} strokeWidth={2} />
            </Button>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <a href={site.phoneHref} className="font-display text-base font-bold text-brand-deep">
              {site.phoneDisplay}
            </a>
            <div className="flex gap-2">
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="AAYDS on Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f6fc] text-brand-deep">
                <Icon name="facebook" size={16} />
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="AAYDS on Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f6fc] text-brand-deep">
                <Icon name="instagram" size={16} />
              </a>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  )
}

/* ---------------- Header ---------------- */

export default function Header() {
  const [open, setOpen] = useState(null) // 'Services' | 'Contact' | null
  const [mobile, setMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef(null)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on navigation.
  useEffect(() => {
    setOpen(null)
    setMobile(false)
  }, [location.pathname])

  // Escape closes; clicking outside closes; resizing past the breakpoint closes the drawer.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setOpen(null), setMobile(false))
    const onClick = (e) => navRef.current && !navRef.current.contains(e.target) && setOpen(null)
    const mq = window.matchMedia('(min-width: 1280px)')
    const onMq = () => mq.matches && setMobile(false)
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onClick)
    mq.addEventListener('change', onMq)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onClick)
      mq.removeEventListener('change', onMq)
    }
  }, [])

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [mobile])

  const show = (label) => {
    clearTimeout(closeTimer.current)
    setOpen(label)
  }
  const hide = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(null), 120)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 shadow-lg shadow-brand-deep/5 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div ref={navRef} className="relative mx-auto max-w-[1400px] overflow-x-clip px-4 sm:px-8">
        <div className="flex items-center justify-between gap-3 px-1 py-3 sm:px-2 sm:py-4">
          <Link to="/" className="shrink-0" aria-label="AAYDS home">
            <img
              src={logo}
              alt="All About You Disability Support"
              className="h-7 w-auto max-w-[58vw] object-contain object-left sm:h-8 sm:max-w-[320px] xl:max-w-[270px] 2xl:h-9 2xl:max-w-none"
            />
          </Link>

          {/* Desktop nav: only where all six items plus actions fit on one line. */}
          <nav className="hidden items-center gap-6 xl:flex 2xl:gap-8" aria-label="Primary">
            {primaryLinks.map((l) => {
              const hasPanel = l.mega || l.menu
              const isOpen = open === l.label
              return (
                <div
                  key={l.label}
                  className={hasPanel ? (l.mega ? 'static' : 'relative') : ''}
                  onMouseEnter={hasPanel ? () => show(l.label) : undefined}
                  onMouseLeave={hasPanel ? hide : undefined}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={linkCls}
                    aria-haspopup={hasPanel ? 'true' : undefined}
                    aria-expanded={hasPanel ? isOpen : undefined}
                    onFocus={hasPanel ? () => show(l.label) : undefined}
                    onKeyDown={
                      hasPanel
                        ? (e) => {
                            if (e.key === 'ArrowDown') {
                              e.preventDefault()
                              show(l.label)
                            }
                          }
                        : undefined
                    }
                  >
                    {l.label}
                    {hasPanel && <Icon name="chevron" size={14} strokeWidth={2} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />}
                    <span className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-brand-deep to-brand-primary transition-all duration-300 ${isOpen ? 'w-full' : 'w-0'}`} />
                  </NavLink>
                  <AnimatePresence>
                    {isOpen && l.mega && <MegaMenu key="mega" onClose={() => setOpen(null)} />}
                    {isOpen && l.menu && <Dropdown key="drop" items={l.menu} onClose={() => setOpen(null)} />}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Phone: icon-only until there is room for the number. */}
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phoneDisplay}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-md shadow-brand-primary/25 transition-transform hover:-translate-y-0.5 sm:h-11 sm:w-11 md:bg-none md:bg-white md:text-brand-deep md:shadow-sm md:ring-1 md:ring-black/5 md:hover:text-brand-primary 2xl:h-auto 2xl:w-auto 2xl:gap-2 2xl:bg-transparent 2xl:px-1 2xl:font-body 2xl:text-sm 2xl:font-semibold 2xl:shadow-none 2xl:ring-0"
            >
              <Icon name="phone" size={16} />
              <span className="hidden 2xl:inline">{site.phoneDisplay}</span>
            </a>
            <Link
              to="/contact-us"
              className="hidden whitespace-nowrap rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep px-5 py-3 font-body text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 transition-all duration-300 hover:-translate-y-0.5 md:inline-flex md:items-center"
            >
              Request a Callback
            </Link>
            <button
              type="button"
              onClick={() => setMobile(true)}
              aria-label="Open menu"
              aria-expanded={mobile}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-deep shadow-sm ring-1 ring-black/5 transition-colors hover:bg-brand-tint sm:h-11 sm:w-11 xl:hidden"
            >
              <Icon name="menu" size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>{mobile && <Drawer onClose={() => setMobile(false)} />}</AnimatePresence>
    </header>
  )
}
