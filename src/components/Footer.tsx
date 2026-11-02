import { Link } from 'react-router-dom'

const hours = [
  { day: 'Tue – Fri', time: '10am – 7pm' },
  { day: 'Saturday', time: '9am – 4pm' },
  { day: 'Sun – Mon', time: 'Studio closed' },
]

export function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl font-semibold">
            Seror<span className="text-champagne">.</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
            Boutique esthetician & cosmetic studio. Corrective skincare, ritual facials, and refined finishing —
            always one-on-one with founder Seror.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-champagne">Studio hours</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 max-w-xs">
                <span>{h.day}</span>
                <span className="text-cream/60">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">Navigate</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li>
              <Link to="/" className="transition hover:text-cream">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-cream">
                About Seror
              </Link>
            </li>
            <li>
              <a href="/#services" className="transition hover:text-cream">
                Services
              </a>
            </li>
            <li>
              <a href="/#faq" className="transition hover:text-cream">
                FAQ
              </a>
            </li>
            <li>
              <a href="/#book" className="transition hover:text-cream">
                Book
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li>By appointment · Private suite</li>
            <li>
              <a href="mailto:hello@seroraesthetics.com" className="transition hover:text-cream">
                hello@seroraesthetics.com
              </a>
            </li>
            <li>
              <a href="tel:+15551234567" className="transition hover:text-cream">
                (555) 123-4567
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-4 text-xs uppercase tracking-widest text-cream/50">
            <span>Instagram</span>
            <span>TikTok</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-cream/45 md:px-8">
        © {new Date().getFullYear()} Seror Aesthetics · PoC demo site · Imagery via Unsplash
      </div>
    </footer>
  )
}
