import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { siteConfig } from '../data/content'

const navLinks = [
  { label: 'Work', href: '/#work', routePrefix: '/work', hash: '#work' },
  { label: 'About', href: '/#about', hash: '#about' },
  { label: 'Articles', href: '/articles', routePrefix: '/articles' },
]

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

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M9.34 11.03c1.5 0 2.48-.96 2.48-2.34 0-1.72-1.23-2.69-3.34-2.69H2V20h6.76c2.47 0 3.87-1.27 3.87-3.4 0-1.81-1.16-2.96-3.29-3.19v-.38Zm-3.69-3.2h2.5c1.06 0 1.62.43 1.62 1.23 0 .81-.56 1.25-1.62 1.25h-2.5V7.83Zm2.76 9.34H5.65v-3.18h2.76c1.24 0 1.9.54 1.9 1.57s-.66 1.61-1.9 1.61Zm8.43-7.9c-3.14 0-5.14 2.18-5.14 5.4 0 3.28 1.94 5.33 5.1 5.33 2.54 0 4.24-1.22 4.82-3.32h-2.57c-.24.69-.93 1.12-2.02 1.12-1.43 0-2.32-.86-2.39-2.4H21.9v-.76c0-3.22-1.89-5.37-5.06-5.37Zm0 2.04c1.25 0 2.07.8 2.14 2.18h-4.42c.14-1.33.96-2.18 2.28-2.18Zm-2.27-4.08h4.51v1.17h-4.51V7.23Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = router.pathname === '/'
  const hasSurface = !isHome || scrolled || menuOpen

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
          <span className="navbar__brand-logo">
            <Image src={brandAsset} alt="" width={32} height={32} />
          </span>
        </Link>

        <nav className="navbar__links navbar__links--unified" aria-label="Primary">
          {navLinks.map((link) => {
            const isRouteActive = typeof link.routePrefix === 'string' && router.pathname.startsWith(link.routePrefix)
            const isHashActive = router.pathname === '/' && typeof link.hash === 'string' && router.asPath.includes(link.hash)
            const isActive = isRouteActive || isHashActive

            return (
              <Link key={link.href} href={link.href} className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}>
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="navbar__socials navbar__socials--unified">
          <a className="navbar__social-link" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a className="navbar__social-link" href={siteConfig.social.behance} target="_blank" rel="noreferrer" aria-label="Behance">
            <BehanceIcon />
          </a>
        </div>

        <div className="navbar__actions navbar__actions--unified">
          <button
            type="button"
            className="navbar__toggle navbar__toggle--unified"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="navbar__mobile-links" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="navbar__mobile-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            <a className="navbar__mobile-cta" href={`mailto:${siteConfig.email}`}>
              Abrir email
            </a>

            <div className="navbar__mobile-meta">
              <span>{siteConfig.location}</span>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={siteConfig.social.behance} target="_blank" rel="noreferrer">
                Behance
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
