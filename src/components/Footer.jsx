import { useRef } from 'react'
import { useStaggerReveal } from '../hooks/useStaggerReveal'

const columns = [
  {
    title: 'Studio',
    links: ['About', 'Process', 'Careers', 'Journal'],
  },
  {
    title: 'Work',
    links: ['Brand Identity', 'Web Experiences', 'Campaigns', 'Case Studies'],
  },
  {
    title: 'Connect',
    links: ['Instagram', 'LinkedIn', 'Twitter / X', 'Dribbble'],
  },
]

export default function Footer() {
  const sectionRef = useRef(null)
  useStaggerReveal(sectionRef, '[data-reveal]', { y: 30, stagger: 0.1, start: 'top 90%' })

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="border-t border-offwhite/10 bg-ink px-6 pb-10 pt-24 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div
          data-reveal
          className="mb-16 grid grid-cols-1 gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]"
        >
          <div>
            <p className="font-serif text-3xl text-offwhite">Aether</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-offwhite/50">
              A motion &amp; design studio building living interfaces for
              ambitious brands.
            </p>
            <a
              href="mailto:hello@aether.studio"
              className="mt-6 inline-block text-sm uppercase tracking-widest text-accent transition-colors hover:text-accent-light"
            >
              hello@aether.studio
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs uppercase tracking-[0.3em] text-offwhite/40">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-offwhite/70 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          data-reveal
          className="flex flex-col items-center justify-between gap-4 border-t border-offwhite/10 pt-8 text-xs text-offwhite/40 sm:flex-row"
        >
          <p>© {new Date().getFullYear()} Aether Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
