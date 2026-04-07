import { siteConfig } from '../data/content'
import { useLanguage } from '../lib/i18n'

export default function ContactBand({ id, className = '' }) {
  const { copy } = useLanguage()

  return (
    <section id={id} className={`site-contact-band home-contact-band ${className}`.trim()} aria-labelledby={id ? `${id}-title` : 'site-contact-title'}>
      <div className="container home-contact-band__inner">
        <h2 id={id ? `${id}-title` : 'site-contact-title'} className="home-title home-title--compact">
          {copy.home.contactTitle}
        </h2>
        <p className="home-caption">{copy.home.contactCaption}</p>

        <a className="btn btn--primary home-contact-band__cta" href={`mailto:${siteConfig.email}`} aria-label={copy.home.contactCta}>
          {copy.home.contactCta}
        </a>
      </div>
    </section>
  )
}
