import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import Icon from './Icon'
import { EASE } from '../../lib/motion'

// Accessible accordion. One item open at a time, keyboard operable, and the
// FAQ schema is emitted so search engines can show rich results.
export default function Faq({ items, id = 'faq' }) {
  const [open, setOpen] = useState(0)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
  }
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ul className="space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i
          const btnId = `${id}-btn-${i}`
          const panelId = `${id}-panel-${i}`
          return (
            <Reveal as="li" key={it.q} delay={0.04 * i} className={`overflow-hidden rounded-[1.5rem] bg-white ring-1 transition-shadow duration-300 ${isOpen ? 'shadow-lg shadow-brand-deep/8 ring-brand-primary/20' : 'shadow-sm ring-black/5'}`}>
              <h3>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-ink sm:text-lg">{it.q}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? 'rotate-45 bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white' : 'bg-brand-tint text-brand-deep'
                    }`}
                  >
                    <Icon name="plus" size={16} strokeWidth={2} />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <p className="px-6 pb-6 font-body text-sm leading-relaxed text-ink/65 sm:text-base">{it.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          )
        })}
      </ul>
    </div>
  )
}
