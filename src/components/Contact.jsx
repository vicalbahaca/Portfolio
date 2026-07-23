import SectionReveal from './SectionReveal'
import { siteConfig } from '../data/siteContent'
import { useLanguage } from '../lib/i18n'

export default function Contact() {
  const { copy, cvHref } = useLanguage()

  return (
    <section id="contact" className="page-section contact-cta">
      <div className="container">
        <SectionReveal className="contact-cta__inner">
          <h2 className="contact-cta__title">{copy.contactLegacy.title}</h2>
          <a className="contact-cta__mail" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>

          <div className="contact-cta__links">
            <a className="btn btn--primary" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
              {copy.contactLegacy.linkedin}
            </a>
            <a className="btn btn--secondary" href={siteConfig.extras.mentorship} target="_blank" rel="noreferrer">
              {copy.contactLegacy.mentorship}
            </a>
            <a className="btn btn--secondary" href={cvHref} target="_blank" rel="noreferrer">
              {copy.contactLegacy.downloadCv}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
