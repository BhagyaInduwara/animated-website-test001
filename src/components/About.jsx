import { useRef } from 'react'
import { useStaggerReveal } from '../hooks/useStaggerReveal'

export default function About() {
  const sectionRef = useRef(null)
  useStaggerReveal(sectionRef, '[data-reveal]', { y: 40, stagger: 0.15 })

  return (
    <section
      id="studio"
      ref={sectionRef}
      className="relative overflow-hidden bg-ink py-32 sm:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'url(/Img.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 sm:px-10 md:grid-cols-[0.8fr_1.2fr]">
        <p
          data-reveal
          className="text-xs uppercase tracking-[0.4em] text-accent"
        >
          About the studio
        </p>

        <div>
          <h2
            data-reveal
            className="font-serif text-3xl leading-snug text-offwhite sm:text-4xl md:text-5xl"
          >
            We're a collective of designers, animators, and engineers obsessed
            with the space between a static idea and a{' '}
            <span className="italic text-accent">living</span> interface.
          </h2>
          <p
            data-reveal
            className="mt-8 max-w-xl text-base leading-relaxed text-offwhite/60 sm:text-lg"
          >
            Since day one, Aether has partnered with founders and creative
            teams to turn ambitious ideas into interfaces that feel alive —
            blending narrative, sound, and motion into every scroll.
          </p>
        </div>
      </div>
    </section>
  )
}
