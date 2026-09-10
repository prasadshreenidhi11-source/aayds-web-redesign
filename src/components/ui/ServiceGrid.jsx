import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Icon from './Icon'
import { services } from '../../data/services'

// Linked service cards. Same visual as the home page's Services grid so the
// hub page, related-services strips and home stay in one family.
export default function ServiceGrid({ exclude, limit, columns = 4 }) {
  let list = services.filter((s) => s.slug !== exclude)
  if (limit) list = list.slice(0, limit)
  const cols = columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
  return (
    <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${cols}`}>
      {list.map((s, i) => (
        <Reveal key={s.slug} delay={0.05 * (i % columns)}>
          <Link
            to={`/${s.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-[#f3f6fc] shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-deep/10 hover:ring-brand-primary/15"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={s.card}
                alt={s.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-deep shadow-sm backdrop-blur-sm">
                <Icon name={s.icon} size={16} strokeWidth={1.8} />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-bold text-ink group-hover:text-brand-primary">{s.title}</h3>
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink/60">{s.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-deep">
                Learn more
                <Icon name="arrow" size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
