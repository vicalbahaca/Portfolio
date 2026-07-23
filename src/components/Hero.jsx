import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { siteConfig } from '../data/siteContent'
import { useLanguage } from '../lib/i18n'
import { CloseIcon, CopyIcon } from './Icons'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const BRAND_LINES = ['Victor', 'Saiz']

export default function Hero() {
  const heroRef = useRef(null)
  const copyButtonRef = useRef(null)
  const toastCloseRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const { copy } = useLanguage()

  useEffect(() => {
    if (copied) {
      toastCloseRef.current?.focus()
    }
  }, [copied])

  useGSAP(
    () => {
      const intro = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      intro
        .from('.hero__brand', {
          y: -88,
          opacity: 0,
          duration: 0.9,
        })
        .from(
          '.hero__statement',
          {
            x: -72,
            opacity: 0,
            duration: 0.62,
          },
          '+=0.02'
        )
        .from(
          '.hero__portrait-shell',
          {
            x: 34,
            y: -34,
            opacity: 0,
            duration: 0.62,
          },
          '+=0.02'
        )
        .from(
          '.hero__contact-wrap',
          {
            opacity: 0,
            duration: 0.48,
          },
          '+=0.02'
        )
        .from(
          '.hero__scroll-link',
          {
            y: 14,
            opacity: 0,
            duration: 0.42,
          },
          '+=0.02'
        )

      gsap.to('.hero__scroll-link', {
        y: 10,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '65% top',
          scrub: 0.6,
        },
      })
    },
    { scope: heroRef }
  )

  return (
    <section ref={heroRef} className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__frame">
        <h1 id="hero-title" className="hero__brand">
          {BRAND_LINES.map((line) => (
            <span key={line} className="hero__brand-line">
              {line}
            </span>
          ))}
        </h1>

        <div className="hero__statement">
          {copy.hero.statementLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="hero__portrait-shell" aria-hidden="true">
          <div className="hero__portrait hero__portrait--mono">
            <Image
              src={siteConfig.avatar}
              alt=""
              fill
              sizes="(max-width: 720px) 168px, (max-width: 980px) 220px, 280px"
              quality={95}
              priority
            />
          </div>
        </div>

        <div className="hero__contact-wrap">
          <a
            className="hero__contact"
            href={`mailto:${siteConfig.email}`}
            aria-label={`${copy.hero.personalEmailAria} ${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
          <button
            type="button"
            className="hero__copy-button"
            ref={copyButtonRef}
            aria-label={copy.hero.copyEmail}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(siteConfig.email)
                setCopied(true)
              } catch (_error) {
                setCopied(false)
              }
            }}
          >
            <CopyIcon />
          </button>
        </div>

        <Link className="hero__scroll-link" href="/#projects-north" aria-label={copy.home.northTitle}>
          {copy.hero.scroll}
        </Link>

        {copied ? (
          <div className="hero__toast" role="status" aria-live="polite" aria-atomic="true">
            <p className="hero__toast-copy">{copy.hero.copiedEmail}</p>
            <button
              ref={toastCloseRef}
              type="button"
              className="hero__toast-close"
              aria-label={copy.hero.closeToast}
              onClick={() => {
                setCopied(false)
                copyButtonRef.current?.focus()
              }}
            >
              <CloseIcon />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
