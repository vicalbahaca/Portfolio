import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { siteConfig } from '../data/content'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Hero() {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      const intro = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      intro
        .from('.hero__brand', {
          y: 72,
          opacity: 0,
          rotate: -2,
          duration: 0.9,
        })
        .from(
          '.hero__roleline',
          {
            y: 28,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.45'
        )
        .from(
          '.hero__actions',
          {
            y: 20,
            opacity: 0,
            duration: 0.48,
          },
          '-=0.3'
        )
        .from(
          '.hero__scroll-link',
          {
            y: 18,
            opacity: 0,
            duration: 0.42,
          },
          '-=0.18'
        )

      gsap.to('.hero__copy', {
        yPercent: -8,
        opacity: 0.38,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

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
    <section ref={heroRef} className="hero" id="top">
      <div className="container hero__frame">
        <div className="hero__copy">
          <span className="hero__brand">{siteConfig.heroTitle}</span>

          <p className="hero__roleline">{siteConfig.heroSubtitle}</p>

          <div className="hero__actions">
            <a className="btn btn--hero-light" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <Link className="hero__scroll-link" href="/#work">
        Scroll Down
      </Link>
    </section>
  )
}
