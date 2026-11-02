import { useState } from 'react'
import type { FormEvent } from 'react'

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-blush/40 bg-white p-10 text-center shadow-xl shadow-blush/10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blush/30 text-2xl text-rose">
          ✓
        </div>
        <h3 className="font-display mt-6 text-3xl text-ink">You&apos;re on the list.</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Seror&apos;s studio will reach out within one business day to confirm your complimentary consultation window.
        </p>
        <button
          type="button"
          className="mt-8 text-sm font-medium text-rose underline-offset-4 hover:underline"
          onClick={() => setSubmitted(false)}
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-soft">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Alex Morgan"
            className="field-input"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-soft">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" className="field-input" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-soft">
          Email
        </label>
        <input
          id="email"
          name="email"
          required
          type="email"
          placeholder="you@email.com"
          className="field-input"
        />
      </div>
      <div>
        <label htmlFor="interest" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-soft">
          Primary goal
        </label>
        <select id="interest" name="interest" className="field-input text-ink-muted" defaultValue="">
          <option value="" disabled>
            Select one…
          </option>
          <option value="facial">Glow & maintenance facial</option>
          <option value="peel">Corrective peel / clinical</option>
          <option value="cosmetic">Brow, lash, cosmetic</option>
          <option value="event">Bridal or event prep</option>
          <option value="unsure">Help me decide</option>
        </select>
      </div>
      <div>
        <label htmlFor="notes" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-soft">
          Anything we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Skin sensitivities, timeline, past treatments…"
          className="field-input resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Request complimentary consultation
      </button>
      <p className="text-center text-xs text-ink-soft">
        Prefer text?{' '}
        <a href="tel:+15551234567" className="text-rose hover:underline">
          (555) 123-4567
        </a>
      </p>
    </form>
  )
}
