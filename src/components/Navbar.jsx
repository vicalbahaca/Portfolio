import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { siteConfig } from '../data/content'
import { useLanguage } from '../lib/i18n'

const brandAsset = 'https://framerusercontent.com/images/mJBC1wHo4tTlycjCSQJoIBVrqRU.png'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.25 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 12.56c0-3.45-1.84-5.06-4.3-5.06-1.98 0-2.87 1.09-3.37 1.85V8.5H9.39V20h3.38v-6.03c0-1.59.3-3.13 2.27-3.13 1.94 0 1.97 1.81 1.97 3.23V20H20.4l.04-7.44Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Navbar() {
  const router = useRouter()
  const { lang, setLang, copy } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = router.pathname === '/'
  const hasSurface = !isHome || scrolled || menuOpen
  const navLinks = [
    { label: copy.nav.work, href: '/#work', routePrefix: '/work', hash: '#work' },
    { label: copy.nav.about, href: '/#about', hash: '#about' },
    { label: copy.nav.articles, href: '/articles', routePrefix: '/articles' },
  ]

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [router.asPath])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar${hasSurface ? ' navbar--surface' : ''}`}>
      <div className="navbar__inner navbar__inner--unified">
        <Link href="/" className="navbar__brand navbar__brand--unified" aria-label={siteConfig.name}>
          <span className="navbar__brand-logo" style={{ '--brand-mask': `url("${brandAsset}")` }}>
            <span className="navbar__brand-glyph" aria-hidden="true" />
          </span>
        </Link>

        <nav className="navbar__links navbar__links--unified" aria-label={copy.nav.primary}>
          {navLinks.map((link) => {
            const isRouteActive = typeof link.routePrefix === 'string' && router.pathname.startsWith(link.routePrefix)
            const isActive = isRouteActive

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="navbar__right navbar__right--unified">
          <div className="navbar__socials navbar__socials--unified">
            <a
              className="navbar__social-link"
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={copy.nav.linkedinLabel}
            >
              <LinkedInIcon />
            </a>
          </div>

          <div className="navbar__actions navbar__actions--unified">
            <div className="navbar__language">
              <label className="sr-only" htmlFor="site-language">
                {copy.nav.language}
              </label>
              <select
                id="site-language"
                className="navbar__language-select"
                value={lang}
                aria-label={copy.nav.language}
                onChange={(event) => setLang(event.target.value)}
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
            <button
              type="button"
              className="navbar__toggle navbar__toggle--unified"
              aria-label={menuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
              aria-expanded={menuOpen}
              aria-controls="site-mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="site-mobile-menu"
            className="navbar__mobile"
            role="dialog"
            aria-modal="true"
            aria-label={copy.nav.mobile}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="navbar__mobile-links" aria-label={copy.nav.mobile}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="navbar__mobile-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="navbar__mobile-language">
              <label className="sr-only" htmlFor="site-language-mobile">
                {copy.nav.language}
              </label>
              <select
                id="site-language-mobile"
                className="navbar__language-select navbar__language-select--mobile"
                value={lang}
                aria-label={copy.nav.language}
                onChange={(event) => setLang(event.target.value)}
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>

            <a className="navbar__mobile-cta" href={`mailto:${siteConfig.email}`}>
              {copy.nav.openEmail}
            </a>

            <div className="navbar__mobile-meta">
              <span>{copy.site.location}</span>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label={copy.nav.linkedinLabel}>
                {copy.nav.linkedinLabel}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
