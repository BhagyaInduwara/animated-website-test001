import { useLayoutEffect } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function useStaggerReveal(containerRef, selector = '[data-reveal]', options = {}) {
  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const targets = selector ? el.querySelectorAll(selector) : el
      gsap.fromTo(
        targets,
        { opacity: 0, y: options.y ?? 48 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 1,
          ease: options.ease ?? 'power3.out',
          stagger: options.stagger ?? 0.15,
          scrollTrigger: {
            trigger: el,
            start: options.start ?? 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, selector])
}
