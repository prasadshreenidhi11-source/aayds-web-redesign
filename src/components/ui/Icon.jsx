// Small line-icon set. Every service and value maps to one of these names so
// icons stay consistent between the mega menu, cards and detail pages.
const paths = {
  heart: (
    <path d="M12 21s-7.5-4.6-10-9.1C.5 8.4 2.3 5 5.8 5c1.9 0 3.4 1 4.2 2.4C10.8 6 12.3 5 14.2 5c3.5 0 5.3 3.4 3.8 6.9C21 16.4 12 21 12 21z" strokeLinejoin="round" />
  ),
  hand: (
    <>
      <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4.5a1.5 1.5 0 0 1 3 0V12M14 11.5V6a1.5 1.5 0 0 1 3 0v7.5" strokeLinecap="round" />
      <path d="M17 13.5c0 4-2.5 7.5-6.5 7.5-3 0-4.6-1.6-6.1-4.6L3 13.2a1.5 1.5 0 0 1 2.6-1.5L8 14.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9.5" r="2.5" />
      <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M15.5 14.5c2.6 0 5 1.6 5 4.5" strokeLinecap="round" />
    </>
  ),
  home: (
    <>
      <path d="M3 11l9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v10h14V10" strokeLinejoin="round" />
      <path d="M10 20v-5h4v5" strokeLinejoin="round" />
    </>
  ),
  meal: (
    <>
      <path d="M4 12h16a8 8 0 0 1-16 0z" strokeLinejoin="round" />
      <path d="M2 12h20M12 12V9M9 6.5c0-1 .8-1.5 1.5-1.5S12 5.5 12 6.5M12 6.5c0-1 .8-1.5 1.5-1.5S15 5.5 15 6.5" strokeLinecap="round" />
    </>
  ),
  car: (
    <>
      <path d="M3 13l2-5.5A2 2 0 0 1 6.9 6h10.2a2 2 0 0 1 1.9 1.5L21 13v5H3v-5z" strokeLinejoin="round" />
      <circle cx="7.5" cy="18" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="18" r="1.8" fill="currentColor" stroke="none" />
      <path d="M3 13h18" strokeLinecap="round" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-14 0 9-5 14-14 14z" strokeLinejoin="round" />
      <path d="M5 19l7-7" strokeLinecap="round" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9M18 12v3M15 12v2" strokeLinecap="round" />
    </>
  ),
  hands: (
    <>
      <path d="M12 6l-3.5 3.5a2 2 0 0 0 0 2.8L12 15.8l3.5-3.5a2 2 0 0 0 0-2.8L12 6z" strokeLinejoin="round" />
      <path d="M4 12c0-4 3-8 8-8s8 4 8 8-3 8-8 8-8-4-8-8z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3.2 8.4-7 10-3.8-1.6-7-5-7-10V6l7-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H8l-4 4V5z" strokeLinejoin="round" />
      <circle cx="9" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />,
  phone: (
    <path d="M6.6 3h3l1.7 4.3-2.2 1.5a11 11 0 0 0 5.1 5.1l1.5-2.2L20 13.4v3A2.6 2.6 0 0 1 17.4 19C10 18.5 5.5 14 5 6.6A2.6 2.6 0 0 1 6.6 3z" strokeLinejoin="round" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinejoin="round" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  star: <path d="M12 3l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 16.9 6.4 20l1.3-6.2L3 9.5l6.3-.7L12 3z" strokeLinejoin="round" />,
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l4 4v14H7V3z" strokeLinejoin="round" />
      <path d="M14 3v4h4M10 12h5M10 16h5" strokeLinecap="round" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5h6v2M3 12h18" strokeLinecap="round" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5M12 8h.01" strokeLinecap="round" />
    </>
  ),
  chevron: <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />,
  plus: <path d="M12 5v14M5 12h14" strokeLinecap="round" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />,
  close: <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />,
  facebook: <path d="M13.5 9H15V6.5h-1.5C11.6 6.5 10.5 7.6 10.5 9.5V11H9v2.5h1.5V19h2.5v-5.5H15L15.5 11h-2v-1c0-.6.2-1 1-1z" fill="currentColor" stroke="none" />,
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
}

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.7 }) {
  const p = paths[name]
  if (!p) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} aria-hidden="true">
      {p}
    </svg>
  )
}
