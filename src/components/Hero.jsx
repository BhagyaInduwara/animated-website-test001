import { useEffect, useRef } from 'react'
import { useStaggerReveal } from '../hooks/useStaggerReveal'

export default function Hero() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  useStaggerReveal(sectionRef, '[data-reveal]', { y: 60, stagger: 0.18, start: 'top 95%' })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {})
  }, [])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-ink"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p
          data-reveal
          className="mb-6 text-xs uppercase tracking-[0.5em] text-accent"
        >
          Motion &amp; Design Studio
        </p>
        <h1
          data-reveal
          className="font-serif text-5xl font-medium leading-[1.05] text-offwhite sm:text-7xl md:text-8xl"
        >
          We build brands
          <br />
          that <span className="italic text-accent">move</span>
        </h1>
        <p
          data-reveal
          className="mx-auto mt-8 max-w-xl font-sans text-base text-offwhite/70 sm:text-lg"
        >
          Aether is a small studio crafting bold, motion-driven digital
          experiences for ambitious brands.
        </p>
      </div>

      <div
        data-reveal
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-widest text-offwhite/50"
      >
        Scroll
      </div>
    </section>
  )
}
