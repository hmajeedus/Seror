type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={[centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'].join(' ')}>
      <p
        className={[
          'text-xs font-semibold uppercase tracking-[0.25em]',
          light ? 'text-champagne' : 'text-blush-deep',
        ].join(' ')}
      >
        {eyebrow}
      </p>
      <h2
        className={[
          'font-display mt-3 text-4xl font-medium leading-tight tracking-tight md:text-5xl',
          light ? 'text-cream' : 'text-ink',
        ].join(' ')}
      >
        {title}
      </h2>
      {description && (
        <p
          className={[
            'mt-4 text-base leading-relaxed md:text-lg',
            light ? 'text-cream/75' : 'text-ink-muted',
          ].join(' ')}
        >
          {description}
        </p>
      )}
    </div>
  )
}
