import Link from 'next/link'
import { useRouter } from 'next/router'
import { siteConfig } from '../data/content'
import { useLanguage } from '../lib/i18n'

export default function Footer() {
  const router = useRouter()
  const { copy } = useLanguage()
  const year = new Date().getFullYear()
  const isHome = router.pathname === '/'
  const footerLinks = [
    { label: copy.footer.work, href: '/#work' },
    { label: copy.footer.about, href: '/#about' },
    { label: copy.footer.articles, href: '/articles' },
    { label: copy.footer.contact, href: '/#contact' },
  ]

  return (
    <footer className={`footer footer--site${isHome ? ' footer--home' : ''}`}>
      <div className="container">
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
