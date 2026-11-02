import { marqueeItems } from '../data/site'

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems]

  return (
    <div className="overflow-hidden border-y border-cream-dark bg-ink py-4">
      <div className="marquee-track flex w-max gap-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 text-xs font-medium uppercase tracking-[0.25em] text-cream/80"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-champagne" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}
