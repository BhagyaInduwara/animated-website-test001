import { useEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const rootRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const counter = { value: 0 }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            document.body.style.overflow = ''
            onComplete()
          },
        })
      },
    })

    tl.to(counter, {
      value: 100,
      duration: 2.1,
      ease: 'power1.inOut',
      onUpdate: () => setProgress(Math.round(counter.value)),
    })
    tl.to(barRef.current, { scaleX: 1, duration: 2.1, ease: 'power1.inOut' }, 0)

    return () => tl.kill()
  }, [onComplete])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-offwhite"
    >
      <p className="mb-6 text-xs uppercase tracking-[0.4em] text-offwhite/60">
        Loading Aether
      </p>
      <div className="font-serif text-6xl font-medium tabular-nums sm:text-7xl">
        {progress}
        <span className="text-accent">%</span>
      </div>
      <div className="mt-8 h-px w-48 overflow-hidden bg-offwhite/15">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 bg-accent"
        />
      </div>
    </div>
  )
}
