import { Link } from 'react-router-dom'

export function ArrowIcon({ className = '' }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const variants = {
  primary:
    'bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/40',
  outline: 'border border-brand-deep/15 text-brand-deep hover:border-brand-primary/40 hover:bg-brand-tint/60',
  white: 'bg-white text-brand-deep hover:bg-brand-light',
  ghost: 'border border-white/25 text-white hover:bg-white/10',
}

// Pill button used across the site. Renders a router <Link> for internal
// paths and a plain <a> for tel:/mailto:/external hrefs.
export default function Button({ to, href, variant = 'primary', size = 'md', arrow = false, className = '', children, ...rest }) {
  const sizeCls = size === 'sm' ? 'px-5 py-3 text-sm' : size === 'lg' ? 'px-7 py-4 text-sm' : 'px-6 py-3.5 text-sm'
  const cls = `group/btn inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizeCls} ${className}`
  const inner = (
    <>
      {children}
      {arrow && <ArrowIcon className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  const external = href && /^https?:/.test(href)
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {inner}
    </a>
  )
}
