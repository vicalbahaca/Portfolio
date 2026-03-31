import Link from 'next/link'
import { useRouter } from 'next/router'
import { siteConfig } from '../data/content'

const footerLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Articles', href: '/articles' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  const router = useRouter()
  const year = new Date().getFullYear()
  const isHome = router.pathname === '/'

  return (
    <footer className={`footer footer--site${isHome ? ' footer--home' : ''}`}>
      <div className="container">
        <div className="footer__site-bar">
          <div className="footer__site-meta">
            <p className="footer__site-name">{siteConfig.name}</p>
            <p className="footer__site-copy">
              {siteConfig.location} · {year}
            </p>
          </div>

          <nav className="footer__site-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="footer__site-links">
            <a href={`mailto:${siteConfig.email}`}>Email</a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
