// Shared motion vocabulary. Every page uses the same ease and timing as the
// home page so inner pages feel like one site.
export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: EASE } }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (d = 0) => ({ opacity: 1, transition: { duration: 0.5, delay: d, ease: EASE } }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: (d = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: d, ease: EASE } }),
}

export const viewportOnce = { once: true, amount: 0.2 }

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: EASE } },
}
