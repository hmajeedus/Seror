import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookingForm } from '../components/BookingForm'
import { FAQ } from '../components/FAQ'
import { Marquee } from '../components/Marquee'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { concerns, images } from '../data/site'

const stats = [
  { value: '12+', label: 'Years advanced skincare' },
  { value: '4.9★', label: 'Average client rating' },
  { value: '20 min', label: 'Complimentary consult' },
]

const services = [
  {
    title: 'Signature Glow Facial',
    duration: '75 min',
    price: 'From $185',
    description:
      'Deep cleanse, enzyme or micro exfoliation, custom mask, LED optional, and lymphatic massage — the studio’s most requested reset.',
    tag: 'Most booked',
    image: images.serviceCards[0],
  },
  {
    title: 'Clinical Peel Series',
    duration: '45 min',
    price: 'From $220',
    description:
      'Progressive acids matched to your melanin, barrier, and downtime tolerance — with prep and recovery kits that actually make sense.',
    tag: 'Corrective',
    image: images.serviceCards[1],
  },
  {
    title: 'Brow & Lash Artistry',
    duration: '60 min',
    price: 'From $95',
    description:
      'Brow mapping, lamination, tint, and lash lifts that open the eye without the “done” look.',
    tag: 'Cosmetic',
    image: images.serviceCards[2],
  },
  {
    title: 'Bridal & Event Prep',
    duration: '90 min',
    price: 'From $260',
    description:
      'Skin conditioning timeline, subtle sculpt, and a finish that holds through tears, flash, and late-night dancing.',
    tag: 'Occasion',
    image: images.serviceCards[3],
  },
]

const testimonials = [
  {
    quote:
      'I stopped hiding behind foundation. After three visits my texture smoothed and Seror taught me a three-product routine I keep.',
    name: 'Maya L.',
    detail: 'Glow facial series',
    stars: 5,
  },
  {
    quote:
      'Every other place rushed me or pushed packages. Here I get honesty, warmth, and skin that finally calmed down.',
    name: 'Jordan R.',
    detail: 'Sensitive skin + peels',
    stars: 5,
  },
  {
    quote:
      'The brow work alone changed my face. But the consultation — finally understanding my pigmentation — was the real gift.',
    name: 'Elena V.',
    detail: 'Cosmetic + corrective plan',
    stars: 5,
  },
]

const outcomes = [
  { label: 'Smoother texture', pct: 92 },
  { label: 'Calmer, less reactive skin', pct: 88 },
  { label: 'More even tone', pct: 85 },
  { label: 'Would recommend to a friend', pct: 97 },
]

export function Home() {
  const [activeConcern, setActiveConcern] = useState(concerns[0].id)
  const selected = concerns.find((c) => c.id === activeConcern) ?? concerns[0]

  return (
    <>
      <section className="relative min-h-[92svh] overflow-hidden pt-20">
        <div className="absolute inset-0 hero-zoom">
          <img src={images.hero} alt="" className="hero-image" fetchPriority="high" />
          <div className="image-overlay" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(92svh-5rem)] max-w-6xl flex-col justify-end px-5 pb-16 pt-10 md:px-8 md:pb-24">
          <Reveal>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cream backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
              Esthetician & cosmetic studio
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-6 max-w-3xl text-balance text-5xl font-medium leading-[1.02] tracking-tight text-cream md:text-6xl lg:text-[4.5rem]">
              Luminous skin. <span className="italic text-blush">Quiet</span> luxury. Real results.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
              Founder{' '}
              <Link to="/about" className="font-medium text-blush underline decoration-blush/50 underline-offset-4">
                Seror
              </Link>{' '}
              blends clinical-grade treatments with cosmetic artistry — so you leave glowing, educated, and confident in
              your routine.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#book" className="btn-primary">
                Book free consultation
              </a>
              <a href="#services" className="btn-secondary !border-cream/30 !bg-cream/10 !text-cream hover:!bg-cream/20">
                Explore treatments
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-cream/20 pt-8">
              {stats.map((s) => (
                <li key={s.label}>
                  <p className="font-display text-3xl font-semibold text-cream md:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs leading-snug text-cream/65">{s.label}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Start here"
            title="Tell us what your skin is trying to say."
            description="Pick a concern — we will match you with the treatment Seror most often prescribes for it. Your consult still customizes everything."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {concerns.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveConcern(c.id)}
              className={[
                'rounded-full border px-4 py-2 text-sm transition',
                activeConcern === c.id
                  ? 'border-rose bg-rose text-cream shadow-md shadow-rose/20'
                  : 'border-cream-dark bg-white text-ink-muted hover:border-blush-deep/40',
              ].join(' ')}
            >
              {c.label}
            </button>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl border border-cream-dark bg-gradient-to-br from-white to-blush/10 p-8 md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-deep">Recommended starting point</p>
              <p className="font-display mt-2 text-3xl text-ink">{selected.service}</p>
              <p className="mt-2 max-w-md text-sm text-ink-muted">
                Included in your complimentary consult: skin scan, barrier check, and a realistic timeline — not a sales pitch.
              </p>
            </div>
            <a href="#book" className="btn-primary shrink-0">
              Book for this goal
            </a>
          </div>
        </Reveal>
      </section>

      <section id="services" className="bg-cream-dark/35 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Every treatment is bespoke. These are the pillars."
              description="Pricing reflects PoC studio tiers — adjust to your market. All services include after-care guidance."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <article className="group overflow-hidden rounded-[1.75rem] border border-cream-dark bg-white shadow-sm transition hover:shadow-xl hover:shadow-blush/10">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-rose backdrop-blur-sm">
                      {service.tag}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-3xl text-ink">{service.title}</h3>
                      <p className="shrink-0 text-sm font-medium text-ink">{service.price}</p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted">{service.description}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-cream-dark pt-5 text-sm text-ink-soft">
                      <span>{service.duration}</span>
                      <a href="#book" className="font-medium text-rose transition hover:underline">
                        Reserve →
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-rose/20 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Client outcomes"
              title="What changes when care is consistent."
              description="Self-reported results from returning clients after a recommended series — not a guarantee, but our north star."
              light
            />
            <ul className="mt-10 space-y-5">
              {outcomes.map((o) => (
                <li key={o.label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-cream/85">{o.label}</span>
                    <span className="text-champagne">{o.pct}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-champagne to-blush" style={{ width: `${o.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={images.treatment} alt="" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-8">
                <p className="font-display text-3xl">The Seror method</p>
                <p className="mt-2 text-sm text-cream/75">Listen → Design → Refine. No cookie-cutter protocols.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading eyebrow="The studio" title="A calm room where your skin gets the full hour." />
            <p className="mt-6 text-ink-muted leading-relaxed">
              Soft light, sanitized tools, and zero chatter unless you want it. Every appointment is private — no open
              bay, no upsell pressure at checkout.
            </p>
            <Link to="/about#founder" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-rose">
              Meet Seror, founder & lead esthetician <span aria-hidden>→</span>
            </Link>
          </Reveal>
          <Reveal delay={100} className="order-1 grid grid-cols-2 gap-3 lg:order-2">
            {images.gallery.map((src, i) => (
              <div
                key={src}
                className={[
                  'overflow-hidden rounded-2xl',
                  i === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square',
                ].join(' ')}
              >
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-y border-cream-dark bg-white/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Reviews" title="Clients don't whisper about us — they refer." align="center" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <blockquote className="flex h-full flex-col rounded-3xl border border-cream-dark bg-cream p-8">
                  <p className="text-champagne" aria-hidden>
                    {'★'.repeat(t.stars)}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-6 border-t border-cream-dark pt-5">
                    <p className="font-medium text-ink">{t.name}</p>
                    <p className="text-xs text-ink-soft">{t.detail}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <section id="book" className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blush/25 via-cream to-champagne/10" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/10">
              <img src={images.studio} alt="" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            </div>
            <div className="animate-float mt-6 hidden rounded-2xl border border-cream-dark bg-white p-5 shadow-lg md:block">
              <p className="text-xs uppercase tracking-widest text-ink-soft">Next available</p>
              <p className="font-display mt-1 text-2xl text-ink">Consult slots this week</p>
              <p className="mt-1 text-sm text-ink-muted">20 minutes · Video or in-studio · No obligation</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blush-deep">Book</p>
            <h2 className="font-display mt-4 text-4xl font-medium tracking-tight text-ink md:text-5xl">
              Your skin deserves a plan, not a guess.
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              PoC booking form — wire to Calendly, Square, or your CRM when you go live. For now, submit and see the
              client-facing confirmation flow.
            </p>
            <div className="mt-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
