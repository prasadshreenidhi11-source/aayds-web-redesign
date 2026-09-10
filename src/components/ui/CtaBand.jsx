import Reveal from './Reveal'
import Button from './Button'
import { site } from '../../data/site'

// Closing call-to-action for inner pages. Same dotted card as the home
// page's FinalCTA, with per-page copy.
export default function CtaBand({ eyebrow = 'GET STARTED TODAY', title, text, primary, secondary }) {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2.5rem] bg-[#f3f6fc] px-6 py-16 text-center ring-1 ring-black/5 sm:px-8 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(rgba(2,69,194,0.1) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-light blur-3xl" />

        <Reveal className="relative mx-auto max-w-2xl">
          <span className="font-label inline-block rounded-full bg-brand-tint px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-brand-deep ring-1 ring-brand-deep/10">
            {eyebrow}
          </span>
          <h2 className="font-display mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl">{title}</h2>
          {text && <p className="mt-5 font-body text-base leading-relaxed text-ink/60 sm:text-lg">{text}</p>}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {primary || (
              <Button href={site.phoneHref} size="lg">
                Call {site.phoneDisplay}
              </Button>
            )}
            {secondary || (
              <Button to="/contact-us" variant="outline" size="lg" arrow>
                Request a Callback
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
