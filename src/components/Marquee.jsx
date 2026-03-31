import { homeHighlights } from '../data/content'

export default function Marquee() {
  const items = [...homeHighlights, ...homeHighlights]

  return (
    <section className="marquee" aria-label="Highlights">
      <div className="marquee__track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
