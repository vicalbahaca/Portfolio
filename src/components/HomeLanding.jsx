import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { caseStudies, conceptDesigns, featuredArticles, siteConfig } from '../data/content'
import { ArrowUpRightIcon } from './Icons'
import NorthProjectsGrid from './NorthProjectsGrid'
import { localizeArticle, localizeProject, useLanguage } from '../lib/i18n'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function HomeLanding() {
  const landingRef = useRef(null)
  const northCarouselRef = useRef(null)
  const featuredCarouselRef = useRef(null)
  const secondaryCarouselRef = useRef(null)
  const [carouselState, setCarouselState] = useState({
    north: { atStart: true, atEnd: false },
    featured: { atStart: true, atEnd: false },
    secondary: { atStart: true, atEnd: false },
  })
  const { copy, lang, cvHref } = useLanguage()
  const highlightedProjects = caseStudies.map((entry) => localizeProject(entry, lang))
  const secondaryProjects = conceptDesigns.slice(0, 4).map((entry) => localizeProject(entry, lang))
  const latestArticles = featuredArticles.map((entry) => localizeArticle(entry, lang))

  const updateCarouselState = (key, list) => {
    if (!list) return
    const maxLeft = Math.max(0, list.scrollWidth - list.clientWidth)
    const atStart = list.scrollLeft <= 4
    const atEnd = list.scrollLeft >= maxLeft - 4
    setCarouselState((prev) => ({ ...prev, [key]: { atStart, atEnd } }))
  }

  const scrollCarousel = (direction, key, list) => {
    if (!list) return
    const firstItem = list.querySelector('.home-project-slot, .home-secondary-item')
    const step = firstItem ? firstItem.getBoundingClientRect().width + 32 : list.clientWidth
    list.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  useEffect(() => {
    const configs = [
      ['north', northCarouselRef.current],
      ['featured', featuredCarouselRef.current],
      ['secondary', secondaryCarouselRef.current],
    ]

    const handlers = configs.map(([key, node]) => {
      if (!node) return null
      const handler = () => updateCarouselState(key, node)
      handler()
      node.addEventListener('scroll', handler, { passive: true })
      return { node, handler }
    })

    const onResize = () => {
      configs.forEach(([key, node]) => node && updateCarouselState(key, node))
    }
    window.addEventListener('resize', onResize)

    return () => {
      handlers.forEach((item) => item && item.node.removeEventListener('scroll', item.handler))
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useGSAP(
    () => {
      const revealBlock = (target, y = 34) => {
        gsap.from(target, {
          y,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: target,
            start: 'top 82%',
            once: true,
          },
        })
      }

      revealBlock('.home-work__top > *', 28)
      revealBlock('.home-north__banner > *', 28)
      revealBlock('.home-secondary__top > *', 28)
      revealBlock('.home-profile__intro > *', 28)
      revealBlock('.home-profile__workflow > *', 24)
      revealBlock('.home-notes__intro > *', 28)
      revealBlock('.home-contact-band__inner > *', 28)

      gsap.from('.home-work .home-project-slot', {
        y: 54,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.home-work__grid',
          start: 'top 78%',
          once: true,
        },
      })

      gsap.from('.home-project-slot--north', {
        y: 54,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.home-work__grid--north',
          start: 'top 82%',
          once: true,
        },
      })

      gsap.from('.home-work__grid--north .home-project__link img', {
        scale: 1.08,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.home-work__grid--north',
          start: 'top 82%',
          once: true,
        },
      })

      gsap.from('.home-work .home-project__link img', {
        scale: 1.08,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.home-work__grid',
          start: 'top 78%',
          once: true,
        },
      })

      ScrollTrigger.batch('.home-secondary-item, .home-point, .home-note, .home-profile__story > p', {
        start: 'top 84%',
        once: true,
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.72,
              ease: 'power3.out',
              stagger: 0.1,
              overwrite: true,
            }
          )
        },
      })

      gsap.to('.home-profile__visual', {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home-profile',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    },
    { scope: landingRef }
  )

  return (
    <div ref={landingRef} className="home-flow">
      <section id="projects-north" className="home-section home-north" aria-labelledby="home-north-title">
        <div className="container home-block">
          <div className="home-north__banner">
            <div className="home-north__intro">
              <h2 id="home-north-title" className="home-title">
                {copy.home.northTitle}
              </h2>
              <p className="home-caption">{copy.home.northCaption}</p>
            </div>
          </div>

          <div className="home-mobile-carousel">
            <NorthProjectsGrid className="home-mobile-carousel__track" trackId="north-carousel-track" trackRef={northCarouselRef} />
            <button
              type="button"
              className="home-secondary__nav home-secondary__nav--prev"
              onClick={() => scrollCarousel(-1, 'north', northCarouselRef.current)}
              aria-label={copy.home.carouselPrevNorth}
              aria-controls="north-carousel-track"
              disabled={carouselState.north.atStart}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="home-secondary__nav home-secondary__nav--next"
              onClick={() => scrollCarousel(1, 'north', northCarouselRef.current)}
              aria-label={copy.home.carouselNextNorth}
              aria-controls="north-carousel-track"
              disabled={carouselState.north.atEnd}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </section>

      <section id="work" className="home-section home-work" aria-labelledby="home-work-title">
        <div className="container home-block">
          <div className="home-work__top">
            <h2 id="home-work-title" className="home-title">
              {copy.home.featuredTitle}
            </h2>
          </div>

          <div className="home-mobile-carousel">
            <div className="home-work__grid" id="featured-carousel-track" ref={featuredCarouselRef}>
              {highlightedProjects.map((project, index) => (
                <div key={project.slug} className={`home-project-slot home-project-slot--${index + 1}`}>
                  <motion.article
                    className="home-project"
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      '--project-accent': project.accent,
                      '--project-image-fit': project.cardImageMode || 'contain',
                      '--project-image-bg': project.cardImageBackground || '#ece8e0',
                      '--project-image-scale': project.cardImageScale || 1,
                    }}
                  >
                    <Link
                      href={`/work/${project.slug}`}
                      className="home-project__link"
                      aria-label={`${project.role}. ${project.title}. ${project.subtitle}`}
                    >
                      <div className="home-project__media" style={{ '--thumb-bg-image': `url("${project.image}")` }}>
                        <Image src={project.image} alt={project.title} fill sizes="(max-width: 960px) 100vw, 50vw" />
                      </div>
                      <div className="home-project__copy">
                        <p className="home-project__meta">{project.role}</p>
                        <h3>{project.title}</h3>
                        <p className="home-project__subtitle">{project.subtitle}</p>
                      </div>
                    </Link>
                  </motion.article>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="home-secondary__nav home-secondary__nav--prev"
              onClick={() => scrollCarousel(-1, 'featured', featuredCarouselRef.current)}
              aria-label={copy.home.carouselPrevFeatured}
              aria-controls="featured-carousel-track"
              disabled={carouselState.featured.atStart}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="home-secondary__nav home-secondary__nav--next"
              onClick={() => scrollCarousel(1, 'featured', featuredCarouselRef.current)}
              aria-label={copy.home.carouselNextFeatured}
              aria-controls="featured-carousel-track"
              disabled={carouselState.featured.atEnd}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </section>

      <section id="other-projects" className="home-section home-secondary" aria-labelledby="home-secondary-title">
        <div className="container home-secondary__block">
          <div className="home-secondary__top">
            <h2 id="home-secondary-title" className="home-title home-title--compact">
              {copy.home.secondaryTitle}
            </h2>
            <p className="home-caption">{copy.home.secondaryCaption}</p>
          </div>

          <div className="home-secondary__carousel">
            <div ref={secondaryCarouselRef} className="home-secondary__list" id="secondary-carousel-track">
            {secondaryProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="home-secondary-item"
                aria-label={`${project.title}. ${project.subtitle}`}
              >
                <div className="home-secondary-item__media" style={{ '--thumb-bg-image': `url("${project.image}")` }}>
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 960px) 100vw, 150px" />
                </div>

                <div className="home-secondary-item__body">
                  <span className="home-secondary-item__label">{project.subtitle}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>

                <span className="home-secondary-item__arrow" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </Link>
            ))}
            </div>
            <button
              type="button"
              className="home-secondary__nav home-secondary__nav--prev"
              onClick={() => scrollCarousel(-1, 'secondary', secondaryCarouselRef.current)}
              aria-label={copy.home.carouselPrevSecondary}
              aria-controls="secondary-carousel-track"
              disabled={carouselState.secondary.atStart}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="home-secondary__nav home-secondary__nav--next"
              onClick={() => scrollCarousel(1, 'secondary', secondaryCarouselRef.current)}
              aria-label={copy.home.carouselNextSecondary}
              aria-controls="secondary-carousel-track"
              disabled={carouselState.secondary.atEnd}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="home-section home-profile" aria-labelledby="home-about-title">
        <div className="container">
          <div className="proposal-about__grid">
            <div className="proposal-section__intro">
              <h2 id="home-about-title">{copy.home.aboutTitle}</h2>
              <p className="proposal-about__lede">
                {copy.home.aboutSummaryPrefix} {copy.home.aboutSummaryAccent}
                {copy.home.aboutSummarySuffix}
              </p>
              <a className="btn btn--brand proposal-about__cv-cta" href={cvHref} download>
                {copy.home.downloadCv}
              </a>
            </div>

            <div className="proposal-about__body">
              {copy.home.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="proposal-experience" aria-labelledby="home-experience-title">
              <h3 id="home-experience-title">{copy.home.experienceTitle}</h3>
              {copy.home.experienceItems.map((item) => (
                <details key={`${item.company}-${item.role}`} className="proposal-experience__item" open>
                  <summary className="proposal-experience__summary-head">
                    <h4 className="proposal-experience__role">{item.role}</h4>
                    <p className="proposal-experience__company">{item.company}</p>
                    <time className="proposal-experience__period">{item.period}</time>
                  </summary>
                  <div className="proposal-experience__content">
                    {item.summary || item.highlights?.length ? (
                      <ul className="proposal-experience__highlights" aria-label={`${copy.home.highlightsLabel} ${item.company}`}>
                        {item.summary ? <li>{item.summary}</li> : null}
                        {(item.highlights || []).map((point) => (
                          <li key={`${item.company}-${point}`}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                    {item.moves?.length ? (
                      <ul className="proposal-experience__moves" aria-label={`${copy.home.rolesLabel} ${item.company}`}>
                        {item.moves.map((move) => (
                          <li key={`${item.company}-${move.role}-${move.period}`} className="proposal-experience__move">
                            <div className="proposal-experience__move-head">
                              <span className="proposal-experience__move-role">{move.role}</span>
                              <span className="proposal-experience__move-period">{move.period}</span>
                            </div>
                            {move.summary || move.highlights?.length ? (
                              <ul className="proposal-experience__move-highlights" aria-label={`${copy.home.highlightsLabel} ${move.role}`}>
                                {move.summary ? <li>{move.summary}</li> : null}
                                {move.highlights.map((point) => (
                                  <li key={`${move.role}-${point}`}>{point}</li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="home-section home-notes" aria-labelledby="home-articles-title">
        <div className="container home-notes__block">
          <div className="home-notes__intro">
            <h2 id="home-articles-title" className="home-title home-title--compact">
              {copy.home.articlesTitle}
            </h2>
            <p className="home-caption">{copy.home.articlesCaption}</p>
          </div>

          <div className="home-notes__list">
            {latestArticles.map((article) => (
              <a
                key={article.slug}
                href={article.externalUrl}
                target="_blank"
                rel="noreferrer"
                className={`home-note${article.image ? '' : ' home-note--no-media'}`}
                aria-label={article.title}
              >
                {article.image ? (
                  <div className="home-note__media" style={{ '--thumb-bg-image': `url("${article.image}")` }}>
                    <Image src={article.image} alt={article.title} fill sizes="(max-width: 720px) 100vw, 132px" />
                  </div>
                ) : null}
                <div className="home-note__body">
                  <span className="home-note__meta">{article.topic}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
                <span className="home-note__arrow" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </a>
            ))}
          </div>

          <Link href="/articles" className="inline-link home-notes__cta">
            {copy.home.allArticles}
          </Link>
        </div>
      </section>

    </div>
  )
}
