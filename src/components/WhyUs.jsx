import { useRef } from 'react'
import { useStaggerReveal } from '../hooks/useStaggerReveal'

const reasons = [
  {
    n: '01',
    title: 'Motion-first thinking',
    desc: 'Every interface decision starts with how it moves, not just how it looks.',
  },
  {
    n: '02',
    title: 'Small, senior team',
    desc: 'No account layers — you work directly with the people building your site.',
  },
  {
    n: '03',
    title: 'Built for performance',
    desc: 'Cinematic feel without the bloat. Fast loads, smooth scroll, every device.',
  },
]

export default function WhyUs() {
  const sectionRef = useRef(null)
  useStaggerReveal(sectionRef, '[data-reveal]', { y: 40, stagger: 0.15 })

  return (
    <section
      id="why"
      ref={sectionRef}
      className="bg-ink px-6 py-32 sm:px-10 sm:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <p
          data-reveal
          className="mb-4 text-xs uppercase tracking-[0.4em] text-accent"
        >
          Why Aether
        </p>
        <h2
          data-reveal
          className="mb-16 max-w-2xl font-serif text-3xl leading-snug text-offwhite sm:text-4xl md:text-5xl"
        >
          Three reasons founders keep coming back.
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {reasons.map((r) => (
            <div
              key={r.n}
              data-reveal
              className="border-t border-offwhite/15 pt-8"
            >
              <span className="font-serif text-sm text-accent">{r.n}</span>
              <h3 className="mt-4 font-serif text-2xl text-offwhite">
                {r.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-offwhite/60">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
