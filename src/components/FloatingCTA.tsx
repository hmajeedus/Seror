import { useEffect, useState } from 'react'

export function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="/#book"
      className={[
        'fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full bg-rose px-6 py-3 text-sm font-medium text-cream shadow-lg shadow-rose/30 transition-all duration-300 md:hidden',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      ].join(' ')}
    >
      Book free consult
    </a>
  )
}
