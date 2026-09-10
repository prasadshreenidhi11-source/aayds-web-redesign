import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/motion'

// Scroll-triggered fade-up used by every inner-page section. `as` lets a
// section keep semantic tags (section/li/article) while still animating.
export default function Reveal({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} custom={delay} className={className} {...rest}>
      {children}
    </Tag>
  )
}
