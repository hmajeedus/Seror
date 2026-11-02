import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm font-medium tracking-wide transition-colors',
    isActive ? 'text-rose' : 'text-ink-muted hover:text-ink',
  ].join(' ')

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const transparent = onHome && !scrolled && !menuOpen

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
        transparent
          ? 'border-transparent bg-gradient-to-b from-cream/90 to-transparent'
          : 'border-cream-dark/80 bg-cream/92 shadow-sm backdrop-blur-md',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.65rem]">
          Seror<span className="text-champagne">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <a href="/#services" className="text-sm font-medium tracking-wide text-ink-muted transition-colors hover:text-ink">
            Services
          </a>
          <a href="/#faq" className="text-sm font-medium tracking-wide text-ink-muted transition-colors hover:text-ink">
            FAQ
          </a>
          <a href="/#book" className="btn-primary !px-5 !py-2.5 !shadow-none">
            Book consult
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={['h-0.5 w-6 bg-ink transition-transform', menuOpen ? 'translate-y-2 rotate-45' : ''].join(' ')} />
          <span className={['h-0.5 w-6 bg-ink transition-opacity', menuOpen ? 'opacity-0' : ''].join(' ')} />
          <span
            className={['h-0.5 w-6 bg-ink transition-transform', menuOpen ? '-translate-y-2 -rotate-45' : ''].join(' ')}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-cream-dark bg-cream px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-6 text-center">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <a href="/#services" className="text-sm font-medium text-ink-muted">
              Services
            </a>
            <a href="/#faq" className="text-sm font-medium text-ink-muted">
              FAQ
            </a>
            <a href="/#book" className="btn-primary mx-auto">
              Book consult
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
