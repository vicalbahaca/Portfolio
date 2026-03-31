import SectionReveal from './SectionReveal'
import { siteConfig } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="page-section contact-cta">
      <div className="container">
        <SectionReveal className="contact-cta__inner">
          <p className="section-kicker">Contacto</p>
          <h2 className="contact-cta__title">Si el producto necesita criterio visual y alguien que entienda a ingeniería, hablemos.</h2>
          <a className="contact-cta__mail" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>

          <div className="contact-cta__links">
            <a className="btn btn--primary" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn--secondary" href={siteConfig.extras.mentorship} target="_blank" rel="noreferrer">
              Mentorías
            </a>
            <a className="btn btn--secondary" href={siteConfig.extras.cv} target="_blank" rel="noreferrer">
              Descargar CV
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
