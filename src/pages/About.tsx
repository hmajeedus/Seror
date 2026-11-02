import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { founderTimeline, images } from '../data/site'

const credentials = [
  'Licensed master esthetician',
  'Advanced chemical peel & brightening protocols',
  'Cosmetic brow, lash & event finishing',
  'Inclusive skin care continuing education',
]

const values = [
  {
    title: 'Integrity first',
    body: 'If a drugstore retinol and sleep will solve it, Seror will say so — before recommending a peel series.',
  },
  {
    title: 'Skin-safe luxury',
    body: 'Medical-grade products, hospital-level sanitation, and pacing that respects your barrier.',
  },
  {
    title: 'Education always',
    body: 'You leave knowing the why behind every step — so results last between visits.',
  },
]

export function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0">
          <img src={images.heroAlt} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/95 to-cream" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blush-deep">About the studio</p>
            <h1 className="font-display mt-4 max-w-3xl text-balance text-5xl font-medium leading-tight tracking-tight text-ink md:text-6xl">
              Built by hand. Led by Seror.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Seror Aesthetics is a one-room, appointment-only studio for people who want expert skin care without the
              noise — no rotating staff, no commission-driven product walls.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="founder" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/15">
                <img src={images.founder} alt="Seror, founder" className="aspect-[3/4] w-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-2 max-w-[220px] rounded-2xl border border-cream-dark bg-white p-5 shadow-xl md:-right-6">
                <p className="font-display text-4xl leading-none text-champagne">&ldquo;</p>
                <p className="text-sm leading-relaxed text-ink-muted">
                  Beauty should feel like relief — not another thing to perform.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-rose">— Seror</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={80}>
              <SectionHeading eyebrow="Founder" title="Meet Seror" />
              <p className="mt-6 leading-relaxed text-ink-muted">
                Seror opened this studio after a decade in treatment rooms watching the same story: clients overwhelmed
                by products, burned by harsh protocols, and unsure who to trust with melanin-rich or reactive skin.
              </p>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Today Seror still leads every new client consultation and complex corrective case — combining clinical
                facials, peel science, and cosmetic finishing with a teacher&apos;s patience and a detail-obsessed eye.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-cream-dark bg-white/70 px-4 py-3 text-sm text-ink">
                    <span className="mt-0.5 text-rose" aria-hidden>
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 rounded-3xl border border-blush/30 bg-gradient-to-br from-blush/15 to-cream p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-deep">A note from Seror</p>
                <p className="font-display mt-4 text-2xl leading-snug text-ink md:text-3xl">
                  &ldquo;I want you to walk out seeing <em>you</em> — rested, refined, recognizable. My work is done when
                  you trust your skin in daylight, not just under ring light.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-cream-dark bg-ink py-20 text-cream md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Journey"
              title="How Seror got here."
              description="PoC timeline — swap in your real milestones when you go live."
              light
              align="center"
            />
          </Reveal>
          <ol className="relative mx-auto mt-16 max-w-2xl space-y-0 border-l border-white/15 pl-8">
            {founderTimeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 100}>
                <li className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[2.35rem] top-1 flex h-3 w-3 rounded-full bg-champagne ring-4 ring-ink" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">{item.year}</p>
                  <h3 className="font-display mt-2 text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{item.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Philosophy"
            title="What never changes"
            description="Whether you are 22 or 62, breakout-prone or dry — these rules apply."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-cream-dark bg-white p-8 shadow-sm">
                <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-cream-dark bg-cream-dark/40 py-20 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <h2 className="font-display text-4xl font-medium text-ink md:text-5xl">Ready to sit in Seror&apos;s chair?</h2>
            <p className="mt-4 text-ink-muted">
              Start with a complimentary 20-minute consultation — in person or virtual.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/#book" className="btn-primary">
                Book consultation
              </Link>
              <Link to="/" className="btn-secondary">
                Back to home
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
