import Link from 'next/link'
import { siteConfig } from '../data/content'
import { useLanguage } from '../lib/i18n'

export default function Footer() {
  const { copy } = useLanguage()
  const year = new Date().getFullYear()
  const footerLinks = [
    { label: copy.footer.work, href: '/#work' },
    { label: copy.footer.about, href: '/#about' },
    { label: copy.footer.articles, href: '/articles' },
    { label: copy.footer.contact, href: '/#contact' },
  ]

  return (
    <footer className="footer footer--site footer--home">
      <div className="container">
        <section id="contact" className="footer__contact-band" aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title" className="footer__contact-title">
            {copy.home.contactTitle}
          </h2>
          <p className="footer__contact-caption">{copy.home.contactCaption}</p>
          <a
            className="btn btn--primary footer__contact-cta"
            href="https://www.linkedin.com/in/victorsaizalfageme/"
            target="_blank"
            rel="noreferrer"
            aria-label={copy.footer.contactLinkedin}
          >
            {copy.footer.contactLinkedin}
          </a>
        </section>

        <div className="footer__site-bar">
          <div className="footer__site-meta">
            <p className="footer__site-name">{siteConfig.name}</p>
            <p className="footer__site-copy">
              {copy.site.location} · {year}
            </p>
          </div>

          <nav className="footer__site-nav" aria-label={copy.footer.navigation}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="footer__site-links">
            <a href={`mailto:${siteConfig.email}`} aria-label={copy.footer.email}>
              {copy.footer.email}
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label={copy.footer.linkedinLabel}>
              {copy.footer.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
