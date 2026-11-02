import { useState } from 'react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const faqs = [
  {
    q: 'What happens at the complimentary consultation?',
    a: 'We review your skin history, current products, and goals. You receive a honest assessment and a suggested treatment path — whether you book with us or not.',
  },
  {
    q: 'How soon will I see results?',
    a: 'Many clients notice glow and smoothness after one facial. Corrective concerns (pigment, texture, acne) typically improve over a series of 3–6 visits with consistent home care.',
  },
  {
    q: 'Do you treat sensitive or melanin-rich skin?',
    a: 'Yes. Protocols are adjusted for barrier strength, reactivity, and how your skin responds to heat and actives — never a one-protocol-fits-all approach.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'PoC studio policy: 24-hour notice for reschedules. Late cancellations may incur a fee so we can offer the slot to someone on the waitlist.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions clients ask before they book."
          description="Transparent answers — the same ones Seror shares in the consultation chair."
        />
      </Reveal>

      <ul className="mt-12 divide-y divide-cream-dark rounded-3xl border border-cream-dark bg-white/80">
        {faqs.map((item, index) => {
          const isOpen = open === index
          return (
            <li key={item.q}>
              <Reveal delay={index * 60}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="font-display text-xl text-ink md:text-2xl">{item.q}</span>
                  <span
                    className={[
                      'mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cream-dark text-lg transition',
                      isOpen ? 'rotate-45 bg-blush/30' : '',
                    ].join(' ')}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={[
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  ].join(' ')}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-ink-muted md:px-8 md:pb-7 md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
