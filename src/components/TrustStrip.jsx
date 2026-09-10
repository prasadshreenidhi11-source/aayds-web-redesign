const marqueeItems = [
  'NDIS Registered',
  'Family Owned & Operated',
  'Moreton Bay Local',
  '24/7 On Call',
  'Personalised Support Plans',
]

export default function TrustStrip() {
  return (
    <div className="animate-gradient overflow-hidden bg-gradient-to-r from-brand-deep via-brand-primary to-brand-deep py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center gap-10 pl-10 font-label text-sm tracking-[0.25em] text-white/75">
            {marqueeItems.map((item) => (
              <span key={item} className="flex items-center gap-10">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-brand-light/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
