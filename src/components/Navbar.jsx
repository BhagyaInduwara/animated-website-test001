import { useRef, useState } from 'react'
import { gsap } from '../lib/gsap'

const megaMenu = {
  Work: [
    { label: 'Brand Identity', desc: 'Naming, logo, visual systems' },
    { label: 'Web Experiences', desc: 'Motion-first product sites' },
    { label: 'Campaigns', desc: 'Launch films & social' },
  ],
  Studio: [
    { label: 'About', desc: 'Who we are' },
    { label: 'Process', desc: 'How we work' },
    { label: 'Careers', desc: 'Join the team' },
  ],
}

const navLinks = ['Work', 'Studio', 'Journal', 'Contact']

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const panelRef = useRef(null)

  function openPanel(name) {
    if (!megaMenu[name]) {
      setOpenMenu(null)
      return
    }
    setOpenMenu(name)
    requestAnimationFrame(() => {
      if (panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        )
      }
    })
  }

  function closePanel() {
    if (!openMenu) return
    if (panelRef.current) {
      gsap.to(panelRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => setOpenMenu(null),
      })
    } else {
      setOpenMenu(null)
    }
  }

  const activeColumns = openMenu ? megaMenu[openMenu] : null

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      onMouseLeave={closePanel}
    >
      <nav className="flex items-center justify-between border-b border-offwhite/10 bg-ink/80 px-6 py-5 backdrop-blur-md sm:px-10">
        <a href="#top" className="font-serif text-xl tracking-wide text-offwhite">
          Aether
        </a>

        <ul className="hidden items-center gap-10 text-sm uppercase tracking-widest text-offwhite/80 md:flex">
          {navLinks.map((link) => (
            <li
              key={link}
              onMouseEnter={() => openPanel(link)}
              className="relative"
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="transition-colors hover:text-accent"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-offwhite/25 px-5 py-2 text-xs uppercase tracking-widest text-offwhite transition-colors hover:border-accent hover:text-accent sm:inline-block"
        >
          Start a project
        </a>
      </nav>

      {activeColumns && (
        <div
          ref={panelRef}
          className="absolute inset-x-0 top-full border-b border-offwhite/10 bg-ink/95 backdrop-blur-md"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3 sm:px-10">
            {activeColumns.map((item) => (
              <a
                key={item.label}
                href="#"
                className="group block border-l border-offwhite/10 pl-5"
              >
                <p className="font-serif text-lg text-offwhite transition-colors group-hover:text-accent">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-offwhite/50">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
