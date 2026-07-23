import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { siteConfig } from '../data/siteContent'
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
  const { copy } = useLanguage()
  const detailsRef = useRef(null)
  const projectsRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const hasSurface = true
  const projectLinks = [
    { label: 'Proyectos en North studio', href: '/#projects-north' },
    { label: 'Otros proyectos', href: '/#recent-projects' },
  ]
  const navLinks = [
    { label: 'Workshops', href: '/workshops', routePrefix: '/workshops' },
    { label: copy.nav.about, href: '/#about', hash: '#about' },
  ]

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
    setProjectsOpen(false)
    if (detailsRef.current) {
      detailsRef.current.open = false
    }
    if (projectsRef.current) {
      projectsRef.current.open = false
    }
  }, [router.asPath])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (projectsRef.current && !projectsRef.current.contains(event.target)) {
        projectsRef.current.open = false
        setProjectsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && projectsRef.current?.open) {
        projectsRef.current.open = false
        setProjectsOpen(false)
        projectsRef.current.querySelector('summary')?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    if (detailsRef.current) {
      detailsRef.current.open = false
    }
  }

  const closeProjects = () => {
    setProjectsOpen(false)
    if (projectsRef.current) {
      projectsRef.current.open = false
    }
  }

  const isProjectsActive = router.pathname.startsWith('/projects-north') || router.pathname === '/work' || router.pathname === '/work/[slug]'

  return (
    <header className={`navbar${hasSurface ? ' navbar--surface' : ''}`}>
      <div className="navbar__inner navbar__inner--unified">
        <Link href="/" className="navbar__brand navbar__brand--unified" aria-label={siteConfig.name}>
          <span className="navbar__brand-logo" style={{ '--brand-mask': `url("${brandAsset}")` }}>
            <span className="navbar__brand-glyph" aria-hidden="true" />
          </span>
        </Link>

        <nav className="navbar__links navbar__links--unified" aria-label={copy.nav.primary}>
          <details
            ref={projectsRef}
            className="navbar__projects-disclosure"
            onToggle={(event) => setProjectsOpen(event.currentTarget.open)}
          >
            <summary className={`navbar__link navbar__projects-summary${isProjectsActive ? ' navbar__link--active' : ''}`}>
              <span className="navbar__projects-label">{copy.nav.work}</span>
              <span className="navbar__projects-caret" aria-hidden="true" />
            </summary>
            <ul className="navbar__projects-menu">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="navbar__projects-link" onClick={closeProjects}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

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
            <details
              ref={detailsRef}
              className="navbar__mobile-disclosure"
              onToggle={(event) => setMenuOpen(event.currentTarget.open)}
            >
              <summary className="navbar__toggle navbar__toggle--unified" aria-label={menuOpen ? copy.nav.closeMenu : copy.nav.openMenu}>
                <span className="navbar__hamburger" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </summary>

              <div className="navbar__mobile" id="site-mobile-menu">
                <nav aria-label={copy.nav.mobile}>
                  <ul className="navbar__mobile-list">
                    <li>
                      <details className="navbar__mobile-group">
                        <summary className="navbar__mobile-link navbar__mobile-link--summary">{copy.nav.work}</summary>
                        <ul className="navbar__mobile-sublist">
                          {projectLinks.map((link) => (
                            <li key={link.href}>
                              <Link href={link.href} className="navbar__mobile-link navbar__mobile-link--nested" onClick={closeMenu}>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="navbar__mobile-link" onClick={closeMenu}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <a
                        className="navbar__mobile-link"
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                      >
                        {copy.hero.cta}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  )
}
