import { homeHighlights } from '../data/content'
import { useLanguage } from '../lib/i18n'

export default function Marquee() {
  const { copy } = useLanguage()
  const items = [...homeHighlights, ...homeHighlights]

  return (
    <section className="marquee" aria-label={copy.marquee.label}>
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
