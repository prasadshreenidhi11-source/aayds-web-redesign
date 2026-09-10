import Reveal from './Reveal'

// Eyebrow + headline + lead, matching the home page's section headers.
// `accent` wraps the last word(s) of the title in the brand gradient.
export default function SectionHeading({ eyebrow, title, accent, lead, align = 'center', tone = 'light', className = '' }) {
  const dark = tone === 'dark'
  const alignCls = align === 'left' ? 'text-left' : 'mx-auto text-center'
  return (
    <Reveal className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <span
          className={`font-label inline-block rounded-full px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.25em] ${
            dark ? 'bg-white/10 text-white/80 ring-1 ring-white/15' : 'bg-brand-tint text-brand-deep ring-1 ring-brand-deep/10'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
        {accent && (
          <>
            {' '}
            <span className={dark ? 'text-brand-light' : 'bg-gradient-to-r from-brand-deep via-brand-primary to-brand-primary bg-clip-text text-transparent'}>
              {accent}
            </span>
          </>
        )}
      </h2>
      {lead && <p className={`mt-5 font-body text-base leading-relaxed sm:text-lg ${dark ? 'text-white/70' : 'text-ink/60'}`}>{lead}</p>}
    </Reveal>
  )
}
