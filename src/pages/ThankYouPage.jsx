import { motion } from 'framer-motion'
import Seo from '../components/ui/Seo'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import { site } from '../data/site'

export default function ThankYouPage() {
  return (
    <>
      <Seo title="Thank You" description="Thank you for reaching out to AAYDS. We'll get back to you soon." />
      <main className="relative overflow-hidden bg-[#f3f6fc] px-4 py-20 sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-brand-light blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="relative mx-auto max-w-2xl rounded-[2.5rem] bg-white p-10 text-center shadow-xl shadow-brand-deep/5 ring-1 ring-black/5 sm:p-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.2, type: 'spring', stiffness: 260, damping: 18 } }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-deep via-brand-primary to-brand-deep text-white shadow-lg shadow-brand-primary/30"
          >
            <Icon name="check" size={36} strokeWidth={2.5} />
          </motion.span>
          <h1 className="font-display mt-8 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Thank You</h1>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/65 sm:text-lg">Thank you for reaching out to us. We'll get back to you soon!</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/">Back to home</Button>
            <Button href={site.phoneHref} variant="outline">
              Call {site.phoneDisplay}
            </Button>
          </div>
        </motion.div>
      </main>
    </>
  )
}
