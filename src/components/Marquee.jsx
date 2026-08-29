const logos = [
  'Northwind',
  'Solace',
  'Fenwick & Co',
  'Rivet',
  'Marrow',
  'Ossuary',
  'Vantage',
  'Loam',
]

export default function Marquee() {
  const items = [...logos, ...logos]

  return (
    <section className="border-y border-offwhite/10 bg-ink py-10">
      <div className="overflow-hidden">
        <div className="marquee-track">
          {items.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="mx-10 shrink-0 whitespace-nowrap font-serif text-2xl tracking-wide text-offwhite/35 transition-colors hover:text-offwhite/70 sm:text-3xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
